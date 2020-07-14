
# Domain with 

crazydomains.com.au

# DNS with

zonomi.com

# Release Notes for gardensofstone.org.au
Repo:
- git clone -b 1.1.x git@svn:ild/gardensofstone.git /srv/dev/gardensofstone.org.au
- git clone -b 1.1.x git@svn:src/sql/ild/gardensofstone.git /srv/dev/gardensofstone.org.au/src/sql

# Release 1.1.x
- MC: setup for git push deployment method

# Release 1.0.x
- MC: initial install

# GIT Setup
- assumes your install is at /srv/dev/gardensofstone.org.au and remote is at /srv/web/gardensofstone.org.au
- git clone git@svn:ild/gardensofstone.git /srv/dev/gardensofstone.org.au
- git checkout 1.1.x
- add to .git/config
  [remote "uat"]
    url = git@ruby:uat/ild/gardensofstone
    push = 1.1.x
  [remote "web"]
    url = git@ruby:web/ild/gardensofstone
    push = 1.1.x
- UAT: deploy changes do 'git push && git push uat'
- WEB: deploy changes do 'git push && git push web'
- nb: git hook on dev is 'GIT_WORK_TREE=/srv/web/gardensofstone.org.au git checkout -f 1.1.x'

# Local Drupal Setup
# httpd: check sudo and confirm you are at /srv/dev/gardensofstone.org.au
sudo pwd
  cp src/cfg/gardensofstone.org.au /etc/httpd/conf/srv/dev/
  sudo mkdir /var/log/httpd/dev.gardensofstone.org.au && htrestart
- add to /etc/hosts: 127.0.0.1 dev.gardensofstone.org.au
- confirm at: http://dev.gardensofstone.org.au/status.php
# drupal: confirm you are at /srv/dev/gardensofstone.org.au
  mysql -u root -pmysqlroot -D mysql -e "create database gos_cms DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;"
  mysql -u root -pmysqlroot -D mysql -e "grant all privileges on gos_cms.* to 'gos_cms'@'localhost' identified by 'gos_cms'"
  gunzip < src/sql/gos_cms.sql.gz | mysql -ugos_cms -pgos_cms -D gos_cms
  cp src/cfg/settings.php web/sites/default/settings.php
- to sync files: drush rsync @web:%files @dev:%files

# Local CiviCRM Setup
# civicrm: confirm you are at /srv/dev/gardensofstone.org.au
  mysql -u root -pmysqlroot -D mysql -e "create database gos_crm DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;"
  mysql -u root -pmysqlroot -D mysql -e "grant all privileges on gos_crm.* to 'gos_crm'@'localhost' identified by 'gos_crm'"
  gunzip < src/sql/gos_crm.sql.gz | mysql -ugos_crm -pgos_crm -D gos_crm
  cp src/cfg/civicrm.settings.php web/sites/default/civicrm.settings.php
- confirm at: http://dev.gardensofstone.org.au/civicrm for logged in user
- CiviCRM needs a directory for templates etc
  mkdir -p web/files/civicrm/assets

-- END --

# REF
# /srv/env/adm/src/tpl/release.tpl.md
# hosts
122.100.15.225 svn
223.252.24.147 ruby
114.111.128.95 topaz


Dear Carmen and Julie,

1/- No you have it covered, but the last point is the most important point of all, for with volunteers everything is possible (as Clover proved yesterday)

Important wording changes:

Asks are:
Make a donation (tax-deductible)
Buy something at the auction
Go on a walk in the Gardens of Stone and see the beauty of the place for yourself (buy the visitors map and speak with Yuri and sign up for a walk with him)
Talk, tweet and facebook about it and raise awareness
Become a Gardens of Stone protector by making a submission through the Gardens of Stone website
Join the activists working group for the Gardens of Stone
Explanations (should you need one)

Everything goes via the Gardens of Stone website (not Colong website). This website will be a single point of contact and a single page that diverts GoS supporters, like a traffic light, to the most current actions that groups in the Gardens of Stone Alliance are doing...!

The page has the basics who what where stuff of GoS campaign and the video, if Josh finishes it in time for John to get it on the site.

2/- So make a submission on the Gardens of Stone website, it actually diverts to the Colong website
The point should be worded "Become a Gardens of Stone Protector" - (they still go to the Colong website but nobody needs to have this explained to them, its too complicated) and the submission form is currently a default call for the reservation of the Gardens of Stone and the webform will also ask them to become a Gardens of Stone protector...

3/ And there will be a Gardens of Stone Brochure will reinforce this above advice.

It will all make sense when in action:


The 'ask list' on the brochure in press is...

JOIN THE CAMPAIGN NOW!
■■ Become a member of one of the conservation
groups within the Gardens of Stone Alliance.
■■ Write to the NSW Minister for the Environment
calling for the immediate reservation of the area.
■■ Write to your local newspaper, or call your local
radio station, or use social media to voice your
concerns about the area.
■■ Visit the area with friends and see for yourself
the wonderful pagoda country of the Gardens of
Stone.
■■ Discuss the proposal in a meeting with your
local member of parliament.
■■ Become a Gardens of Stone protector, go to
www.gardensofstone.org.au
■■ Purchase the Gardens Stone Visitors Map, go to
www.gardensofstone.org.au
■■ Tax-deductible donations can also be made via
www.gardensofstone.org.au

Bye,
