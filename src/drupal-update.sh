#!/bin/bash
#  src/drupal-update.sh -y

. ./sec/.env

job='GOS'
today=$(date '+%Y-%m-%d')
chmod 444 web/sites/default/civicrm.settings.php
composer clear-cache

RAW_OUTPUT=$(composer outdated --direct --all --format=json 2>/dev/null)
UPDATES_JSON=$(echo "$RAW_OUTPUT" | sed -n '/{/,$p')
if ! echo "$UPDATES_JSON" | jq -e '.installed' >/dev/null 2>&1; then
    echo "❌ Error: Could not parse clean JSON. Composer raw output was:"
    echo "$RAW_OUTPUT"
    exit 1
fi
PATTERN="drupal/|civicrm/"
UPDATES_REPORT=$(echo "$UPDATES_JSON" | jq -r --arg pat "$PATTERN" \
  '.installed[]? | select(.name | test($pat)) | select(.version != .latest) | "* \(.name) (\(.version) -> \(.latest))"')


# Filter for drupal/ or civicrm/ updates where latest version is newer than installed
UPDATES_REPORT=$(echo "$UPDATES_JSON" | jq -r --arg pattern "drupal/|civicrm/" \
  '.installed[]? | select(.name | test($pattern)) | select(.version != .latest) | "* \(.name) (\(.version) -> \(.latest))"')

if [ -z "$UPDATES_REPORT" ]; then
    echo "No Drupal or CiviCRM updates available."
    exit 0
fi

# Log tracking info
updates_clean=$(echo "$UPDATES_REPORT" | awk '{print $2}' | tr '\n' ' ')
work_log="*:JR:${today}:${job}:0.2: sys+ update drupal & civicrm. ${updates_clean}\n"
sed -i.old "1s;^;${work_log};" doc/work.md

echo -e "Proposed Updates:\n$UPDATES_REPORT"

# 4. Generate the exact target constraint versions (e.g. civicrm/civicrm-core:^6.16)
REQUIRE_ARGS=$(echo "$UPDATES_JSON" | jq -r --arg pat "$PATTERN" '
  .installed[]?

  | select(.name | test($pat))
  | select(.version != .latest)

  | if (.name | contains("civicrm/")) then
      "\(.name):^\(.latest | split(".")[0]).\(.latest | split(".")[1])"
    else
      "\(.name):\(.latest)"
    end' | tr '\n' ' ')

# 3. Execute the upgrade using require to forcefully bump constraints
echo "⏳ Upgrading packages and adjusting constraints..."
eval "composer require $REQUIRE_ARGS --with-all-dependencies --no-interaction"

# 4. Handle Post-Upgrade Hooks (Drush & CiviCRM)
PENDING_DB_UPDATES=$(vendor/bin/drush updatedb:status --format=list 2>/dev/null)

## Update the release file
ex doc/RELEASE.md <<eof
1 insert
## Updates ${today}

    ${UPDATES_REPORT}
    Database updates: ${PENDING_DB_UPDATES:-None}
.
xit
eof

# Run Drupal database updates
vendor/bin/drush -l "$URL" updb -y
vendor/bin/cv -l "$URL" upgrade:db
vendor/bin/drush cr

## More outdated items (looks for all drupal/ and civicrm/ packages)
all_updates_clean=$(composer outdated --format=json 2>/dev/null | jq -r '.installed[] | select(.name | test("drupal/|civicrm/")) | .name' | tr '\n' ' ')
echo "More updates (run manually): ${all_updates_clean}"
