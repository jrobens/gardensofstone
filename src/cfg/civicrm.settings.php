<?php
define( 'CIVICRM_UF', 'Drupal');
define( 'CIVICRM_UF_DSN', 'mysql://gos_cms:gos_cms@localhost/gos_cms?new_link=true' );
define( 'CIVICRM_DSN', 'mysql://gos_crm:gos_crm@localhost/gos_crm?new_link=true' );
define('CIVICRM_LOGGING_DSN', CIVICRM_DSN);
global $civicrm_root;
$civicrm_root = '/srv/dev/gardensofstone.org.au/web/sites/all/modules/civicrm';
define( 'CIVICRM_TEMPLATE_COMPILEDIR', '/srv/dev/gardensofstone.org.au/web/files/civicrm/templates_c/' );
define( 'CIVICRM_UF_BASEURL', 'http://dev.gardensofstone.org.au/' );
define( 'CIVICRM_SITE_KEY', '0b51f5209e95317821c8d09484875a0e' );
define( 'CIVICRM_IDS_ENABLE', 1);
define( 'CIVICRM_MAIL_SMARTY', 0 );
define( 'CIVICRM_MAIL_LOG', '/srv/dev/gardensofstone.org.au/web/files/civicrm/templates_c/mail.log' );
define( 'CIVICRM_DOMAIN_ID', 1 );
// define( 'CIVICRM_UF_WP_BASEPAGE', 'YOUR TEMPLATE NAME HERE');
define( 'CIVICRM_DB_CACHE_CLASS', 'ArrayCache' );
define( 'CIVICRM_DB_CACHE_HOST', 'localhost' );
define( 'CIVICRM_DB_CACHE_PORT', 11211 );
define( 'CIVICRM_DB_CACHE_TIMEOUT', 3600 );
define( 'CIVICRM_MEMCACHE_PREFIX', '' );
// define('CIVICRM_LANGUAGE_MAPPING_FR', 'fr_CA');
// define('CIVICRM_LANGUAGE_MAPPING_EN', 'en_CA');
// define('CIVICRM_LANGUAGE_MAPPING_ES', 'es_MX');
// define('CIVICRM_LANGUAGE_MAPPING_PT', 'pt_BR');
// define('CIVICRM_LANGUAGE_MAPPING_ZH', 'zh_TW');
// define( 'CIVICRM_MYSQL_STRICT', TRUE );
$include_path = '.'           . PATH_SEPARATOR .
                $civicrm_root . PATH_SEPARATOR .
                $civicrm_root . DIRECTORY_SEPARATOR . 'packages' . PATH_SEPARATOR .
                get_include_path( );
if ( set_include_path( $include_path ) === false ) {
   echo "Could not set the include path<p>";
   exit( );
}
if ( function_exists( 'variable_get' ) && variable_get('clean_url', '0') != '0' ) {
    define( 'CIVICRM_CLEANURL', 1 );
} else {
    define( 'CIVICRM_CLEANURL', 0 );
}
// force PHP to auto-detect Mac line endings
ini_set('auto_detect_line_endings', '1');
// make sure the memory_limit is at least 64 MB
$memLimitString = trim(ini_get('memory_limit'));
$memLimitUnit   = strtolower(substr($memLimitString, -1));
$memLimit       = (int) $memLimitString;
switch ($memLimitUnit) {
}
ini_set('memory_limit', '256M');
require_once 'CRM/Core/ClassLoader.php';
CRM_Core_ClassLoader::singleton()->register();
