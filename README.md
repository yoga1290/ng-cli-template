Basically, my customized Angular CLI templates.

That's **not the best practice to follow** but the easiest/fastest clue for now; may evolve it later


# Setup

### Requirements

+ [Node & NPM](https://github.com/nodejs/help/wiki/Installation)
+ `npm i -g @angular/cli`

### Overwriting originals
Basically, you make sure angular-cli is installed, clone me & overwrite `@schematics/angular`, e.g:
```bash
GLOBAL_NODEJS_PACKAGES=$(npm root -g)
cp -R * $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/@schematics/angular
```

### New collection

Alternatively, you can copy it as a new collection(s) w/out overwriting the original templates, e.g:
```bash
GLOBAL_NODEJS_PACKAGES=$(npm root -g)
COLLECTION_PATH='@custom/pug' #TODO: you may change it
mkdir -p $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_PATH

# copy original templates
sudo cp -R $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/@schematics/angular/* $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_PATH
# overwrite them
sudo cp -R * $GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/$COLLECTION_PATH
# then pass the collection relative path (@custom/pug):
ng new --collection=$COLLECTION_PATH
```

### ref:
+ [Generating Custom Code With The Angular CLI And Schematics](http://www.softwarearchitekt.at/post/2017/10/29/generating-custom-code-with-the-angular-cli-and-schematics.aspx)
+ [Creating your own application template for angular-cli](https://blog.angularindepth.com/creating-your-own-application-template-for-angular-cli-95e22319cc24)
