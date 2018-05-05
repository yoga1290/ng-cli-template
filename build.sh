GLOBAL_NODEJS_PACKAGES=$(npm root -g)
COLLECTION_PATH='@custom/pug'

# copy original templates to new collection
sudo cp -R \
  $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/@schematics/angular \
  $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_PATH

# overwrite/update templates:
sudo cp -R . $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_PATH
