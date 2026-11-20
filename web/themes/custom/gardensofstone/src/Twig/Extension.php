<?php

namespace Drupal\gardensofstone\Twig;

use Twig\Loader\FilesystemLoader;

/**
 * Twig extension for Gardens of Stone theme.
 */
class Extension extends \Twig_Extension {

  /**
   * {@inheritdoc}
   */
  public function getFilters() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getFunctions() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLoader($name) {
    $theme_path = \Drupal::service('extension.list.theme')->getPath('gardensofstone');
    $components_path = $theme_path . '/components';

    $loader = new FilesystemLoader($components_path);
    return $loader;
  }

}
