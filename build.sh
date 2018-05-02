GLOBAL_NODEJS_PACKAGES=$(npm root -g)
COLLECTION_PATH='@custom/pug'
sudo cp -R . $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_PATH
