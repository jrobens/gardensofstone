



# Gardens of stone 2

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

/opt/eff.org/certbot/venv/bin/certbot certonly --webroot -w /srv/web/gardensofstone.org.au/web -d gardensofstone.org.au -d www.gardensofstone.org.au -d destinationpagoda.com -d www.destinationpagoda.com -d destinationpagoda.com.au -d www.destinationpagoda.com.au --no-bootstrap


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
