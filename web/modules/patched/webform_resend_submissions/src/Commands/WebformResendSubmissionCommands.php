<?php
/**
 * @file
 * Resend submission commands file.
 */

namespace Drupal\webform_resend_submissions\Commands;

use Drupal\Core\Database\Connection;
use Drupal\webform\Entity\WebformSubmission;
use Drush\Commands\DrushCommands;

/**
 * A Drush commandfile.
 *
 * In addition to this file, you need a drush.services.yml
 * in root of your module, and a composer.json file that provides the name
 * of the services file to use.
 *
 * See these files for an example of injecting Drupal services:
 *   - http://cgit.drupalcode.org/devel/tree/src/Commands/DevelCommands.php
 *   - http://cgit.drupalcode.org/devel/tree/drush.services.yml
 */
class WebformResendSubmissionCommands extends DrushCommands {

  /** @var \Drupal\Core\Database\Connection  */
  private $db;

  /** @var Boolean $debugRun */
  private $debugRun;

  /**
   * Construct a DiagnosticsCommand object.
   *
   * @param \Drupal\Core\Database\Connection $databaseConnection
   *   The database connection.
   */
  public function __construct(Connection $databaseConnection) {
    parent::__construct();
    $this->db = $databaseConnection;
  }

  /**
   * Get all submissions between specific date time stamps and resend.
   *
   * @param $startTimestamp
   *  A timestamp to start looking from
   *
   * @param $endTimestamp
   *  A timestamp to check until
   *
   * @param $messageHandlerID
   *  A webform handler to do the resending on. (Can be an array. - not yet tested)
   *
   * @param $webformId
   *  Filter on a specific webform. If empty just checks all webforms.
   *
   * @param $debugRun
   *  Run the function without resending the emails
   *
   * @command pf:resend-submissions
   */
  public function import($startTimestamp, $endTimestamp, $messageHandlerID, $webformId = NULL, $debugRun = FALSE) {
    if (empty($startTimestamp) || empty($endTimestamp) || empty($messageHandlerID)) {
      $this->output()->writeln('WF Resend submissions: Error no given start or end timestamp or handlerId');
      return;
    }

    $this->debugRun = ($debugRun === 'FALSE' || $debugRun === FALSE) ? FALSE : TRUE;
    if ($this->debugRun) {
      $this->output()->writeln('WF Resend submissions: running in debug mode');
    }

    $this->output()->writeln('WF Resend submissions: Start checking submissions between: ' . $startTimestamp . ' - ' . $endTimestamp);

    $query = $this->db->select('webform_submission', 'ws')
      ->fields('ws' , ['sid'])
      ->condition('created', [$startTimestamp, $endTimestamp], 'BETWEEN');
    if (!empty($webformId) && $webformId !== 'NULL') {
      $query->condition('webform_id', $webformId);
    }
    $submissions = $query->execute()->fetchAll();

    if (empty($submissions)) {
      $this->output()->writeln('WF Resend submissions: No submission found.');
    }

    foreach ($submissions as $submission) {
      $webformSubmission = WebformSubmission::load($submission->sid);

      if (empty($webformSubmission)) {
        $this->output()->writeln('WF Resend submissions: Error loading webform submission for sid: ' . $submission->sid);
        continue;
      }

      if (is_array($messageHandlerID)) {
        foreach ($messageHandlerID as $messageHandler) {
          $this->resendEmailForGivenHandler($messageHandler , $webformSubmission);
        }
      } else {
        $this->resendEmailForGivenHandler($messageHandlerID , $webformSubmission);
      }

    }

    $this->output()->writeln('WF Resend submissions: Done resending all submissions');
  }

  /**
   * Internal function to resend the email for a given handler and submission.
   *
   * @param $handler
   * @param $webformSubmission
   *
   * @return void
   */
  private function resendEmailForGivenHandler($handler, $webformSubmission) {
    try {
      $message_handler = $webformSubmission->getWebform()->getHandler($handler);
      $message = $message_handler->getMessage($webformSubmission);

      if (!$this->debugRun) {
        $message_handler->sendMessage($webformSubmission, $message);
      }
    }
    catch (\Exception $e) {
      $this->output()->writeln('WF Resend submissions: error: ' . $e->getMessage());
    }
    $this->output()->writeln('WF Resend submissions: resend: ' . $webformSubmission->id() . ' for handler: ' . $handler);
  }

}
