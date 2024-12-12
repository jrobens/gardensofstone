#!/bin/sh

master_password=$1

. ./sec/.env

crm='yes'

# could do this all with one sql script
mysql -u "${root_user}" -D mysql -e "drop database $database ;"
mysql -u "${root_user}" -D mysql -e "create database $database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u "${root_user}" -D mysql -e "grant all privileges on $database.* to '$username'@'localhost' identified by '$password';"

# load the data
ssh "${remote_host}" "mysqldump --user=${remote_db} --password=${password} --ignore-table=${database}.cache_dynamic_page_cache --single-transaction=TRUE ${remote_db}" |mysql -u "${root_user}" -D ${database}


if [ "${crm}" = 'yes' ]
then
        mysql -u "${root_user}" -D mysql -e "drop database $database_crm;"
        mysql -u "${root_user}" -D mysql -e "create database $database_crm DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

        # load the data
        ssh "${remote_host}" "mysqldump --user=${remote_crm_db} --password=${password_crm} --single-transaction=TRUE ${remote_crm_db}" |mysql -u "${root_user}" -D ${database_crm}
        mysql -u "${root_user}" --password="${master_password}" -D mysql -e "grant all privileges on $database_crm.* to '$username_crm'@'localhost' identified by '$password_crm';"
        mysql -u "${root_user}" --password="${master_password}" -D mysql -e "grant all privileges on $database_crm.* to '$username'@'localhost';"

	rm web/files/civicrm/ConfigAndLog/Config.IDS.ini
	rm -r web/files/civicrm/templates_c/*
	rm web/files/civicrm/ConfigAndLog/*
fi

sh ./src/dr.sh cr
