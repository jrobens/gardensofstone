#  src/drupal-update.sh -y

minor_updates=$1
job='GOS'
today=$(date '+%Y-%m-%d')

UPDATES_REPORT=$(composer outdated --direct "drupal/*" --format=json | \
  jq -r '.installed[] | "\(.name) (\(.version) -> \(.latest))"' 2>/dev/null)

if [ -z "$UPDATES_REPORT" ]; then
    echo "No Drupal updates available."
    exit 0
fi
updates_clean=$(echo "$UPDATES_REPORT" | awk '{print $1}' | tr '\n' ' ')
work_log="*:JR:${today}:${job}:0.2: sys+ update drupal. ${updates_clean}\n"
sed -i.old "1s;^;${work_log};" doc/work.md



echo -e "Proposed Updates:\n$UPDATES_REPORT"
composer update "drupal/*" --with-all-dependencies

PENDING_DB_UPDATES=$(vendor/bin/drush updatedb:status --format=list 2>/dev/null)

## Update the release file
ex doc/RELEASE.md <<eof
1 insert
## Updates ${today}

    ${UPDATES_REPORT}
    ${PENDING_DB_UPDATES:-None}
.
xit
eof

vendor/bin/drush updb -y
vendor/bin/drush cr

## More outdated items
all_updates_clean_drupal=$(composer outdated --format=json | jq -r '.installed[] | select(.name | startswith("drupal/")) | .name' | tr '\n' ' ')
echo "More updates (run manually): ${all_updates_clean_drupal}"
