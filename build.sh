GLOBAL_NODEJS_PACKAGES=$(npm root -g)

## declare an array variable
declare -a arr=("pug" "pug")

## now loop through the above array
for COLLECTION in "${arr[@]}"
do
   echo "$COLLECTION"
   COLLECTION_DEST_PATH="@custom/$COLLECTION"
   # COLLECTION_DEST_PATH='@schematics/angular' # make it default?

   # copy original templates to new collection
   sudo cp -fR \
     $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/@schematics/angular/* \
     $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_DEST_PATH

   # overwrite/update templates:
   sudo cp -R $COLLECTION $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_DEST_PATH

done
