<?php
// remote WEB environment
$aliases['web'] = array(
  'uri'  => 'www.gardensofstone.org.au',
  'root' => '/srv/web/gardensofstone.org.au/web',
  'remote-user' => 'sys',
  'remote-host' => 'opal',
  'path-aliases' => array(
    '%files' => 'files',
    '%dump-dir' => '/tmp',
  ),
'source-command-specific' => array (
    'sql-sync' => array (
      'no-cache' => TRUE,
      'structure-tables-key' => 'common',
    ),
  ),
  'command-specific' => array (
    'sql-sync' => array (
      'sanitize' => FALSE,
      'no-ordered-dump' => TRUE,
      'structure-tables' => array(
        'common' => array('cache', 'cache_filter', 'cache_menu', 'cache_page', 'history', 'sessions', 'watchdog'),
      ),
    ),
  ),
);
// remote UAT environment
$aliases['uat'] = array(
  'uri'  => 'uat.gardensofstone.org.au',
  'root' => '/srv/uat/gardensofstone.org.au/web',
  'remote-user' => 'sys',
  'remote-host' => 'opal',
  'path-aliases' => array(
    '%files' => 'files',
    '%dump-dir' => '/tmp',
  ),
'source-command-specific' => array (
    'sql-sync' => array (
      'no-cache' => TRUE,
      'structure-tables-key' => 'common',
    ),
  ),
  'command-specific' => array (
    'sql-sync' => array (
      'sanitize' => FALSE,
      'no-ordered-dump' => TRUE,
      'structure-tables' => array(
        'common' => array('cache', 'cache_filter', 'cache_menu', 'cache_page', 'history', 'sessions', 'watchdog'),
      ),
    ),
  ),
);
// remote QAT environment
$aliases['qat'] = array(
  'uri'  => 'qat.gardensofstone.org.au',
  'root' => '/srv/qat/gardensofstone.org.au/web',
  'remote-user' => 'sys',
  'remote-host' => 'opal',
  'path-aliases' => array(
    '%files' => 'files',
    '%dump-dir' => '/tmp',
  ),
'source-command-specific' => array (
    'sql-sync' => array (
      'no-cache' => TRUE,
      'structure-tables-key' => 'common',
    ),
  ),
  'command-specific' => array (
    'sql-sync' => array (
      'sanitize' => FALSE,
      'no-ordered-dump' => TRUE,
      'structure-tables' => array(
        'common' => array('cache', 'cache_filter', 'cache_menu', 'cache_page', 'history', 'sessions', 'watchdog'),
      ),
    ),
  ),
);
// local DEV environment
$aliases['dev'] = array(
  'uri'  => 'dev.gardensofstone.org.au',
  'root' => '/srv/dev/gardensofstone.org.au/web',
  'path-aliases' => array(
    '%files' => 'files',
    '%dump-dir' => '/tmp',
  ),
);
//$options['shell-aliases']['pull-files'] = '!drush rsync --mod=avuz --exclude-paths=css:js:styles:ctools:civicrm:xmlsitemap @web:%files @dev:%files';

?>
