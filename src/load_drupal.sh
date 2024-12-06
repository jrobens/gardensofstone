#!/bin/sh

master_password=$1

database=gos2_cms
username=gos2_cms
password=MJdo9rUk6c]a4T1TTEv
remote_db=gos_cms
remote_host=jrobens@topaz

crm=yes
database_crm=gos2_crm
username_crm=gos2_crm
password_crm=MJdo9rUk6c]a4T1TTEv
remote_crm_db=gos_crm

if [[ -z ${master_password} ]]
then
	echo "Usage: prog password"
	echo "This will drop and recreate the drupal and civicrm databases"
	exit
fi

# could do this all with one sql script
mysql -u root --password=${master_password} -D mysql -e "drop database $database ;"
mysql -u root --password=${master_password} -D mysql -e "create database $database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u root --password=${master_password} -D mysql -e "grant all privileges on $database.* to '$username'@'localhost' identified by '$password';"

# load the data
ssh "${remote_host}" "mysqldump --user=${remote_db} --password=$password ${remote_db}" |mysql -u root --password=${master_password} -D ${database}
#gunzip -c /Users/johnrobens/Sites/sql/cn-climatebonds/clb_cn_cms.sql.gz | mysql -u $username --password=$password -D $database


if [[ "${crm}" == 'yes' ]]
then
        mysql -u root --password=$master_password -D mysql -e "drop database $database_crm;"
        mysql -u root --password=$master_password -D mysql -e "create database $database_crm DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

        # load the data
        ssh "${remote_host}" "mysqldump --user=${remote_crm_db} --password=${password} ${remote_crm_db}" |mysql -u root --password=${master_password} -D ${database_crm}
        #gunzip -c /Users/johnrobens/Sites/sql/cn-climatebonds/clb_cn_cms.sql.gz | mysql -u $username_crm --password=$password_crm -D $database_crm
        mysql -u root --password="${master_password}" -D mysql -e "grant all privileges on $database_crm.* to '$username_crm'@'localhost' identified by '$password_crm';"

fi

# (cd web && drush8 dis -y securepages)

if [[ "${crm}" == 'yes' ]]
then
	rm web/files/civicrm/ConfigAndLog/Config.IDS.ini
	rm -r web/files/civicrm/templates_c/*
	rm web/files/civicrm/ConfigAndLog/*
fi

drush cr

# drush cvupcfg
# drush vdel civicrm_class_loader


#Thicket-forming, shade-tolerant Psidium cattleianum spells ecological disaster for World Heritage Area rainforests. Inset: fruits (top) and dense multi-stems (bottom)
