Basically, my customized Angular CLI templates.

That's **not the best practice to follow** but the easiest/fastest clue for now; may evolve it later

Basically, you make sure angular-cli is installed, clone me & overwrite `@schematics/angular`, e.g:
```bash
cp -R * /usr/local/lib/node_modules/@angular/cli/node_modules/@schematics/angular #macOS, differ on other OS
```

Alternatively, you can copy it as a new collection(s) w/out overwriting the original templates, e.g:
```bash
cp -R * /usr/local/lib/node_modules/@angular/cli/node_modules/@custom/pug #macOS, differ on other OS
# then pass the collection relative path (@custom/pug):
ng new --collection=@custom/pug whateverApp
```

### ref:
+ [Generating Custom Code With The Angular CLI And Schematics](http://www.softwarearchitekt.at/post/2017/10/29/generating-custom-code-with-the-angular-cli-and-schematics.aspx)
+ [Creating your own application template for angular-cli](https://blog.angularindepth.com/creating-your-own-application-template-for-angular-cli-95e22319cc24)
