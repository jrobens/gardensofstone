<?php

namespace Drupal\photos_access\Form;

use Drupal\Core\Cache\Cache;
use Drupal\Core\Database\Connection;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Session\Session;

/**
 * Defines a form to upload photos to this site.
 */
class PhotosAccessPasswordForm extends FormBase {

  /**
   * The database connection used to check the password.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $connection;

  /**
   * The session.
   *
   * @var \Symfony\Component\HttpFoundation\Session\Session
   */
  protected $session;

  /**
   * Construct the PhotosAccessPasswordForm.
   *
   * @param \Drupal\Core\Database\Connection $connection
   *   The database connection which will be used to check the password.
   * @param \Symfony\Component\HttpFoundation\Session\Session $session
   *   The session.
   */
  public function __construct(Connection $connection, Session $session) {
    $this->connection = $connection;
    $this->session = $session;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('database'),
      $container->get('session')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'photos_access_password';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $node = NULL) {
    $form['pass'] = [
      '#type' => 'password',
      '#title' => $this->t('Please enter album password'),
      '#attributes' => [
        'autocomplete' => 'off',
      ],
    ];
    $form['nid'] = [
      '#type' => 'value',
      '#value' => $node->id(),
    ];
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $node = $this->connection->query("SELECT pass, nid FROM {photos_access_album} WHERE nid = :nid AND pass = :pass", [
      ':nid' => $form_state->getValue('nid'),
      ':pass' => md5($form_state->getValue('pass')),
    ])->fetchObject();
    if (isset($node->pass)) {
      $passwords = $this->session->get('photos_access_passwords', []);
      $passwords['album_' . $node->nid] = $node->pass;
      $this->session->set('photos_access_passwords', $passwords);
      $form_state->set('nid', $node->nid);
    }
    else {
      $form_state->setErrorByName('pass', $this->t('Password required'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $nid = $form_state->get('nid');
    if ($nid) {
      Cache::invalidateTags(['node:' . $nid]);
      $form_state->setRedirect('entity.node.canonical', [
        'node' => $nid,
      ]);
    }
  }

}
