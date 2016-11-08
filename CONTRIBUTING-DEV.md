# CONTRIBUTING FRONT-END DEVELOPMENT CHANGES

This set of steps can be ignored unless you're changing Sass or JavaScript
files.

## SETUP

### INSTALL
1. Install Node

 Go to [nodejs.org](https://nodejs.org/en/) and install the latest stable
 version of node recommended for you. There should be a big green button on the
 home page.

2. Install Dependencies with NPM

 If you completed step one and installed Node, NPM was automatically installed
 on your computer. Now, you need to use NPM to install our dependencies (these
	 are listed in the `package.json` file for this project, if you're curious).

	First, navigate to the root directory for this project
	(ie. "wherever-you-cloned-it" or "wherever-package.json-lives"). Second,
	you'll run `npm install`.
```sh
cd ~/wherever-you-cloned-it
npm install
```

3. Install jspm (and Some More Dependencies)

 jspm is used to bundle the JavaScript we write with the third-party libraries
 we use into one file for deployment. It's also used to install those
 third-party libraries.

 First, you need to install the jspm command line interface on your computer
 ```sh
 npm install jspm -g
 ```
 Next, you need to install some more third-party JavaScript libraries using jspm
 ```sh
 jspm install
 ```



## CHANGE FILES

Changes to the Sass stylesheets should be made in `static/scss`. The sass files
are further categorized into folders within `static/scss`.

JavaScript changes should be made to files in the `static/js/app`
directory or to `static/js/app.js`. `config.js` is automatically maintained by
jspm. `build.js` is the final file we deploy, which is created when we
use jspm to bundle our files.

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
