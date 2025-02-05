export project=$1
no_update=$2
sh ./src/dr.sh pm:uninstall $project
cd /Users/jrobens/NetBeansProjects/patching || exit
tar -cf - --exclude=$project/.git --exclude=$project/.idea $project | (cd ~/Sites/gardensofstone2/web/modules/patched; tar -xf -)
cd -

if [ -z $no_update ]; then
  composer remove drupal/$project
else
  composer remove drupal/$project --no-update
fi

sh ./src/dr.sh en -y $project
