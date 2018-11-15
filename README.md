Basically, my customized Angular CLI templates.

That's **not the best practice to follow** but the easiest/fastest clue for now; may evolve it later

# Setup

### Requirements

+ [Node & NPM](https://github.com/nodejs/help/wiki/Installation)
+ `npm i -g @angular/cli`

### Install
+ `npm i` (this will trigger `build.sh`)

### Use collections
+ `ng new --collection=@custom/$COLLECTION_DIR_NAME $PROJECT_NAME`


### Overwriting the original template

Basically, you make sure angular-cli is installed, clone me & overwrite `@schematics/angular`, e.g:
```bash
GLOBAL_NODEJS_PACKAGES=$(npm root -g)

cp -R $COLLECTION \
$GLOBAL_NODEJS_PACKAGES/@angular/cli/node_modules/@schematics/angular
```

### Creating a new collection

You can alter only the changed files from the default template at `$(npm root -g)/@schematics/angular`, save then in a new directory and add it to the list array in `build.sh`

### ref:
+ [Generating Custom Code With The Angular CLI And Schematics](http://www.softwarearchitekt.at/post/2017/10/29/generating-custom-code-with-the-angular-cli-and-schematics.aspx)
+ [Creating your own application template for angular-cli](https://blog.angularindepth.com/creating-your-own-application-template-for-angular-cli-95e22319cc24)
+ [Schematics — An Introduction](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)
