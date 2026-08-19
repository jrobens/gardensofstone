class ReplaceMessageTemplates extends \CRM_Upgrade_Incremental_MessageTemplates {
  /**
   * Override
   */
  public function getTemplatesToUpdate() {
    $templates = [];
    $dao = CRM_Core_DAO::executeQuery('SELECT workflow_name FROM civicrm_msg_template WHERE workflow_name IS NOT NULL GROUP BY workflow_name');
    while ($dao->fetch()) {
      $templates[] = ['name' => $dao->workflow_name, 'type' => 'subject'];
      $templates[] = ['name' => $dao->workflow_name, 'type' => 'text'];
      $templates[] = ['name' => $dao->workflow_name, 'type' => 'html'];
    }
    return $templates;
  }
}

(new ReplaceMessageTemplates('dontcare'))->updateTemplates();
