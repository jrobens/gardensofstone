

"undefined/chat/completions" cannot be parsed as a URL.

setup an advisor that says to always check against screen shots.

## Updates 2026-08-11

    * civicrm/civicrm-core (6.17.0 -> 6.17.2)
* civicrm/civicrm-drupal-8 (6.17.0 -> 6.17.2)
* civicrm/civicrm-packages (6.17.0 -> 6.17.2)
* drupal/core-composer-scaffold (11.4.4 -> 11.4.5)
* drupal/core-project-message (11.4.4 -> 11.4.5)
* drupal/core-recommended (11.4.4 -> 11.4.5)
* drupal/leaflet (10.4.9 -> 10.4.10)
    Database updates: None
## Updates 2026-08-06

    * civicrm/civicrm-core (6.16.3 -> 6.17.0)
* civicrm/civicrm-drupal-8 (6.16.3 -> 6.17.0)
* civicrm/civicrm-packages (6.16.3 -> 6.17.0)
* drupal/paragraphs (1.22.0 -> 1.23.0)
    Database updates: None
## Updates 2026-08-05

    * civicrm/civicrm-core (6.16.1 -> 6.16.3)
    * civicrm/civicrm-drupal-8 (6.16.1 -> 6.16.3)
    * civicrm/civicrm-packages (6.16.1 -> 6.16.3)
    * drupal/menu_item_extras (3.1.1 -> 3.1.2)
    * drupal/paragraphs (1.21.0 -> 1.22.0)
    
Database updates: None
## Updates 2026-07-28

    * drupal/entity_class_formatter (2.0.1 -> 2.0.2)
    Database updates: None

Hi John,

Andrew Cox wanted some changes to the GoS website, which I have done but I have had some problems I am at a loss to fix without doing a lot of Drupal research into what is really behind these problems. 

The first problem is that every webpage, except the home page, has this small “home" textlink below the main menu. As the main menu has a home button and the GoS text graphic has a hidden home button,  this third home button isn't needed. But where is it located and should I remove it or will the site go weird without it?

Second: is a graphics issue.  In edit mode, everything is OK, two cols, with two equally sized square images. Once saved, the mining timeline graphic squashes flat. Tried to fix with a bigger image in png format to fill the square up more. No luck. What is going on here? (See screenshots below)

Third: I have a problem with two layers of subheadings off the main menu (I was asked to create this 2nd layer), and well these second level submenus only show once you get into the first layer of menus. How do I get the 2nd order menus to come on once you move over “Coal Threats” instead of once you get into “Campaigns”? (Also see screenshots below the first lot)

Fourth: is another graphics problem where the graphic https://www.gardensofstone.org.au/failed-zero-discharge-promise would be cropped on the left and right sides until I added quite a bit of vertical padding top and bottom of the image. It sort of looks weird but at least I got it to work. (Just use the url to go to the page and see what a pathetic hack I’ve do to work around some configuration issue).

Can you help me with any of these problems, John?  

Also any design suggestions on these changes would be greatly appreciated.

Thank you as always



## Updates 2026-07-20

civicrm/civicrm-core       6.15.6 requires phpoffice/phpspreadsheet (^1.18 || ^2)
drupal/webform_xlsx_export 1.5.0  requires phpoffice/phpspreadsheet (^2.3)

- drupal/webform_xlsx_export[dev-1.x, 1.6.0, ..., 1.x-dev] require phpoffice/phpspreadsheet ^3.5 -> found phpoffice/phpspreadsheet[3.5.0
- 

- civicrm/civicrm-core[6.16.0, ..., 6.17.x-dev] require phpoffice/phpspreadsheet ^5 -> found phpoffice/phpspreadsheet[5.0.0, ..., 5.9.0] b

## Updates 2026-07-19

    * drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    Database updates: None
## Updates 2026-07-19

    * civicrm/civicrm-drupal-8 (6.16.0 -> 6.16.1)
* civicrm/civicrm-packages (6.16.0 -> 6.16.1)
* drupal/core-composer-scaffold (11.4.3 -> 11.4.4)
* drupal/core-project-message (11.4.3 -> 11.4.4)
* drupal/core-recommended (11.4.3 -> 11.4.4)
* drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    Database updates: None



remote:   help     11400                      hook_update_n   11400 - Remove the                
remote:                                                       help_search_items table.          
remote:   search   11401                      hook_update_n   11401 - Install Help              
remote:                                                       Search module if the              
remote:                                                       Search and Help modules           
remote:                                                       are installed.                    
remote:   search   11402                      hook_update_n   11402 - Install Search            
remote:                                                       node module if node is            
remote:                                                       installed.                        
remote:   search   search_help_dependencies   post-update     Update config entity              
remote:                                                       dependencies to the               
remote:                                                       Search Help module, if            
remote:                                                       necessary.   @see                 
remote:                                                       search_update_11402()             
remote:  -------- -------------------------- --------------- --------------------------

## Updates 2026-07-14

    * drupal/core-composer-scaffold (11.4.1 -> 11.4.3)
* drupal/core-project-message (11.4.1 -> 11.4.3)
* drupal/core-recommended (11.4.1 -> 11.4.3)
* drupal/viewsreference (2.0.0-beta12 -> 2.0.0-beta13)
* drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    Database updates: help_update_11400
search_update_11401
search_update_11402
search-post-search_help_dependencies
## Configuration 2026-07-14 
>  [error]  SQLSTATE[42S02]: Base table or view not found: 1146 Table 'gos2_cms.help_search_items' doesn't exist: SELECT "hsi"."sid" AS "sid", "hsi"."topic_id" AS "topic_id", "hsi"."section_plugin_id" AS "section_plugin_id", "hsi"."permission" AS "permission"
> FROM


1815620   14/Jul 15:55   php      Error      Drupal\Component\Plugin\E  
xception\PluginNotFoundEx  
ception: The               
"node_search" plugin does  
not exist. Valid plugin    
IDs for                    
Drupal\search\SearchPlugi  
nManager are:              
photos_image_search,       
help_se



SQLSTATE[42S22]: Column not found: 1054 Unknown column 'hsi.permission' in 'SELECT': SELECT "hsi"."sid" AS "sid", "hsi"."topic_id" AS "topic_id", "hsi"."sec  
tion_plugin_id" AS "section_plugin_id", "hsi"."permission" AS "permission"      
FROM                                                                            
"help_search_items" "hsi"; Array                                                
(                                                                               
)


```ALTER TABLE gos2_cms.help_search_items
ADD COLUMN permission VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'The permission required to clear or view this item';


CREATE TABLE help_search_items (
sid INT UNSIGNED NOT NULL COMMENT 'Numeric index of this item in the search index',
section_plugin_id VARCHAR(255) NOT NULL COMMENT 'The help section plugin id',
topic_id VARCHAR(255) NOT NULL COMMENT 'The help topic id',
PRIMARY KEY (sid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
ALTER TABLE help_search_items
ADD COLUMN permission VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'The permission required to clear or view this item';
ALTER TABLE help_search_items
MODIFY COLUMN sid INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Numeric index of this item in the search index
```
                                                                                                                                                                                   
   [notice] Module admin_toolbar_links_access_filter has an entry in the system.schema key/value storage, but is not installed. <a href="https://www.drupal.org/node/3137656">More information a  
  bout this er

drush php:eval "\Drupal::keyValue('system.schema')->delete('admin_toolbar_links_access_filter');"


## Updates 2026-07-09

    * drupal/better_social_sharing_buttons (4.1.0 -> 5.0.0)
* drupal/gin (4.0.6 -> 5.0.15)
* drupal/gin_toolbar (2.0.0 -> 3.0.3)
* drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    Database updates: None
## Updates 2026-07-09

    drupal/better_ ocial_ haring_button 
drupal/gin
drupal/gin_toolbar
drupal/webform_xl x_export
    Database updates: None
## Updates 2026-07-09

    drupal/better_social_sharing_buttons (4.1.0 -> 5.0.0)
drupal/core-composer-scaffold (11.4.0 -> 11.4.1)
drupal/core-project-message (11.4.0 -> 11.4.1)
drupal/core-recommended (11.4.0 -> 11.4.1)
drupal/gin (4.0.6 -> 5.0.15)
drupal/gin_toolbar (2.0.0 -> 3.0.3)
drupal/webform (6.3.0-rc2 -> 6.3.0)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-07-02

    civicrm/civicrm-drupal-8 (6.15.5 -> 6.16.0)
    civicrm/civicrm-packages (6.15.5 -> 6.16.0)
    drupal/colorbox (2.2.0 -> 2.2.1)
    drupal/core-composer-scaffold (11.3.13 -> 11.4.0)
    drupal/core-project-message (11.3.13 -> 11.4.0)
    drupal/core-recommended (11.3.13 -> 11.4.0)
    drupal/gin (4.0.6 -> 5.0.15)
    drupal/gin_toolbar (2.0.0 -> 3.0.3)
    drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
        system_update_11400
    system_update_11401
    civicrm_update_10001
    search_update_11400
    field-post-clear_purge_batch_size
    help-post-search_help_dependencies
    system-post-migrate_compress_setting
    system-post-remove_non_admin_routes_state


## Delete customised templates


    UPDATE civicrm_msg_template
    SET is_default = 1
    WHERE is_reserved = 1;


    DELETE FROM civicrm_msg_template
    WHERE is_reserved = 0 and msg_title NOT LIKE '%Sample%';


## Updates 2026-06-29

Actuall deletes the template

    vendor/bin/cv api4 MessageTemplate.revert where='[["id", "=", 5]]'
    vendor/bin/cv api4 MessageTemplate.revert where='[["id", "=", 7]]'
        vendor/bin/cv api4 MessageTemplate.delete where='[["id", "=", 29]]'
    vendor/bin/cv api4 MessageTemplate.revert where='[["id", "=", 31]]'
    vendor/bin/cv api4 MessageTemplate.revert where='[["id", "=", 27]]'

Riverlea theme installed.

    drupal/gin (4.0.6 -> 5.0.15)
drupal/gin_toolbar (2.0.0 -> 3.0.3)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None

You are using tokens that have been removed or deprecated.

Please review your contribution_online_receipt message template and remove references to the token {$totalTaxAmount} as it has been replaced by {contribution.tax_amount}
Please review your contribution_online_receipt message template and remove references to the token {$billingName} as it has been replaced by {contribution.address_id.name}
Please review your contribution_online_receipt message template and remove references to the token {$selectPremium} as it has been replaced by {contribution_product.id|boolean}
Please review your contribution_online_receipt message template and remove references to the token {$address} as it has been replaced by {contribution.address_id.display}
Please review your contribution_online_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your membership_offline_receipt message template and remove references to the token {$billingName} as it has been replaced by {contribution.address_id.name}
Please review your membership_offline_receipt message template and remove references to the token {$address} as it has been replaced by {contribution.address_id.display}
Please review your membership_online_receipt message template and remove references to the token {$dataArray} as it has been replaced by {see default template for how to show this}
Please review your membership_online_receipt message template and remove references to the token {$mem_start_date} as it has been replaced by {membership.start_date}
Please review your membership_online_receipt message template and remove references to the token {$mem_end_date} as it has been replaced by {membership.end_date}
Please review your membership_online_receipt message template and remove references to the token {$membership_name} as it has been replaced by {membership.membership_type_id:name}
Please review your membership_online_receipt message template and remove references to the token {$currency} as it has been replaced by {contribution.currency}
Please review your membership_online_receipt message template and remove references to the token {$totalTaxAmount} as it has been replaced by {contribution.tax_amount}
Please review your membership_online_receipt message template and remove references to the token {$priceSetID} as it has been replaced by {no longer available / relevant}
Please review your membership_online_receipt message template and remove references to the token {$useForMember} as it has been replaced by {no longer available / relevant}
Please review your membership_online_receipt message template and remove references to the token {$billingName} as it has been replaced by {contribution.address_id.name}
Please review your membership_online_receipt message template and remove references to the token {$price} as it has been replaced by {contribution_product.product_id.price|crmMoney}
Please review your membership_online_receipt message template and remove references to the token {$address} as it has been replaced by {contribution.address_id.display}
Please review your membership_online_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your contribution_offline_receipt message template and remove references to the token {$billingName} as it has been replaced by {contribution.address_id.name}
Please review your contribution_offline_receipt message template and remove references to the token {$address} as it has been replaced by {contribution.address_id.display}
Please review your event_offline_receipt message template and remove references to the token {$dataArray} as it has been replaced by {see default template for how to show this}
Please review your event_offline_receipt message template and remove references to the token {$paidBy} as it has been replaced by {contribution.payment_instrument_id:label}
Please review your event_offline_receipt message template and remove references to the token {$totalTaxAmount} as it has been replaced by {contribution.tax_amount}
Please review your event_offline_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your event_offline_receipt message template and remove references to the token {$checkNumber} as it has been replaced by {contribution.check_number}
Please review your event_offline_receipt message template and remove references to the token {$receive_date} as it has been replaced by {contribution.receive_date}
Please review your event_offline_receipt message template and remove references to the token {$is_pay_later} as it has been replaced by {contribution.is_pay_later}
Please review your event_offline_receipt message template and remove references to the token {$totalAmount} as it has been replaced by {contribution.total_amount}
Please review your event_offline_receipt message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your event_offline_receipt message template and remove references to the token {$isShowLocation} as it has been replaced by {event.is_show_location|boolean}
Please review your event_offline_receipt message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your event_offline_receipt message template and remove references to the token {$financialTypeName} as it has been replaced by {contribution.financial_type_id:label}
Please review your event_offline_receipt message template and remove references to the token {$trxn_id} as it has been replaced by {contribution.trxn_id}
Please review your event_offline_receipt message template and remove references to the token {$lineItem} as it has been replaced by {$lineItems}
Please review your event_offline_receipt message template and remove references to the token {$billingName} as it has been replaced by {contribution.address_id.name}
Please review your event_offline_receipt message template and remove references to the token {$address} as it has been replaced by {contribution.address_id.display}
Please review your event_online_receipt message template and remove references to the token {$individual} as it has been replaced by {see default template for how to show this}
Please review your event_online_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your event_online_receipt message template and remove references to the token {$isAdditionalParticipant} as it has been replaced by {see default template for how to show this}
Please review your event_online_receipt message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your event_online_receipt message template and remove references to the token {$register_date} as it has been replaced by {participant.register_date}
Please review your event_online_receipt message template and remove references to the token {$totalAmount} as it has been replaced by {contribution.total_amount}
Please review your event_online_receipt message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your event_online_receipt message template and remove references to the token {$paidBy} as it has been replaced by {contribution.payment_instrument_id:label}
Please review your event_online_receipt message template and remove references to the token {$lineItem} as it has been replaced by {$lineItems}
Please review your event_online_receipt message template and remove references to the token {$participant_status} as it has been replaced by {participant.status_id:label}
Please review your event_online_receipt message template and remove references to the token {$billingName} as it has been replaced by {contribution.address_id.name}
Please review your event_online_receipt message template and remove references to the token {$address} as it has been replaced by {contribution.address_id.display}
Please review your participant_transferred message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your participant_expired message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your participant_confirm message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your payment_or_refund_notification message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your payment_or_refund_notification message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your payment_or_refund_notification message template and remove references to the token {$paymentsComplete} as it has been replaced by {contribution.balance_amount}
Please review your payment_or_refund_notification message template and remove references to the token {$billingName} as it has been replaced by {contribution.address_id.name}


## Updates 2026-06-25

    civicrm/civicrm-asset-plugin (v1.2.0 -> v1.2.1)
civicrm/civicrm-drupal-8 (6.11.0 -> 6.15.5)
civicrm/civicrm-packages (6.11.0 -> 6.15.5)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-06-25

    civicrm/civicrm-asset-plugin (v1.2.0 -> v1.2.1)
civicrm/civicrm-drupal-8 (6.11.0 -> 6.15.5)
civicrm/civicrm-packages (6.11.0 -> 6.15.5)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-06-25

    drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-06-25

    drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None

Put CV into the location distro.
>  composer require civicrm/cli-tools

## Updates 2026-06-25

    drupal/core-composer-scaffold (11.3.12 -> 11.3.13)
drupal/core-project-message (11.3.12 -> 11.3.13)
drupal/core-recommended (11.3.12 -> 11.3.13)
drupal/nagios (1.26.0 -> 1.27.0)
drupal/paragraphs (1.20.0 -> 1.21.0)
drupal/webform (6.3.0-rc1 -> 6.3.0-rc2)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-06-20

    drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-06-18

    drupal/core-composer-scaffold (11.3.11 -> 11.3.12)
drupal/core-project-message (11.3.11 -> 11.3.12)
drupal/core-recommended (11.3.11 -> 11.3.12)
drupal/module_filter (5.0.4 -> 5.0.5)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-06-08

    drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-06-07

    drupal/core-composer-scaffold (11.3.8 -> 11.3.11)
drupal/core-project-message (11.3.8 -> 11.3.11)
drupal/core-recommended (11.3.8 -> 11.3.11)
drupal/entity_clone (2.1.0-beta1 -> 2.2.0-beta1)
drupal/leaflet (10.4.5 -> 10.4.9)
drupal/masquerade (2.1.0 -> 2.2.0)
drupal/menu_item_extras (3.1.0 -> 3.1.1)
drupal/pathauto (1.14.0 -> 1.15.0)
drupal/recaptcha_v3 (2.0.4 -> 2.0.5)
drupal/webform (6.3.0-beta8 -> 6.3.0-rc1)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    pathauto-post-remove_uuid_config_key
views-post-counter_field_not_sortable
## Updates 2026-04-22

    drupal/core-composer-scaffold (11.3.7 -> 11.3.8)
drupal/core-project-message (11.3.7 -> 11.3.8)
drupal/core-recommended (11.3.7 -> 11.3.8)
drupal/leaflet (10.4.4 -> 10.4.5)
drupal/nagios (1.25.0 -> 1.26.0)
drupal/viewsreference (2.0.0-beta10 -> 2.0.0-beta12)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-04-17

    drupal/core-composer-scaffold (11.3.6 -> 11.3.7)
drupal/core-project-message (11.3.6 -> 11.3.7)
drupal/core-recommended (11.3.6 -> 11.3.7)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None



## Updates 2026-04-17

colorbox - could not install via composer

> vendor/bin/drush en -y colorbox
> vendor/bin/drush colorbox:plugin

## Updates 2026-04-15

Had to disable and renable pathauto

Drupal\Component\Plugin\Exception\PluginNotFoundException: The "node_type" plugin does not exist.

    drupal/core-composer-scaffold (11.3.5 -> 11.3.6)
drupal/core-project-message (11.3.5 -> 11.3.6)
drupal/core-recommended (11.3.5 -> 11.3.6)
drupal/layout_paragraphs (dev-2.1.x c97badf -> dev-2.1.x 8bf9a09)
drupal/menu_link_attributes (1.6.0 -> 1.7.0)
drupal/paragraph_blocks (4.2.1 -> 4.2.2)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    None
## Updates 2026-03-18

    drupal/ckeditor_media_embed (dev-2.x 2d8e2e3 -> dev-2.x 9be0f9d)
drupal/paragraph_blocks (4.2.0 -> 4.2.1)
drupal/webform_xlsx_export (1.5.0 -> 1.6.0)
    paragraph_blocks_update_10401
## Updates 2026-03-08

    drupal/core-composer-scaffold (11.3.3 -> 11.3.5)
drupal/core-project-message (11.3.3 -> 11.3.5)
drupal/core-recommended (11.3.3 -> 11.3.5)
drupal/webform (6.3.0-beta7 -> 6.3.0-beta8)
    None
## Updates 2026-02-26

    drupal/leaflet (10.4.2 -> 10.4.4)
    None
## Updates 2026-02-17

    composer/installers       1.12.0          ~ 2.3.0           A multi-framework Com...
    cweagans/composer-patches 1.7.3           ~ 2.0.0           Provides a way to pat...
    drupal/ds                 3.36.0          ! 3.37.0          Extend the display op...
    drupal/masquerade         2.0.0           ! 2.1.0           Allows privileged use...
    drupal/mediteran          dev-1.x f174169 ! dev-1.x c908adc Mediteran is a clean ...
    league/commonmark         1.6.7           ~ 2.8.0           Highly-extensible PHP...

keith.muir6@bigpond.com, brett.mitchell@intrepidtravel.com

Created Coal Threats main menu

Under Coal Threats main menu:
Fixed webform glitch regarding post code https://www.gardensofstone.org.au/sign-updates-0 (not exactly sure whether this webforms builds straight into CRM, it has this capacity, but I like to do it manually in case it doesn’t work properly on auto and makes mess of the data).

On pull down under Coal Threats created:
Added Clarence Mod 11 submission guide page https://www.gardensofstone.org.au/oppose-clarence-coal-mine-extension-submissions-due-thursday-19-feb

Then added following existing webpages on pulldown in following order under Coal Threats after Clarence Mod 11
https://www.gardensofstone.org.au/briefing-problems-springvales-water-treatment-plant
https://www.gardensofstone.org.au/node/38 explains Angus Place West with BN from NCC on link at top
https://www.gardensofstone.org.au/update-coal-mine-proposals-may-2025 (can remove if you like, could be replace with another update when available).

Home page
Removed video at bottom of page
Removed various old links to removed pages

## Updates 2026-02-08

    composer/installers       1.12.0 ~ 2.3.0 A multi-framework Composer library ...
    cweagans/composer-patches 1.7.3  ~ 2.0.0 Provides a way to patch Composer pa...
    league/commonmark         1.6.7  ~ 2.8.0 Highly-extensible PHP Markdown pars...
## Updates 2026-02-04

    civicrm/civicrm-drupal-8  6.10.0 ! 6.10.1 Open source constituent relationship management for ...
    civicrm/civicrm-packages  6.10.0 ! 6.10.1 Legacy third party dependencies for CiviCRM
    composer/installers       1.12.0 ~ 2.3.0  A multi-framework Composer library installer
    cweagans/composer-patches 1.7.3  ~ 2.0.0  Provides a way to patch Composer packages.
    drupal/ds                 3.34.0 ! 3.35.0 Extend the display options for every entity type.
    drupal/image_effects      4.0.0  ~ 5.0.0  Provides effects and operations for the Image API.
    drupal/media_bulk_upload  3.0.4  ! 3.0.5  Allows uploading files in bulk and converting them t...
    drush/drush               13.7.0 ! 13.7.1 Drush is a command line shell and scripting interfac...
    league/commonmark         1.6.7  ~ 2.8.0  Highly-extensible PHP Markdown parser which fully su...



remote:   Problem 1        
remote:     - symfony/css-selector is locked to version v8.0.0 and an update of this package was not requested.        
remote:     - symfony/css-selector v8.0.0 requires php >=8.4 -> your php version (8.3.20) does not satisfy that requirement.

apt install php8.4-{bz2,curl,mbstring,intl,imap,redis,snmp,xml,zip,mbstring,gd,mysql,bcmath}

NOTICE: To enable PHP 8.4 FPM in Apache2 do:
NOTICE: a2enmod proxy_fcgi setenvif
NOTICE: a2enconf php8.4-fpm
NOTICE: You are seeing this message because you have apache2 package installed.

sudo update-alternatives --set php /usr/bin/php8.4
sudo update-alternatives --set phar /usr/bin/phar8.4
sudo update-alternatives --set phar.phar /usr/bin/phar.phar8.4
sudo update-alternatives --set phpize /usr/bin/phpize8.4
sudo update-alternatives --set php-config /usr/bin/php-config8.4


 ---------- ----------------- --------------- --------------------------------- 
Module     Update ID         Type            Description
 ---------- ----------------- --------------- --------------------------------- 
system     11202             hook_update_n   11202 - Add an [exit_code]       
column to the {simpletest}       
table, if existing.              
system     11300             hook_update_n   11300 - Equivalent update to     
10600.                           
admin_to   8002              hook_update_n   8002 - Module CSS and '.module'  
olbar_se                                     files refactoring requires       
arch                                         cache rebuild.                   
admin_to   8203              hook_update_n   8203 - Module CSS file           
olbar_to                                     refactoring requires cache       
ols                                          rebuild.                         
block_cl   20019             hook_update_n   20019 - Remove invalid           
ass                                          block_class dependencies.        
ds         8014              hook_update_n   8014 - Sets the                  
'array_merge_recursive_bc'       
setting to TRUE.                 
views      11201             hook_update_n   11201 - Removes the              
ui.show.advanced_column          
setting.                         
block_co   remove_block_co   post-update     Remove                           
ntent      ntent_listing_e                   block_content_listing_empty      
mpty                              from views.                      
block_co   remove_block_co   post-update     Remove deprecated status and     
ntent      ntent_status_in                   info keys from block_content     
fo_keys                           blocks.                          
ckeditor   list_type         post-update     No-op update that didn't update  
5                                            quite enough the first time.     
ckeditor   list_type_again   post-update     Updates Text Editors using       
5                                            CKEditor 5 to native List        
"type" functionality.            
ds         theme_registry_   post-update     Rebuild the theme registry to    
clear                             pick up 'initial preprocess'.    
node       add_rebuild_per   post-update     Grants a new permission for      
mission_to_role                   rebuilding node access           
s                                 permissions.                     
node       create_promote_   post-update     Creates base field override      
base_field_over                   config for the promote base      
rides                             field on node types.             
system     delete_rss_conf   post-update     Delete obsolete system.rss       
ig                                configuration.                   
views      add_date_defaul   post-update     Clear cache to add new date      
t_arguments                       default arguments.               
views      format_plural     post-update     Updates the format plural        
option for those views using     
aggregation.


 --------- -------------- --------------- ------------------------------------- 
Module    Update ID      Type            Description
 --------- -------------- --------------- ------------------------------------- 
system    11202          hook_update_n   11202 - Add an [exit_code] column    
to the {simpletest} table, if        
existing.                            
system    11300          hook_update_n   11300 - Equivalent update to 10600.  
admin_t   8002           hook_update_n   8002 - Module CSS and '.module'      
oolbar_                                  files refactoring requires cache     
search                                   rebuild.                             
admin_t   8203           hook_update_n   8203 - Module CSS file refactoring   
oolbar_                                  requires cache rebuild.              
tools                                                                         
block_c   20019          hook_update_n   20019 - Remove invalid block_class   
lass                                     dependencies.                        
ds        8014           hook_update_n   8014 - Sets the                      
'array_merge_recursive_bc' setting   
to TRUE.                             
views     11201          hook_update_n   11201 - Removes the                  
ui.show.advanced_column setting.     
webform   8640           hook_update_n   8640 - Issue #3522507:               
SchemaIncompleteException for        
webform.settings:ui.description_hel  
p_disabled.                          
webform   8641           hook_update_n   8641 - Issue #3439662: Allow a       
WebformEmailHandler to specify the   
language of an email message.        
webform   8642           hook_update_n   8642 - Issue #3449549: Webform       
'remote_post' handler doesn't        
exclude fields without access.       
webform   8643           hook_update_n   8643 - Issue #3543014: Make          
form_file_limit error message        
configurable.                        
webform   8644           hook_update_n   8644 - Reimport webform filter       
format to ensure configuration is    
correct.                             
webform   8645           hook_update_n   8645 - Issue #3497954: Excessive     
memory use when building dynamic     
library definitions.                 
webform   8646           hook_update_n   8646 - Issue #3315197: Add an index  
on webform_submission_data name and  
property.                            
webform   8647           hook_update_n   8647 - Issue #3462738:               
webform_submission and               
webform_submission_data schema       
don't match for sid.                 
webform   8648           hook_update_n   8648 - Issue #3487530 : New          
permission for filter and bulk       
action on overview page.             
webform   8649           hook_update_n   8649 - Issue #3484204: Adds new      
index to the 'webform_id' and        
'name' in the                        
'webform_submission_data' table.     
block_c   remove_block   post-update     Remove block_content_listing_empty   
ontent    _content_lis                   from views.                          
ting_empty                                                          
block_c   remove_block   post-update     Remove deprecated status and info    
ontent    _content_sta                   keys from block_content blocks.      
tus_info_key                                                        
s                                                                   
ckedito   list_type      post-update     No-op update that didn't update      
r5                                       quite enough the first time.         
ckedito   list_type_ag   post-update     Updates Text Editors using CKEditor  
r5        ain                            5 to native List "type"              
functionality.                       
ds        theme_regist   post-update     Rebuild the theme registry to pick   
ry_clear                       up 'initial preprocess'.             
node      add_rebuild_   post-update     Grants a new permission for          
permission_t                   rebuilding node access permissions.  
o_roles                                                             
node      create_promo   post-update     Creates base field override config   
te_base_fiel                   for the promote base field on node   
d_overrides                    types.                               
system    delete_rss_c   post-update     Delete obsolete system.rss           
onfig                          configuration.                       
views     add_date_def   post-update     Clear cache to add new date default  
ault_argumen                   arguments.                           
ts                                                                  
views     format_plura   post-update     Updates the format plural option     
l                              for those views using aggregation.
 --------- -------------- --------------- ------------------------------------- 


[error]  CiviCRM: System: Please specify a realistic site URL (Ex: drush -l  
http://example.com:456 ...).

[error]  CiviCRM: System: The template compile dir  
"/srv/web/gardensofstone.org.au/web/../sec/files/civicrm/templates_c" cannot  
be created. Ensure the parent folder is writable.

[warning] Drupal requires databases that support JSON storage.
(Currently using Database support for JSON Available
)


Error: Failed opening required 'DB.php' (include_path='.:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core//packages:.:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-packages:/srv/web/gardensofstone.org.au/vendor/pear/archive_tar:/srv/web/gardensofstone.org.au/vendor/pear/auth_sasl:/srv/web/gardensofstone.org.au/vendor/pear/console_getopt:/srv/web/gardensofstone.org.au/vendor/pear/db:/srv/web/gardensofstone.org.au/vendor/pear/log:/srv/web/gardensofstone.org.au/vendor/pear/mail:/srv/web/gardensofstone.org.au/vendor/pear/mail_mime:/srv/web/gardensofstone.org.au/vendor/pear/net_smtp:/srv/web/gardensofstone.org.au/vendor/pear/net_socket:/srv/web/gardensofstone.org.au/vendor/pear/pear-core-minimal/src:/srv/web/gardensofstone.org.au/vendor/pear/pear_exception:/srv/web/gardensofstone.org.au/vendor/pear/validate_finance_creditcard:.:/usr/share/php') in /srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-packages/DB/DataObject.php on line 2555 #0 /srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/CRM/Core/DAO.php(609): DB_DataObject->_connect()
#1 /srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/CRM/Core/DAO.php(152): CRM_Core_DAO->initialize()
#2 /srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/CRM/Core/DAO.php(1852): CRM_Core_DAO->__construct()
#3 /srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/CRM/Core/DAO.php(328): CRM_Core_DAO::executeQuery()
#4 /srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/Civi/Core/Container.php(700): CRM_Core_DAO::init()

## Updates 2026-01-16

    civicrm/civicrm-drupal-8      6.9.1       ! 6.10.0      Open source constituent relationship m...
    civicrm/civicrm-packages      6.9.1       ! 6.10.0      Legacy third party dependencies for Ci...
    composer/installers           1.12.0      ~ 2.3.0       A multi-framework Composer library ins...
    cweagans/composer-patches     1.7.3       ~ 2.0.0       Provides a way to patch Composer packa...
    drupal/core-composer-scaffold 11.3.1      ! 11.3.2      A flexible Composer project scaffold b...
    drupal/core-project-message   11.3.1      ! 11.3.2      Adds a message after Composer installa...
    drupal/core-recommended       11.3.1      ! 11.3.2      Core and its dependencies with known-c...
    drupal/leaflet                10.3.11     ! 10.4.1      Integration with the Leaflet map scrip...
    drupal/webform                6.3.0-beta5 ! 6.3.0-beta7 Enables the creation of webforms and q...
    drush/drush                   13.6.2      ! 13.7.0      Drush is a command line shell and scri...
    league/commonmark             1.6.7       ~ 2.8.0       Highly-extensible PHP Markdown parser ...
## Updates 2026-01-04

    civicrm/civicrm-asset-plugin  1.1.4           ! 1.2.0           Publish assets from private Ci...
    civicrm/civicrm-drupal-8      6.7.1           ! 6.9.1           Open source constituent relati...
    civicrm/civicrm-packages      6.7.1           ! 6.9.1           Legacy third party dependencie...
    composer/installers           1.12.0          ~ 2.3.0           A multi-framework Composer lib...
    cweagans/composer-patches     1.7.3           ~ 2.0.0           Provides a way to patch Compos...
    drupal/admin_toolbar          3.6.2           ! 3.6.3           Provides a drop-down menu inte...
    drupal/ckeditor_media_embed   dev-2.x 1da4c84 ! dev-2.x 2d8e2e3 Adds the Media Embed CKEditor ...
    drupal/core-composer-scaffold 11.2.5          ! 11.3.1          A flexible Composer project sc...
    drupal/core-project-message   11.2.5          ! 11.3.1          Adds a message after Composer ...
    drupal/core-recommended       11.2.5          ! 11.3.1          Core and its dependencies with...
    drupal/ds                     3.30.0          ! 3.34.0          Extend the display options for...
    drupal/leaflet                10.3.10         ! 10.3.11         Integration with the Leaflet m...
    drupal/menu_link_attributes   1.5.0           ! 1.6.0           Allows you to add attributes t...
    drupal/paragraph_blocks       4.1.6           ! 4.2.0           Drupal Paragraph Blocks module
    drupal/paragraphs             1.19.0          ! 1.20.0          Enables the creation of Paragr...
    drupal/webform                6.3.0-beta5     ! 6.3.0-beta6     Enables the creation of webfor...
    drush/drush                   13.6.2          ! 13.7.0          Drush is a command line shell ...
    league/commonmark             1.6.7           ~ 2.8.0           Highly-extensible PHP Markdown...
## Updates 2025-10-20

    civicrm/civicrm-drupal-8      6.6.3  ! 6.7.1   Open source constituent relationship management...
    civicrm/civicrm-packages      6.6.3  ! 6.7.1   Legacy third party dependencies for CiviCRM
    composer/installers           1.12.0 ~ 2.3.0   A multi-framework Composer library installer
    drupal/core-composer-scaffold 11.2.4 ! 11.2.5  A flexible Composer project scaffold builder.
    drupal/core-project-message   11.2.4 ! 11.2.5  Adds a message after Composer installation.
    drupal/core-recommended       11.2.4 ! 11.2.5  Core and its dependencies with known-compatible...
    drupal/leaflet                10.3.9 ! 10.3.10 Integration with the Leaflet map scripting libr...
    drupal/pathauto               1.13.0 ! 1.14.0  Provides a mechanism for modules to automatical...
    league/commonmark             1.6.7  ~ 2.7.1   Highly-extensible PHP Markdown parser which ful...

## Not starting 2025-10-20

> systemctl is-enabled mariadb
disabled
systemctl enable mariadb



## Updates 2025-10-02

    civicrm/civicrm-drupal-8      6.5.0       ! 6.6.3       Open source constituent relationship m...
    civicrm/civicrm-packages      6.5.0       ! 6.6.3       Legacy third party dependencies for Ci...
    composer/installers           1.12.0      ~ 2.3.0       A multi-framework Composer library ins...
    drupal/core-composer-scaffold 11.2.3      ! 11.2.4      A flexible Composer project scaffold b...
    drupal/core-project-message   11.2.3      ! 11.2.4      Adds a message after Composer installa...
    drupal/core-recommended       11.2.3      ! 11.2.4      Core and its dependencies with known-c...
    drupal/leaflet                10.3.8      ! 10.3.9      Integration with the Leaflet map scrip...
    drupal/metatag                2.1.1       ! 2.2.0       Manage meta tags for all entities.
    drupal/webform                6.3.0-beta4 ! 6.3.0-beta5 Enables the creation of webforms and q...
    league/commonmark             1.6.7       ~ 2.7.1       Highly-extensible PHP Markdown parser ...

https://easydmarc.com/blog/how-to-configure-dkim-opendkim-with-postfix/

opendkim-genkey -b 1024 -d crm.gardensofstone.org.au -D /etc/dkimkeys  -s crm.gardensofstone.org.au  -v


Module admin_toolbar_links_access_filter has an entry in the system.schema key/value storage, but is not installed. More information about this error.

8640 - Issue #3522507: SchemaIncompleteException for webform.settings:ui.description_help_disabled.
8641 - Issue #3439662: Allow a WebformEmailHandler to specify the language of an email message.
8642 - Issue #3449549: Webform 'remote_post' handler doesn't exclude fields without access.
8643 - Issue #3543014: Make form_file_limit error message configurable.
8644 - Reimport webform filter format to ensure configuration is correct.
8645 - Issue #3497954: Excessive memory use when building dynamic library definitions.
8646 - Issue #3315197: Add an index on webform_submission_data name and property.
8647 - Issue #3462738: webform_submission and webform_submission_data schema don't match for sid.
8648 - Issue #3487530 : New permission for filter and bulk action on overview page.
8649 - Issue #3484204: Adds new index to the 'webform_id' and 'name' in the 'webform_submission_data' table.

You are using tokens that have been removed or deprecated.

Please review your membership_online_receipt message template and remove references to the token {$dataArray} as it has been replaced by {see default template for how to show this}
Please review your membership_online_receipt message template and remove references to the token {$mem_start_date} as it has been replaced by {membership.start_date}
Please review your membership_online_receipt message template and remove references to the token {$mem_end_date} as it has been replaced by {membership.end_date}
Please review your membership_online_receipt message template and remove references to the token {$membership_name} as it has been replaced by {membership.membership_type_id:name}
Please review your membership_online_receipt message template and remove references to the token {$receive_date} as it has been replaced by {contribution.receive_date}
Please review your membership_online_receipt message template and remove references to the token {$currency} as it has been replaced by {contribution.currency}
Please review your event_offline_receipt message template and remove references to the token {$dataArray} as it has been replaced by {see default template for how to show this}
Please review your event_offline_receipt message template and remove references to the token {$paidBy} as it has been replaced by {contribution.payment_instrument_id:label}
Please review your event_offline_receipt message template and remove references to the token {$totalTaxAmount} as it has been replaced by {contribution.tax_amount}
Please review your event_offline_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your event_offline_receipt message template and remove references to the token {$checkNumber} as it has been replaced by {contribution.check_number}
Please review your event_offline_receipt message template and remove references to the token {$receive_date} as it has been replaced by {contribution.receive_date}
Please review your event_offline_receipt message template and remove references to the token {$is_pay_later} as it has been replaced by {contribution.is_pay_later}
Please review your event_offline_receipt message template and remove references to the token {$totalAmount} as it has been replaced by {contribution.total_amount}
Please review your event_offline_receipt message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your event_offline_receipt message template and remove references to the token {$isShowLocation} as it has been replaced by {event.is_show_location|boolean}
Please review your event_offline_receipt message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your event_offline_receipt message template and remove references to the token {$financialTypeName} as it has been replaced by {contribution.financial_type_id:label}
Please review your event_offline_receipt message template and remove references to the token {$trxn_id} as it has been replaced by {contribution.trxn_id}
Please review your event_online_receipt message template and remove references to the token {$individual} as it has been replaced by {see default template for how to show this}
Please review your event_online_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your event_online_receipt message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your event_online_receipt message template and remove references to the token {$register_date} as it has been replaced by {participant.register_date}
Please review your event_online_receipt message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your event_online_receipt message template and remove references to the token {$paidBy} as it has been replaced by {contribution.payment_instrument_id:label}
Please review your participant_transferred message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your participant_expired message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your participant_confirm message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your payment_or_refund_notification message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your payment_or_refund_notification message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your payment_or_refund_notification message template and remove references to the token {$paymentsComplete} as it has been replaced by {contribution.balance_amount}


## Updates 2025-09-01

    civicrm/civicrm-drupal-8      6.4.0           ! 6.5.0
    civicrm/civicrm-packages      6.4.0           ! 6.5.0
    composer/installers           1.12.0          ~ 2.3.0
    drupal/ckeditor_media_embed   dev-2.x c29f4c5 ! dev-2.x 1da4c84
    drupal/core-composer-scaffold 11.2.2          ! 11.2.3
    drupal/core-project-message   11.2.2          ! 11.2.3
    drupal/core-recommended       11.2.2          ! 11.2.3
    drupal/drulma                 2.0.1           ! 2.0.2
    drupal/google_tag             2.0.8           ! 2.0.9
    drupal/leaflet                10.3.7          ! 10.3.8
    drush/drush                   13.6.1          ! 13.6.2
    league/commonmark             1.6.7           ~ 2.7.1
## Updates 2025-07-30

    composer/installers     1.12.0      ~ 2.3.0       A multi-framework Composer library installer
    drupal/admin_toolbar    3.6.1       ! 3.6.2       Provides a drop-down menu interface to the core Drupal Toolbar.
    drupal/leaflet          10.3.5      ! 10.3.7      Integration with the Leaflet map scripting library.
    drupal/paragraph_blocks 4.1.5       ! 4.1.6       Drupal Paragraph Blocks module
    drupal/tfa              1.11.0      ! 1.12.0      Pluggable provider of two factor authentication for Drupal
    drupal/webform          6.3.0-beta2 ! 6.3.0-beta4 Enables the creation of webforms and questionnaires.
    drush/drush             13.6.0      ! 13.6.1      Drush is a command line shell and scripting interface for Dr...
    league/commonmark       1.6.7       ~ 2.7.1       Highly-extensible PHP Markdown parser which fully supports t...

[warning] require_once(Mail.php): Failed to open stream: No such file or directory Config.php:23
PHP Fatal error:  Uncaught Error: Failed opening required 'Mail.php' (include_path='.:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-packages:.:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/:/srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core//packages:/srv/web/gardensofstone.org.au/vendor/pear/archive_tar:/srv/web/gardensofstone.org.au/vendor/pear/auth_sasl:/srv/web/gardensofstone.org.au/vendor/pear/console_getopt:/srv/web/gardensofstone.org.au/vendor/pear/db:/srv/web/gardensofstone.org.au/vendor/pear/mail:/srv/web/gardensofstone.org.au/vendor/pear/mail_mime:/srv/web/gardensofstone.org.au/vendor/pear/net_smtp:/srv/web/gardensofstone.org.au/vendor/pear/net_socket:/srv/web/gardensofstone.org.au/vendor/pear/pear-core-minimal/src:/srv/web/gardensofstone.org.au/vendor/pear/pear_exception:/srv/web/gardensofstone.org.au/vendor/pear/validate_finance_creditcard:/srv/web/gardensofstone.org.au/vendor/pear/log:.:/usr/share/php') in /srv/web/gardensofstone.org.au/vendor/civicrm/civicrm-core/CRM/Core/Config.php:23
Stack trace:


## Updates 2025-07-07

    civicrm/civicrm-core     5.82.1    ~ 6.4.0  Open source constituent relation...
    civicrm/civicrm-drupal-8 5.82.1    ~ 6.4.0  Open source constituent relation...
    civicrm/civicrm-packages 5.82.1    ~ 6.4.0  Legacy third party dependencies ...
    composer/installers      1.12.0    ~ 2.3.0  A multi-framework Composer libra...
    drupal/leaflet           10.3.4    ! 10.3.5 Integration with the Leaflet map...
    drupal/lp_fontawesome    5.15005.0 ~ 6.7.20 Defines fontawesome as library t...
    drupal/tfa               1.10.0    ! 1.11.0 Pluggable provider of two factor...
    league/commonmark        1.6.7     ~ 2.7.0  Highly-extensible PHP Markdown p...

drupal.js?v=11.1.7:64 Uncaught ReferenceError: once is not defined
at Object.attach (animated_scroll_to_top.js?swn7nj:4:7)
at drupal.js?v=11.1.7:166:24
at Array.forEach (<anonymous>)
at Drupal.attachBehaviors (drupal.js?v=11.1.7:162:34)
at drupal.init.js?v=11.1.7:32:12
at HTMLDocument.listener (drupal.init.js?v=11.1.7:20:7)

 --------- --------------------- --------------- ------------------------------ 
Module    Update ID             Type            Description
 --------- --------------------- --------------- ------------------------------ 
system    11200                 hook_update_n   11200 - Add a [time] column   
to the {simpletest} table,    
if existing.                  
system    11201                 hook_update_n   11201 - Add the [alias]       
field to the {router} table.  
admin_t   8004                  hook_update_n   8004 - Move the               
oolbar                                          'hoverintent_functionality'   
configuration to              
'admin_toolbar'.              
admin_t   8005                  hook_update_n   8005 - Disable the            
oolbar                                          'toggle_shortcut' feature by  
default.                      
admin_t   8001                  hook_update_n   8001 - Update settings:       
oolbar_                                         'display_menu_item' and       
search                                          'enable_keyboard_shortcut'.   
module_   9404                  hook_update_n   9404 - Add new config key     
filter                                          for descriptions_show.        
block     set_menu_block_dept   post-update     Updates the `depth` setting   
h_to_null_if_zero                     to NULL if it is 0 in any     
menu blocks.                  
file      add_playsinline       post-update     Adds a value for the          
'playsinline' setting of the  
'file_video' formatter.       
system    convert_empty_descr   post-update     Updates entity_form_mode      
iption_entity_form_                   descriptions from empty       
modes_to_null                         string to null.               
system    remove_path_key       post-update     Remove path key in            
system.file.                  
system    remove_rss_cdata_su   post-update     Rebuild the container to fix  
bscriber                              HTML in RSS feeds.            
tfa       route_rebuild         post-update     Empty update to rebuild core  
routes.                       
views     block_items_per_pag   post-update     Defaults `items_per_page` to  
e                                     NULL in Views blocks.         
views     table_css_class       post-update     Adds a default table CSS      
class.                        
views     update_remember_rol   post-update     Clean-up empty                
e_empty                               remember_roles display        
settings for views filters.
 --------- --------------------- --------------- ------------------------------ 

Module admin_toolbar_links_access_filter has an entry in the system.schema key/value storage, but is not installed. <a href="https://www.drupal.org/node/3137656">More information about this error</a>.

system module
11200 - Add a [time] column to the {simpletest} table, if existing.
11201 - Add the [alias] field to the {router} table.
Updates entity_form_mode descriptions from empty string to null.
Remove path key in system.file.
admin_toolbar module
8004 - Move the 'hoverintent_functionality' configuration to 'admin_toolbar'.
8005 - Disable the 'toggle_shortcut' feature by default.
admin_toolbar_search module
8001 - Update settings: 'display_menu_item' and 'enable_keyboard_shortcut'.
module_filter module
9404 - Add new config key for descriptions_show.
block module
Updates the `depth` setting to NULL if it is 0 in any menu blocks.
file module
Adds a value for the 'playsinline' setting of the 'file_video' formatter.
views module
Defaults `items_per_page` to NULL in Views blocks.
Adds a default table CSS class.
Clean-up empty remember_roles display settings for views filters.


You are using tokens that have been removed or deprecated.

Please review your membership_online_receipt message template and remove references to the token {$dataArray} as it has been replaced by {see default template for how to show this}
Please review your membership_online_receipt message template and remove references to the token {$mem_start_date} as it has been replaced by {membership.start_date}
Please review your membership_online_receipt message template and remove references to the token {$mem_end_date} as it has been replaced by {membership.end_date}
Please review your membership_online_receipt message template and remove references to the token {$membership_name} as it has been replaced by {membership.membership_type_id:name}
Please review your membership_online_receipt message template and remove references to the token {$receive_date} as it has been replaced by {contribution.receive_date}
Please review your membership_online_receipt message template and remove references to the token {$currency} as it has been replaced by {contribution.currency}
Please review your event_offline_receipt message template and remove references to the token {$dataArray} as it has been replaced by {see default template for how to show this}
Please review your event_offline_receipt message template and remove references to the token {$paidBy} as it has been replaced by {contribution.payment_instrument_id:label}
Please review your event_offline_receipt message template and remove references to the token {$totalTaxAmount} as it has been replaced by {contribution.tax_amount}
Please review your event_offline_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your event_offline_receipt message template and remove references to the token {$checkNumber} as it has been replaced by {contribution.check_number}
Please review your event_offline_receipt message template and remove references to the token {$receive_date} as it has been replaced by {contribution.receive_date}
Please review your event_offline_receipt message template and remove references to the token {$is_pay_later} as it has been replaced by {contribution.is_pay_later}
Please review your event_offline_receipt message template and remove references to the token {$totalAmount} as it has been replaced by {contribution.total_amount}
Please review your event_offline_receipt message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your event_offline_receipt message template and remove references to the token {$isShowLocation} as it has been replaced by {event.is_show_location|boolean}
Please review your event_offline_receipt message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your event_offline_receipt message template and remove references to the token {$financialTypeName} as it has been replaced by {contribution.financial_type_id:label}
Please review your event_offline_receipt message template and remove references to the token {$trxn_id} as it has been replaced by {contribution.trxn_id}
Please review your event_online_receipt message template and remove references to the token {$individual} as it has been replaced by {see default template for how to show this}
Please review your event_online_receipt message template and remove references to the token {$amount} as it has been replaced by {see default template for how to show this}
Please review your event_online_receipt message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your event_online_receipt message template and remove references to the token {$register_date} as it has been replaced by {participant.register_date}
Please review your event_online_receipt message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}
Please review your event_online_receipt message template and remove references to the token {$paidBy} as it has been replaced by {contribution.payment_instrument_id:label}
Please review your participant_transferred message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your participant_expired message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your participant_confirm message template and remove references to the token {$participant.role} as it has been replaced by {participant.role_id:label}
Please review your payment_or_refund_notification message template and remove references to the token {$location} as it has been replaced by {event.location}
Please review your payment_or_refund_notification message template and remove references to the token {$event.participant_role} as it has been replaced by {participant.role_id:label}


## Updates 2025-07-01

    civicrm/civicrm-core          5.82.1    ~ 6.3.1  Open source constituent rel...
    civicrm/civicrm-drupal-8      5.82.1    ~ 6.3.1  Open source constituent rel...
    civicrm/civicrm-packages      5.82.1    ~ 6.3.1  Legacy third party dependen...
    composer/installers           1.12.0    ~ 2.3.0  A multi-framework Composer ...
    drupal/admin_toolbar          3.6.0     ! 3.6.1  Provides a drop-down menu i...
    drupal/core-composer-scaffold 11.1.7    ! 11.2.2 A flexible Composer project...
    drupal/core-project-message   11.1.7    ! 11.2.2 Adds a message after Compos...
    drupal/core-recommended       11.1.7    ! 11.2.2 Core and its dependencies w...
    drupal/leaflet                10.2.46   ! 10.3.4 Integration with the Leafle...
    drupal/linked_field           1.6.0-rc1 ! 1.7.0  Adds the functionality to l...
    drupal/lp_fontawesome         5.15005.0 ~ 6.7.20 Defines fontawesome as libr...
    drupal/media_bulk_upload      3.0.3     ! 3.0.4  Allows uploading files in b...
    drupal/metatag                2.1.0     ! 2.1.1  Manage meta tags for all en...
    drupal/module_filter          5.0.3     ! 5.0.4  Filter the modules list.
    drupal/nagios                 1.24.0    ! 1.25.0 Exposes a page that Nagios ...
    league/commonmark             1.6.7     ~ 2.7.0  Highly-extensible PHP Markd...
## Updates 2025-05-22

    civicrm/civicrm-core     5.82.1 ~ 6.2.0 Open source constituent relationship manage...
    civicrm/civicrm-drupal-8 5.82.1 ~ 6.2.0 Open source constituent relationship manage...
    civicrm/civicrm-packages 5.82.1 ~ 6.2.0 Legacy third party dependencies for CiviCRM
    composer/installers      1.12.0 ~ 2.3.0 A multi-framework Composer library installer
    drupal/admin_toolbar     3.5.3  ! 3.6.0 Provides a drop-down menu interface to the ...
    league/commonmark        1.6.7  ~ 2.7.0 Highly-extensible PHP Markdown parser which...
## Updates 2025-05-15

    civicrm/civicrm-core          5.82.1 ~ 6.2.0  Open source constituent relationship manag...
    civicrm/civicrm-drupal-8      5.82.1 ~ 6.2.0  Open source constituent relationship manag...
    civicrm/civicrm-packages      5.82.1 ~ 6.2.0  Legacy third party dependencies for CiviCRM
    composer/installers           1.12.0 ~ 2.3.0  A multi-framework Composer library installer
    drupal/core-composer-scaffold 11.1.6 ! 11.1.7 A flexible Composer project scaffold builder.
    drupal/core-project-message   11.1.6 ! 11.1.7 Adds a message after Composer installation.
    drupal/core-recommended       11.1.6 ! 11.1.7 Core and its dependencies with known-compa...
    league/commonmark             1.6.7  ~ 2.7.0  Highly-extensible PHP Markdown parser whic...



## Updates 2025-05-07

system module
Rebuild the container to fix HTML in RSS feeds.
tfa module
Empty update to rebuild core routes.

    civicrm/civicrm-core     5.81.1      ~ 6.1.2       Open source constituent relationship ...
    civicrm/civicrm-drupal-8 5.81.1      ~ 6.1.2       Open source constituent relationship ...
    civicrm/civicrm-packages 5.81.1      ~ 6.1.2       Legacy third party dependencies for C...
    composer/installers      1.12.0      ~ 2.3.0       A multi-framework Composer library in...
    drupal/admin_toolbar     3.5.1       ! 3.5.3       Provides a drop-down menu interface t...
    drupal/ds                3.28.0      ! 3.30.0      Extend the display options for every ...
    drupal/honeypot          2.2.0       ! 2.2.2       Mitigates spam form submissions using...
    drupal/leaflet           10.2.36     ! 10.2.46     Integration with the Leaflet map scri...
    drupal/paragraph_blocks  4.1.4       ! 4.1.5       Drupal Paragraph Blocks module
    drupal/paragraphs        1.18.0      ! 1.19.0      Enables the creation of Paragraphs en...
    drupal/recaptcha_v3      2.0.3       ! 2.0.4       The reCaptcha V3 module provides inte...
    drupal/tfa               1.9.0       ! 1.10.0      Pluggable provider of two factor auth...
    drupal/webform           6.3.0-beta1 ! 6.3.0-beta2 Enables the creation of webforms and ...
    drupal/xmlsitemap        2.0.0-beta1 ! 2.0.0       Creates XML Sitemaps for the site
    drush/drush              13.3.3      ! 13.6.0      Drush is a command line shell and scr...
    league/commonmark        1.6.7       ~ 2.7.0       Highly-extensible PHP Markdown parser...

## Updates 2025-05-06

    civicrm/civicrm-core     5.81.1      ! 5.82.1      Open source constituent relationship ...
    civicrm/civicrm-drupal-8 5.81.1      ! 5.82.1      Open source constituent relationship ...
    civicrm/civicrm-packages 5.81.1      ! 5.82.1      Legacy third party dependencies for C...
    drupal/admin_toolbar     3.5.1       ! 3.5.3       Provides a drop-down menu interface t...
    drupal/ds                3.28.0      ! 3.30.0      Extend the display options for every ...
    drupal/honeypot          2.2.0       ! 2.2.2       Mitigates spam form submissions using...
    drupal/leaflet           10.2.36     ! 10.2.46     Integration with the Leaflet map scri...
    drupal/paragraph_blocks  4.1.4       ! 4.1.5       Drupal Paragraph Blocks module
    drupal/paragraphs        1.18.0      ! 1.19.0      Enables the creation of Paragraphs en...
    drupal/recaptcha_v3      2.0.3       ! 2.0.4       The reCaptcha V3 module provides inte...
    drupal/tfa               1.9.0       ! 1.10.0      Pluggable provider of two factor auth...
    drupal/webform           6.3.0-beta1 ! 6.3.0-beta2 Enables the creation of webforms and ...
    drupal/xmlsitemap        2.0.0-beta1 ! 2.0.0       Creates XML Sitemaps for the site
    drush/drush              13.3.3      ! 13.6.0      Drush is a command line shell and scr...
## Updates 2025-05-06

    civicrm/civicrm-core          5.81.1      ! 5.82.1      Open source constituent relation...
    civicrm/civicrm-drupal-8      5.81.1      ! 5.82.1      Open source constituent relation...
    civicrm/civicrm-packages      5.81.1      ! 5.82.1      Legacy third party dependencies ...
    drupal/admin_toolbar          3.5.1       ! 3.5.3       Provides a drop-down menu interf...
    drupal/core-composer-scaffold 11.1.1      ! 11.1.6      A flexible Composer project scaf...
    drupal/core-project-message   11.1.1      ! 11.1.6      Adds a message after Composer in...
    drupal/core-recommended       11.1.1      ! 11.1.6      Core and its dependencies with k...
    drupal/ds                     3.28.0      ! 3.30.0      Extend the display options for e...
    drupal/honeypot               2.2.0       ! 2.2.2       Mitigates spam form submissions ...
    drupal/leaflet                10.2.36     ! 10.2.46     Integration with the Leaflet map...
    drupal/paragraph_blocks       4.1.4       ! 4.1.5       Drupal Paragraph Blocks module
    drupal/paragraphs             1.18.0      ! 1.19.0      Enables the creation of Paragrap...
    drupal/recaptcha_v3           2.0.3       ! 2.0.4       The reCaptcha V3 module provides...
    drupal/tfa                    1.9.0       ! 1.10.0      Pluggable provider of two factor...
    drupal/webform                6.3.0-beta1 ! 6.3.0-beta2 Enables the creation of webforms...
    drupal/xmlsitemap             2.0.0-beta1 ! 2.0.0       Creates XML Sitemaps for the site
    drush/drush                   13.3.3      ! 13.6.0      Drush is a command line shell an...
## Mapping 2025-05-06

How do I add to
General Outline of Circuit Walk of Newnes Plateau – 4 to 6 days – | Gardens of Stone
Experience level – med. high – three 1.5km thick scrub sections, and tricky route finding offtrack and where tracks are overgrown. Be sure you start walking offtrack sections from the right point. Ability to detailed interpret trip notes and follow GPS route essential. Route files: Newnes_Plateau_Circuit.kml or Newnes_Plateau_Circuit.gpx
www.gardensofstone.org.au
Newnes_Plateau_Circuit.kml
Newnes_Plateau_Circuit.gpx
files.

No facility to do that on a basic page or article page.

No idea how to change permissions to upload attached files.

Keith
...

## Webform update 2025-02-06

composer require 'drupal/webform:^6.3@beta'

## Updates 2025-02-05

composer require 'drupal/fontawesome:^3.0'
composer require 'drupal/fontawesome_menu_icons:^3.0'
composer require 'drupal/google_tag:^2.0'

Replaced by:
Google Tag
Google suggests users install the new 2.x version of Google Tag for future Google Analytics support.


## Updates 2025-02-05

    civicrm/civicrm-core     5.81.0            ! 5.81.1            Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.81.0            ! 5.81.1            Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.81.0            ! 5.81.1            Legacy third party dependencies for CiviCRM
    drupal/layout_paragraphs dev-2.1.x 5973bfc ! dev-2.1.x c97badf Layout Paragraphs
    drupal/leaflet           10.2.35           ! 10.2.36           Integration with the Leaflet map scripting library.
    drupal/leaflet_more_maps 2.2.2             ! 2.2.3             Adds a swag of map styles to Leaflet, e.g Thunderforest, Esri, Stamen, Google.

## Mail in spam

Delivered-To: jrobens@interlated.com.au
Received: by 2002:a05:6130:2a9:b0:856:ed2b:cc6f with SMTP id q41csp7097953uac;
Mon, 20 Jan 2025 16:00:18 -0800 (PST)
X-Google-Smtp-Source: AGHT+IGqKpfp30ery1XH+/QgqVwRAaIAt/h/WMmIRe/+1rZqTv+y8B9qjThlpSr3ZSKcqJRG5QXM
X-Received: by 2002:a17:902:ecc5:b0:215:9d58:6f35 with SMTP id d9443c01a7336-21c351bd5c7mr267794535ad.1.1737417617335;
Mon, 20 Jan 2025 16:00:17 -0800 (PST)
ARC-Seal: i=1; a=rsa-sha256; t=1737417617; cv=none;
d=google.com; s=arc-20240605;
b=Foi5qhKHDA5qzhfE94EnsNpOn5/Idbrv24uNEoHuSINUDptWeMbEl057ZGgPkLtIFe
hlxxCiJ54D2nft31c+yVlE3Lc2o+8tmpOK6ZRuQx9VWhnW3eZg1+f4+w70R3+R/h/7lQ
Y9n1iHmvQavXaNxAaGCCUDP2c5XJiysuxeGVUGq3TbRN7h3eY3HdSgwXXoy4Za5Zi7a8
OaxrhNxts1ssZMmF41s+yyViooXE4I/YlWh1wqSuigFVE5Y/gGgfss1KHnhPIA2b8oaA
y7PfYIC05lP+XryxmR5W3LGx+fpX0r8jsNBPVqZh2m0z9aB8C6efj196bCuyFLljrNYx
S07A==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20240605;
h=message-id:date:from:job_id:precedence:list-unsubscribe
:list-unsubscribe-post:mime-version:subject:to;
bh=ZznCT2Noqp3zTf4v/YUTbyPRsrIv6mGzD/cjZgVrqy4=;
fh=mDG0/3imwsPr2eZT1tUSnMkcZodkasiTQFTOkjeNk6E=;
b=j6NnpR1i1hcFGK080zxo81NshIECFcsIMRvErmPlhoEy0PsaDfs6mQj6v798Kk5p9i
BJqBxTeMABXNcGLNI/648vmZacNtIZPzmj8WCjQsY6uu0EWIGFjBDWMYRjfG6ToUTUkJ
bpQJ2ZEcI3yrWBsF/31zpH2yVjdJV9ALKRxYRsxBtwCNU8JCRATC1w5Y2fH00XrzjkAG
aXm6d5pZoMRckC1V3k9UbKQmiSpqzSksfrV+vkAMKNhR4qkn1mg2fHV6JfFviEuxQ9FK
C0a8hjuftzgoHWxo7KefImN1q5r2dteRImTTb3JPn9xOA0h43NU8qbHGHHGmshInZgUb
GXEg==;
dara=google.com
ARC-Authentication-Results: i=1; mx.google.com;
spf=pass (google.com: domain of return+b.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au designates 43.239.97.47 as permitted sender) smtp.mailfrom=return+b.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au;
dmarc=fail (p=NONE sp=NONE dis=NONE) header.from=colongwilderness.org.au
Return-Path: <return+b.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au>
Received: from ganon.interlated.com.au (ganon.interlated.com.au. [43.239.97.47])
by mx.google.com with ESMTPS id 41be03b00d2f7-a9bdfb3ad9esi11701400a12.677.2025.01.20.16.00.16
for <jrobens@interlated.com.au>
(version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);
Mon, 20 Jan 2025 16:00:17 -0800 (PST)
Received-SPF: pass (google.com: domain of return+b.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au designates 43.239.97.47 as permitted sender) client-ip=43.239.97.47;
Authentication-Results: mx.google.com;
spf=pass (google.com: domain of return+b.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au designates 43.239.97.47 as permitted sender) smtp.mailfrom=return+b.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au;
dmarc=fail (p=NONE sp=NONE dis=NONE) header.from=colongwilderness.org.au
Received: by ganon.interlated.com.au (Postfix, from userid 33) id 8C5A5B175; Tue, 21 Jan 2025 00:00:14 +0000 (UTC)
To: <jrobens@interlated.com.au>
Subject: Gardens of Stone Conservation Area - update January 2025
MIME-Version: 1.0
List-Unsubscribe-Post: List-Unsubscribe=One-Click
List-Unsubscribe: <mailto:return+u.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au>, <https://www.gardensofstone.org.au/civicrm/mailing/unsubscribe?reset=1&jid=228&qid=360919&h=vcntjvbgqiucwmfg>
X-CiviMail-Mosaico: Yes
Precedence: bulk
job_id: 228
From: Protect Gardens of Stone <keith@colongwilderness.org.au>
X-CiviMail-Bounce: return+b.228.360919.vcntjvbgqiucwmfg@gardensofstone.org.au
Content-Type: multipart/alternative; boundary="=_d43bef06f056ab54105c0806027bac87"
Date: Tue, 21 Jan 2025 11:00:14 +1100
Message-Id: <20250121000014.8C5A5B175@ganon.interlated.com.au>

--=_d43bef06f056ab54105c0806027bac87
Content-Transfer-Encoding: 8bit
Content-Type: text/plain; charset=utf-8

[Unsubscribe](https://www.gardensofstone.org.au/civicrm/mailing/unsubscribe?reset=1&jid=228&qid=360919&h=vcntjvbgqiucwmfg)

[View in your browser](https://www.gardensofstone.org.au/civicrm/mailing/view?reset=1&id=48&cid=2&cs=c79e221877e69a3cc6761a02639b3fc7_1737417607_168)

Dear

## Cross Fade

Goes into the body of the home page node.

## Updates 2025-01-21
composer require drupal/classy_paragraphs - version 2.0


727825   19/Jan 20:54   php    Error      RuntimeException: Callable "Drupal\layout_paragraphs\Access\LayoutParagraphsBuilderAccess::access" requires a value for the "$paragraph_type" argument. in
Drupal\Component\Utility\Argument

727823   19/Jan 20:54   php    Error      RuntimeException: Callable "Drupal\layout_paragraphs\Access\LayoutParagraphsBuilderAccess::access" requires a value for the "$component_uuid" argument. in
Drupal\Component\Utility\Argument

LayoutParagraphsBuilderController.php 116

> composer require 'drupal/layout_paragraphs:2.1.x-dev@dev'

****

[error]  ParseError: syntax error, unexpected identifier "composer", expecting "function" in {closure:Composer\Autoload\ClassLoader::initializeIncludeClosure():575}() (line 72 of /Users/jrobens/Sites/gardensofstone2/web/modules/patched/photos/src/Controller/PhotosImageViewController.php) #0 /Users/jrobens/Sites/gardensofstone2/vendor/composer/ClassLoader.php(427): {closure:Composer\Autoload\ClassLoader::initializeIncludeClosure():575}('/Users/jrobens/...')
#1 [internal function]: Composer\Autoload\ClassLoader->loadClass('Drupal\\photos\\C...')
#2 /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Entity/EntityResolverManager.php(135): ReflectionMethod->__construct('\\Drupal\\photos\\...', 'view')
#3 /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Entity/EntityResolverManager.php(221): Drupal\Core\Entity\EntityResolverManager->setParametersFromReflection(Array, Object(Symfony\Component\Routing\Route))
#4 /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/EventSubscriber/EntityRouteAlterSubscriber.php(48): Drupal\Core\Entity\EntityResolverManager->setRouteOptions(Object(Symfony\Component\Routing\Route))
#5 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/event-dispatcher/EventDispatcher.php(246): Drupal\Core\EventSubscriber\EntityRouteAlterSubscriber->onRoutingRouteAlterSetType(Object(Drupal\Core\Routing\RouteBuildEvent), 'routing.route_a...', Object(Symfony\Component\EventDispatcher\EventDispatcher))
#6 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/event-dispatcher/EventDispatcher.php(206): Symfony\Component\EventDispatcher\EventDispatcher::{closure:Symfony\Component\EventDispatcher\EventDispatcher::optimizeListeners():241}(Object(Drupal\Core\Routing\RouteBuildEvent), 'routing.route_a...', Object(Symfony\Component\EventDispatcher\EventDispatcher))
#7 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/event-dispatcher/EventDispatcher.php(56): Symfony\Component\EventDispatcher\EventDispatcher->callListeners(Array, 'routing.route_a...', Object(Drupal\Core\Routing\RouteBuildEvent))
#8 /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Routing/RouteBuilder.php(189): Symfony\Component\EventDispatcher\EventDispatcher->dispatch(Object(Drupal\Core\Routing\RouteBuildEvent), 'routing.route_a...')
#9 /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/ProxyClass/Routing/RouteBuilder.php(83): Drupal\Core\Routing\RouteBuilder->rebuild()
#10 /Users/jrobens/Sites/gardensofstone2/web/core/includes/common.inc(454): Drupal\Core\ProxyClass\Routing\RouteBuilder->rebuild()
#11 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Commands/core/UpdateDBCommands.php(96): drupal_flush_all_caches()
#12 [internal function]: Drush\Commands\core\UpdateDBCommands->updatedb(Array)
#13 /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/annotated-command/src/CommandProcessor.php(276): call_user_func_array(Array, Array)
#14 /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/annotated-command/src/CommandProcessor.php(212): Consolidation\AnnotatedCommand\CommandProcessor->runCommandCallback(Array, Object(Consolidation\AnnotatedCommand\CommandData))
#15 /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/annotated-command/src/CommandProcessor.php(175): Consolidation\AnnotatedCommand\CommandProcessor->validateRunAndAlter(Array, Array, Object(Consolidation\AnnotatedCommand\CommandData))
#16 /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/annotated-command/src/AnnotatedCommand.php(387): Consolidation\AnnotatedCommand\CommandProcessor->process(Object(Symfony\Component\Console\Output\ConsoleOutput), Array, Array, Object(Consolidation\AnnotatedCommand\CommandData))
#17 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/console/Command/Command.php(279): Consolidation\AnnotatedCommand\AnnotatedCommand->execute(Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
#18 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/console/Application.php(1094): Symfony\Component\Console\Command\Command->run(Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
#19 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/console/Application.php(342): Symfony\Component\Console\Application->doRunCommand(Object(Consolidation\AnnotatedCommand\AnnotatedCommand), Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
#20 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/console/Application.php(193): Symfony\Component\Console\Application->doRun(Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
#21 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Runtime/Runtime.php(110): Symfony\Component\Console\Application->run(Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
#22 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Runtime/Runtime.php(40): Drush\Runtime\Runtime->doRun(Array, Object(Symfony\Component\Console\Output\ConsoleOutput))
#23 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/drush.php(140): Drush\Runtime\Runtime->run(Array)
#24 {main}.


## Updates 2025-01-19

    drupal/ds      3.25.0  ! 3.28.0  Extend the display options for every entity type.
    drupal/leaflet 10.2.33 ! 10.2.35 Integration with the Leaflet map scripting library.
    drupal/nagios  1.22.0  ! 1.24.0  Exposes a page that Nagios or Icinga can monitor

## Updates 2025-01-11

Mosaico: Version 3.3.1697392242 is installed. Upgrade to version 3.6.

## Drupal 11

Mosaico requires a graphics driver such as PHP-ImageMagick or PHP-GD. For more information, see Mosaico Settings.
Error: Failed to locate Mosaico graphics driver. Either "mosaico_graphics" is invalid or the autodetection failed.

[notice] Module admin_toolbar_links_access_filter has an entry in the system.schema key/value storage, but is not installed. <a href="https://www.drupal.org/node/3137656">More information about this error</a>.

Module       Update ID       Type            Description
 ------------ --------------- --------------- --------------------------------
system       11001           hook_update_n   11001 - Update length of
menu_tree fields url and
route_param_key from 255 to
2048.
system       11100           hook_update_n   11100 - Invalidate container
because the module handler has
changed.
system       11102           hook_update_n   11102 - Equivalent update to
10400.
block        make_weight_i   post-update     Ensures that all block weights
nteger                          are integers.
media        media_author_   post-update     Empty update function to clear
views_filter_                   the Views data cache.
update
path_alias   update_path_a   post-update     Update the path_alias_revision
lias_revision                   indices.
_indexes
search       block_with_em   post-update     Updates Search Blocks' without
pty_page_id                     an explicit `page_id` from ''
to NULL.

## Drupal 10
"version": "9.5.11",

Module admin_toolbar_links_access_filter has an entry in the system.schema key/value storage, b



Update aborted by: system_post_update_add_description_to_entity_view_mode

sh ./src/dr.sh pm:uninstall tour

[error]  The installed version of the /Honeypot/ module is too old to update. Update
to an intermediate version first (last removed version: 8104, installed
version: 8102).


┌ Requirements check reports errors. Do you wish to continue? ─┐
│ Yes                                                          │
└──────────────────────────────────────────────────────────────┘

 ------------------ ---------------- --------------- --------------------------
Module             Update ID        Type            Description
 ------------------ ---------------- --------------- --------------------------
system             10100            hook_update_n   10100 - Remove the year
2038 date limitation.
system             10101            hook_update_n   10101 - Change the
{batch} table [bid]
field to serial.
system             10201            hook_update_n   10201 - Clear left over
entries in the revision
data table.
system             10400            hook_update_n   10400 - Equivalent
update to 11102.
block_content      10100            hook_update_n   10100 - Update entity
definition to handle
revision routes.
block_content      10200            hook_update_n   10200 - Remove the
unique values constraint
from block content info
fields.
block_content      10300            hook_update_n   10300 - Apply index to
reusable column.
comment            10100            hook_update_n   10100 - Remove the year
2038 date limitation.
dblog              10100            hook_update_n   10100 - Remove the year
2038 date limitation.
dblog              10101            hook_update_n   10101 - Converts the
'wid' of the 'watchdog'
table to a big integer.
help               10200            hook_update_n   10200 - Install search
index table for help
topics.
history            10100            hook_update_n   10100 - Remove the year
2038 date limitation.
taxonomy           10100            hook_update_n   10100 - Update entity
definition to handle
revision routes.
user               10000            hook_update_n   10000 - Remove
non-existent permissions
created by migrations.
webform            8639             hook_update_n   8639 - Deprecate Webform
Bootstrap 3.x support.
big_pipe           html5_placehol   post-update     Clear the render cache.
ders
block_content      block_library_   post-update     Update block_content
view_permissio                   'block library' view
n                                permission.
block_content      move_custom_bl   post-update     Moves the custom block
ock_library                      library to Content.
block_content      revision_type    post-update     Update configuration for
revision type.
block_content      sort_permissio   post-update     Update permissions for
ns                               users with "administer
blocks" permission.
ckeditor5          code_block       post-update     Updates Text Editors
using CKEditor 5 Code
Block.
ckeditor5          list_multibloc   post-update     Updates Text Editors
k                                using CKEditor 5.
ckeditor5          list_start_rev   post-update     Updates Text Editors
ersed                            using CKEditor 5 to
native List "start"
functionality.
ckeditor5          plugins_settin   post-update     Updates Text Editors
gs_export_orde                   using CKEditor 5 to sort
r                                plugin settings by
plugin key.
contact            set_empty_defa   post-update     Converts empty
ult_form_to_nu                   `default_form` in
ll                               settings to NULL.
editor             image_lazy_loa   post-update     Enable
d                                filter_image_lazy_load
if editor_file_reference
is enabled.
editor             sanitize_image   post-update     Clean up image upload
_upload_settin                   settings.
gs
file               add_default_fi   post-update     Add default filename
lename_sanitiz                   sanitization
ation_configur                   configuration.
ation
file               add_permission   post-update     Grant all non-anonymous
s_to_roles                       roles the 'delete own
files' permission.
filter             consolidate_fi   post-update     Change filter_settings
lter_config                      to type mapping.
filter             sort_filters     post-update     Sorts filter format
filter configuration.
help               add_permission   post-update     Grant all admin roles
s_to_roles                       the 'access help pages'
permission.
help               help_topics_se   post-update     Install or update config
arch                             for help topics if the
search module installed.
help               help_topics_un   post-update     Uninstall the
install                          help_topics module if
installed.
layout_builder     enable_expose_   post-update     Enable the expose all
field_block_fe                   fields feature flag
ature_flag                       module.
layout_builder     timestamp_form   post-update     Update timestamp
atter                            formatter settings for
Layout Builder fields.
media              oembed_loading   post-update     Add the oEmbed loading
_attribute                       attribute setting to
field formatter
instances.
media              remove_mapping   post-update     Make sure no Media types
s_targeting_so                   are using the source
urce_field                       field in the meta
mappings.
media              set_blank_ifra   post-update     Updates
me_domain_to_n                   media.settings:iframe_do
ull                              main config if it's
still at the default.
node               set_node_type_   post-update     Converts empty
description_an                   `description` and `help`
d_help_to_null                   in content types to
NULL.
path_alias         drop_path_alia   post-update     Remove the
s_status_index                   path_alias__status
index.
responsive_image   image_loading_   post-update     Add the image loading
attribute                        settings to responsive
image field formatter
instances.
responsive_image   order_multipli   post-update     Re-order mappings by
er_numerically                   breakpoint ID and
descending numeric
multiplier order.
system             add_descriptio   post-update     Update description for
n_to_entity_fo                   form modes.
rm_mode
system             add_descriptio   post-update     Update description for
n_to_entity_vi                   view modes.
ew_mode
system             add_langcode_t   post-update     Adds a langcode to all
o_all_translat                   simple config which
able_config                      needs it.
system             amend_config_s   post-update     Fix path in README.txt
ync_readme_url                   in
CONFIG_SYNC_DIRECTORY.
system             enable_passwor   post-update     Enable the password
d_compatibilit                   compatibility module.
y
system             linkset_settin   post-update     Add new menu linkset
gs                               endpoint setting.
system             mail_notificat   post-update     Adds default value for
ion_setting                      the mail_notification
config parameter.
system             mailer_dsn_set   post-update     Add new default mail
tings                            transport dsn.
system             mailer_structu   post-update     Add new default mail
red_dsn_settin                   transport dsn.
gs
system             move_developme   post-update     Move development
nt_settings_to                   settings from state to
_keyvalue                        raw key-value storage.
system             remove_asset_e   post-update     Remove redundant asset
ntries                           state and config.
system             remove_asset_q   post-update     Remove redundant asset
uery_string                      query string state.
system             set_blank_log_   post-update     Updates
url_to_null                      system.theme.global:logo
.url config if it's
still at the default.
system             set_cron_loggi   post-update     Fix system.cron:logging
ng_setting_to_                   values to boolean.
boolean
system             timestamp_form   post-update     Update timestamp
atter                            formatter settings for
entity view displays.
taxonomy           set_new_revisi   post-update     Re-save Taxonomy
on                               configurations with
new_revision config.
taxonomy           set_vocabulary   post-update     Converts empty
_description_t                   `description` in
o_null                           vocabularies to NULL.
text               allowed_format   post-update     Add allowed_formats
s                                setting to existing text
fields.
views              add_missing_la   post-update     Add labels to views
bels                             which don't have one.
views              boolean_custom   post-update     Update Views config
_titles                          schema to make boolean
custom titles
translatable.
views              fix_revision_i   post-update     Fix '-revision_id'
d_part                           replacement token
syntax.
views              oembed_eager_l   post-update     Add eager load option to
oad                              all oembed type field
configurations.
views              pager_heading    post-update     Adds a default pager
heading.
views              remove_default   post-update     Remove
_argument_skip                   default_argument_skip_ur
_url                             l setting.
views              remove_skip_ca   post-update     Remove the skip_cache
che_setting                      settings.
views              rendered_entit   post-update     Removes entity display
y_field_cache_                   cache metadata from
metadata                         views with rendered
entity fields.
views              responsive_ima   post-update     Add lazy load options to
ge_lazy_load                     all responsive image
type field
configurations.
views              taxonomy_filte   post-update     Removes User context
r_user_context                   from views with taxonomy
filters.
views              timestamp_form   post-update     Update timestamp
atter                            formatter settings for
views.

## CiviCRM database upgrade 20250108

2025-01-08 17:06:11+1100  [info] Running task: Cleanup old files

2025-01-08 17:06:12+1100  [info] Running task: Cleanup old upgrade snapshots

2025-01-08 17:06:14+1100  [info] Running task: Checking extensions

2025-01-08 17:06:15+1100  [info] Running task: Begin Upgrade to 5.67.alpha1

2025-01-08 17:06:17+1100  [info] Running task: Upgrade DB to 5.67.alpha1

2025-01-08 17:06:18+1100  [info] Running task: Upgrade DB to 5.67.alpha1: SQL

2025-01-08 17:06:19+1100  [info] Running task: Make Note.privacy required

2025-01-08 17:06:21+1100  [info] Running task: Make EntityFile.entity_table required

2025-01-08 17:06:22+1100  [info] Running task: Add "civicrm_note" to "note_used_for" option group

2025-01-08 17:06:24+1100  [info] Running task: Add cache_fill_took column to Group table

2025-01-08 17:06:25+1100  [info] Running task: Update civicrm_mailing_event_queue to permit deleting records from civicrm_mailing_job

2025-01-08 17:06:44+1100  [info] Running task: Update CiviMail menus labels

2025-01-08 17:06:45+1100  [info] Running task: Backfill civicrm_mailing_event_queue (1 => 343862)

2025-01-08 17:07:05+1100  [info] Running task: Finish Upgrade DB to 5.67.alpha1

2025-01-08 17:07:07+1100  [info] Running task: Begin Upgrade to 5.67.beta2

2025-01-08 17:07:09+1100  [info] Running task: Upgrade DB to 5.67.beta2

2025-01-08 17:08:44+1100  [info] Running task: Make ActionSchedule.name required

2025-01-08 17:08:45+1100  [info] Running task: Make Discount.entity_table required

2025-01-08 17:08:46+1100  [info] Running task: Finish Upgrade DB to 5.67.beta2

2025-01-08 17:08:48+1100  [info] Running task: Begin Upgrade to 5.68.alpha1

2025-01-08 17:08:49+1100  [info] Running task: Upgrade DB to 5.68.alpha1

2025-01-08 17:08:51+1100  [info] Running task: Add Tag.label field

2025-01-08 17:08:52+1100  [info] Running task: Update Tag.name field

2025-01-08 17:08:53+1100  [info] Running task: Update Tag.created_date field

2025-01-08 17:08:55+1100  [info] Running task: Upgrade DB to 5.68.alpha1: SQL

2025-01-08 17:08:56+1100  [info] Running task: Update civicrm_managed.entity_id

2025-01-08 17:08:57+1100  [info] Running task: Update civicrm_managed.module

2025-01-08 17:08:59+1100  [info] Running task: Update civicrm_managed.name

2025-01-08 17:09:00+1100  [info] Running task: Update civicrm_managed.cleanup

2025-01-08 17:09:02+1100  [info] Running task: Update civicrm_acl.is_active
2025-01-08 17:09:03+1100  [info] Running task: Update civicrm_dashboard_contact.is_active

2025-01-08 17:09:04+1100  [info] Running task: Finish Upgrade DB to 5.68.alpha1

2025-01-08 17:09:06+1100  [info] Running task: Begin Upgrade to 5.69.alpha1

2025-01-08 17:09:07+1100  [info] Running task: Upgrade DB to 5.69.alpha1

2025-01-08 17:09:09+1100  [info] Running task: Upgrade DB to 5.69.alpha1: SQL

2025-01-08 17:09:10+1100  [info] Running task: Add is_show_calendar_links column to Event table

2025-01-08 17:09:11+1100  [info] Running task: fix crmDate for installs that existed pre-5.43 - start date

2025-01-08 17:09:13+1100  [info] Running task: fix crmDate for installs that existed pre-5.43 - end date

2025-01-08 17:09:14+1100  [info] Running task: Finish Upgrade DB to 5.69.alpha1

2025-01-08 17:09:16+1100  [info] Running task: Begin Upgrade to 5.70.alpha1

2025-01-08 17:09:17+1100  [info] Running task: Upgrade DB to 5.70.alpha1

2025-01-08 17:09:18+1100  [info] Running task: Upgrade DB to 5.70.alpha1: SQL

2025-01-08 17:09:20+1100  [info] Running task: Finish Upgrade DB to 5.70.alpha1

2025-01-08 17:09:21+1100  [info] Running task: Begin Upgrade to 5.70.beta1

2025-01-08 17:09:23+1100  [info] Running task: Upgrade DB to 5.70.beta1

2025-01-08 17:09:24+1100  [info] Running task: Replace incorrect pay later token

2025-01-08 17:09:25+1100  [info] Running task: Finish Upgrade DB to 5.70.beta1

2025-01-08 17:09:27+1100  [info] Running task: Begin Upgrade to 5.71.alpha1

2025-01-08 17:09:28+1100  [info] Running task: Upgrade DB to 5.71.alpha1

2025-01-08 17:09:29+1100  [info] Running task: Upgrade DB to 5.71.alpha1: SQL

2025-01-08 17:09:31+1100  [info] Running task: Add entity_delete column

2025-01-08 17:09:32+1100  [info] Running task: Make civicrm_uf_group.name required

2025-01-08 17:09:34+1100  [info] Running task: Make civicrm_uf_group.frontend_title required

2025-01-08 17:09:35+1100  [info] Running task: Finish Upgrade DB to 5.71.alpha1

2025-01-08 17:09:37+1100  [info] Running task: Begin Upgrade to 5.71.beta1

2025-01-08 17:09:38+1100  [info] Running task: Upgrade DB to 5.71.beta1

2025-01-08 17:09:39+1100  [info] Running task: Upgrade DB to 5.71.beta1: SQL

2025-01-08 17:09:41+1100  [info] Running task: Make civicrm_event.selfcancelxfer_time

2025-01-08 17:09:42+1100  [info] Running task: Finish Upgrade DB to 5.71.beta1

2025-01-08 17:09:44+1100  [info] Running task: Begin Upgrade to 5.72.alpha1

2025-01-08 17:09:45+1100  [info] Running task: Upgrade DB to 5.72.alpha1

2025-01-08 17:09:46+1100  [info] Running task: Upgrade DB to 5.72.alpha1: SQL

2025-01-08 17:09:48+1100  [info] Running task: Remove localized suffixes from civicrm_mailing_group.entity_table
2025-01-08 17:09:49+1100  [info] Running task: Replace displayName smarty token in UFNotify subject

2025-01-08 17:09:51+1100  [info] Running task: Replace displayName smarty token in UFNotify

2025-01-08 17:09:52+1100  [info] Running task: Replace currentDate smarty token in UFNotify

2025-01-08 17:09:54+1100  [info] Running task: Add last_run_end column to Job table

2025-01-08 17:09:55+1100  [info] Running task: Finish Upgrade DB to 5.72.alpha1

2025-01-08 17:09:56+1100  [info] Running task: Begin Upgrade to 5.73.alpha1

2025-01-08 17:09:58+1100  [info] Running task: Upgrade DB to 5.73.alpha1

2025-01-08 17:09:59+1100  [info] Running task: Upgrade DB to 5.73.alpha1: SQL

2025-01-08 17:10:01+1100  [info] Running task: Finish Upgrade DB to 5.73.alpha1

2025-01-08 17:10:02+1100  [info] Running task: Begin Upgrade to 5.74.alpha1

2025-01-08 17:10:04+1100  [info] Running task: Upgrade DB to 5.74.alpha1

2025-01-08 17:10:05+1100  [info] Running task: Upgrade DB to 5.74.alpha1: SQL

2025-01-08 17:10:06+1100  [info] Running task: Finish Upgrade DB to 5.74.alpha1

2025-01-08 17:10:08+1100  [info] Running task: Begin Upgrade to 5.74.beta1

2025-01-08 17:10:09+1100  [info] Running task: Upgrade DB to 5.74.beta1

2025-01-08 17:10:11+1100  [info] Running task: Upgrade DB to 5.74.beta1: SQL

2025-01-08 17:10:12+1100  [info] Running task: Finish Upgrade DB to 5.74.beta1

2025-01-08 17:10:13+1100  [info] Running task: Begin Upgrade to 5.75.alpha1

2025-01-08 17:10:15+1100  [info] Running task: Upgrade DB to 5.75.alpha1

2025-01-08 17:10:16+1100  [info] Running task: Upgrade DB to 5.75.alpha1: SQL

2025-01-08 17:10:17+1100  [info] Running task: Replace mem_join_date smarty token in offline membership template

2025-01-08 17:10:19+1100  [info] Running task: Replace mem_start_date smarty token in offline membership template

2025-01-08 17:10:20+1100  [info] Running task: Replace mem_end_date smarty token in offline membership template

2025-01-08 17:10:22+1100  [info] Running task: Replace membership_name smarty token in offline membership template

2025-01-08 17:10:23+1100  [info] Running task: Replace mem_status smarty token in offline membership template

2025-01-08 17:10:24+1100  [info] Running task: Replace contributionStatus smarty token in offline membership template

2025-01-08 17:10:26+1100  [info] Running task: Replace contributionStatusID smarty token in offline membership template

2025-01-08 17:10:27+1100  [info] Running task: Replace receive_date smarty token in offline membership template

2025-01-08 17:10:28+1100  [info] Running task: Replace formValues.paidBy smarty token in offline membership template

2025-01-08 17:10:30+1100  [info] Running task: Replace formValues.paidBy smarty token in offline membership template

2025-01-08 17:10:31+1100  [info] Running task: Replace membership_name smarty token in online membership template

2025-01-08 17:10:32+1100  [info] Running task: Replace mem_status smarty token in online membership template

2025-01-08 17:10:34+1100  [info] Running task: Replace formValues.paidBy smarty token in online membership template

2025-01-08 17:10:35+1100  [info] Running task: Replace receive_date smarty token in online membership template

2025-01-08 17:10:36+1100  [info] Running task: Disable financial ACL extension if unused

2025-01-08 17:10:38+1100  [info] Running task: Install tellafriend extension

2025-01-08 17:10:39+1100  [info] Running task: Finish Upgrade DB to 5.75.alpha1

2025-01-08 17:10:40+1100  [info] Running task: Begin Upgrade to 5.76.alpha1

2025-01-08 17:10:42+1100  [info] Running task: Upgrade DB to 5.76.alpha1

2025-01-08 17:10:43+1100  [info] Running task: Upgrade DB to 5.76.alpha1: SQL

2025-01-08 17:10:45+1100  [info] Running task: Add start_date to civicrm_mailing table

2025-01-08 17:10:46+1100  [info] Running task: Add end_date to civicrm_mailing table

2025-01-08 17:10:47+1100  [info] Running task: Add status to civicrm_mailing table

2025-01-08 17:10:49+1100  [info] Running task: Alter translation to make string non-required

2025-01-08 17:10:50+1100  [info] Running task: Install SiteToken entity

2025-01-08 17:10:52+1100  [info] Running task: Create index civicrm_site_token.UI_name_domain_id

2025-01-08 17:10:53+1100  [info] Running task: Create "message header" token

2025-01-08 17:10:54+1100  [info] Running task: Migrate event cart ID

2025-01-08 17:10:56+1100  [info] Running task: Update civicrm_mailing to permit deleting records from civicrm_mailing_job

2025-01-08 17:10:57+1100  [info] Running task: Backfill civicrm_mailing start_date, end_date, status (1 => 40)

2025-01-08 17:10:59+1100  [info] Running task: Finish Upgrade DB to 5.76.alpha1

2025-01-08 17:11:00+1100  [info] Running task: Begin Upgrade to 5.76.beta1

2025-01-08 17:11:01+1100  [info] Running task: Upgrade DB to 5.76.beta1

2025-01-08 17:11:03+1100  [info] Running task: Fix default for status in civicrm_mailing table

2025-01-08 17:11:06+1100  [info] Running task: Finish Upgrade DB to 5.76.beta1

2025-01-08 17:11:07+1100  [info] Running task: Begin Upgrade to 5.77.alpha1
2025-01-08 17:11:15+1100  [info] Running task: Begin Upgrade to 5.78.alpha1

2025-01-08 17:11:17+1100  [info] Running task: Upgrade DB to 5.78.alpha1

2025-01-08 17:11:18+1100  [info] Running task: Upgrade DB to 5.78.alpha1: SQL

2025-01-08 17:11:19+1100  [info] Running task: Finish Upgrade DB to 5.78.alpha1

2025-01-08 17:11:21+1100  [info] Running task: Begin Upgrade to 5.78.beta1

2025-01-08 17:11:22+1100  [info] Running task: Upgrade DB to 5.78.beta1

2025-01-08 17:11:23+1100  [info] Running task: Upgrade DB to 5.78.beta1: SQL
d
2025-01-08 17:11:25+1100  [info] Running task: Finish Upgrade DB to 5.78.beta1

2025-01-08 17:11:27+1100  [info] Running task: Begin Upgrade to 5.79.alpha1

2025-01-08 17:11:29+1100  [info] Running task: Upgrade DB to 5.79.alpha1


5.79.alpha1.upgrade

The site is running 5.80.0. Additional patches are available:

5.80.1 (2024-12-12): Fix recent issues involving Thank-You Gifts, SMS, and upgrades.
5.80.2 (security) (2025-01-08): Fix security issues in TCPDF/PHPSpreadsheet. Fix recent issues involving extension upgrades, scheduled jobs, and more.
5.80.3 (2025-01-08): Fix recent issue involving a false status-alert.

## Updates 2025-01-11

    civicrm/civicrm-core          5.80.0       ! 5.81.0      Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.80.0       ! 5.81.0      Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.80.0       ! 5.81.0      Legacy third party dependencies for CiviCRM
    drupal/core                   11.0.9       ! 11.1.1      Drupal is an open source content management platform powering millions of websites and applications.
    drupal/core-composer-scaffold 11.0.9       ! 11.1.1      A flexible Composer project scaffold builder.
    drupal/core-project-message   11.0.9       ! 11.1.1      Adds a message after Composer installation.
    drupal/core-recommended       11.0.9       ! 11.1.1      Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/drulma_companion       2.1.9        ! 2.2.0       Extends Drulma theme with module functionalities
    drupal/ds                     3.24.0       ! 3.25.0      Extend the display options for every entity type.
    drupal/leaflet                10.2.29      ! 10.2.33     Integration with the Leaflet map scripting library.
    drupal/webform                6.3.0-alpha3 ! 6.3.0-beta1 Enables the creation of webforms and questionnaires.

Markdown plugins

namespace Drupal\filter;
use Drupal\Core\Plugin\DefaultPluginManager;

Drupal\Component\Plugin

** Theme updates

Uncaught ReferenceError: Drupal is not defined
at local.js?sodcsc:17:12Understand this errorAI
animated_scroll_to_top.js?sodcsc:52 Uncaught ReferenceError: Drupal is not defined
at animated_scroll_to_top.js?sodcsc:52:12

drupal.js?v=11.0.9:64 Uncaught ReferenceError: once is not defined
at Object.attach (animated_scroll_to_top.js?sodcsc:4:7)
at drupal.js?v=11.0.9:166:24
at Array.forEach (<anonymous>)
at Object.attachBehaviors (drupal.js?v=11.0.9:162:34)
at drupal.init.js?v=11.0.9:32:12
at HTMLDocument.listener (drupal.init.js?v=11.0.9:20:7)

## Updates 2024-12-12

    choices/choices  9.0.1 = [none matched]
    jquery/inputmask 5.0.8 ! 5.0.9

warning] Undefined array key "stable" ThemeHandler.php:74

[notice] Module admin_toolbar_links_access_filter has an entry in the system.schema key/value storage, but is not installed. <a href="https://www.drupal.org/node/3137656">More information about this error</a>.

`create table gos_cms.help_search_items
(
sid               int unsigned auto_increment comment 'Numeric index of this item in the search index'
primary key,
section_plugin_id varchar(255) charset ascii default '' not null comment 'The help section the item comes from',
permission        varchar(255) charset ascii default '' not null comment 'The permission needed to view this item',
topic_id          varchar(255) charset ascii default '' not null comment 'The topic ID of the item'
)
comment 'Stores information about indexed help search items' collate = utf8mb4_general_ci;

create index section_plugin_id
on gos_cms.help_search_items (section_plugin_id);

create index topic_id
on gos_cms.help_search_items (topic_id);
```
## Updates 2024-12-12

    drupal/better_social_sharing_buttons dev-4.x 1993b32 ! dev-4.x 8bc051a Provides a settings page, a field, a paragraph, and a block for social sharing buttons
    drupal/webform                       6.3.0-alpha2    ! 6.3.0-alpha3    Enables the creation of webforms and questionnaires.
[error]  SQLSTATE[42S02]: Base table or view not found: 1146 Table 'gos2_cms.help_search_items' doesn't exist: SELECT "hsi"."sid" AS "sid", "hsi"."topic_id" AS "topic_id", "hsi"."section_plugin_id" AS "section_plugin_id", "hsi"."permission" AS "permission"
> FROM

Schema information for module jquery_ui was missing from the database


 ------------------- ------------ --------------- -----------------------------
Module              Update ID    Type            Description
 ------------------- ------------ --------------- -----------------------------
admin_toolbar       8003         hook_update_n   8003 - Uninstall Admin
Toolbar Links Access Filter
for Drupal 10.3+. @see
https://www.drupal.org/proj
ect/admin_toolbar/issues/34
63291
block_class         20017        hook_update_n   20017 - Convert
block_classes_stored from
JSON to a sequence.
block_class         20018        hook_update_n   20018 - Set
'maxlength_attributes'
config default value to
'255', if it is empty.
context             8004         hook_update_n   8004 - Remove unnecessary
block dependencies.
context_ui          8001         hook_update_n   8001 - Issue #3280556:
Remove context menus links.
ds                  8006         hook_update_n   8006 - Update config
settings to set field bc
layer to TRUE.
ds                  8007         hook_update_n   8007 - Sets the 'Exclude
layout builder blocks on
block field form' to FALSE.
ds                  8008         hook_update_n   8008 - Sets the 'Expert
field template
prefix/suffix textarea'
setting to FALSE.
ds                  8009         hook_update_n   8009 - Convert keys using
hyphens to use underscores.
ds                  8010         hook_update_n   8010 - Sets the 'Exclude DS
layouts in Layout Builder'
setting to FALSE.
ds                  8011         hook_update_n   8011 - Sets the 'Use DS
layout images' setting to
TRUE.
ds                  8012         hook_update_n   8012 - Sets the 'Global
field template BC' setting
to TRUE.
ds                  8013         hook_update_n   8013 - Sets the 'Layout
suggestion BC' setting to
TRUE.
layout_paragraphs   9002         hook_update_n   9002 - Remove old
theme_display
configuration.
metatag             9401         hook_update_n   9401 - Sets tag_trim_end
standard settings for
existing installations.
module_filter       9403         hook_update_n   9403 - Enable jQuery UI
Autocomplete module.
viewsreference      8103         hook_update_n   8103 - Migrate title and
argument columns to the new
data field.
webform             8638         hook_update_n   8638 - Issue #3485556:
Webform text format appears
in the formats list.
metatag             v2_01_chan   post-update     Convert all fields to use
ge_fields_                   JSON storage.
to_json
metatag             v2_02_remo   post-update     Remove meta tags entity
ve_entity_                   values that were removed in
values                       v2.
metatag             v2_03_remo   post-update     Remove meta tags from
ve_config_                   default configurations that
values                       were removed in v2.
metatag             v2_04_unin   post-update     Uninstall submodule(s)
stall_modu                   deprecated in v2:
les                          GooglePlus.
metatag             v2_05_twit   post-update     Replace deprecatedremoved
ter_type_c                   Twitter Card "type" values.
hanges
system              convert_em   post-update     Updates system.date config
pty_countr                   to NULL for empty country
y_and_time                   and timezone defaults.
zone_setti
ngs_to_nul
l
system              sdc_uninst   post-update     Uninstall the sdc module if
all                          installed.
tfa                 add_redire   post-update     Redirect users to TFA setup
ct_to_user                   page default to disabled.
s_without_
tfa
views               views_data   post-update     Post update configured
_argument_                   views for entity reference
plugin_id                    argument plugin IDs.
webform             authentica   post-update     Issue #3404493:
ted_user_p                   webform_default permission.
ermission
webform             ckeditor     post-update     Move from custom CKEditor
to hidden 'webform_default'
text format.
webform             ckeditor01   post-update     Issue #3351348:
'#multiple__no_items_messag
e' added to every field.
webform             confirmati   post-update     #3335924: Allow the
on_page_no                   confirmation page to
index                        include robots noindex meta
tag.
webform             deprecate_   post-update     #3254570: Move jQuery UI
jquery_ui_                   datepicker support into
datepicker                   dedicated deprecated
module.
webform             deprecate_   post-update     Issue #3247475: Location
location_p                   field Algolia Places
laces                        sunsetting May 31, 2022.
webform             multiple_c   post-update     Issue #3339769: Improve
ategories                    Webform categorization to
support assigning multiple
categories and default
categories.
 ------------------- ------------ --------------- -----------------------------


QLSTATE[42S02]: Base table or view not found: 1146 Table 'gos2_cms.help_search_items' doesn't exist: SELECT "hsi"."sid" AS "sid", "hsi"."topic_id" AS "topic_id", "hsi"."section_plugin_id" AS "section_plugin_id", "hsi"."permission" AS "permission"
FROM

Twig\Error\LoaderError: Template "@stable/block/block.html.twig" is not defined in "themes/custom/gardensofstone/templates/block/block.html.twig" at line 1. in Twig\Loader\ChainLoader->getCacheKey() (line 111 of
/Users/jrobens/Sites/gardensofstone2/vendor/twig/twig/src/Loader/ChainLoader.php).

Deleted the block.html.twig in the gardensofstone theme. Check for style changes.

Drupal\Component\Plugin\Exception\PluginNotFoundException: The "term" plugin does not exist. Valid plugin IDs for Drupal\Core\Condition\ConditionManager are: user_status, http_status_code, context_all, request_domain, request_path_exclusion, context, view_inclusion,
current_theme, response_status, request_path, user_role, webform, entity_bundle:block_content, entity_bundle:comment, entity_bundle:contact_message, entity_bundle:crop, entity_bundle:media, entity_bundle:menu_link_content, entity_bundle:node, entity_bundle:shortcut,
entity_bundle:taxonomy_term, entity_bundle:webform_submission, entity_bundle:paragraph in Drupal\Core\Plugin\DefaultPluginManager->doGetDefinition() (line 53 of /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Component/Plugin/Discovery/DiscoveryTrait.php).


sh ./src/move_to_patching.sh term_condition

***

PHP Fatal error:  Uncaught TypeError: Drupal\Core\Extension\ThemeHandler::addTheme(): Argument #1 ($theme) must be of type Drupal\Core\Extension\Extension, null given, called in /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Extension/ThemeHandler.php on line 74 and defined in /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Extension/ThemeHandler.php:84


> ./src/dr.sh thun stable
>
>
> rror]   (Currently using Missing or invalid modules The following modules are marked as installed in the core.extension
configuration, but they are missing:
* aos
* google_analytics
* photos
* photos_access
* term_condition

> sh ./src/move_to_patching.sh aos
> sh ./src/move_to_patching.sh google_analytics
> sh ./src/move_to_patching.sh photos
>

** Deleted most of markdown
ce detected for service "route_enhancer.param_conversion", path: "router_listener -> router -> router.no_access_checks -> route_enhancer.param_conversion -> paramconverter_manager -> paramconverter.markdown -> plugin.manager.markdown.parser".


TODO replace google_analytics with google_tag

**

[error]  Submitted the sitemap to https://www.google.com/ping?sitemap=http://default/sitemap.xml and received response 404.


**

PHP Deprecated:  Drupal\layout_paragraphs\Access\LayoutParagraphsBuilderAccess::access():

- update layout paragraphs
> composer require 'drupal/layout_paragraphs:^2.1'


**

hook_event_dispatcher

> composer require 'drupal/hook_event_dispatcher:^4.2'

Can't disable markdown. Can't reassign to the patched version. Can't

Just try upgrading

chmod 777 web/sites/default
chmod 666 web/sites/default/*settings.php
chmod 666 web/sites/default/*services.yml

composer require 'drupal/core-recommended:^11' \
'drupal/core-composer-scaffold:^11' \
'drupal/core-project-message:^11' --no-update

Could it have been?

"platform": {
"php": "8.2"
},

composer update --dry-run

composer remove drupal/google_analytics --no-update
composer remove drupal/photos --no-update
composer remove drupal/term_condition --no-update
composer remove drupal/webform_civicrm --no-update

drupal/webform_resend_submissions (rate automated patch or not)

> composer require 'drupal/module_filter:^5.0' --no-update

drupal/fontawesome_menu_icons
> composer require 'drupal/fontawesome_menu_icons:3.x-dev@dev' --no-update

drupal/context 5.0.0-rc1 requires drupal/core ^9.3 || ^10

sh ./src/move_to_patching.sh context y

drupal/animated_scroll_to_top 2.0.0 requires drupal/core ^8 || ^9 -
> sh ./src/move_to_patching.sh animated_scroll_to_top y


ckeditor_media_embed
> composer require 'drupal/ckeditor_media_embed:2.x-dev@dev' --no-update

drupal/animate_on_scroll dev-1.x requires drupal/core ^8.8 || ^9 || ^10

> composer require 'drupal/animate_on_scroll:3.0.x-dev@dev' --no-update

> composer require 'drupal/xmlsitemap:^2.0@beta' --no-update

> sh ./src/move_to_patching.sh views_add_button y

> composer require 'drupal/paragraph_blocks:^4.1' --no-update
> composer require 'drupal/metatag:^2.1' --no-update
>
> sh ./src/move_to_patching.sh media_bulk_upload y
> composer require 'drupal/fontawesome_menu_icons:3.x-dev@dev' --no-update
> composer remove drupal/fontawesome --no-update
> sh ./src/move_to_patching.sh fontawesome y
> composer remove drupal/fontawesome_iconpicker_widget --no-update
> sh ./src/move_to_patching.sh fontawesome_menu_icons y


PHP Fatal error:  Trait "Symfony\Component\DependencyInjection\ContainerAwareTrait" not found in /Users/jrobens/Sites/gardensofstone2/web/modules/patched/markdown/src/PluginManager/InstallablePluginManager.php on line 32


##

show tables like '%cache%';

cache_access_policy
cache_bootstrap
cache_config
cache_container
cache_data
cache_default
cache_discovery
cache_dynamic_page_cache
cache_entity
cache_markdown
cache_menu
cache_page
cache_render
cache_toolbar
cachetags
civicrm_acl_cache
civicrm_acl_contact_cache
civicrm_cache
civicrm_group_contact_cache
civicrm_prevnext_cache
civicrm_relationship_cache


truncate cache_bootstrap;
truncate cache_container;
truncate cache_data;
truncate cache_default;
truncate cache_discovery;
truncate cache_dynamic_page_cache;
truncate cache_entity;
truncate cache_markdown;
truncate cache_menu;
truncate cache_page;
truncate cache_render;
truncate cache_toolbar;


composer require 'drupal/webform:^6.3@alpha'



AssertionError: Instead of using replacing Drush's logger, use $this->add() on DrushLoggerManager to add a custom logger. See https://github.com/drush-ops/drush/pull/5022 in /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Commands/DrushCommands.php on line 76 #0 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Commands/DrushCommands.php(76): assert(false, 'Instead of usin...')
#1 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Runtime/ServiceManager.php(480): Drush\Commands\DrushCommands->logger()
#2 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Boot/DrupalBoot8.php(282): Drush\Runtime\ServiceManager->inflect(Object(League\Container\Container), Object(Drupal\markdown\Commands\MarkdownCommands))
#3 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Boot/DrupalBoot8.php(218): Drush\Boot\DrupalBoot8->addDrupalModuleDrushCommands(Object(Drush\Boot\BootstrapManager))
#4 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Boot/BootstrapManager.php(211): Drush\Boot\DrupalBoot8->bootstrapDrupalFull(Object(Drush\Boot\BootstrapManager), NULL)
#5 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Boot/BootstrapManager.php(397): Drush\Boot\BootstrapManager->doBootstrap(5, 6, NULL)
#6 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Application.php(219): Drush\Boot\BootstrapManager->bootstrapMax()
#7 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Application.php(185): Drush\Application->bootstrapAndFind('pm:uninstall')
#8 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/console/Application.php(266): Drush\Application->find('pm:uninstall')
#9 /Users/jrobens/Sites/gardensofstone2/vendor/symfony/console/Application.php(175): Symfony\Component\Console\Application->doRun(Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
#10 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Runtime/Runtime.php(110): Symfony\Component\Console\Application->run(Object(Symfony\Component\Console\Input\ArgvInput), Object(Symfony\Component\Console\Output\ConsoleOutput))
#11 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Runtime/Runtime.php(40): Drush\Runtime\Runtime->doRun(Array, Object(Symfony\Component\Console\Output\ConsoleOutput))
#12 /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/drush.php(140): Drush\Runtime\Runtime->run(Array)
#13 {main}
AssertionError: Instead of using replacing Drush's logger, use $this->add() on DrushLoggerManager to add a custom logger. See https://github.com/drush-ops/drush/pull/5022 in assert() (line 76 of /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Commands/DrushCommands.php).
[warning] Drush command terminated abnormally.
/Users/jrobens/Sites/gardensofstone2
Deprecation Notice: Composer\Installers\Installer::__construct(): Implicitly marking parameter $filesystem as nullable is deprecated, the explicit nullable type must be used instead in /Users/jrobens/Sites/gardensofstone2/vendor/composer/installers/src/Composer/Installers/Installer.php:136
Deprecation Notice: Composer\Installers\Installer::__construct(): Implicitly marking parameter $binaryInstaller as nullable is deprecated, the explicit nullable type must be used instead in /Users/jrobens/Sites/gardensofstone2/vendor/composer/installers/src/Composer/Installers/Installer.php:136
Deprecation Notice: Composer\Installers\BaseInstaller::__construct(): Implicitly marking parameter $package as nullable is deprecated, the explicit nullable type must be used instead in /Users/jrobens/Sites/gardensofstone2/vendor/composer/installers/src/Composer/Installers/BaseInstaller.php:22
Deprecation Notice: Composer\Installers\BaseInstaller::__construct(): Implicitly marking parameter $composer as nullable is deprecated, the explicit nullable type must be used instead in /Users/jrobens/Sites/gardensofstone2/vendor/composer/installers/src/Composer/Installers/BaseInstaller.php:22
Deprecation Notice: Composer\Installers\BaseInstaller::__construct(): Implicitly marking parameter $io as nullable is deprecated, the explicit nullable type must be used instead in /Users/jrobens/Sites/gardensofstone2/vendor/composer/installers/src/Composer/Installers/BaseInstaller.php:22



AssertionError: The file specified by the given app root, relative path and file name (/Users/jrobens/Sites/gardensofstone2/web/modules/contrib/markdown/markdown.info.yml) do not exist. in /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Extension/Extension.php on line 73 #0 /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Extension/Extension.php(73): assert(false, 'The file specif...')
#1 /Users/jrobens/Sites/gardensofstone2/web/core/lib/Drupal/Core/Extension/ModuleHandler.php(114): Drupal\Core\Extension\Extension->__construct('/Users/jrobens/...', 'module', 'modules/contrib...', 'markdown.module')


## Updates 2024-12-06

    civicrm/civicrm-core          5.78.3  ! 5.80.0  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.78.3  ! 5.80.0  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.78.3  ! 5.80.0  Legacy third party dependencies for CiviCRM
    drupal/admin_toolbar          3.5.0   ! 3.5.1   Provides a drop-down menu interface to the core Drupal Toolbar.
    drupal/core-composer-scaffold 10.3.6  ! 10.3.10 A flexible Composer project scaffold builder.
    drupal/core-project-message   10.3.6  ! 10.3.10 Adds a message after Composer installation.
    drupal/core-recommended       10.3.6  ! 10.3.10 Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/drulma_companion       2.1.7   ! 2.1.9   Extends Drulma theme with module functionalities
    drupal/focal_point            2.1.1   ! 2.1.2   Focal Point allows content creators to mark the most important part of an image for easier cropping.
    drupal/layout_paragraphs      2.1.0   ! 2.1.1   Layout Paragraphs
    drupal/leaflet                10.2.25 ! 10.2.29 Integration with the Leaflet map scripting library.
    drupal/nagios                 1.20.0  ! 1.22.0  Exposes a page that Nagios or Icinga can monitor
    drupal/webform                6.2.7   ! 6.2.8   Enables the creation of webforms and questionnaires.
    drupal/webform_civicrm        6.2.5   ! 6.3.0   CiviCRM and Webform integration
    drush/drush                   13.3.0  ! 13.3.3  Drush is a command line shell and scripting interface for Drupal, a veritable Swiss Army knife designed to make life easier for those of us who spend...
## Updates 2024-10-26

"Call to undefined function file_create_url()" at /Users/jrobens/Sites/gardensofstone2/web/modules/custom/interlated_paragraphs/modules/crossfade/crossfade.module line 46; PHP message: PHP Deprecated:  Constant E_STRICT is

## Updates 2024-10-23

    civicrm/civicrm-core          5.77.0 ! 5.78.3 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.77.0 ! 5.78.3 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.77.0 ! 5.78.3 Legacy third party dependencies for CiviCRM
    drupal/block_title_link       1.1.6  ! 1.1.7  Adding link to title of blocks.
    drupal/core-composer-scaffold 10.3.4 ! 10.3.6 A flexible Composer project scaffold builder.
    drupal/core-project-message   10.3.4 ! 10.3.6 Adds a message after Composer installation.
    drupal/core-recommended       10.3.4 ! 10.3.6 Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/ds                     3.23.0 ! 3.24.0 Extend the display options for every entity type.
    drupal/entity_class_formatter 2.0.0  ! 2.0.1  Apply class on the entity if it's field is using this formatter.
    drupal/hook_event_dispatcher  4.0.3  ! 4.2.0  Dispatches events for several drupal core hooks.
    drupal/tfa                    1.7.0  ! 1.9.0  Pluggable provider of two factor authentication for Drupal
    drush/drush                   13.1.1 ! 13.3.0 Drush is a command line shell and scripting interface for Drupal, a veritable Swiss Army knife designed to make life easier for those of us who spend some of our working hours hacking away at the command prompt.
## Updates 2024-09-12

    civicrm/civicrm-core          5.76.2      ! 5.77.0       Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8      5.76.2      ! 5.77.0       Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages      5.76.2      ! 5.77.0       Legacy third party dependencies for CiviCRM
    drupal/core-composer-scaffold 10.3.2      ! 10.3.4       A flexible Composer project scaffold builder.
    drupal/core-project-message   10.3.2      ! 10.3.4       Adds a message after Composer installation.
    drupal/core-recommended       10.3.2      ! 10.3.4       Core and its dependencies with known-compatible minor versions. Require this project INSTEAD OF drupal/core.
    drupal/layout_paragraphs      2.0.8       ! 2.1.0        Layout Paragraphs
    drupal/leaflet                10.2.24     ! 10.2.25      Integration with the Leaflet map scripting library.
    drupal/menu_item_extras       3.0.2       ! 3.1.0        Provide an additional custom fields which can be used on Menu link
    drupal/menu_link_attributes   1.3.0       ! 1.5.0        Allows you to add attributes to menu links.
    drupal/viewsreference         2.0.0-beta9 ! 2.0.0-beta10 Views reference
    drush/drush                   13.0.1      ! 13.1.1       Drush is a command line shell and scripting interface for Drupal, a veritable Swiss Army knife designed to make life easier for those of us who spend some of our working hours hacking aw...
## Updates 2024-08-19

    civicrm/civicrm-core             5.72.2           ! 5.76.2           Open source constituent relationship management for non-profits, NGOs and advocacy orga...
    civicrm/civicrm-drupal-8         5.72.2           ! 5.76.2           Open source constituent relationship management for non-profits, NGOs and advocacy orga...
    civicrm/civicrm-packages         5.72.2           ! 5.76.2           Legacy third party dependencies for CiviCRM
    drupal/admin_toolbar             3.4.2            ! 3.5.0            Provides a drop-down menu interface to the core Drupal Toolbar.
    drupal/block_class               2.0.11           ! 2.0.12           Allows assigning classes to Blocks.
    drupal/classy_paragraphs         1.0.0-rc2        ! 1.0.0-rc3        Allows an editor to apply a class to paragraphs.
    drupal/copyright_footer          3.0.1            ! 3.1.1            Provides a block for Copyright indication.
    drupal/core-composer-scaffold    10.2.5           ! 10.3.2           A flexible Composer project scaffold builder.
    drupal/core-project-message      10.2.5           ! 10.3.2           Adds a message after Composer installation.
    drupal/core-recommended          10.2.5           ! 10.3.2           Core and its dependencies with known-compatible minor versions. Require this project IN...
    drupal/dropzonejs                2.10.0           ! 2.11.0           Drupal integration for DropzoneJS - An open source library that provides drag’n’dro...
    drupal/drulma                    2.0.0            ! 2.0.1            Enables the use of Bulma: a free, open source CSS framework based on Flexbox.
    drupal/drulma_companion          2.1.6            ! 2.1.7            Extends Drulma theme with module functionalities
    drupal/ds                        3.21.0           ! 3.23.0           Extend the display options for every entity type.
    drupal/expand_collapse_formatter 2.0.2            ! 2.0.3            A formatter to expand and collapse text area fields.
    drupal/focal_point               2.0.3            ! 2.1.1            Focal Point allows content creators to mark the most important part of an image for eas...
    drupal/honeypot                  2.1.3            ! 2.2.0            Mitigates spam form submissions using the honeypot method.
    drupal/hook_event_dispatcher     4.0.1            ! 4.0.3            Dispatches events for several drupal core hooks.
    drupal/layout_paragraphs         2.0.4            ! 2.0.8            Layout Paragraphs
    drupal/leaflet                   10.2.12          ! 10.2.24          Integration with the Leaflet map scripting library.
    drupal/leaflet_more_maps         2.1.3            ! 2.2.2            Adds a swag of map styles to Leaflet, e.g Thunderforest, Esri, Stamen, Google.
    drupal/lp_fontawesome            5.15004.0        ! 5.15005.0        Defines fontawesome as library to be used with libraries provider
    drupal/masquerade                2.0.0-rc4        ! 2.0.0            Allows privileged users to masquerade as another user.
    drupal/nagios                    1.19.0           ! 1.20.0           Exposes a page that Nagios or Icinga can monitor
    drupal/paragraphs                1.17.0           ! 1.18.0           Enables the creation of Paragraphs entities.
    drupal/pathauto                  1.12.0           ! 1.13.0           Provides a mechanism for modules to automatically generate aliases for the content they...
    drupal/recaptcha_v3              2.0.2            ! 2.0.3            The reCaptcha V3 module provides integration with Google reCaptcha V3 and CAPTCHA module.
    drupal/shield                    1.7.0            ! 1.8.0            Creates a general shield for the site.
    drupal/viewsreference            2.0.0-beta7      ! 2.0.0-beta9      Views reference
    drupal/webform                   6.2.2            ! 6.2.7            Enables the creation of webforms and questionnaires.
    drush/drush                      13.x-dev 25e00e5 ! 13.x-dev a40daeb Drush is a command line shell and scripting interface for Drupal, a veritable Swiss Arm...

## Updates 2024-04-27

Error: Interface "Drush\Drupal\Commands\sql\SanitizePluginInterface" not found in /Users/jrobens/Sites/gardensofstone2/web/modules/contrib/webform/src/Commands/WebformSanitizeSubmissionsCommands.php on line 18 #0 /Users/jrobens/Sites/gardensofstone2/vendor/composer/ClassLoader.php(576): include()


    civicrm/civicrm-core        5.72.0 ! 5.72.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8    5.72.0 ! 5.72.2 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages    5.72.0 ! 5.72.2 Legacy third party dependencies for CiviCRM
    drupal/ckeditor_media_embed 1.12.0 ! 1.13.0 Adds the Media Embed CKEditor plugins to Drupal.
    drupal/console              1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/ds                   3.16.0 ! 3.21.0 Extend the display options for every entity type.
    drupal/tfa                  1.6.0  ! 1.7.0  Pluggable provider of two factor authentication for Drupal
    drupal/upgrade_status       4.1.0  ! 4.2.0  Review Drupal major upgrade readiness of the environment and components of the site.

Drupal 10

hook_events
context
composer require 'drupal/viewsreference:^2.0@beta'

## Updates 2024-04-05

    drupal/console 1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/ds      3.16.0 ! 3.20.0 Extend the display options for every entity type.
## Updates 2024-04-05

    civicrm/civicrm-core     5.69.2  ! 5.72.0  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.69.2  ! 5.72.0  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.69.2  ! 5.72.0  Legacy third party dependencies for CiviCRM
    drupal/block_title_link  1.1.5   ! 1.1.6   Adding link to title of blocks.
    drupal/console           1.9.9   ! 1.9.10  The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/dropzonejs        2.8.0   ! 2.10.0  Drupal integration for DropzoneJS - An open source library that provides drag’n’drop file uploads with image previews.
    drupal/ds                3.16.0  ! 3.20.0  Extend the display options for every entity type.
    drupal/focal_point       2.0.2   ! 2.0.3   Focal Point allows content creators to mark the most important part of an image for easier cropping.
    drupal/leaflet           10.2.10 ! 10.2.12 Integration with the Leaflet map scripting library.
    drupal/module_filter     4.1.0   ! 4.1.1   Filter the modules list.
    drupal/photos            6.0.6   ! 6.0.7   Picture management module. Photo albums.
    drupal/tfa               1.4.0   ! 1.6.0   Pluggable provider of two factor authentication for Drupal
    drupal/upgrade_status    4.0.0   ! 4.1.0   Review Drupal major upgrade readiness of the environment and components of the site.
## Updates 2024-01-22

    drupal/console 1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/ds      3.16.0 ! 3.18.0 Extend the display options for every entity type.
## Updates 2024-01-18

    civicrm/civicrm-core     5.69.1 ! 5.69.2  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.69.1 ! 5.69.2  Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.69.1 ! 5.69.2  Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10  The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/ds                3.16.0 ! 3.18.0  Extend the display options for every entity type.
    drupal/leaflet           10.2.7 ! 10.2.10 Integration with the Leaflet map scripting library.
    drupal/paragraphs        1.16.0 ! 1.17.0  Enables the creation of Paragraphs entities.


module_filter module
9401 - Add the filters_enabled.permission default configuration.
9402 - Ensure that the 'path' configuration property is a boolean.
9403 - Enable jQuery UI Autocomplete module.
webform module
Issue #3404493: webform_default permission.

## Update to drupal 10



## Updates 2024-01-12

    civicrm/civicrm-core     5.68.1 ! 5.69.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.68.1 ! 5.69.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.68.1 ! 5.69.1 Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/markdown          3.0.0  ! 3.0.1  Provides Markdown integration for Drupal and allows content to be formatted in a simple plain-text syntax that is transformed into valid HTML.
    drupal/module_filter     4.0.1  ! 4.1.0  Filter the modules list.
    drupal/photos            6.0.5  ! 6.0.6  Picture management module. Photo albums.

module_filter module
9401 - Add the filters_enabled.permission default configuration.
9402 - Ensure that the 'path' configuration property is a boolean.
9403 - Enable jQuery UI Autocomplete module.
webform module
Issue #3404493: webform_default permission.

## Updates 2024-01-04

    drupal/console 1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drush/drush    10.6.1 ! 10.6.2 Drush is a command line shell and scripting interface for Drupal, a veritable Swiss Army knife designed to make life easier for those of us who spend some of our working hours hacking away at the command prompt.


remote: Verifying lock file contents can be installed on current platform.
remote: - Required package "ckeditor/autogrow" is not present in the lock file.
remote: - Required package "ckeditor/codemirror" is not present in the lock file.
remote: - Required package "ckeditor/fakeobjects" is not present in the lock file.
remote: - Required package "ckeditor/image" is not present in the lock file.
remote: - Required package "ckeditor/link" is not present in the lock file.
remote: - Required package "tippyjs/5.x" is not present in the lock file.
remote: - Required package "tippyjs/6.x" is not present in the lock file.

https://getcomposer.org/doc/articles/resolving-merge-conflicts.md

## Updates 2024-01-03

    civicrm/civicrm-core     5.67.0 ! 5.68.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.67.0 ! 5.68.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.67.0 ! 5.68.1 Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/ds                3.15.0 ! 3.16.0 Extend the display options for every entity type.
    drupal/layout_paragraphs 2.0.3  ! 2.0.4  Layout Paragraphs
    drupal/leaflet           10.2.3 ! 10.2.7 Integration with the Leaflet map scripting library.
    drupal/nagios            1.17.0 ! 1.19.0 Exposes a page that Nagios or Icinga can monitor
    drupal/tfa               1.3.0  ! 1.4.0  Pluggable provider of two factor authentication for Drupal
    drupal/webform           6.2.0  ! 6.2.2  Enables the creation of webforms and questionnaires.
    drupal/webform_civicrm   6.2.4  ! 6.2.5  CiviCRM and Webform integration
## Updates 2023-11-15

    civicrm/civicrm-asset-plugin v1.1.3 ! v1.1.4 Publish assets from private CiviCRM folders to a public folder
    civicrm/civicrm-core         5.66.1 ! 5.67.0 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8     5.66.1 ! 5.67.0 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages     5.66.1 ! 5.67.0 Legacy third party dependencies for CiviCRM
    drupal/console               1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/mediteran             1.30.0 ! 1.32.0 Mediteran is a clean and simple administration theme designed by <a href="https://drupalation.com" target="_blank...
    drupal/webform               6.1.7  ! 6.2.0  Enables the creation of webforms and questionnaires.

---------- ----------------- --------------- ---------------------------------
Module     Update ID         Type            Description
 ---------- ----------------- --------------- ---------------------------------
better_s   8004              hook_update_n   8004 - Converts settings to
ocial_sh                                     schema conform format.
aring_bu
ttons
better_s   8005              hook_update_n   8005 - Removes digg service
ocial_sh                                     configuration.
aring_bu
ttons
better_s   8006              hook_update_n   8006 - Replaces twitter service
ocial_sh                                     with X.
aring_bu
ttons
honeypot   8101              hook_update_n   8101 - Corrects a
sometimes-missing 'hostname'
column in the {honeypot_user}
table.
honeypot   8102              hook_update_n   8102 - Creates an 'id' column
for the {honeypot_user} table
to act as a primary key.
paragrap   9302              hook_update_n   9302 - Restore admin titles
h_blocks                                     that were present before
revisions were introduced.
photos_a   10601             hook_update_n   10601 - Add primary key to
ccess                                        {photos_access_user}.
term_con   9201              hook_update_n   9201 - Convert term id to term
dition                                       uuid #3362744.
webform_   8006              hook_update_n   8006 - Fix contact subtype case
civicrm                                      in existing webforms.
admin_to   helper_added_co   post-update     Update container for
olbar_to   nfig_factory                      admin_toolbar_tools.helper
ols                                          arguments.
better_s   update_layout_b   post-update     Update default social sharing
ocial_sh   uilder_more_set                   buttons block for Layout
aring_bu   tings                             Builder sections.
ttons
metatag    remove_robots_n   post-update     Remove 'noydir', 'noodp' ROBOTS
oydir_noodp                       options from meta tag entity
fields.
photos     new_photos_uplo   post-update     Rebuild photos upload container
ad_container_pa                   to add new container parameter.
rameter_file_re
positor
user       sort_permission   post-update     Ensure permissions stored in
s_again                           role configuration are sorted
using the schema.
webform    ckeditor          post-update     Move from custom CKEditor to
hidden 'webform_default' text
format.
webform    ckeditor01        post-update     Issue #3351348:
'#multiple__no_items_message'
added to every field.
webform    confirmation_pa   post-update     #3335924: Allow the
ge_noindex                        confirmation page to include
robots noindex meta tag.
webform    deprecate_jquer   post-update     #3254570: Move jQuery UI
y_ui_datepicker                   datepicker support into
dedicated deprecated module.
webform    deprecate_locat   post-update     Issue #3247475: Location field
ion_places                        Algolia Places sunsetting May
31, 2022.
webform    multiple_catego   post-update     Issue #3339769: Improve Webform
ries                              categorization to support
assigning multiple categories
and default categories.
 ---------- ----------------- --------------- ---------------------------------

In ProcessBase.php line 171:

Unable to decode output into JSON: Syntax error

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.
php on line 78

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.
php on line 78

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.
php on line 86

Deprecated: Using ${var} in strings is deprecated, use {$var} instead in /Users/jrobens/Sites/gardensofstone2/vendor/consolidation/config/src/Util/ArrayUtil.
php on line 86

Deprecated: Creation of dynamic property Drush\Cache\JSONCache::$directory is deprecated in /Users/jrobens/Sites/gardensofstone2/vendor/drush/drush/src/Cache
/FileCache.php on line 32
{
"0": {
"better_social_sharing_buttons": {
"8004": {
"results": {
"query": null,
"success": true
},
"type": "update"
},
"8005": {
"results": {
"query": null,
"success": true
},
"type": "update"
},
"8006": {
"results": {
"query": null,
"success": true
},
"type": "update"
},
"update_layout_builder_more_settings": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
}
},
"honeypot": {
"8101": {
"results": {
"query": null,
"success": true
},
"type": "update"
},
"8102": {
"results": {
"query": null,
"success": true
},
"type": "update"
}
},
"paragraph_blocks": {
"9302": {
"results": {
"query": null,
"success": true
},
"type": "update"
}
},
"photos_access": {
"10601": {
"results": {
"query": null,
"success": true
},
"type": "update"
}
},
"term_condition": {
"9201": {
"results": {
"query": null,
"success": true
},
"type": "update"
}
},
"webform_civicrm": {
"8006": {
"results": {
"query": null,
"success": true
},
"type": "update"
}
},
"admin_toolbar_tools": {
"helper_added_config_factory": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
}
},
"metatag": {
"remove_robots_noydir_noodp": {
"results": {
"query": "There were no overridden Metatag records.",
"success": true
},
"type": "post_update"
}
},
"photos": {
"new_photos_upload_container_parameter_file_repositor": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
}
},
"user": {
"sort_permissions_again": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
}
},
"webform": {
"ckeditor": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
},
"ckeditor01": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
},
"confirmation_page_noindex": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
},
"deprecate_jquery_ui_datepicker": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
},
"deprecate_location_places": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
},
"multiple_categories": {
"results": {
"query": null,
"success": true
},
"type": "post_update"
}
}
},
"drush_batch_process_finished": true
}


Check manually
Errors without Drupal source version numbers including parse errors and use of APIs from dependencies.
File name	Line	Error
web/PHPStan failed	0
PHPStan command failed:
/opt/homebrew/Cellar/php@8.1/8.1.23/bin/php /Users/jrobens/Sites/gardensofstone2/vendor/bin/phpstan analyse --memory-limit=1500M --error-format=json --configuration=/tmp/upgrade_status/deprecation_testing.neon /Users/jrobens/Sites/gardensofstone2/web/modules/custom/interlated_paragraphs

Command output:
Empty.

Command error:
PHP Fatal error: Cannot redeclare ip_carousel_theme() (previously declared in /Users/jrobens/Sites/gardensofstone2/web/modules/custom/interlated_paragraphs/modules/ip_carousel/ip_carousel.module:13) in /Users/jrobens/Sites/gardensofstone2/web/modules/custom/interlated_paragraphs/modules/ip_footer/ip_footer.module on line 16 Fatal error: Cannot redeclare ip_carousel_theme() (previously declared in /Users/jrobens/Sites/gardensofstone2/web/modules/custom/interlated_paragraphs/modules/ip_carousel/ip_carousel.module:13) in /Users/jrobens/Sites/gardensofstone2/web/modules/custom/interlated_paragraphs/modules/ip_footer/ip_footer.module on line 16

web/modules/custom/interlated_paragraphs/modules/ip_pb_webform/ip_pb_webform.module	45	The 'ip_pb_webform/ip_pb_webform' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_footer/ip_footer.module	45	The 'ip_carousel/ip_carousel' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_navbar/ip_navbar.module	45	The 'ip_navbar/ip_navbar' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_pb_text/ip_pb_text.module	45	The 'ip_pb_text/ip_pb_text' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_pb_index_block/ip_pb_index_block.module	46	The 'ip_pb_index_block/ip_pb_index_block' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_carousel/ip_carousel.module	60	The 'ip_carousel/ip_carousel' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_pb_row/ip_pb_row.module	46	The 'ip_pb_row/ip_pb_row' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_pb_banner/ip_pb_banner.module	46	The 'ip_pb_banner/ip_pb_banner' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_pb_heading/ip_pb_heading.module	46	The 'ip_pb_heading/ip_pb_heading' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_pb_small_tile/ip_pb_small_tile.module	46	The 'ip_pb_small_tile/ip_pb_small_tile' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
web/modules/custom/interlated_paragraphs/modules/ip_events/ip_events.module	45	The 'ip_events/ip_events' library is not defined because the defining extension is not installed. Cannot decide if it is deprecated or not.
## 2023-11-15 d10 upgrade review

Invalid permissions will trigger runtime exceptions in Drupal 10. Permissions should be defined in a permissions.yml file or a permission callback.
Permissions of user role: "Manager":
edit layout paragraphs plugin config
Permissions of user role: "Authenticated user":
make online contributions
Permissions of user role: "Anonymous user":
make online contributions
Deprecated or obsolete core extensions installed. These will be removed in the next major version.	Bartik (read more), Stable (read more)


## 2023-11-01

Check bounce mail handle

ailure, Error message: Could not connect to MailStore for crm.gardensofstone.org.au@gardensofstone.org.auError message: An error occured while sending or receiving mail. Failed to conn (...)


Trigger rebuild

cv api4 System.flush triggers=1

Civi Menu rebuild and Cache clear

cv api4 System.flush

## 2023-10-30 spam

This is our main blocklist, internally the zones are called “black” and “black_css” - it contains IP addresses only.

Possible reasons for listing in this blocklist in order of probability are:
Spam received to our spam traps
Heuristics determine that the traffic is spam
Manual listings of hosts or networks that have persistent issues

If you are unable to send emails, please seek help from the entity that provides your email (this might be your ISP, email or host provider). Should you feel confident enough to solve this issue on your own, we have provided you with further reading on the matter.

COMPROMISED ACCOUNTS
e.g. accounts that have been phished (e.g. the user provided their username/password to an attacker), the user had weak or re-used passwords or credentials were obtained via a compromised device.

Remediation: use rate-limiting to help identify the compromised account(s) look for messages being sent with Reply-To: headers or messages containing blocklisted domains. You can also use an authentication blocklist to identify the compromised accounts by reporting log-in attempts from listed hosts where the IP accessing the account has been seen using other compromised accounts.

IMPORTANT: Once the compromised account has been identified, the password should be changed immediately to something secure and any queued mail from the account should be removed (as there could be a considerable amount) prior to submitting a delist request to prevent the IP from being quickly relisted.

Mitigation: User training; don't give out passwords or use the same password on multiple different sites - use a password manager instead. An authentication blocklist can prevent login or identify logins from compromised hosts that we've observed abusing other accounts in the same way.

.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 9C51AACB8: from=<>, size=25324, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 97273A213: from=<>, size=25293, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/error[340682]: 91F8EA750: to=<return+b.180.198772.75b41ac40e634217@gardensofstone.org.au>, relay=none, delay=244192, delays=244192/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 96100AC29: from=<>, size=26068, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/error[340703]: 9C51AACB8: to=<return+b.180.198581.a837e7a13221ec92@gardensofstone.org.au>, relay=none, delay=244132, delays=244132/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 9AC20A411: from=<>, size=25329, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/error[340693]: 97273A213: to=<return+b.180.198724.75f93fc87954fb83@gardensofstone.org.au>, relay=none, delay=244112, delays=244112/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/error[340691]: 96100AC29: to=<return+b.180.198764.4fcb722015781559@gardensofstone.org.au>, relay=none, delay=244141, delays=244141/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 95551AD91: from=<>, size=25887, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/error[340696]: 9AC20A411: to=<return+b.180.197983.de26d074743bdac1@gardensofstone.org.au>, relay=none, delay=248321, delays=248321/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 992F4977E: from=<>, size=25916, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 90F0DAD64: from=<>, size=25900, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 96787AA13: from=<>, size=25892, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/error[340699]: 95551AD91: to=<return+b.180.198395.c7500086362aa7c4@gardensofstone.org.au>, relay=none, delay=244097, delays=244097/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/qmgr[185106]: 96134AAE5: from=<>, size=25293, nrcpt=1 (queue active)
Oct 30 03:24:23 ganon postfix/error[340687]: 992F4977E: to=<return+b.180.198755.6d4f3ea56eda78fd@gardensofstone.org.au>, relay=none, delay=244147, delays=244147/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/error[340701]: 90F0DAD64: to=<return+b.180.198774.c815a50e48a91454@gardensofstone.org.au>, relay=none, delay=244107, delays=244107/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/error[340685]: 96787AA13: to=<return+b.180.200119.524ae05a08106cbe@gardensofstone.org.au>, relay=none, delay=244163, delays=244163/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/error[340695]: 96134AAE5: to=<return+b.180.198779.0f865270b6ddcfda@gardensofstone.org.au>, relay=none, delay=244154, delays=244154/0/0/0, dsn=4.4.1, status=deferred (delivery temporarily suspended: connect to gardensofstone.org.au[43.239.97.47]:25: Connection refused)
Oct 30 03:24:23 ganon postfix/smtp[340677]: 341F8AB31: host extmail.bigpond.com[203.42.22.10] refused to talk to me: 550-5.7.1 Connection refused - IB119. 43.239.97.47 is blacklisted in Abusix 550-5.7.1 Mail Intelligence. See https://lookup.abusix.com/search?q=43.239.97.47 550 5.7.1 i{6b9ac109-6c3f-40e3-9cf1-b91866d33926}
Oct 30 03:24:23 ganon postfix/smtp[340679]: 91DDFAB3C: host extmail.bigpond.com[203.42.40.138] refused to talk to me: 550-5.7.1 Connection refused - IB119. 43.239.97.47 is blacklisted in Abusix 550-5.7.1 Mail Intelligence. See https://lookup.abusix.com/search?q=43.239.97.47 550 5.7.1 i{cdce22f9-d097-4f18-927b-23eda3b1747c}
Oct 30 03:24:23 ganon postfix/smtp[340677]: 341F8AB31: to=<eh.mistover@bigpond.com>, relay=extmail.bigpond.com[203.42.40.138]:25, delay=134829, delays=134829/0/0.14/0, dsn=4.7.1, status=deferred (host extmail.bigpond.com[203.42.40.138] refused to talk to me: 550-5.7.1 Connection refused - IB119. 43.239.97.47 is blacklisted in Abusix 550-5.7.1 Mail Intelligence. See https://lookup.abusix.com/search?q=43.239.97.47 550 5.7.1 i{03f531d5-accd-47ca-b873-46f2213a145d})
Oct 30 03:24:23 ganon postfix/smtp[340679]: 91DDFAB3C: to=<keith.muir6@bigpond.com>, relay=extmail.bigpond.com[203.42.22.10]:25, delay=67680, delays=67680/0/0.14/0, dsn=4.7.1, status=deferred (host extmail.bigpond.com[203.42.22.10] refused to talk to me: 550-5.7.1 Connection refused - IB119. 43.239.97.47 is blacklisted in Abusix 550-5.7.1 Mail Intelligence. See https://lookup.abusix.com/search?q=43.239.97.47 550 5.7.1 i{ffaf804a-000e-447c-8362-d73086c683ed})
Oct 30 03:24:53 ganon postfix/smtp[340676]: connect to zgl-eg.com[3.75.63.160]:25: Connection timed out

Oct 30 22:34:25 ganon postfix/smtp[366653]: 9505C95E3: host gmail-smtp-in.l.google.com[142.250.4.27] said: 452-4.2.2 The email account that you tried to reach is over quota. Please direct 452-4.2.2 the recipient to 452 4.2.2  https://support.google.com/mail/?p=OverQuotaTemp u22-20020a63d356000000b005a073e0cc9asi70585pgi.803 - gsmtp (in reply to RCPT TO command)
Oct 30 22:34:27 ganon postfix/smtp[366653]: 9505C95E3: to=<xander.keyn@gmail.com>, relay=alt1.gmail-smtp-in.l.google.com[173.194.202.27]:25, delay=320954, delays=320950/0/3.3/0.23, dsn=4.2.2, status=deferred (host alt1.gmail-smtp-in.l.google.com[173.194.202.27] said: 452-4.2.2 The email account that you tried to reach is over quota. Please direct 452-4.2.2 the recipient to 452 4.2.2  https://support.google.com/mail/?p=OverQuotaTemp w13-20020a170902e88d00b001c60e273252si54954plg.25 - gsmtp (in reply to RCPT TO command))

## Updates 2023-10-28

    civicrm/civicrm-core     5.66.0 ! 5.66.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-drupal-8 5.66.0 ! 5.66.1 Open source constituent relationship management for non-profits, NGOs and advocacy organizations.
    civicrm/civicrm-packages 5.66.0 ! 5.66.1 Legacy third party dependencies for CiviCRM
    drupal/console           1.9.9  ! 1.9.10 The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
    drupal/leaflet           10.2.1 ! 10.2.3 Integration with the Leaflet map scripting library.
    drupal/tfa               1.2.0  ! 1.3.0  Pluggable provider of two factor authentication for Drupal

## 20231028 email sending from submission form disabled

pf:resend-submissions 1 1728053584 branch_office_email NULL FALSE
pf:resend-submissions 1698359335 1728053584 branch_office_email augus_place_west_modifications_e TRUE

WF Resend submissions: Start checking submissions between: 1698359335 - 1728053584
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23524 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23525 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23526 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23527 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23528 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23529 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23530 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23531 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23532 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23533 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23534 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23536 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23537 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23538 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23539 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23540 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23541 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23542 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23543 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23544 for handler: branch_office_email
[notice] Augus Place West - Modifications – email action webform sent Minister Scully email email.
WF Resend submissions: resend: 23545 for handler: branch_

1698445054294
gitPA8n@ganon:/srv/web/gardensofstone.org.au$ sh ./src/dr.sh pf:resend-submissions 1 1728053584 branch_office_email NULL FALSE
WF Resend submissions: Start checking submissions between: 1 - 1728053584
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 261 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 262 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 263 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 264 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 265 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 266 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 267 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 268 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 269 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 270 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 271 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 272 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 288 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 289 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 291 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 292 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 296 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 307 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 308 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 310 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 313 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 318 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 327 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 357 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 379 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 396 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 397 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 411 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 485 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 509 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 511 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 512 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 513 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 518 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 627 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 682 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 711 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 712 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 716 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 748 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 790 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 820 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 839 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 842 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 843 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 857 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 872 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 878 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 883 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 884 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 885 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 901 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 902 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 903 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 904 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 905 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 906 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 907 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 908 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 909 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 910 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 911 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 913 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 914 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 915 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 916 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 917 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 918 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 919 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 920 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 921 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 922 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 923 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 924 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 925 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 926 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 927 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 928 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 929 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 930 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 931 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 932 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 934 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 935 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 936 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 937 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 938 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 939 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 942 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 943 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 944 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 945 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 946 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 949 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 959 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 962 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 963 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 966 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 967 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 970 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 971 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 972 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 973 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 975 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 977 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 978 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 981 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 984 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 985 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 987 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 988 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 989 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 991 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 993 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 994 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 995 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 996 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 997 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 998 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 999 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1002 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1003 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1005 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1006 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1007 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1008 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1009 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1013 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1014 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1016 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1017 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1018 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1019 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1023 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1025 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1027 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1029 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1030 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1031 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1032 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1033 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1034 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1035 for handler: branch_office_email
[notice] Gardens of Stone draft Plan of Management — will it be wonderland or a theme park? webform sent Branch office email - Masterplan email.
WF Resend submissions: resend: 1036 for handler: branch_office_email
[warning] file_put_contents(/srv/web/gardensofstone.org.au/web/../sec/files/civicrm/templates_c/CachedExtLoader.eaeec56f33f2ec89f7850d83998d5c67.php): Failed to open stream: Permission denied ClassLoader.php:86

In Filesystem.php line 290:

Cannot rename "/tmp/CachedCiviContainer.eaeec56f33f2ec89f7850d83998d5c67.phpR98KPn" to "/srv/web/gardensofstone.org.
au/web/../sec/files/civicrm/templates_c/CachedCiviContainer.eaeec56f33f2ec89f7850d83998d5c67.php".


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
