#!/bin/bash
#  src/drupal-update.sh -y

minor_updates=$1
job='GOS'
today=$(date '+%Y-%m-%d')

# Fetch direct outdated packages (including those restricted by constraints)
UPDATES_REPORT=$(composer outdated --direct --format=json 2>/dev/null | \
  jq -r --arg pattern "drupal/|civicrm/" '.installed[]? | select(.name | test($pattern)) | "\(.name) (\(.version) -> \(.latest))"')
if [ -z "$UPDATES_REPORT" ]; then
    echo "No Drupal or CiviCRM updates available."
    exit 0
fi

updates_clean=$(echo "$UPDATES_REPORT" | awk '{print $1}' | tr '\n' '    ')
work_log="*:JR:${today}:${job}:0.2: sys+ update drupal & civicrm. ${updates_clean}\n"
sed -i.old "1s;^;${work_log};" doc/work.md

echo -e "Proposed Updates:\n$UPDATES_REPORT"
# Update both Drupal packages and civicrm/core simultaneously
composer update $updates_clean --with-all-dependencies

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

# Run Drupal database updates
vendor/bin/drush updb -y

# Run CiviCRM database updates
vendor/bin/cv upgrade:db

# Clear Drupal caches
vendor/bin/drush cr

## More outdated items (looks for all drupal/ and civicrm/ packages)
all_updates_clean=$(composer outdated --format=json 2>/dev/null | jq -r '.installed[] | select(.name | test("drupal/|civicrm/")) | .name' | tr '\n' ' ')
echo "More updates (run manually): ${all_updates_clean}"
