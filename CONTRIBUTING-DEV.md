# CONTRIBUTING FRONT-END DEVELOPMENT CHANGES

This set of steps can be ignored unless you're changing Sass or JavaScript
files.

## SETUP

### INSTALL
1. Install Node

 Go to [nodejs.org](https://nodejs.org/en/) and install the latest stable
 version of node recommended for you. There should be a big green button on the
 home page.

2. Install Project Dependencies with NPM

 Installing Node automatically installs NPM on your computer. Now, you need
 to use NPM to install the development dependencies listed in the
 `package.json` file for this project.

	First, you'll navigate to the root directory for this project
	(ie. "wherever-you-cloned-it" or "wherever-package.json-lives"). Second,
	you'll run `npm install`.
```sh
cd ~/wherever-you-cloned-it
npm install
```

## CHANGE FILES

Changes to the Sass stylesheets should be made in `static/scss`.

Changes to JavaScript files should be made to files in the `static/js/app`
directory or to `static/js/app.js`.

## COMPILE

To compile your Sass to CSS, run
```sh
npm run build:css
```
To compile your JavaScript, run
```sh
jspm bundle-sfx --minify js/app
```
and then move `build.js` to the `js` directory.
