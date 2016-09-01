<?php
# special for 
 #$conf['shield_user'] = '';
 #$conf['shield_pass'] = '';
 #$conf['error_level'] = '2';
 #$conf['preprocess_css'] = '0';
 #$conf['preprocess_js'] = '0';
 #$conf['cache'] = '0';
 #$conf['page_compression'] = '0';
 #$conf['block_cache'] = '0';
 #$conf['apachesolr_environments']['my_env_id']['url'] = 'http://localhost:8983';

$base_url = 'http://dev.gardensofstone.org.au';
$cookie_domain = 'dev.gardensofstone.org.au';

$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => 'gos_cms',
  'username' => 'gos_cms',
  'password' => 'gos_cms',
  'host' => 'localhost',
  'prefix' => '',
);

$databases['crm']['default'] = array(
  'driver' => 'mysql',
  'database' => '',
  'username' => '',
  'password' => '',
  'host' => 'localhost',
  'prefix' => '',
);

$update_free_access = FALSE;
$drupal_hash_salt = 'ERY_P-nHIyzXrNaWI7j7eUh6XctA1KXEV1azWib3aJs';

ini_set('session.gc_probability', 1);
ini_set('session.gc_divisor', 100);
ini_set('session.gc_maxlifetime', 200000);
ini_set('session.cookie_lifetime', 2000000);

$conf['404_fast_paths_exclude'] = '/\/(?:styles)\//';
$conf['404_fast_paths'] = '/\.(?:txt|png|gif|jpe?g|css|js|ico|swf|flv|cgi|bat|pl|dll|exe|asp)$/i';
$conf['404_fast_html'] = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL "@path" was not found on this server.</p></body></html>';

