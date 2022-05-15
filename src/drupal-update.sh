#  src/drupal-update.sh -y

minor_updates=$1
job='CBI'

updates=$(composer outdated --minor-only --direct)
echo "updates are: \n ${updates}"

if [[ $updates =~ 'drupal/core' ]]; then
  composer update 'drupal/core-*' --with-all-dependencies
fi

today=$(date '+%Y-%m-%d')
updates_clean=$(echo $updates | awk '{print $1 $2}' | sed 's/\n/ /g')
work_log="*:JR:${today}:${job}:0.2: sys+ update module. ${updates_clean}\n"
sed -i.old "1s;^;${work_log};" doc/work.md


# composer outdated
# composer update 'drupal/*'
if [[ $minor_updates == '-y' ]]; then
  module_updates=$(echo "$updates" | awk '{print $1}')
  echo "Non core drupal modules that need updating: ${module_updates}"
  for module_update in ${module_updates}; do
    echo "updating ${module_update}"
    composer update "${module_update}" --with-dependencies
  done
fi

# Modules that are not 'direct'
non_direct_updates=$(composer outdated | grep "^drupal" | grep -v "core")
echo "Non-direct drupal updates are: \n ${non_direct_updates}"
if [[ $minor_updates == '-y' ]]; then
	module_updates=$(echo "${non_direct_updates}" | awk '{print $1}')
	for module_update in ${module_updates}; do
		echo "updating ${module_update}"
		composer update "${module_update}"
	done
fi

## More outdated items
set -x
all_updates=$(composer outdated)
all_updates_clean=$(echo all_updates | awk '{print $1 $2}' | sed 's/\n/ /g')
all_updates_clean_drupal=$(echo all_updates_clean | grep "^drupal")
echo "More updates (run manually) ${all_updates_clean_drupal}"
