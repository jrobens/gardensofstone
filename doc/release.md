## Updates 2023-10-28

    civicrm/civicrm-core     5.66.0 ! 5.66.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.66.0 ! 5.66.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.66.0 ! 5.66.1 Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/leaflet           10.2.1 ! 10.2.3 Integration with the Leaflet map scripting library.
    drupal/tfa               1.2.0  ! 1.3.0  Pluggable provider of two factor authentication for Drupal

## 20231028 email sending from submission form disabled

pf:resend-submissions 1 1728053584 email_confirmation_police NULL FALSE

1698445054294
## 20231027 mail

Oct 27 00:40:38 ganon postfix/smtp[183752]: C538B6B82: to=<keith.muir6@bigpond.com>, relay=extmail.bigpond.com[203.42.22.10]:25, delay=372, delays=372/0.01/0.39/0, dsn=4.7.1, status=deferred (host extmail.bigpond.com[203.42.22.10] refused to talk to me: 550-5.7.1 Connection refused - IB119. 43.239.97.47 is blacklisted in Abusix 550-5.7.1 Mail Intelligence. See https://lookup.abusix.com/search?q=43.239.97.47 550 5.7.1 i{ef1fd412-c426-49a4-b178-4e1a8a4b234f})


## 20231025

Rebuild triggers
Update mosaico

sudo curl -LsS https://download.civicrm.org/cv/cv.phar -o /usr/local/bin/cv
sudo chmod +x /usr/local/bin/cv

gitosis-run-hook update-mirrors

## Checking for d10

Permissions of user role: "Manager":
edit layout paragraphs plugin config
Permissions of user role: "Authenticated user":
make online contributions
Permissions of user role: "Anonymous user":
make online contributions

jrobens@MacBook-Pro gardensofstone2 % sh ./src/dr.sh en -y upgrade_status
PHP Deprecated:  Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 78

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 78
PHP Deprecated:  Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 78

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 78
PHP Deprecated:  Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 86

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 86
PHP Deprecated:  Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 86

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.php on line 86
PHP Deprecated:  Creation of dynamic property Drush\Cache\JSONCache::$directory is deprecated in /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Cache/FileCache.php on line 32

Deprecated: Creation of dynamic property Drush\Cache\JSONCache::$directory is deprecated in /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Cache/FileCache.php on line 32
The following module(s) will be enabled: upgrade_status, update
## Updates 2023-10-20

    drupal/console 1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drush/drush    10.6.1 ! 10.6.2 Drush is a command line shell and scripting interface for Drupal, a veritable Swiss...
## Updates 2023-10-20
Hooks manually put into gitolite and symlinked.

## Updates 2023-10-05

    civicrm/civicrm-core     5.65.2 ! 5.66.0 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.65.2 ! 5.66.0 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.65.2 ! 5.66.0 Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/recaptcha_v3      2.0.1  ! 2.0.2  The reCaptcha V3 module provides integration with Google reCaptcha V3 and CAPTCHA module.

drupal/console                           1.9.9    ! 1.9.10   The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
drupal/copyright_block                   1.0.0    ~ 2.0.0    Creates a dynamic customisable copyright message block.
drupal/copyright_footer                  2.0.1    ~ 3.0.1    Provides a block for Copyright indication.
drupal/focal_point                       1.5.0    ~ 2.0.2    Focal Point allows content creators to mark the most important part of an image for easier cropping.
drupal/menu_item_extras                  2.19.0   ~ 3.0.2    Provide an additional custom fields which can be used on Menu link
drupal/recaptcha_v3                      2.0.1    ! 2.0.2    The reCaptcha V3 module provides integration with Google reCaptcha V3 and CAPTCHA module.
drupal/upgrade_status                    3.19.0   ~ 4.0.0    Review Drupal major upgrade readiness of the environment and components of the site.
u

This system uses PHP v7.4.26. You may proceed with the upgrade, and CiviCRM
v5.66.0 will continue working normally. However, future releases will
require PHP v8.0.0+. We recommend PHP v8.1+.

If your site uses custom code to inject tracking fields into messages, it
may need updating. See this issue for details [1].

Locking

|  93 | gos_crm | localhost | gos_crm | Query   | 1949 | Sending data                    | SELECT      civicrm_mailing_event_delivered.id as id,
civicrm_contact.display_name as display_name,
civicrm_contact.id as contact_id,
civicrm_email.email as email,
civicrm_mailing_event_delivered.time_stamp as date
FROM        civicrm_contact
INNER JOIN  civicrm_mailing_event_queue
ON  civicrm_mailing_event_queue.contact_id = civicrm_contact.id
INNER JOIN  civicrm_email
ON  civicrm_mailing_event_queue.email_id = civicrm_email.id
INNER JOIN  civicrm_mailing_event_delivered
ON  civicrm_mailing_event_delivered.event_queue_id = civicrm_mailing_event_queue.id
LEFT JOIN   civicrm_mailing_event_bounce
ON  civicrm_mailing_event_bounce.event_queue_id = civicrm_mailing_event_queue.id
INNER JOIN  civicrm_mailing_job
ON  civicrm_mailing_event_queue.job_id = civicrm_mailing_job.id
AND civicrm_mailing_job.is_test = 1
INNER JOIN  civicrm_mailing
ON  civicrm_mailing_job.mailing_id = civicrm_mailing.id
WHERE       civicrm_mailing_event_bounce.id IS null
AND     civicrm_mailing.id = 21 AND civicrm_mailing_job.id = 161 ORDER BY sort_name ASC, civicrm_mailing_event_delivered.time_stamp DESC |    0.000 |
| 382 | gos_crm | localhost | gos_crm | Query   | 1355 | Waiting for table metadata lock | DROP TRIGGER IF EXISTS civicrm_contact_before_insert


Taking 2 minutes
| 19970 | gos_crm | localhost | gos_crm | Query   |   62 | Sending data | INSERT INTO civicrm_mailing_recipients (mailing_id, contact_id, email_id)

+----------------------------+------------+------------------------------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| Table                      | Non_unique | Key_name                                 | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
+----------------------------+------------+------------------------------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| civicrm_mailing_recipients |          0 | PRIMARY                                  |            1 | id          | A         |      164341 |     NULL | NULL   |      | BTREE      |         |               |
| civicrm_mailing_recipients |          1 | FK_civicrm_mailing_recipients_mailing_id |            1 | mailing_id  | A         |          16 |     NULL | NULL   |      | BTREE      |         |               |
| civicrm_mailing_recipients |          1 | FK_civicrm_mailing_recipients_contact_id |            1 | contact_id  | A         |       41085 |     NULL | NULL   |      | BTREE      |         |               |
| civicrm_mailing_recipients |          1 | FK_civicrm_mailing_recipients_email_id   |            1 | email_id    | A         |       41085 |     NULL | NULL   | YES  | BTREE      |         |               |
| civicrm_mailing_recipients |          1 | FK_civicrm_mailing_recipients_phone_id   |            1 | phone_id    | A         |           2 |     NULL | NULL   | YES  | BTREE      |         |               |


Taking 2 hours

MariaDB [gos_crm]> SELECT      civicrm_mailing_event_queue.id as queue_id,
->                         civicrm_contact.display_name as display_name,
->                         civicrm_contact.id as contact_id,
->                         civicrm_email.email as email,
->                         civicrm_mailing_job.start_date as date
->             FROM        civicrm_contact
->             INNER JOIN  civicrm_mailing_event_queue
->                     ON  civicrm_mailing_event_queue.contact_id = civicrm_contact.id
->             INNER JOIN  civicrm_email
->                     ON  civicrm_mailing_event_queue.email_id = civicrm_email.id
->             INNER JOIN  civicrm_mailing_job
->                     ON  civicrm_mailing_event_queue.job_id = civicrm_mailing_job.id
->             INNER JOIN  civicrm_mailing
->                     ON  civicrm_mailing_job.mailing_id = civicrm_mailing.id
->                     AND civicrm_mailing_job.is_test = 0
->             WHERE       civicrm_mailing.id = 2 ORDER BY `civicrm_contact`.`sort_name` asc  LIMIT 0, 50 ;

Configure your accounts with ip or subnets only, then update your configuration with skip-name-resolve=ON
We will suggest raising the 'join_buffer_size' until JOINs not using indexes are found.
See https://dev.mysql.com/doc/internals/en/join-buffer-size.html
(specially the conclusions at the bottom of the page).
Consider installing Sys schema from https://github.com/FromDual/mariadb-sys for MariaDB
Before changing innodb_log_file_size and/or innodb_log_files_in_group read this: https://bit.ly/2TcGgtU
Variables to adjust:
skip-name-resolve=ON
join_buffer_size (> 2.0M, or always use indexes with JOINs)
table_definition_cache (400) > 11927 or -1 (autosizing if supported)
innodb_buffer_pool_size (>= 8.3G) if possible.

***

                                                                                                                                                                           |    0.000 |
| 2072 | gos_crm | localhost | gos_crm | Query   |  713 | Sending data | SELECT      civicrm_mailing_event_queue.id as queue_id,
civicrm_contact.display_name as display_name,
civicrm_contact.id as contact_id,
civicrm_email.email as email,
civicrm_mailing_job.start_date as date
FROM        civicrm_contact
INNER JOIN  civicrm_mailing_event_queue
ON  civicrm_mailing_event_queue.contact_id = civicrm_contact.id
INNER JOIN  civicrm_email
ON  civicrm_mailing_event_queue.email_id = civicrm_email.id
INNER JOIN  civicrm_mailing_job
ON  civicrm_mailing_event_queue.job_id = civicrm_mailing_job.id
INNER JOIN  civicrm_mailing
ON  civicrm_mailing_job.mailing_id = civicrm_mailing.id
AND civicrm_mailing_job.is_test = 0
WHERE       civicrm_mailing.id = 2 ORDER BY `civicrm_contact`.`sort_name` asc  LIMIT 0, 50 |    0.000 |

$Fatal Error Details = array:3 [
"message" => "SqlGroup: Failed to acquire lock on cache key."
"code" => null
"exception" => CRM_Utils_Cache_CacheException {#2360
-errorData: array:1 [
"error_code" => 0


[!!] User ''@'localhost' is an anonymous account. Remove with DROP USER ''@'localhost';
[!!] User ''@'topaz.interlated.net' is an anonymous account. Remove with DROP USER ''@'topaz.interlated.net';
[OK] All database users have passwords assigned
[!!] User 'asi_new_cms'@'localhost' has user name as password.
[!!] User 'asi_new_crm'@'localhost' has user name as password.
[!!] User 'clb_cms'@'localhost' has user name as password.
[!!] User 'clb_cms_qat'@'localhost' has user name as password.
[!!] User 'clb_crm'@'localhost' has user name as password.
[!!] User 'colong_cms'@'localhost' has user name as password.
[!!] User 'colong_crm'@'localhost' has user name as password.
[!!] User 'eco_crm'@'localhost' has user name as password.
[!!] User 'ioneer_cms_uat'@'localhost' has user name as password.
[!!] User 'myc_cms'@'localhost' has user name as password.
[!!] User 'myc_crm'@'localhost' has user name as password.
[!!] User 'ssec_cms_uat'@'localhost' has user name as password.
[!!] User 'ssec_crm_uat'@'localhost' has user name as password.
[!!] User 'statdecdd_cms'@'localhost' has user name as password.
[--] There are 620 basic passwords in the list.

-------- CVE Security Recommendations --------------------------------------------------------------
[OK] NO SECURITY CVE FOUND FOR YOUR VERSION

-------- Performance Metrics -----------------------------------------------------------------------
[--] Up for: 58m 43s (283K q [80.341 qps], 1K conn, TX: 2G, RX: 190M)
[--] Reads / Writes: 85% / 15%
[--] Binary logging is disabled
[--] Physical Memory     : 19.6G
[--] Max MySQL memory    : 2.4G
[--] Other process memory: 0B
[--] Total buffers: 1.3G global + 3.7M per thread (302 max threads)
[--] Performance_schema Max memory usage: 0B
[--] Galera GCache Max memory usage: 0B
[OK] Maximum reached memory usage: 1.4G (7.02% of installed RAM)
[OK] Maximum possible memory usage: 2.4G (12.09% of installed RAM)
[OK] Overall possible memory usage with other process is compatible with memory available
[OK] Slow queries: 0% (9/283K)
[OK] Highest usage of available connections: 8% (26/302)
[OK] Aborted connections: 1.36% (22/1619)
[!!] Name resolution is active: a reverse name resolution is made for each new connection which can reduce performance
[OK] Query cache is disabled by default due to mutex contention on multiprocessor machines.
[OK] Sorts requiring temporary tables: 0% (2 temp sorts / 20K sorts)
[!!] Joins performed without indexes: 258
[OK] Temporary tables created on disk: 17% (1K on disk / 6K total)
[OK] Thread cache hit rate: 98% (26 created / 1K connections)
[OK] Table cache hit rate: 66% (267K hits / 405K requests)
[!!] table_definition_cache (400) is less than number of tables (11927)
[OK] Open file limit used: 1% (413/32K)
[OK] Table locks acquired immediately: 100% (17K immediate / 17K locks)

-------- Performance schema ------------------------------------------------------------------------
[!!] Performance_schema should be activated.
[--] Sys schema is not installed.

-------- ThreadPool Metrics ------------------------------------------------------------------------
[--] ThreadPool stat is disabled.

-------- MyISAM Metrics ----------------------------------------------------------------------------
[!!] Consider migrating 584 followning tables to InnoDB:
[--] * InnoDB migration request for ddl_cms.document_category Table: ALTER TABLE ddl_cms.document_category ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.user Table: ALTER TABLE ddl_cms.user ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.category_hicontent Table: ALTER TABLE ddl_cms.category_hicontent ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.campaigns Table: ALTER TABLE ddl_cms.campaigns ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.user_download Table: ALTER TABLE ddl_cms.user_download ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.content_document Table: ALTER TABLE ddl_cms.content_document ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.document_preview Table: ALTER TABLE ddl_cms.document_preview ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.document_reldocument Table: ALTER TABLE ddl_cms.document_reldocument ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.content Table: ALTER TABLE ddl_cms.content ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.document Table: ALTER TABLE ddl_cms.document ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.content_category Table: ALTER TABLE ddl_cms.content_category ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.content_reldocument Table: ALTER TABLE ddl_cms.content_reldocument ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.account Table: ALTER TABLE ddl_cms.account ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.stats_count_day Table: ALTER TABLE ddl_cms.stats_count_day ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.renewal_reminder Table: ALTER TABLE ddl_cms.renewal_reminder ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.document_relcontent Table: ALTER TABLE ddl_cms.document_relcontent ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.category Table: ALTER TABLE ddl_cms.category ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.stats_count Table: ALTER TABLE ddl_cms.stats_count ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.document_count Table: ALTER TABLE ddl_cms.document_count ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.category_hidocument Table: ALTER TABLE ddl_cms.category_hidocument ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.agency Table: ALTER TABLE ddl_cms.agency ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.content_relcontent Table: ALTER TABLE ddl_cms.content_relcontent ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.docsales Table: ALTER TABLE ddl_cms.docsales ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.sub_category Table: ALTER TABLE ddl_cms.sub_category ENGINE=InnoDB;
[--] * InnoDB migration request for ddl_cms.stats_count_month Table: ALTER TABLE ddl_cms.stats_count_month ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.clientcontacts Table: ALTER TABLE iln_pay.clientcontacts ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.clients Table: ALTER TABLE iln_pay.clients ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.invoice_items Table: ALTER TABLE iln_pay.invoice_items ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.invoice_histories Table: ALTER TABLE iln_pay.invoice_histories ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.settings Table: ALTER TABLE iln_pay.settings ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.sessions Table: ALTER TABLE iln_pay.sessions ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.invoices Table: ALTER TABLE iln_pay.invoices ENGINE=InnoDB;
[--] * InnoDB migration request for iln_pay.invoice_payments Table: ALTER TABLE iln_pay.invoice_payments ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.url_alias Table: ALTER TABLE mrn_cms.url_alias ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.cache_views Table: ALTER TABLE mrn_cms.cache_views ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.panels_pane Table: ALTER TABLE mrn_cms.panels_pane ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.page_title Table: ALTER TABLE mrn_cms.page_title ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.image Table: ALTER TABLE mrn_cms.image ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.role Table: ALTER TABLE mrn_cms.role ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.panels_layout Table: ALTER TABLE mrn_cms.panels_layout ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.panels_node Table: ALTER TABLE mrn_cms.panels_node ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.content_type_feature Table: ALTER TABLE mrn_cms.content_type_feature ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.history Table: ALTER TABLE mrn_cms.history ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.files Table: ALTER TABLE mrn_cms.files ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.panels_mini Table: ALTER TABLE mrn_cms.panels_mini ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.page_manager_handlers Table: ALTER TABLE mrn_cms.page_manager_handlers ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.node Table: ALTER TABLE mrn_cms.node ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.block_role Table: ALTER TABLE mrn_cms.block_role ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.taxonomy_vocabulary Table: ALTER TABLE mrn_cms.taxonomy_vocabulary ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.webform_emails Table: ALTER TABLE mrn_cms.webform_emails ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.taxonomy_term_relation Table: ALTER TABLE mrn_cms.taxonomy_term_relation ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.users Table: ALTER TABLE mrn_cms.users ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.taxonomy_term_data Table: ALTER TABLE mrn_cms.taxonomy_term_data ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.ckeditor_settings Table: ALTER TABLE mrn_cms.ckeditor_settings ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.rules_sets Table: ALTER TABLE mrn_cms.rules_sets ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.search_node_links Table: ALTER TABLE mrn_cms.search_node_links ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.imagecache_preset Table: ALTER TABLE mrn_cms.imagecache_preset ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.taxonomy_term_hierarchy Table: ALTER TABLE mrn_cms.taxonomy_term_hierarchy ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.webform_component Table: ALTER TABLE mrn_cms.webform_component ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.d6_upgrade_filter Table: ALTER TABLE mrn_cms.d6_upgrade_filter ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.views_display Table: ALTER TABLE mrn_cms.views_display ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.search_dataset Table: ALTER TABLE mrn_cms.search_dataset ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.rules_rules Table: ALTER TABLE mrn_cms.rules_rules ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.content_node_field_instance Table: ALTER TABLE mrn_cms.content_node_field_instance ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.imagecache_action Table: ALTER TABLE mrn_cms.imagecache_action ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.page_manager_pages Table: ALTER TABLE mrn_cms.page_manager_pages ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.flood Table: ALTER TABLE mrn_cms.flood ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.actions Table: ALTER TABLE mrn_cms.actions ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.content_group_fields Table: ALTER TABLE mrn_cms.content_group_fields ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.semaphore Table: ALTER TABLE mrn_cms.semaphore ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.stylizer Table: ALTER TABLE mrn_cms.stylizer ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.ctools_object_cache Table: ALTER TABLE mrn_cms.ctools_object_cache ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.ctools_css_cache Table: ALTER TABLE mrn_cms.ctools_css_cache ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.content_group Table: ALTER TABLE mrn_cms.content_group ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.authmap Table: ALTER TABLE mrn_cms.authmap ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.search_index Table: ALTER TABLE mrn_cms.search_index ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.batch Table: ALTER TABLE mrn_cms.batch ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.image_attach Table: ALTER TABLE mrn_cms.image_attach ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.users_roles Table: ALTER TABLE mrn_cms.users_roles ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.ca_predicates Table: ALTER TABLE mrn_cms.ca_predicates ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.node_type Table: ALTER TABLE mrn_cms.node_type ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.views_object_cache Table: ALTER TABLE mrn_cms.views_object_cache ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.menu_custom Table: ALTER TABLE mrn_cms.menu_custom ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.node_revision Table: ALTER TABLE mrn_cms.node_revision ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.comment Table: ALTER TABLE mrn_cms.comment ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.webform_last_download Table: ALTER TABLE mrn_cms.webform_last_download ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.webform Table: ALTER TABLE mrn_cms.webform ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.img_assist_map Table: ALTER TABLE mrn_cms.img_assist_map ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.views_view Table: ALTER TABLE mrn_cms.views_view ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.access Table: ALTER TABLE mrn_cms.access ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.cache_views_data Table: ALTER TABLE mrn_cms.cache_views_data ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.taxonomy_term_synonym Table: ALTER TABLE mrn_cms.taxonomy_term_synonym ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.content_node_field Table: ALTER TABLE mrn_cms.content_node_field ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.menu_router Table: ALTER TABLE mrn_cms.menu_router ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.webform_submitted_data Table: ALTER TABLE mrn_cms.webform_submitted_data ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.block_custom Table: ALTER TABLE mrn_cms.block_custom ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.panels_display Table: ALTER TABLE mrn_cms.panels_display ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.menu_links Table: ALTER TABLE mrn_cms.menu_links ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.sessions Table: ALTER TABLE mrn_cms.sessions ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.panels_renderer_pipeline Table: ALTER TABLE mrn_cms.panels_renderer_pipeline ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.watchdog Table: ALTER TABLE mrn_cms.watchdog ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.search_total Table: ALTER TABLE mrn_cms.search_total ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.block Table: ALTER TABLE mrn_cms.block ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.cache_content Table: ALTER TABLE mrn_cms.cache_content ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.webform_roles Table: ALTER TABLE mrn_cms.webform_roles ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.page_manager_weights Table: ALTER TABLE mrn_cms.page_manager_weights ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.filter_format Table: ALTER TABLE mrn_cms.filter_format ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.node_comment_statistics Table: ALTER TABLE mrn_cms.node_comment_statistics ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.variable Table: ALTER TABLE mrn_cms.variable ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.system Table: ALTER TABLE mrn_cms.system ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.node_access Table: ALTER TABLE mrn_cms.node_access ENGINE=InnoDB;
[--] * InnoDB migration request for mrn_cms.webform_submissions Table: ALTER TABLE mrn_cms.webform_submissions ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_data_field_tags Table: ALTER TABLE sba_cms.field_data_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.url_alias Table: ALTER TABLE sba_cms.url_alias ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.file_usage Table: ALTER TABLE sba_cms.file_usage ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.rdf_mapping Table: ALTER TABLE sba_cms.rdf_mapping ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.block_node_type Table: ALTER TABLE sba_cms.block_node_type ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.role Table: ALTER TABLE sba_cms.role ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_data_comment_body Table: ALTER TABLE sba_cms.field_data_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.image_effects Table: ALTER TABLE sba_cms.image_effects ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.history Table: ALTER TABLE sba_cms.history ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.sequences Table: ALTER TABLE sba_cms.sequences ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_revision_comment_body Table: ALTER TABLE sba_cms.field_revision_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.node Table: ALTER TABLE sba_cms.node ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.block_role Table: ALTER TABLE sba_cms.block_role ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.taxonomy_vocabulary Table: ALTER TABLE sba_cms.taxonomy_vocabulary ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.users Table: ALTER TABLE sba_cms.users ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.taxonomy_term_data Table: ALTER TABLE sba_cms.taxonomy_term_data ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.search_node_links Table: ALTER TABLE sba_cms.search_node_links ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.registry_file Table: ALTER TABLE sba_cms.registry_file ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_form Table: ALTER TABLE sba_cms.cache_form ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.taxonomy_term_hierarchy Table: ALTER TABLE sba_cms.taxonomy_term_hierarchy ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_image Table: ALTER TABLE sba_cms.cache_image ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.search_dataset Table: ALTER TABLE sba_cms.search_dataset ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.registry Table: ALTER TABLE sba_cms.registry ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_update Table: ALTER TABLE sba_cms.cache_update ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_data_body Table: ALTER TABLE sba_cms.field_data_body ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.flood Table: ALTER TABLE sba_cms.flood ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.actions Table: ALTER TABLE sba_cms.actions ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.semaphore Table: ALTER TABLE sba_cms.semaphore ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_config_instance Table: ALTER TABLE sba_cms.field_config_instance ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache Table: ALTER TABLE sba_cms.cache ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_field Table: ALTER TABLE sba_cms.cache_field ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_revision_field_tags Table: ALTER TABLE sba_cms.field_revision_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.authmap Table: ALTER TABLE sba_cms.authmap ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.date_format_type Table: ALTER TABLE sba_cms.date_format_type ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.taxonomy_index Table: ALTER TABLE sba_cms.taxonomy_index ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.search_index Table: ALTER TABLE sba_cms.search_index ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.shortcut_set Table: ALTER TABLE sba_cms.shortcut_set ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_menu Table: ALTER TABLE sba_cms.cache_menu ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_page Table: ALTER TABLE sba_cms.cache_page ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.queue Table: ALTER TABLE sba_cms.queue ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.batch Table: ALTER TABLE sba_cms.batch ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.users_roles Table: ALTER TABLE sba_cms.users_roles ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_revision_body Table: ALTER TABLE sba_cms.field_revision_body ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.node_type Table: ALTER TABLE sba_cms.node_type ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_data_field_image Table: ALTER TABLE sba_cms.field_data_field_image ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.menu_custom Table: ALTER TABLE sba_cms.menu_custom ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.node_revision Table: ALTER TABLE sba_cms.node_revision ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.file_managed Table: ALTER TABLE sba_cms.file_managed ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_revision_field_image Table: ALTER TABLE sba_cms.field_revision_field_image ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.blocked_ips Table: ALTER TABLE sba_cms.blocked_ips ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_filter Table: ALTER TABLE sba_cms.cache_filter ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.comment Table: ALTER TABLE sba_cms.comment ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.shortcut_set_users Table: ALTER TABLE sba_cms.shortcut_set_users ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.field_config Table: ALTER TABLE sba_cms.field_config ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.date_formats Table: ALTER TABLE sba_cms.date_formats ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_path Table: ALTER TABLE sba_cms.cache_path ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.filter Table: ALTER TABLE sba_cms.filter ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_block Table: ALTER TABLE sba_cms.cache_block ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.menu_router Table: ALTER TABLE sba_cms.menu_router ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.block_custom Table: ALTER TABLE sba_cms.block_custom ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.menu_links Table: ALTER TABLE sba_cms.menu_links ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.sessions Table: ALTER TABLE sba_cms.sessions ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.watchdog Table: ALTER TABLE sba_cms.watchdog ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.search_total Table: ALTER TABLE sba_cms.search_total ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.block Table: ALTER TABLE sba_cms.block ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.role_permission Table: ALTER TABLE sba_cms.role_permission ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.filter_format Table: ALTER TABLE sba_cms.filter_format ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.node_comment_statistics Table: ALTER TABLE sba_cms.node_comment_statistics ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.date_format_locale Table: ALTER TABLE sba_cms.date_format_locale ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.variable Table: ALTER TABLE sba_cms.variable ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.cache_bootstrap Table: ALTER TABLE sba_cms.cache_bootstrap ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.system Table: ALTER TABLE sba_cms.system ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.node_access Table: ALTER TABLE sba_cms.node_access ENGINE=InnoDB;
[--] * InnoDB migration request for sba_cms.image_styles Table: ALTER TABLE sba_cms.image_styles ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_wlcc_contentmanager_set Table: ALTER TABLE ssec_cms_uat.wp_wlcc_contentmanager_set ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_users Table: ALTER TABLE ssec_cms_uat.wp_users ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_terms Table: ALTER TABLE ssec_cms_uat.wp_terms ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_wlcc_contentsched Table: ALTER TABLE ssec_cms_uat.wp_wlcc_contentsched ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_loginizer_logs Table: ALTER TABLE ssec_cms_uat.wp_loginizer_logs ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_commentmeta Table: ALTER TABLE ssec_cms_uat.wp_commentmeta ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_term_relationships Table: ALTER TABLE ssec_cms_uat.wp_term_relationships ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_options Table: ALTER TABLE ssec_cms_uat.wp_options ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_term_taxonomy Table: ALTER TABLE ssec_cms_uat.wp_term_taxonomy ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_links Table: ALTER TABLE ssec_cms_uat.wp_links ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_postmeta Table: ALTER TABLE ssec_cms_uat.wp_postmeta ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_comments Table: ALTER TABLE ssec_cms_uat.wp_comments ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_wlcc_contentmanager_move Table: ALTER TABLE ssec_cms_uat.wp_wlcc_contentmanager_move ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_wlcc_contentarchiver Table: ALTER TABLE ssec_cms_uat.wp_wlcc_contentarchiver ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_posts Table: ALTER TABLE ssec_cms_uat.wp_posts ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_wlcc_contentmanager_repost Table: ALTER TABLE ssec_cms_uat.wp_wlcc_contentmanager_repost ENGINE=InnoDB;
[--] * InnoDB migration request for ssec_cms_uat.wp_usermeta Table: ALTER TABLE ssec_cms_uat.wp_usermeta ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_data_field_tags Table: ALTER TABLE dmn_cms.field_data_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.url_alias Table: ALTER TABLE dmn_cms.url_alias ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_map_myprojectpage Table: ALTER TABLE dmn_cms.migrate_map_myprojectpage ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.file_usage Table: ALTER TABLE dmn_cms.file_usage ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_views Table: ALTER TABLE dmn_cms.cache_views ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.rdf_mapping Table: ALTER TABLE dmn_cms.rdf_mapping ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.block_node_type Table: ALTER TABLE dmn_cms.block_node_type ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.role Table: ALTER TABLE dmn_cms.role ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_data_comment_body Table: ALTER TABLE dmn_cms.field_data_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.image_effects Table: ALTER TABLE dmn_cms.image_effects ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.history Table: ALTER TABLE dmn_cms.history ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.sequences Table: ALTER TABLE dmn_cms.sequences ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_revision_comment_body Table: ALTER TABLE dmn_cms.field_revision_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.node Table: ALTER TABLE dmn_cms.node ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.block_role Table: ALTER TABLE dmn_cms.block_role ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.wordpress_migrate_linked_authors Table: ALTER TABLE dmn_cms.wordpress_migrate_linked_authors ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.taxonomy_vocabulary Table: ALTER TABLE dmn_cms.taxonomy_vocabulary ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_map_myprojectattachment Table: ALTER TABLE dmn_cms.migrate_map_myprojectattachment ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.users Table: ALTER TABLE dmn_cms.users ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.taxonomy_term_data Table: ALTER TABLE dmn_cms.taxonomy_term_data ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.ckeditor_settings Table: ALTER TABLE dmn_cms.ckeditor_settings ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.search_node_links Table: ALTER TABLE dmn_cms.search_node_links ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.registry_file Table: ALTER TABLE dmn_cms.registry_file ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_form Table: ALTER TABLE dmn_cms.cache_form ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.ckeditor_input_format Table: ALTER TABLE dmn_cms.ckeditor_input_format ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.taxonomy_term_hierarchy Table: ALTER TABLE dmn_cms.taxonomy_term_hierarchy ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_map_myprojectblogentry Table: ALTER TABLE dmn_cms.migrate_map_myprojectblogentry ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_image Table: ALTER TABLE dmn_cms.cache_image ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.views_display Table: ALTER TABLE dmn_cms.views_display ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.search_dataset Table: ALTER TABLE dmn_cms.search_dataset ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.registry Table: ALTER TABLE dmn_cms.registry ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.wordpress_migrate Table: ALTER TABLE dmn_cms.wordpress_migrate ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_update Table: ALTER TABLE dmn_cms.cache_update ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_data_body Table: ALTER TABLE dmn_cms.field_data_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.flood Table: ALTER TABLE dmn_cms.flood ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.actions Table: ALTER TABLE dmn_cms.actions ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.semaphore Table: ALTER TABLE dmn_cms.semaphore ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_config_instance Table: ALTER TABLE dmn_cms.field_config_instance ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_admin_menu Table: ALTER TABLE dmn_cms.cache_admin_menu ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache Table: ALTER TABLE dmn_cms.cache ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_field Table: ALTER TABLE dmn_cms.cache_field ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.ctools_object_cache Table: ALTER TABLE dmn_cms.ctools_object_cache ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_message_myprojectattachment Table: ALTER TABLE dmn_cms.migrate_message_myprojectattachment ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_revision_field_tags Table: ALTER TABLE dmn_cms.field_revision_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.ctools_css_cache Table: ALTER TABLE dmn_cms.ctools_css_cache ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.authmap Table: ALTER TABLE dmn_cms.authmap ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.date_format_type Table: ALTER TABLE dmn_cms.date_format_type ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.taxonomy_index Table: ALTER TABLE dmn_cms.taxonomy_index ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.search_index Table: ALTER TABLE dmn_cms.search_index ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.shortcut_set Table: ALTER TABLE dmn_cms.shortcut_set ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_menu Table: ALTER TABLE dmn_cms.cache_menu ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_message_myprojectauthor Table: ALTER TABLE dmn_cms.migrate_message_myprojectauthor ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_page Table: ALTER TABLE dmn_cms.cache_page ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.queue Table: ALTER TABLE dmn_cms.queue ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.batch Table: ALTER TABLE dmn_cms.batch ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.wordpress_migrate_attachment Table: ALTER TABLE dmn_cms.wordpress_migrate_attachment ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.users_roles Table: ALTER TABLE dmn_cms.users_roles ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_message_myprojectpage Table: ALTER TABLE dmn_cms.migrate_message_myprojectpage ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_token Table: ALTER TABLE dmn_cms.cache_token ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_revision_body Table: ALTER TABLE dmn_cms.field_revision_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.node_type Table: ALTER TABLE dmn_cms.node_type ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_data_field_image Table: ALTER TABLE dmn_cms.field_data_field_image ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.menu_custom Table: ALTER TABLE dmn_cms.menu_custom ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.node_revision Table: ALTER TABLE dmn_cms.node_revision ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.file_managed Table: ALTER TABLE dmn_cms.file_managed ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_revision_field_image Table: ALTER TABLE dmn_cms.field_revision_field_image ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.blocked_ips Table: ALTER TABLE dmn_cms.blocked_ips ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_log Table: ALTER TABLE dmn_cms.migrate_log ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_filter Table: ALTER TABLE dmn_cms.cache_filter ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.comment Table: ALTER TABLE dmn_cms.comment ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.shortcut_set_users Table: ALTER TABLE dmn_cms.shortcut_set_users ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.field_config Table: ALTER TABLE dmn_cms.field_config ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.date_formats Table: ALTER TABLE dmn_cms.date_formats ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.views_view Table: ALTER TABLE dmn_cms.views_view ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_views_data Table: ALTER TABLE dmn_cms.cache_views_data ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_map_myprojectauthor Table: ALTER TABLE dmn_cms.migrate_map_myprojectauthor ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_path Table: ALTER TABLE dmn_cms.cache_path ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.filter Table: ALTER TABLE dmn_cms.filter ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_block Table: ALTER TABLE dmn_cms.cache_block ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.menu_router Table: ALTER TABLE dmn_cms.menu_router ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.block_custom Table: ALTER TABLE dmn_cms.block_custom ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.services_endpoint Table: ALTER TABLE dmn_cms.services_endpoint ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_message_myprojectcomment Table: ALTER TABLE dmn_cms.migrate_message_myprojectcomment ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.menu_links Table: ALTER TABLE dmn_cms.menu_links ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.sessions Table: ALTER TABLE dmn_cms.sessions ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_message_myprojectblogentry Table: ALTER TABLE dmn_cms.migrate_message_myprojectblogentry ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_status Table: ALTER TABLE dmn_cms.migrate_status ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.watchdog Table: ALTER TABLE dmn_cms.watchdog ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.search_total Table: ALTER TABLE dmn_cms.search_total ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.block Table: ALTER TABLE dmn_cms.block ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.role_permission Table: ALTER TABLE dmn_cms.role_permission ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.filter_format Table: ALTER TABLE dmn_cms.filter_format ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.migrate_map_myprojectcomment Table: ALTER TABLE dmn_cms.migrate_map_myprojectcomment ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.node_comment_statistics Table: ALTER TABLE dmn_cms.node_comment_statistics ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.date_format_locale Table: ALTER TABLE dmn_cms.date_format_locale ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.variable Table: ALTER TABLE dmn_cms.variable ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.cache_bootstrap Table: ALTER TABLE dmn_cms.cache_bootstrap ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.system Table: ALTER TABLE dmn_cms.system ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.node_access Table: ALTER TABLE dmn_cms.node_access ENGINE=InnoDB;
[--] * InnoDB migration request for dmn_cms.image_styles Table: ALTER TABLE dmn_cms.image_styles ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_data_field_tags Table: ALTER TABLE clb_cms_qat.field_data_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.url_alias Table: ALTER TABLE clb_cms_qat.url_alias ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.file_usage Table: ALTER TABLE clb_cms_qat.file_usage ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_pulled_tweets Table: ALTER TABLE clb_cms_qat.cache_pulled_tweets ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_views Table: ALTER TABLE clb_cms_qat.cache_views ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.rdf_mapping Table: ALTER TABLE clb_cms_qat.rdf_mapping ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.panels_pane Table: ALTER TABLE clb_cms_qat.panels_pane ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.oauth_common_provider_token Table: ALTER TABLE clb_cms_qat.oauth_common_provider_token ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.block_node_type Table: ALTER TABLE clb_cms_qat.block_node_type ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.masquerade Table: ALTER TABLE clb_cms_qat.masquerade ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.role Table: ALTER TABLE clb_cms_qat.role ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.panels_layout Table: ALTER TABLE clb_cms_qat.panels_layout ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_data_comment_body Table: ALTER TABLE clb_cms_qat.field_data_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.image_effects Table: ALTER TABLE clb_cms_qat.image_effects ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.history Table: ALTER TABLE clb_cms_qat.history ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.sequences Table: ALTER TABLE clb_cms_qat.sequences ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.page_manager_handlers Table: ALTER TABLE clb_cms_qat.page_manager_handlers ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_revision_comment_body Table: ALTER TABLE clb_cms_qat.field_revision_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.node Table: ALTER TABLE clb_cms_qat.node ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.block_role Table: ALTER TABLE clb_cms_qat.block_role ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.taxonomy_vocabulary Table: ALTER TABLE clb_cms_qat.taxonomy_vocabulary ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.users Table: ALTER TABLE clb_cms_qat.users ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.taxonomy_term_data Table: ALTER TABLE clb_cms_qat.taxonomy_term_data ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.oauth_common_context Table: ALTER TABLE clb_cms_qat.oauth_common_context ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.ckeditor_settings Table: ALTER TABLE clb_cms_qat.ckeditor_settings ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.search_node_links Table: ALTER TABLE clb_cms_qat.search_node_links ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.registry_file Table: ALTER TABLE clb_cms_qat.registry_file ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_form Table: ALTER TABLE clb_cms_qat.cache_form ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.ckeditor_input_format Table: ALTER TABLE clb_cms_qat.ckeditor_input_format ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.taxonomy_term_hierarchy Table: ALTER TABLE clb_cms_qat.taxonomy_term_hierarchy ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_image Table: ALTER TABLE clb_cms_qat.cache_image ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.oauth_common_nonce Table: ALTER TABLE clb_cms_qat.oauth_common_nonce ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.twitter Table: ALTER TABLE clb_cms_qat.twitter ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.views_display Table: ALTER TABLE clb_cms_qat.views_display ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.simplenews_mail_spool Table: ALTER TABLE clb_cms_qat.simplenews_mail_spool ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.search_dataset Table: ALTER TABLE clb_cms_qat.search_dataset ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.oauth_common_consumer Table: ALTER TABLE clb_cms_qat.oauth_common_consumer ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.registry Table: ALTER TABLE clb_cms_qat.registry ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.simplenews_category Table: ALTER TABLE clb_cms_qat.simplenews_category ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_update Table: ALTER TABLE clb_cms_qat.cache_update ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.page_manager_pages Table: ALTER TABLE clb_cms_qat.page_manager_pages ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_data_body Table: ALTER TABLE clb_cms_qat.field_data_body ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.flood Table: ALTER TABLE clb_cms_qat.flood ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.actions Table: ALTER TABLE clb_cms_qat.actions ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.semaphore Table: ALTER TABLE clb_cms_qat.semaphore ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_config_instance Table: ALTER TABLE clb_cms_qat.field_config_instance ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_admin_menu Table: ALTER TABLE clb_cms_qat.cache_admin_menu ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache Table: ALTER TABLE clb_cms_qat.cache ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_field Table: ALTER TABLE clb_cms_qat.cache_field ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.ctools_object_cache Table: ALTER TABLE clb_cms_qat.ctools_object_cache ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_revision_field_tags Table: ALTER TABLE clb_cms_qat.field_revision_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.ctools_css_cache Table: ALTER TABLE clb_cms_qat.ctools_css_cache ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.authmap Table: ALTER TABLE clb_cms_qat.authmap ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.date_format_type Table: ALTER TABLE clb_cms_qat.date_format_type ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.taxonomy_index Table: ALTER TABLE clb_cms_qat.taxonomy_index ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.search_index Table: ALTER TABLE clb_cms_qat.search_index ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.shortcut_set Table: ALTER TABLE clb_cms_qat.shortcut_set ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_menu Table: ALTER TABLE clb_cms_qat.cache_menu ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_page Table: ALTER TABLE clb_cms_qat.cache_page ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.queue Table: ALTER TABLE clb_cms_qat.queue ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.batch Table: ALTER TABLE clb_cms_qat.batch ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.users_roles Table: ALTER TABLE clb_cms_qat.users_roles ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_token Table: ALTER TABLE clb_cms_qat.cache_token ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.masquerade_users Table: ALTER TABLE clb_cms_qat.masquerade_users ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_revision_body Table: ALTER TABLE clb_cms_qat.field_revision_body ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.node_type Table: ALTER TABLE clb_cms_qat.node_type ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.menu_custom Table: ALTER TABLE clb_cms_qat.menu_custom ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.node_revision Table: ALTER TABLE clb_cms_qat.node_revision ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.file_managed Table: ALTER TABLE clb_cms_qat.file_managed ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.blocked_ips Table: ALTER TABLE clb_cms_qat.blocked_ips ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_filter Table: ALTER TABLE clb_cms_qat.cache_filter ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.comment Table: ALTER TABLE clb_cms_qat.comment ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.shortcut_set_users Table: ALTER TABLE clb_cms_qat.shortcut_set_users ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.field_config Table: ALTER TABLE clb_cms_qat.field_config ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.date_formats Table: ALTER TABLE clb_cms_qat.date_formats ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.views_view Table: ALTER TABLE clb_cms_qat.views_view ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_views_data Table: ALTER TABLE clb_cms_qat.cache_views_data ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_path Table: ALTER TABLE clb_cms_qat.cache_path ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.filter Table: ALTER TABLE clb_cms_qat.filter ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_block Table: ALTER TABLE clb_cms_qat.cache_block ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.menu_router Table: ALTER TABLE clb_cms_qat.menu_router ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.block_custom Table: ALTER TABLE clb_cms_qat.block_custom ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.panels_display Table: ALTER TABLE clb_cms_qat.panels_display ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.bonds_data Table: ALTER TABLE clb_cms_qat.bonds_data ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.oauth_common_token Table: ALTER TABLE clb_cms_qat.oauth_common_token ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.simplenews_subscription Table: ALTER TABLE clb_cms_qat.simplenews_subscription ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.menu_links Table: ALTER TABLE clb_cms_qat.menu_links ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.sessions Table: ALTER TABLE clb_cms_qat.sessions ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.panels_renderer_pipeline Table: ALTER TABLE clb_cms_qat.panels_renderer_pipeline ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.watchdog Table: ALTER TABLE clb_cms_qat.watchdog ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.search_total Table: ALTER TABLE clb_cms_qat.search_total ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.block Table: ALTER TABLE clb_cms_qat.block ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.page_manager_weights Table: ALTER TABLE clb_cms_qat.page_manager_weights ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.twitter_account Table: ALTER TABLE clb_cms_qat.twitter_account ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.role_permission Table: ALTER TABLE clb_cms_qat.role_permission ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.filter_format Table: ALTER TABLE clb_cms_qat.filter_format ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.simplenews_newsletter Table: ALTER TABLE clb_cms_qat.simplenews_newsletter ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.node_comment_statistics Table: ALTER TABLE clb_cms_qat.node_comment_statistics ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.date_format_locale Table: ALTER TABLE clb_cms_qat.date_format_locale ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.variable Table: ALTER TABLE clb_cms_qat.variable ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.simplenews_subscriber Table: ALTER TABLE clb_cms_qat.simplenews_subscriber ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.cache_bootstrap Table: ALTER TABLE clb_cms_qat.cache_bootstrap ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.system Table: ALTER TABLE clb_cms_qat.system ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.node_access Table: ALTER TABLE clb_cms_qat.node_access ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.oauth_common_provider_consumer Table: ALTER TABLE clb_cms_qat.oauth_common_provider_consumer ENGINE=InnoDB;
[--] * InnoDB migration request for clb_cms_qat.image_styles Table: ALTER TABLE clb_cms_qat.image_styles ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.url_alias Table: ALTER TABLE design2b_cms.url_alias ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.file_usage Table: ALTER TABLE design2b_cms.file_usage ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.joomla_content Table: ALTER TABLE design2b_cms.joomla_content ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.joomla_categories Table: ALTER TABLE design2b_cms.joomla_categories ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_views Table: ALTER TABLE design2b_cms.cache_views ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.rdf_mapping Table: ALTER TABLE design2b_cms.rdf_mapping ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.panels_pane Table: ALTER TABLE design2b_cms.panels_pane ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.oauth_common_provider_token Table: ALTER TABLE design2b_cms.oauth_common_provider_token ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.block_node_type Table: ALTER TABLE design2b_cms.block_node_type ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.role Table: ALTER TABLE design2b_cms.role ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.panels_layout Table: ALTER TABLE design2b_cms.panels_layout ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.field_data_comment_body Table: ALTER TABLE design2b_cms.field_data_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.image_effects Table: ALTER TABLE design2b_cms.image_effects ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.history Table: ALTER TABLE design2b_cms.history ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.sequences Table: ALTER TABLE design2b_cms.sequences ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.field_revision_comment_body Table: ALTER TABLE design2b_cms.field_revision_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.node Table: ALTER TABLE design2b_cms.node ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.block_role Table: ALTER TABLE design2b_cms.block_role ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.taxonomy_vocabulary Table: ALTER TABLE design2b_cms.taxonomy_vocabulary ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.users Table: ALTER TABLE design2b_cms.users ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.taxonomy_term_data Table: ALTER TABLE design2b_cms.taxonomy_term_data ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.oauth_common_context Table: ALTER TABLE design2b_cms.oauth_common_context ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.ckeditor_settings Table: ALTER TABLE design2b_cms.ckeditor_settings ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.search_node_links Table: ALTER TABLE design2b_cms.search_node_links ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.registry_file Table: ALTER TABLE design2b_cms.registry_file ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_form Table: ALTER TABLE design2b_cms.cache_form ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.ckeditor_input_format Table: ALTER TABLE design2b_cms.ckeditor_input_format ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.taxonomy_term_hierarchy Table: ALTER TABLE design2b_cms.taxonomy_term_hierarchy ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_image Table: ALTER TABLE design2b_cms.cache_image ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.oauth_common_nonce Table: ALTER TABLE design2b_cms.oauth_common_nonce ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.views_display Table: ALTER TABLE design2b_cms.views_display ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.search_dataset Table: ALTER TABLE design2b_cms.search_dataset ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.oauth_common_consumer Table: ALTER TABLE design2b_cms.oauth_common_consumer ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.registry Table: ALTER TABLE design2b_cms.registry ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_update Table: ALTER TABLE design2b_cms.cache_update ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.field_data_body Table: ALTER TABLE design2b_cms.field_data_body ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.flood Table: ALTER TABLE design2b_cms.flood ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.actions Table: ALTER TABLE design2b_cms.actions ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.joomla_users Table: ALTER TABLE design2b_cms.joomla_users ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.semaphore Table: ALTER TABLE design2b_cms.semaphore ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.field_config_instance Table: ALTER TABLE design2b_cms.field_config_instance ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_admin_menu Table: ALTER TABLE design2b_cms.cache_admin_menu ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache Table: ALTER TABLE design2b_cms.cache ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_field Table: ALTER TABLE design2b_cms.cache_field ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.ctools_object_cache Table: ALTER TABLE design2b_cms.ctools_object_cache ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.ctools_css_cache Table: ALTER TABLE design2b_cms.ctools_css_cache ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.authmap Table: ALTER TABLE design2b_cms.authmap ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.date_format_type Table: ALTER TABLE design2b_cms.date_format_type ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.taxonomy_index Table: ALTER TABLE design2b_cms.taxonomy_index ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.search_index Table: ALTER TABLE design2b_cms.search_index ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.shortcut_set Table: ALTER TABLE design2b_cms.shortcut_set ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_menu Table: ALTER TABLE design2b_cms.cache_menu ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_page Table: ALTER TABLE design2b_cms.cache_page ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.queue Table: ALTER TABLE design2b_cms.queue ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.batch Table: ALTER TABLE design2b_cms.batch ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.users_roles Table: ALTER TABLE design2b_cms.users_roles ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_token Table: ALTER TABLE design2b_cms.cache_token ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.field_revision_body Table: ALTER TABLE design2b_cms.field_revision_body ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.node_type Table: ALTER TABLE design2b_cms.node_type ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.profile_value Table: ALTER TABLE design2b_cms.profile_value ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.menu_custom Table: ALTER TABLE design2b_cms.menu_custom ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.node_revision Table: ALTER TABLE design2b_cms.node_revision ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.file_managed Table: ALTER TABLE design2b_cms.file_managed ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.blocked_ips Table: ALTER TABLE design2b_cms.blocked_ips ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_filter Table: ALTER TABLE design2b_cms.cache_filter ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.comment Table: ALTER TABLE design2b_cms.comment ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.shortcut_set_users Table: ALTER TABLE design2b_cms.shortcut_set_users ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.field_config Table: ALTER TABLE design2b_cms.field_config ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.date_formats Table: ALTER TABLE design2b_cms.date_formats ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.views_view Table: ALTER TABLE design2b_cms.views_view ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_views_data Table: ALTER TABLE design2b_cms.cache_views_data ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_path Table: ALTER TABLE design2b_cms.cache_path ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.joomla_sections Table: ALTER TABLE design2b_cms.joomla_sections ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.filter Table: ALTER TABLE design2b_cms.filter ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_block Table: ALTER TABLE design2b_cms.cache_block ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.menu_router Table: ALTER TABLE design2b_cms.menu_router ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.block_custom Table: ALTER TABLE design2b_cms.block_custom ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.panels_display Table: ALTER TABLE design2b_cms.panels_display ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.oauth_common_token Table: ALTER TABLE design2b_cms.oauth_common_token ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.menu_links Table: ALTER TABLE design2b_cms.menu_links ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.sessions Table: ALTER TABLE design2b_cms.sessions ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.panels_renderer_pipeline Table: ALTER TABLE design2b_cms.panels_renderer_pipeline ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.watchdog Table: ALTER TABLE design2b_cms.watchdog ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.search_total Table: ALTER TABLE design2b_cms.search_total ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.block Table: ALTER TABLE design2b_cms.block ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_panels Table: ALTER TABLE design2b_cms.cache_panels ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.role_permission Table: ALTER TABLE design2b_cms.role_permission ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.filter_format Table: ALTER TABLE design2b_cms.filter_format ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.node_comment_statistics Table: ALTER TABLE design2b_cms.node_comment_statistics ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.date_format_locale Table: ALTER TABLE design2b_cms.date_format_locale ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.variable Table: ALTER TABLE design2b_cms.variable ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.cache_bootstrap Table: ALTER TABLE design2b_cms.cache_bootstrap ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.profile_field Table: ALTER TABLE design2b_cms.profile_field ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.system Table: ALTER TABLE design2b_cms.system ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.node_access Table: ALTER TABLE design2b_cms.node_access ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.oauth_common_provider_consumer Table: ALTER TABLE design2b_cms.oauth_common_provider_consumer ENGINE=InnoDB;
[--] * InnoDB migration request for design2b_cms.image_styles Table: ALTER TABLE design2b_cms.image_styles ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_data_field_tags Table: ALTER TABLE dmo_cms.field_data_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.url_alias Table: ALTER TABLE dmo_cms.url_alias ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.file_usage Table: ALTER TABLE dmo_cms.file_usage ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.rdf_mapping Table: ALTER TABLE dmo_cms.rdf_mapping ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.block_node_type Table: ALTER TABLE dmo_cms.block_node_type ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.role Table: ALTER TABLE dmo_cms.role ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_data_comment_body Table: ALTER TABLE dmo_cms.field_data_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.image_effects Table: ALTER TABLE dmo_cms.image_effects ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.history Table: ALTER TABLE dmo_cms.history ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.sequences Table: ALTER TABLE dmo_cms.sequences ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_revision_comment_body Table: ALTER TABLE dmo_cms.field_revision_comment_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.node Table: ALTER TABLE dmo_cms.node ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.block_role Table: ALTER TABLE dmo_cms.block_role ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.taxonomy_vocabulary Table: ALTER TABLE dmo_cms.taxonomy_vocabulary ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.users Table: ALTER TABLE dmo_cms.users ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.taxonomy_term_data Table: ALTER TABLE dmo_cms.taxonomy_term_data ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.ckeditor_settings Table: ALTER TABLE dmo_cms.ckeditor_settings ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.search_node_links Table: ALTER TABLE dmo_cms.search_node_links ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.registry_file Table: ALTER TABLE dmo_cms.registry_file ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_form Table: ALTER TABLE dmo_cms.cache_form ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.ckeditor_input_format Table: ALTER TABLE dmo_cms.ckeditor_input_format ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.taxonomy_term_hierarchy Table: ALTER TABLE dmo_cms.taxonomy_term_hierarchy ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_image Table: ALTER TABLE dmo_cms.cache_image ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.search_dataset Table: ALTER TABLE dmo_cms.search_dataset ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.registry Table: ALTER TABLE dmo_cms.registry ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_update Table: ALTER TABLE dmo_cms.cache_update ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_data_body Table: ALTER TABLE dmo_cms.field_data_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.flood Table: ALTER TABLE dmo_cms.flood ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.actions Table: ALTER TABLE dmo_cms.actions ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.semaphore Table: ALTER TABLE dmo_cms.semaphore ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_config_instance Table: ALTER TABLE dmo_cms.field_config_instance ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_admin_menu Table: ALTER TABLE dmo_cms.cache_admin_menu ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache Table: ALTER TABLE dmo_cms.cache ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_field Table: ALTER TABLE dmo_cms.cache_field ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_revision_field_tags Table: ALTER TABLE dmo_cms.field_revision_field_tags ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.authmap Table: ALTER TABLE dmo_cms.authmap ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.date_format_type Table: ALTER TABLE dmo_cms.date_format_type ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.taxonomy_index Table: ALTER TABLE dmo_cms.taxonomy_index ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.search_index Table: ALTER TABLE dmo_cms.search_index ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.shortcut_set Table: ALTER TABLE dmo_cms.shortcut_set ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_menu Table: ALTER TABLE dmo_cms.cache_menu ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_page Table: ALTER TABLE dmo_cms.cache_page ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.queue Table: ALTER TABLE dmo_cms.queue ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.batch Table: ALTER TABLE dmo_cms.batch ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.users_roles Table: ALTER TABLE dmo_cms.users_roles ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_token Table: ALTER TABLE dmo_cms.cache_token ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_revision_body Table: ALTER TABLE dmo_cms.field_revision_body ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.node_type Table: ALTER TABLE dmo_cms.node_type ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_data_field_image Table: ALTER TABLE dmo_cms.field_data_field_image ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.menu_custom Table: ALTER TABLE dmo_cms.menu_custom ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.node_revision Table: ALTER TABLE dmo_cms.node_revision ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.file_managed Table: ALTER TABLE dmo_cms.file_managed ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_revision_field_image Table: ALTER TABLE dmo_cms.field_revision_field_image ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.blocked_ips Table: ALTER TABLE dmo_cms.blocked_ips ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_filter Table: ALTER TABLE dmo_cms.cache_filter ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.comment Table: ALTER TABLE dmo_cms.comment ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.shortcut_set_users Table: ALTER TABLE dmo_cms.shortcut_set_users ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.field_config Table: ALTER TABLE dmo_cms.field_config ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.date_formats Table: ALTER TABLE dmo_cms.date_formats ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_path Table: ALTER TABLE dmo_cms.cache_path ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.filter Table: ALTER TABLE dmo_cms.filter ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_block Table: ALTER TABLE dmo_cms.cache_block ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.menu_router Table: ALTER TABLE dmo_cms.menu_router ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.block_custom Table: ALTER TABLE dmo_cms.block_custom ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.menu_links Table: ALTER TABLE dmo_cms.menu_links ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.sessions Table: ALTER TABLE dmo_cms.sessions ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.watchdog Table: ALTER TABLE dmo_cms.watchdog ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.search_total Table: ALTER TABLE dmo_cms.search_total ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.block Table: ALTER TABLE dmo_cms.block ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.role_permission Table: ALTER TABLE dmo_cms.role_permission ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.filter_format Table: ALTER TABLE dmo_cms.filter_format ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.node_comment_statistics Table: ALTER TABLE dmo_cms.node_comment_statistics ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.date_format_locale Table: ALTER TABLE dmo_cms.date_format_locale ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.variable Table: ALTER TABLE dmo_cms.variable ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.cache_bootstrap Table: ALTER TABLE dmo_cms.cache_bootstrap ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.system Table: ALTER TABLE dmo_cms.system ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.node_access Table: ALTER TABLE dmo_cms.node_access ENGINE=InnoDB;
[--] * InnoDB migration request for dmo_cms.image_styles Table: ALTER TABLE dmo_cms.image_styles ENGINE=InnoDB;
[--] General MyIsam metrics:
[--]  +-- Total MyISAM Tables  : 584
[--]  +-- Total MyISAM indexes : 49.1M
[--]  +-- KB Size :128.0M
[--]  +-- KB Used Size :26.8M
[--]  +-- KB used :21.0%
[--]  +-- Read KB hit rate: 98.4% (227K cached / 3K reads)
[--]  +-- Write KB hit rate: 77.3% (4K cached / 3K writes)
[!!] Key buffer used: 21.0% (26.8M used / 128.0M cache)
[OK] Key buffer size / total MyISAM indexes: 128.0M/49.1M
[OK] Read Key buffer hit rate: 98.4% (227K cached / 3K reads)
[!!] Write Key buffer hit rate: 77.3% (4K cached / 3K writes)

-------- InnoDB Metrics ----------------------------------------------------------------------------
[--] InnoDB is enabled.
[--] InnoDB Thread Concurrency: 0
[OK] InnoDB File per table is activated
[OK] InnoDB Buffer Pool size ( 1.0G ) under limit for 64 bits architecture: (17179869184.0G )
[!!] InnoDB buffer pool / data size: 1.0G / 7.0G
[!!] Ratio InnoDB log file size / InnoDB Buffer pool size (6.25%): 64.0M * 1 / 1.0G should be equal to 25%
[--] Number of InnoDB Buffer Pool Chunk: 8 for 1 Buffer Pool Instance(s)
[OK] Innodb_buffer_pool_size aligned with Innodb_buffer_pool_chunk_size & Innodb_buffer_pool_instances
[OK] InnoDB Read buffer efficiency: 99.98% (286263491 hits / 286309973 total)
[!!] InnoDB Write Log efficiency: 25.26% (9753 hits / 38616 total)
[OK] InnoDB log waits: 0.00% (0 waits / 28863 writes)

-------- Aria Metrics ------------------------------------------------------------------------------
[--] Aria Storage Engine is enabled.
[OK] Aria pagecache size / total Aria indexes: 128.0M/2.5M
[!!] Aria pagecache hit rate: 77.5% (3K cached / 731 reads)

-------- TokuDB Metrics ----------------------------------------------------------------------------
[--] TokuDB is disabled.

-------- XtraDB Metrics ----------------------------------------------------------------------------
[--] XtraDB is disabled.

-------- Galera Metrics ----------------------------------------------------------------------------
[--] Galera is disabled.

-------- Replication Metrics -----------------------------------------------------------------------
[--] Galera Synchronous replication: NO
[--] No replication slave(s) for this server.
[--] Binlog format: MIXED
[--] XA support enabled: ON
[--] Semi synchronous replication Master: OFF
[--] Semi synchronous replication Slave: OFF
[--] This is a standalone server

-------- Recommendations ---------------------------------------------------------------------------


skip-name-resolve=ON
join_buffer_size (> 2.0M, or always use indexes with JOINs)
table_definition_cache (400) > 11927 or -1 (autosizing if supported)
innodb_buffer_pool_size (>= 7.4G) if possible.



| InnoDB |      |
=====================================
2023-10-06 01:06:23 0x7f3f3870b700 INNODB MONITOR OUTPUT
=====================================
Per second averages calculated from the last 59 seconds
-----------------
BACKGROUND THREAD
-----------------
srv_master_thread loops: 12926 srv_active, 0 srv_shutdown, 45223 srv_idle
srv_master_thread log flush and writes: 58148
----------
SEMAPHORES
----------
OS WAIT ARRAY INFO: reservation count 64772
OS WAIT ARRAY INFO: signal count 35501458
RW-shared spins 119715, rounds 108246, OS waits 679
RW-excl spins 515745, rounds 2185836, OS waits 11276
RW-sx spins 204, rounds 2488, OS waits 50
Spin rounds per wait: 0.90 RW-shared, 4.24 RW-excl, 12.20 RW-sx
------------------------
LATEST DETECTED DEADLOCK
------------------------
2023-10-06 00:32:50 0x7f3f386c0700
*** (1) TRANSACTION:
TRANSACTION 3283268983, ACTIVE 35 sec inserting
mysql tables in use 1, locked 1
LOCK WAIT 4 lock struct(s), heap size 1128, 2 row lock(s), undo log entries 2
MySQL thread id 23801, OS thread handle 139909792024320, query id 3424510 localhost gos_crm Update
INSERT INTO `civicrm_mailing_group` (`mailing_id` , `group_type` , `entity_table` , `entity_id` ) VALUES ( 29 , 'Include' , 'civicrm_group' ,  3 )
*** (1) WAITING FOR THIS LOCK TO BE GRANTED:
RECORD LOCKS space id 974343 page no 4 n bits 104 index FK_civicrm_mailing_group_mailing_id of table `gos_crm`.`civicrm_mailing_group` trx id 3283268983 lock_mode X insert intention waiting
Record lock, heap no 1 PHYSICAL RECORD: n_fields 1; compact format; info bits 0
0: len 8; hex 73757072656d756d; asc supremum;;

*** (2) TRANSACTION:
TRANSACTION 3283268717, ACTIVE 192 sec inserting
mysql tables in use 3, locked 3
1360 lock struct(s), heap size 204920, 361228 row lock(s), undo log entries 17056
MySQL thread id 23715, OS thread handle 139909506270976, query id 3421204 localhost gos_crm Creating sort index
INSERT INTO civicrm_mailing_recipients (mailing_id, contact_id, email_id)
SELECT 29, i.contact_id, i.email_id
FROM civicrm_contact contact_a
INNER JOIN civicrm_tmp_e_inrecipient_dbea7d4bd31c178f4f9cca24b76e7a9c i ON contact_a.id = i.contact_id
INNER JOIN civicrm_email e ON e.id = i.email_id
WHERE (( 1 ))
GROUP BY e.email
ORDER BY MIN(i.contact_id), MIN(i.email_id)
*** (2) HOLDS THE LOCK(S):
RECORD LOCKS space id 974343 page no 4 n bits 104 index FK_civicrm_mailing_group_mailing_id of table `gos_crm`.`civicrm_mailing_group` trx id 3283268717 lock mode S
Record lock, heap no 1 PHYSICAL RECORD: n_fields 1; compact format; info bits 0
0: len 8; hex 73757072656d756d; asc supremum;;

Record lock, heap no 21 PHYSICAL RECORD: n_fields 2; compact format; info bits 0
0: len 4; hex 0000001d; asc     ;;
1: len 4; hex 0000097e; asc    ~;;

Record lock, heap no 27 PHYSICAL RECORD: n_fields 2; compact format; info bits 0
0: len 4; hex 0000001d; asc     ;;
1: len 4; hex 0000097d; asc    };;

Record lock, heap no 31 PHYSICAL RECORD: n_fields 2; compact format; info bits 0
0: len 4; hex 0000001d; asc     ;;
1: len 4; hex 0000097c; asc    |;;

*** (2) WAITING FOR THIS LOCK TO BE GRANTED:
RECORD LOCKS space id 974328 page no 84 n bits 72 index PRIMARY of table `gos_crm`.`civicrm_mailing` trx id 3283268717 lock mode S locks rec but not gap waiting
Record lock, heap no 5 PHYSICAL RECORD: n_fields 45; compact format; info bits 0
0: len 4; hex 0000001d; asc     ;;
1: len 6; hex 0000c3b2b577; asc      w;;
2: len 7; hex 79000040101d31; asc y  @  1;;
3: len 4; hex 00000001; asc     ;;
4: SQL NULL;
5: SQL NULL;
6: len 4; hex 00000008; asc     ;;
7: len 4; hex 00000005; asc     ;;
8: len 4; hex 00000006; asc     ;;
9: len 4; hex 00000007; asc     ;;
10: len 30; hex 4f6e2065786869626974696f6e202d2043656e74656e6e69616c73206e65; asc On exhibition - Centennials ne; (total 77 bytes);
11: len 10; hex 7374616e64616c6f6e65; asc standalone;;
12: len 24; hex 50726f746563742047617264656e73206f662053746f6e65; asc Protect Gardens of Stone;;
13: len 29; hex 6b6569746840636f6c6f6e6777696c6465726e6573732e6f72672e6175; asc keith@colongwilderness.org.au;;
14: len 30; hex 2250726f746563742047617264656e73206f662053746f6e6522203c6b65; asc "Protect Gardens of Stone" <ke; (total 58 bytes);
15: len 7; hex 6d6f736169636f; asc mosaico;;
16: len 20; hex 000eddf80000005b0000002600000000000023e3; asc        [   &      # ;;
17: len 30; hex 43656e74656e6e69616c20436f616c206d696e65206d6f64696669636174; asc Centennial Coal mine modificat; (total 72 bytes);
18: SQL NULL;
19: len 20; hex 000eddf8000000550000002600000000000046f9; asc        U   &      F ;;
20: len 1; hex 80; asc  ;;
21: len 1; hex 80; asc  ;;
22: len 1; hex 80; asc  ;;
23: len 1; hex 81; asc  ;;
24: len 1; hex 80; asc  ;;
25: SQL NULL;
26: len 1; hex 81; asc  ;;
27: len 4; hex 00000003; asc     ;;
28: len 4; hex 651e4496; asc e D ;;
29: len 4; hex 651f558f; asc e U ;;
30: SQL NULL;
31: SQL NULL;
32: SQL NULL;
33: SQL NULL;
34: SQL NULL;
35: SQL NULL;
36: len 1; hex 80; asc  ;;
37: len 12; hex 5075626c6963205061676573; asc Public Pages;;
38: SQL NULL;
39: len 1; hex 81; asc  ;;
40: SQL NULL;
41: len 16; hex 36623933396164616662343363353361; asc 6b939adafb43c53a;;
42: SQL NULL;
43: len 9; hex 6175746f6d61746963; asc automatic;;
44: SQL NULL;

*** WE ROLL BACK TRANSACTION (1)
------------
TRANSACTIONS
------------
Trx id counter 3283304174
Purge done for trx's n:o < 3283281471 undo n:o < 0 state: running
History list length 9852
LIST OF TRANSACTIONS FOR EACH SESSION:
---TRANSACTION 421389263321008, not started
0 lock struct(s), heap size 1128, 0 row lock(s)
---TRANSACTION 421389263295472, ACTIVE 360 sec starting index read
mysql tables in use 3, locked 0
0 lock struct(s), heap size 1128, 0 row lock(s)
MySQL thread id 24473, OS thread handle 139909792638720, query id 3508306 localhost gos_crm Sending data
SELECT r.contact_id, r.email_id, r.phone_id
FROM   civicrm_mailing_recipients r
INNER JOIN civicrm_contact c on
(c.id = r.contact_id
AND c.is_deleted = 0
AND c.is_deceased = 0
AND c.do_not_email = 0
AND c.is_opt_out = 0
)
INNER JOIN civicrm_email e ON (r.email_id = e.id AND e.on_hold = 0)
WHERE  r.mailing_id = 29
LIMIT 0, 17055
Trx read view will not see trx with id >= 3283281470, sees < 3283281470
---TRANSACTION 421389263274192, not started
0 lock struct(s), heap size 1128, 0 row lock(s)
--------
FILE I/O
--------
Pending flushes (fsync) log: 0; buffer pool: 0
116114 OS file reads, 493829 OS file writes, 442059 OS fsyncs
0.00 reads/s, 0 avg bytes/read, 4.37 writes/s, 4.51 fsyncs/s
-------------------------------------
INSERT BUFFER AND ADAPTIVE HASH INDEX
-------------------------------------
Ibuf: size 373, free list len 5464, seg size 5838, 1022 merges
merged operations:
insert 17369, delete mark 68106, delete 9045
discarded operations:
insert 1, delete mark 0, delete 0
0.00 hash searches/s, 532771.82 non-hash searches/s
---
LOG
---
Log sequence number 3806376326920
Log flushed up to   3806376326920
Pages flushed up to 3805913464488
Last checkpoint at  3805913464476
0 pending log flushes, 0 pending chkp writes
402199 log i/o's done, 4.31 log i/o's/second
----------------------
BUFFER POOL AND MEMORY
----------------------
Total large memory allocated 4328521728
Dictionary memory allocated 37786584
Buffer pool size   258080
Free buffers       66549
Database pages     191498
Old database pages 70669
Modified db pages  20198
Percent of dirty pages(LRU & free pages): 7.827
Max dirty pages percent: 90.000
Pending reads 0
Pending writes: LRU 0, flush list 0
Pages made young 108813, not young 8646105
0.44 youngs/s, 0.00 non-youngs/s
Pages read 104935, created 132712, written 87900
0.00 reads/s, 2.98 creates/s, 0.00 writes/s
Buffer pool hit rate 1000 / 1000, young-making rate 0 / 1000 not 0 / 1000
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 191498, unzip_LRU len: 66
I/O sum[6]:cur[0], unzip sum[0]:cur[0]
--------------
ROW OPERATIONS
--------------
1 read views open inside InnoDB
Process ID=0, Main thread ID=0, state: sleeping
Number of rows inserted 3336210, updated 70033, deleted 776450, read 10015940655
1.95 inserts/s, 0.61 updates/s, 2.20 deletes/s, 507959.29 reads/s
Number of system rows inserted 0, updated 0, deleted 0, read 0
0.00 inserts/s, 0.00 updates/s, 0.00 deletes/s, 0.00 reads/s
----------------------------
END OF INNODB MONITOR OUTPUT
============================

SHOW ENGINE INNODB STATUS;
## Updtes 2023-10-05

Upgraded mosaico.

## Updates 2023-10-03

    drupal/admin_toolbar 3.4.1 ! 3.4.2  Provides a drop-down menu interface to the core Drupal Toolbar.
    drupal/console       1.9.9 ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/recaptcha_v3  2.0.1 ! 2.0.2  The reCaptcha V3 module provides integration with Google reCaptcha V3 and CAPTCHA module.
## Captcha

Removed simple google recaptcha and added recaptcha v3

6LeXAqMgAAAAAFxHDerO-i-7H1XXemewgR79oRcX - site key
6LeXAqMgAAAAALkIB4xAM_neM3JuipH653QSjY60 secret

## Updates 2023-09-27

    drupal/console  1.9.9 ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/honeypot 2.1.2 ! 2.1.3  Mitigates spam form submissions using the honeypot method.
## Updates 2023-09-21

    drupal/console 1.9.9 ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
## Updates 2023-09-21

    drupal/console                1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/core-composer-scaffold 9.5.10 ! 9.5.11 A flexible Composer project scaffold builder.
    drupal/core-dev               9.5.10 ! 9.5.11 require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.5.10 ! 9.5.11 Adds a message after Composer installation.
    drupal/core-recommended       9.5.10 ! 9.5.11 Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
## Updates 2023-09-20

    drupal/console 1.9.9 ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
## Updates 2023-09-20

    civicrm/civicrm-core     5.65.1 ! 5.65.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.65.1 ! 5.65.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.65.1 ! 5.65.2 Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
## Updates 2023-09-20

    civicrm/civicrm-core                 5.64.2    ! 5.65.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8             5.64.2    ! 5.65.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages             5.64.2    ! 5.65.1 Legacy third party dependencies for CiviCRM
    drupal/better_social_sharing_buttons 4.0.6     ! 4.0.7  Provides a settings page, a field, a paragraph, and a block for social sharing buttons
    drupal/console                       1.9.9     ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/leaflet                       10.1.0    ! 10.2.0 Integration with the Leaflet map scripting library.
    drupal/markdown                      3.0.0-rc3 ! 3.0.0  Provides Markdown integration for Drupal and allows content to be formatted in a simple plain-text syntax that is transformed into valid HTML.
    drupal/paragraphs                    1.15.0    ! 1.16.0 Enables the creation of Paragraphs entities.
## Updates 2023-08-31

    civicrm/civicrm-core         5.64.0    ! 5.64.2    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8     5.64.0    ! 5.64.2    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages     5.64.0    ! 5.64.2    Legacy third party dependencies for CiviCRM
    drupal/console               1.9.9     ! 1.9.10    The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/core_event_dispatcher 3.3.3     ! 3.3.4     Registers event dispatchers for several core hooks
    drupal/leaflet               10.0.19   ! 10.1.0    Integration with the Leaflet map scripting library.
    drupal/markdown              3.0.0-rc2 ! 3.0.0-rc3 Provides Markdown integration for Drupal and allows content to be formatted in a simple plain-text syntax that is transformed into valid HTML.
    drupal/masquerade            2.0.0-rc3 ! 2.0.0-rc4 Allows privileged users to masquerade as another user.
## Expand collapse

expand_collapse_formatter

## Updates 2023-08-10

better_socia   update_layout_   post-update   Update default social sharing
l_sharing_bu   builder_more_s                 buttons block for Layout ttons          ettings                        Builder sections.


    civicrm/civicrm-core     5.63.1    ! 5.64.0    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.63.1    ! 5.64.0    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.63.1    ! 5.64.0    Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9     ! 1.9.10    The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/leaflet           10.0.17   ! 10.0.19   Integration with the Leaflet map scripting library.
    drupal/masquerade        2.0.0-rc2 ! 2.0.0-rc3 Allows privileged users to masquerade as another user.
    drupal/mediteran         1.29.0    ! 1.30.0    Mediteran is a clean and simple administration theme designed by <a href="https://drupalation.com" target="_blank">Drupalation</a> and supported by <a href="https://ramsalt.com" target="_blank">Ramsalt</a>.
    drupal/xmlsitemap        1.4.0     ! 1.5.0     Creates XML Sitemaps for the site

# Gardens of stone 2

Billing. Billed $600 GST inc for the website build.
Bill $29/month for hosting.

User warning: The following theme is missing from the file system: bulma in Drupal\Core\Extension\ExtensionPathResolver->getPathname() (line 63 of
/srv/web/gardensofstone.org.au/web/core/l
311370   14/Mar 08:56   page not found   Warning    /nagios

## Updates 2023-07-15

Drulma update wanted

    civicrm/civicrm-core                 5.62.0  ! 5.63.1  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8             5.62.0  ! 5.63.1  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages             5.62.0  ! 5.63.1  Legacy third party dependencies for CiviCRM
    drupal/better_social_sharing_buttons 4.0.4   ! 4.0.5   Provides a settings page, a field, a paragraph, and a block for social sharing buttons
    drupal/console                       1.9.9   ! 1.9.10  The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/core-composer-scaffold        9.5.9   ! 9.5.10  A flexible Composer project scaffold builder.
    drupal/core-dev                      9.5.9   ! 9.5.10  require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message          9.5.9   ! 9.5.10  Adds a message after Composer installation.
    drupal/core-recommended              9.5.9   ! 9.5.10  Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/fontawesome_iconpicker_widget 2.25.0  ! 2.26.0  Provides an iconpicker widget for Font Awesome
    drupal/leaflet                       10.0.14 ! 10.0.16 Integration with the Leaflet map scripting library.
    drupal/metatag                       1.25.0  ! 1.26.0  Manage meta tags for all entities.
    drupal/paragraph_blocks              3.1.6   ! 3.1.8   Drupal Paragraph Blocks module
    drupal/photos                        6.0.3   ! 6.0.4   Picture management module. Photo albums.
    drupal/term_condition                2.0.2   ! 2.0.3   Provides a Condition plugin which checks to see if a node references a particular taxonomy term.
    drupal/webform                       6.1.4   ! 6.1.5   Enables the creation of webforms and questionnaires.



## Webform 2023-07-14

I am trying to build a webform for submissions to a foreshadowed exhibition of a proposal for Angus Place West that can be quickly tweaked when the proposal goes on exhibition.



This is as far as I have got. You will see I’ve used text from a guide letter on APW, provided me by Environmental Justice Australia. https://www.gardensofstone.org.au/admin/structure/webform/manage/augus_place_west_eis_submission_



There’s a webpage with this text at https://www.gardensofstone.org.au/placeholder-submission-guide-object-angus-place-west-coal-mine-extension (which is another option for collecting submissions).



I am trying to use the model adopted for another coal mine called Chain Valley Bay. The file also provided me by Environmental Justice Australia gives the idea of how it should go. It is complicated. The Department of Planning wants to stop public submissions as far as I am concerned, it’s an awful process. Anyway, can you take what I’ve done and build it something like how EJA have done for Chain Valley Bay mine? You will find there are screen shots of the pages done (but not on drupal) at the end of the word file.



Thank you, you will save me days of trial and error learning if you do.

## Domain update 2023-06-23

I got into voiden and updated by to my current debit card, all good.
www.vodien.com

## Theme 2023-06-09

Updated civicrm

Theme menu. Banner bar.

## Updates 2023-04-06

updates are:

    civicrm/civicrm-core     5.59.3 ! 5.59.4 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.59.3 ! 5.59.4 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.59.3 ! 5.59.4 Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.

Also updated the text editor ckeditor 5

## Check civi queries 2023-04-05

No problem identified.

Search engine does not seem to work.

Could not find Keith Muir or John Robens

## Updates 2023-06-09

    civicrm/civicrm-core                 5.59.4    ! 5.62.0    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8             5.59.4    ! 5.62.0    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages             5.59.4    ! 5.62.0    Legacy third party dependencies for CiviCRM
    drupal/admin_toolbar                 3.3.0     ! 3.4.1     Provides a drop-down menu interface to the core Drupal Toolbar.
    drupal/better_social_sharing_buttons 4.0.3     ! 4.0.4     Provides a settings page, a field, a paragraph, and a block for social sharing buttons
    drupal/classy_paragraphs             1.0.0-rc1 ! 1.0.0-rc2 Allows an editor to apply a class to paragraphs.
    drupal/console                       1.9.9     ! 1.9.10    The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/copyright_block               1.0.0-rc4 ! 1.0.0     Creates a dynamic customisable copyright message block.
    drupal/core-composer-scaffold        9.5.7     ! 9.5.9     A flexible Composer project scaffold builder.
    drupal/core-dev                      9.5.7     ! 9.5.9     require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message          9.5.7     ! 9.5.9     Adds a message after Composer installation.
    drupal/core-recommended              9.5.7     ! 9.5.9     Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/core_event_dispatcher         3.3.2     ! 3.3.3     Registers event dispatchers for several core hooks
    drupal/layout_paragraphs             2.0.2     ! 2.0.3     Layout Paragraphs
    drupal/leaflet                       10.0.11   ! 10.0.14   Integration with the Leaflet map scripting library.
    drupal/metatag                       1.22.0    ! 1.25.0    Manage meta tags for all entities.
    drupal/paragraph_blocks              3.1.3     ! 3.1.6     Drupal Paragraph Blocks module
    drupal/term_condition                2.0.1     ! 2.0.2     Provides a Condition plugin which checks to see if a node references a particular taxonomy term.
    drupal/views_add_button              2.0.2     ! 2.0.7     Views Add Button
    drupal/webform_civicrm               6.2.3     ! 6.2.4     CiviCRM and Webform integration
    wikimedia/composer-merge-plugin      v2.0.1    ! v2.1.0    Composer plugin to merge multiple composer.json files


## Updates 2023-03-27

    civicrm/civicrm-core             5.59.2 ! 5.59.3  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8         5.59.2 ! 5.59.3  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages         5.59.2 ! 5.59.3  Legacy third party dependencies for CiviCRM
    drupal/console                   1.9.9  ! 1.9.10  The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/core-composer-scaffold    9.5.4  ! 9.5.7   A flexible Composer project scaffold builder.
    drupal/core-dev                  9.5.4  ! 9.5.7   require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message      9.5.4  ! 9.5.7   Adds a message after Composer installation.
    drupal/core-recommended          9.5.4  ! 9.5.7   Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/expand_collapse_formatter 2.0.1  ! 2.0.2   A formatter to expand and collapse text area fields.
    drupal/leaflet                   10.0.9 ! 10.0.11 Integration with the Leaflet map scripting library.
    drupal/photos                    6.0.2  ! 6.0.3   Picture management module. Photo albums.
    drupal/upgrade_status            3.18.0 ! 3.19.0  Review Drupal major upgrade readiness of the environment and components of the site.


## Error messages - php 7.4

The site is running 5.58.0. Additional patches are available:

5.58.1 (security) (2023-02-15): Fix security issues CIVI-SA-2023-04, -05, and -06 as well as other recent issues.
Extension Update Available
Hide
Mosaico: Version 2.9.1645644008 is installed. Upgrade to version 2.11.
MySQL Timezone Problem
Hide
The MySQL database does not fully support timezones. Please ask the database administrator to load timezone data.
CiviCRM Upgrade Available

## 2023-03-14

    civicrm/civicrm-asset-plugin         v1.1.2      ! v1.1.3      Publish assets from private CiviCRM folders...
    civicrm/civicrm-core                 5.58.1      ! 5.59.2      Open source constituent relationship manage...
    civicrm/civicrm-drupal-8             5.58.1      ! 5.59.2      Open source constituent relationship manage...
    civicrm/civicrm-packages             5.58.1      ! 5.59.2      Legacy third party dependencies for CiviCRM
    drupal/better_social_sharing_buttons 4.0.2       ! 4.0.3       Provides a settings page, a field, a paragr...
    drupal/core-composer-scaffold        9.5.3       ! 9.5.4       A flexible Composer project scaffold builder.
    drupal/core-dev                      9.5.3       ! 9.5.4       require-dev dependencies from drupal/drupal...
    drupal/core-project-message          9.5.3       ! 9.5.4       Adds a message after Composer installation.
    drupal/core-recommended              9.5.3       ! 9.5.4       Core and its dependencies with known-compat...
    drupal/core_event_dispatcher         3.3.1       ! 3.3.2       Registers event dispatchers for several cor...
    drupal/fontawesome_iconpicker_widget 2.24.0      ! 2.25.0      Provides an iconpicker widget for Font Awesome
    drupal/leaflet                       10.0.8      ! 10.0.9      Integration with the Leaflet map scripting ...
    drupal/linked_field                  1.4.0       ! 1.5.0       Adds the functionality to link fields to a ...
    drupal/simple_recaptcha              1.0.0-beta7 ! 1.0.0-beta8 Provides simple integration with Google reC...


## 2023-02-21

    updates are:
    civicrm/civicrm-core                 5.58.0          ! 5.58.1          Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8             5.58.0          ! 5.58.1          Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages             5.58.0          ! 5.58.1          Legacy third party dependencies for CiviCRM
    drupal/animate_on_scroll             dev-1.x fcdc9e3 ! dev-1.x 759ec9a
    drupal/better_social_sharing_buttons 4.0.1           ! 4.0.2           Provides a settings page, a field, a paragraph, and a block for social sharing buttons
    drupal/linked_field                  1.3.0           ! 1.4.0           Adds the functionality to link fields to a specific destination.


## 2023-02-03

drupal/admin_toolbar drupal/better_social_sharing_buttons drupal/block_class drupal/copyright_footer drupal/drulma drupal/entity_class_formatter drupal/fontawesome_menu_icons drupal/google_analytics drupal/leaflet drupal/module_filter drupal/leaflet_more_maps


    civicrm/civicrm-core          5.57.2      ! 5.58.0         Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.57.2      ! 5.58.0         Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.57.2      ! 5.58.0         Legacy third party dependencies for CiviCRM
    ckeditor/autogrow             4.17.1      ! 4.18.0
    ckeditor/codemirror           v1.17.12    ! v1.18.3
    ckeditor/fakeobjects          4.17.1      ! 4.18.0
    ckeditor/image                4.17.1      ! 4.18.0
    ckeditor/link                 4.17.1      ! 4.18.0
    codemirror/codemirror         5.61.1      ! 5.65.3
    drupal/core-composer-scaffold 9.5.2       ! 9.5.3          A flexible Composer project scaffold builder.
    drupal/core-dev               9.5.2       ! 9.5.3          require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.5.2       ! 9.5.3          Adds a message after Composer installation.
    drupal/core-recommended       9.5.2       ! 9.5.3          Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/simple_recaptcha       1.0.0-beta6 ! 1.0.0-beta7    Provides simple integration with Google reCaptcha, keeping forms and webforms secure.
    drupal/webform_civicrm        6.2.2       ! 6.2.3          CiviCRM and Webform integration
    jquery/inputmask              5.0.6       ! 5.0.7
    jquery/intl-tel-input         16.1.0      = [none matched]
    jquery/rateit                 1.1.3       ! 1.1.5
    jquery/timepicker             1.13.18     ! 1.14.0
    tippyjs/6.x                   6.2.6       ! 6.3.7

## 2023-01-30

Added honeypot

    civicrm/civicrm-core          5.57.0 ! 5.57.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.57.0 ! 5.57.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.57.0 ! 5.57.2 Legacy third party dependencies for CiviCRM
    drupal/core-composer-scaffold 9.5.1  ! 9.5.2  A flexible Composer project scaffold builder.
    drupal/core-dev               9.5.1  ! 9.5.2  require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.5.1  ! 9.5.2  Adds a message after Composer installation.
    drupal/core-recommended       9.5.1  ! 9.5.2  Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/webform                6.1.3  ! 6.1.4  Enables the creation of webforms and questionnaires.
    drupal/webform_civicrm        6.2.1  ! 6.2.2  CiviCRM and Webform integration


## 2023-01-10

    civicrm/civicrm-core          5.55.2 ! 5.57.0 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.55.2 ! 5.57.0 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.55.2 ! 5.57.0 Legacy third party dependencies for CiviCRM
    cweagans/composer-patches     1.7.2  ! 1.7.3  Provides a way to patch Composer packages.
    drupal/core-composer-scaffold 9.4.8  ! 9.5.1  A flexible Composer project scaffold builder.
    drupal/core-dev               9.4.8  ! 9.5.1  require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.4.8  ! 9.5.1  Adds a message after Composer installation.
    drupal/core-recommended       9.4.8  ! 9.5.1  Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/layout_paragraphs      2.0.1  ! 2.0.2  Layout Paragraphs
    drupal/menu_item_extras       2.17.0 ! 2.19.0 Provide an additional custom fields which can be used on Menu link
    drupal/menu_link_attributes   1.2.0  ! 1.3.0  Allows you to add attributes to menu links.
    drupal/module_filter          3.2.0  ! 3.4.0  Filter the modules list.
    drupal/nagios                 1.15.0 ! 1.17.0 Exposes a page that Nagios or Icinga can monitor


## 2022-12-01

    civicrm/civicrm-core                 5.53.0 ! 5.55.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8             5.53.0 ! 5.55.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages             5.53.0 ! 5.55.2 Legacy third party dependencies for CiviCRM
    drupal/console                       1.9.8  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/core-composer-scaffold        9.4.5  ! 9.4.8  A flexible Composer project scaffold builder.
    drupal/core-dev                      9.4.5  ! 9.4.8  require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message          9.4.5  ! 9.4.8  Adds a message after Composer installation.
    drupal/core-recommended              9.4.5  ! 9.4.8  Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/fontawesome_iconpicker_widget 2.23.0 ! 2.24.0 Provides an iconpicker widget for Font Awesome
    drupal/leaflet                       2.2.5  ! 2.2.12 Integration with the Leaflet map scripting library.
    drupal/leaflet_more_maps             2.1.2  ! 2.1.3  Adds a swag of map styles to Leaflet, e.g Thunderforest, Esri, Stamen, Google.
    drupal/mediteran                     1.27.0 ! 1.29.0 Mediteran is a clean and simple administration theme designed by <a href="https://drupalation.com" target="_blank">Drupalation</a> and supported by <a href="https://ramsalt.com" target="_blank">Ramsalt</a>.
    drupal/metatag                       1.21.0 ! 1.22.0 Manage meta tags for all entities.
    drupal/paragraph_blocks              3.0.1  ! 3.1.3  Drupal Paragraph Blocks module
    drupal/upgrade_status                3.17.0 ! 3.18.0 Review Drupal major upgrade readiness of the environment and components of the site.
    drupal/xmlsitemap                    1.3.0  ! 1.4.0  Creates XML Sitemaps for the site


## 2022-09-16
Problem was no 'view photos' permission.

Gallery not appearing. Also can't edit.

˘ Drupal\Component\Plugin\Exception\ContextException: The context is not a valid context. in Drupal\Core\Executable\ExecutablePluginBase->getContextDefinition() (line 184 of /srv/web/gardensofstone.org.au/web/core/lib/Drupal/Core/Plugin/ContextAwarePluginTrait.php).

    updates are:

    civicrm/civicrm-core          5.52.0      ! 5.53.0    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.52.0      ! 5.53.0    Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.52.0      ! 5.53.0    Legacy third party dependencies for CiviCRM
    drupal/animated_scroll_to_top 2.0.0       ! 2.1.0     Provides Animated scroll to top.
    drupal/core_event_dispatcher  3.2.0       ! 3.3.1     Registers event dispatchers for several core hooks
    drupal/ds                     3.13.0      ! 3.15.0    Extend the display options for every entity type.
    drupal/layout_paragraphs      2.0.0-beta9 ! 2.0.1     Layout Paragraphs
    drupal/lp_fontawesome         5.15001.0   ! 5.15004.0 Defines fontawesome as library to be used with libraries provider
    drupal/masquerade             2.0.0-beta4 ! 2.0.0-rc1 Allows privileged users to masquerade as another user.
    drupal/paragraphs             1.14.0      ! 1.15.0    Enables the creation of Paragraphs entities.
    drupal/shield                 1.6.0       ! 1.7.0     Creates a general shield for the site.
    drupal/upgrade_status         3.14.0      ! 3.17.0    Review Drupal major upgrade readiness of the environment and components of the site.
    Gathering patches for root package.


## 2022-08-06

- Upgrading drupal/core (9.4.4 => 9.4.5)
- Upgrading drupal/core-composer-scaffold (9.4.4 => 9.4.5)
- Upgrading drupal/core-dev (9.4.4 => 9.4.5)
- Upgrading drupal/core-project-message (9.4.4 => 9.4.5)
- Upgrading drupal/core-recommended (9.4.4 => 9.4.5)
- Upgrading civicrm/civicrm-drupal-8 (5.51.1 => 5.52.0)
- Upgrading drupal/pathauto (1.10.0 => 1.11.0)
- Upgrading drupal/token (1.10.0 => 1
- drupal/better_social_sharing_buttons     3.2.0    ~ 4.0.0   Better Social Sharing Buttons

- drupal/block_class                       1.3.0    ~ 2.0.0   Allows assigning classes to Blocks.
- drupal/copyright_footer                  1.9.0    ~ 2.0.1   Provides a block for Copyright indication.
- drupal/ctools                            3.10.0   ~ 4.0.1   Provides a number of utility and helper APIs for Drupal developers and site builders.
- drupal/google_analytics                  3.1.0    ~ 4.0.0   Allows your site to be tracked by Google Analytics by adding a Javascript tracking code to every page.
- updating drupal/better_social_sharing_buttons


## 2022-08-02

    drupal/core-composer-scaffold 9.4.3 ! 9.4.4 A flexible Composer project scaffold builder.
    drupal/core-dev               9.4.3 ! 9.4.4 require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.4.3 ! 9.4.4 Adds a message after Composer installation.
    drupal/core-recommended       9.4.3 ! 9.4.4 Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/leaflet                2.2.3 ! 2.2.5 Integration with the Leaflet map scripting library.

    drupal/better_social_sharing_buttons     3.2.0    ~ 4.0.0   Better Social Sharing Buttons
    drupal/block_class                       1.3.0    ~ 2.0.0   Allows assigning classes to Blocks.
    drupal/copyright_footer                  1.9.0    ~ 2.0.1   Provides a block for Copyright indication.
    drupal/ctools                            3.8.0    ~ 4.0.1   Provides a number of utility and helper APIs for Drupal developers and site builders.
    drupal/google_analytics                  3.1.0    ~ 4.0.0   Allows your site to be tracked by Google Analytics by adding a Javascript tracking code to every page.


## 2022-07-23

Lock timeout
`
Jul 23 17:02:36  [error] $Fatal Error Details = Array
(
[callback] => Array
(
[0] => CRM_Core_Error
[1] => exceptionHandler
)

    [code] => -30
    [message] => DB Error: database lock timeout
    [mode] => 16
    [debug_info] => DELETE FROM civicrm_cache WHERE expired_date < '2022-07-23 17:00:03' [nativecode=1205 ** Lock wait timeout exceeded; try restarting transaction]
    [type] => DB_Error
    [user_info] => DELETE FROM civicrm_cache WHERE expired_date < '2022-07-23 17:00:03' [nativecode=1205 ** Lock wait timeout exceeded; try restarting transaction]
    [to_string] => [db_error: message="DB Error: database lock timeout" code=-30 mode=callback callback=CRM_Core_Error::exceptionHandler prefix="" info="DELETE FROM civicrm_cache WHERE expired_date < '2022-07-23 17:00:03' [nativecode=1205 ** Lock wait timeout exceeded; try restarting transaction]"]
)`

Processes

`
|    0.000 |
| 11255771 | gos_crm | localhost | gos_crm | Query   | 4780 | Sending data                    | SELECT      civicrm_mailing_event_delivered.id as id,
civicrm_contact.display_name as display_name,
civicrm_contact.id as contact_id,
civicrm_email.email as email,
civicrm_mailing_event_delivered.time_stamp as date
FROM        civicrm_contact
INNER JOIN  civicrm_mailing_event_queue
ON  civicrm_mailing_event_queue.contact_id = civicrm_contact.id
INNER JOIN  civicrm_email
ON  civicrm_mailing_event_queue.email_id = civicrm_email.id
INNER JOIN  civicrm_mailing_event_delivered
ON  civicrm_mailing_event_delivered.event_queue_id = civicrm_mailing_event_queue.id
LEFT JOIN   civicrm_mailing_event_bounce
ON  civicrm_mailing_event_bounce.event_queue_id = civicrm_mailing_event_queue.id
INNER JOIN  civicrm_mailing_job
ON  civicrm_mailing_event_queue.job_id = civicrm_mailing_job.id
AND civicrm_mailing_job.is_test = 1
INNER JOIN  civicrm_mailing
ON  civicrm_mailing_job.mailing_id = civicrm_mailing.id
WHERE       civicrm_mailing_event_bounce.id IS null
AND     civicrm_mailing.id = 9 AND civicrm_mailing_job.id = 75 ORDER BY sort_name ASC, civicrm_mailing_event_delivered.time_stamp DESC |    0.000 |
| 11260500 | gos_crm | localhost | gos_crm | Query   |   88 | Waiting for table metadata lock | SELECT path, data, UNIX_TIMESTAMP(expired_date) as expires FROM civicrm_cache WHERE group_name = "metadata_5_51_1" AND path = "implied_permissions"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |    0.000 |
| 11260507 | gos_cms | localhost | gos_cms | Sleep   |  242 |                                 | NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |    0.000 |
| 11260574 | gos_cms | localhost | gos_cms | Sleep   |  107 |                                 | NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |    0.000 |
| 11260575 | gos_crm | localhost | gos_crm | Query   |  107 | Waiting for table metadata lock | TRUNCATE TABLE civicrm_cache                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |    0.000 |
| 11260623 | gos_cms | localhost | gos_cms | Sleep   |   14 |                                 | NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |    0.000 |
| 11260624 | gos_crm | localhost | gos_crm | Query   |   14 | Waiting for table metadata lock | SELECT path, data, UNIX_TIMESTAMP(expired_date) AS expires FROM civicrm_cache WHERE group_name = "affbe72ca4dedcb8cfff949a09bf611c"                                                                                                                                                                                                                    `



## 2022-07-22 updates

      drupal/core-composer-scaffold 9.4.2  ! 9.4.3  A flexible Composer project scaffold builder.
    drupal/core-dev               9.4.2  ! 9.4.3  require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.4.2  ! 9.4.3  Adds a message after Composer installation.
    drupal/core-recommended       9.4.2  ! 9.4.3  Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/metatag                1.20.0 ! 1.21.0 Manage meta tags for all entities.
    drupal/xmlsitemap             1.2.0  ! 1.3.0  Creates XML sitemaps for the site


## 2022-07-13

    civicrm/civicrm-core          5.50.3 ! 5.51.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.50.3 ! 5.51.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.50.3 ! 5.51.1 Legacy third party dependencies for CiviCRM
    drupal/core-composer-scaffold 9.4.1  ! 9.4.2  A flexible Composer project scaffold builder.
    drupal/core-dev               9.4.1  ! 9.4.2  require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.4.1  ! 9.4.2  Adds a message after Composer installation.
    drupal/core-recommended       9.4.1  ! 9.4.2  Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/metatag                1.19.0 ! 1.20.0 Manage meta tags for all entities.

Non-direct drupal updates are:

    drupal/block_class                       1.3.0    ~ 2.0.0   Allows assigning classes to Blocks.
    drupal/copyright_footer                  1.9.0    ~ 2.0.1   Provides a block for Copyright indication.
    drupal/ctools                            3.7.0    ~ 4.0.0   Provides a number of utility and helper APIs for Drupal developers and site builders.
    drupal/google_analytics                  3.1.0    ~ 4.0.0   Allows your site to be tracked by Google Analytics by adding a Javascript tracking code to every page.
    updating drupal/block_class


## 27-June-2022

     drupal/core-composer-scaffold 9.4.0 ! 9.4.1 A flexible Composer project scaffold builder.
    drupal/core-dev               9.4.0 ! 9.4.1 require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.4.0 ! 9.4.1 Adds a message after Composer installation.
    drupal/core-recommended       9.4.0 ! 9.4.1 Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/leaflet                2.2.2 ! 2.2.3 Integration with the Leaflet map scripting library.


* fix sender address in the mailiing
* remove spam contact submissions
* Add a subscribe form

## 20-June-2022

- Upgrading drupal/webform_civicrm (6.2.0 => 6.2.1)
- Upgrading phpunit/phpunit (9.5.20 => 9.5.21)



## 19-June-2022

updates are:
    civicrm/civicrm-asset-plugin  v1.1.1 ! v1.1.2 Publish assets from private CiviCRM folders to a public folder
    civicrm/civicrm-core          5.49.2 ! 5.50.3 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.49.2 ! 5.50.3 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.49.2 ! 5.50.3 Legacy third party dependencies for CiviCRM
    drupal/block_title_link       1.1.4  ! 1.1.5  Adding link to title of blocks.
    drupal/core-composer-scaffold 9.3.13 ! 9.4.0  A flexible Composer project scaffold builder.
    drupal/core-dev               9.3.13 ! 9.4.0  require-dev dependencies from drupal/drupal; use in addition to drupal/core-recommended to run tests from drupal/core.
    drupal/core-project-message   9.3.13 ! 9.4.0  Adds a message after Composer installation.
    drupal/core-recommended       9.3.13 ! 9.4.0  Locked core dependencies; require this project INSTEAD OF drupal/core.
    drupal/core_event_dispatcher  3.1.0  ! 3.2.0  Registers event dispatchers for several core hooks
    drupal/leaflet                2.2.1  ! 2.2.2  Integration with the Leaflet map scripting library.
    drupal/menu_item_extras       2.16.0 ! 2.17.0 Provide an additional custom fields which can be used on Menu link
    drupal/paragraph_blocks       3.0.0  ! 3.0.1  Drupal Paragraph Blocks module



## 2022-06-03

/opt/eff.org/certbot/venv/bin/certbot certonly --webroot -w /srv/web/gardensofstone.org.au/web -d gardensofstone.org.au -d www.gardensofstone.org.au -d destinationpagoda.com -d www.destinationpagoda.com -d destinationpagoda.com.au -d www.destinationpagoda.com.au -d uat.gardensofstone.org.au --no-bootstrap


##

> composer config extra.enable-patching true
> xx composer require civicrm/civicrm-asset-plugin:'~1.1'
> composer require civicrm/civicrm-{core,packages,drupal-8}:'^5'



See https://github.com/civicrm/composer-compile-plugin/blob/master/doc/site-build.md for composer compile setup
* Add whitelist to extras section
* Change post-receive hook in git

cv core:insn_AU"--cms-base-url='https://uat.gardensofstone.org.au' --db="mysql://gos_crm_uat:***@localhost:3306/gos_crm_uat" --lang="en

##

Steps in setting up a generic new site. Looking for manual steps and why there are multiple

1. dns
2. web-server
3. gitosis checkout
4. drupal settings
5. copy database
   composer require 'drupal/markdown:^3.0@RC'

/opt/eff.org/certbot/venv/bin/certbot certonly --webroot -w /srv/uat/gardensofstone.org.au//web -d uat.gardensofstone.org.au


Put into skel

    composer require league/commonmark ^1.0

### Requirements


> drush ckeditor_media_embed:install
x > drush webform:libraries:composer > webform-libraries.composer.json
> composer require wikimedia/composer-merge-plugin
> Edit 'extra' in composer.json to reference the webform resources
> Composer install will derive the dependencies

### No more classy paragraphs

Undefined index: field_pbtext_style in Drupal\layout_builder\Plugin\Derivative\FieldBlockDeriver->getDerivativeDefinitions()

## Content
Website details for an new gardensofstone.org.au site

GoS Alliance Decisions [and proposed improvements in brackets]:

Upshot – create new website, and not publish it till sorted.

1/- [Proposed The software running the DP website be applied to gardensofstone.org.au to take advantage of its capabilities being much more modern software.]

2/- [Proposed DP website will be ‘unpublished’ and repurposed as the new Gardens of Stone website. – see below]

3/- [Proposed website development will be based on rough draft of the design and final design and draft content is to be discussed and agreed with John and GoSA, through me.]

4/- [Proposed existing DP and GoS content relevant to the rough content design by Madi Macleanto be accessed and edited to suit new website.]

5/- GoSA Agreed that the DP website and emails is no longer needed now that the GOS SCA has been created, so monthly payments for emails should cease.

6/- GoSA Agreed to repurpose the existing Gardens of Stone website (connected to Colong) as a Gardens of Stone SCA website [Proposed add also Mugii Murrumban SCA and GoSNP].  It will host info on progress towards creation of the new reserve; opportunities for public to comment on NPWS plan for the reserve; bushwalking in GOS info and Visitors Map; conservation values of GOS; Destination Pagoda vision; protect GOS (for threats particularly mining and off road vehicles)  [see TABS below]

7/- GoSA Agreed new website would continue to be managed via John Robens.

8/- GoSA Agreed Protect Gardens of Stone facebook continue to be managed by Yuri:  Agreed it continues as a communications channel for GOS, no need to change the name.

9/- GoSA Agreed Keep promoting visiting include link to where you can buy our GOS Visitors Map – EXTERNAL link BMCS

10/- GoSA Agreed advise people through website and social media that the state conservation area is currently in transition to a conservation reserve and not ready to be visited as basic infrastructure needs to be established.

11/ GoSA Agreed to meanwhile to promote GoSSCA, the website will include the gallery from the Gardens in Focus Photographic exhibition [as well as links to videos on youtube].

12/- GoSA Agreed GOS and DP existing websites content is to be archived.



Purpose of this website and its audience -
a/- to communicate our ‘nature-based’ management vision (i.e. DP vision) for the new reserve [proposed GoS region/ not just new reserve] so it isn’t lost in the detail of reserve creation and various GoSA’s various objections to aspects of visitor use and coal mining etc;
b/- to inform supporters of what is happening in that context within the people in nature concept that drives DP;
c/- organise submissions to reserve planning processes and mining proposals consistent with our vision.

Landing page:

•             short description of GOS region

•             the announcement that now NPWS reserve.

•             Summary statement of our visitor use vision for GoSSCA

[example text, not for publication – ‘GARDENS OF STONE STATE CONSERVATION AREA of 33,000 hectares was created in December 2021.

The next step will be the formal planning of the reserve including park infrastructure, trails and uses including a Plan of Management for the new reserve.  National Parks and Wildlife Service will put plans on public exhibition for comment.’]

[Using DP layout and software as a starting point….

“CLONE DP SITE AND PUT INTO DRAFT MODE”]

TABS along the RIBBON on top of page [reuse DP ribbon]

TAB 1. ‘New Values; new Plans’

Brief intro statement - Values of GOS

Links to docs:

•             Park Proposal

•             National Heritage List report

•             Destination Pagoda Visitors plan

•             DP Economic study

Short history of campaign

short history of the campaign/timeline



TAB 2. ‘Visit Gardens of Stone’
[MORE OR LESS A HOLDING SUBPAGE FOR MOMENT]

[ INTENTION IS TO keep promoting visiting by providing a link to where you can buy our GOS Visitors Map – EXTERNAL link BMCS and making reference to scheduled walks – links to NPA and BMCS walks pages and caution about not just going there ]

You can also walk in the area by joining a local bushwalking club.

State that , “the state conservation area is currently in transition to a conservation reserve.  Basic infrastructure needs to be established.”

MEANWHILE you can still enjoy this spectacular area through the photos from the Gardens in Focus Photographic exhibition: Next TAB

TAB 3. ‘Photo Gallery’
[Gallery module required.]

Photo Exhibition of the Gardens of Stone



TAB 4. ‘News’

Pithy statements about progress of reserve and threats (cross links to TABS 4 and 5)

Website will keep uptodate with this NPWS processes and coal mining threats.

More or less social media post equivalents.



TAB 5. ‘Make a submission’

[A webform engine module is required.]

Action: write to … Links to NPWS when a document affecting the Gardens of Stone ‘region’ is on display.

                Write to … Links to DPIE Centennial Coal documents on display. Encourage submissions to stop the damage through this website. This website also will be keep uptodate for these processes.

Campaigns for our people in nature vision against threats to GoS region cast in context of the climate change emergency.

Example: A campaign for detailed decommissioning plans for each coal mine, NOW.

Dirt sheet summary on each mine:

Angus Place (incl AP west and extn east)

Springvale

Airly

Clarence

Campaign to stop vehicle use - off roads – photos/ gallery?



TAB 6. About

Alliance supporters – parred back to eNGOs and close group aligned with our purpose.

Blurb recycled from GoS and DP sites.
