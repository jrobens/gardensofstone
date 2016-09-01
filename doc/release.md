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
