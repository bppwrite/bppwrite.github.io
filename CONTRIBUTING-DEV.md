# CONTRIBUTING FRONT-END DEVELOPMENT CHANGES

<!-- MDTOC maxdepth:6 firsth1:2 numbering:0 flatten:0 bullets:1 updateOnSave:1 -->

- [SETUP](#setup)
   - [INSTALL](#install)
- [SASS](#sass)
   - [OVERVIEW](#overview)
   - [COMPILE](#compile)
- [JAVASCRIPT](#javascript)
   - [OVERVIEW](#overview)
      - [FILES](#files)
      - [DEPLOYMENT](#deployment)
   - [COMMANDS](#commands)
      - [COMPILE](#compile)
      - [INSTALLING THIRD-PARTY LIBRARIES](#installing-third-party-libraries)
   - [TROUBLESHOOTING AND REFERENCES](#troubleshooting-and-references)
- [SITE DEPLOYMENT](#site-deployment)

<!-- /MDTOC -->

## SETUP

### INSTALL

1. Install Node

  Go to [nodejs.org](https://nodejs.org/en/) and install the latest stable version of node recommended for you. There should be a big green button on the home page.

2. Install Dependencies with NPM

  If you completed step one and installed Node, NPM was automatically installed on your computer. Now, you need to use NPM to install our dependencies (these are listed in the `package.json` file for this project, if you're curious).

  First, navigate to the root directory for this project (ie. "wherever-you-cloned-it" or "wherever-package.json-lives"). Second, you'll run `npm install`.

  ```sh
  cd ~/wherever-you-cloned-it
  npm install
  ```

3. Install jspm (and Some More Dependencies)

  jspm is used to bundle the JavaScript we write with the third-party libraries we use into one file for deployment. It's also used to install those third-party libraries.

  First, you need to install the jspm command line interface on your computer

  ```sh
  npm install jspm -g
  ```

  Next, you need to install some more third-party JavaScript libraries using jspm

  ```sh
  jspm install
  ```

## SASS

Changes to the Sass stylesheets should be made in the sub-directories within `static/scss/`.

### OVERVIEW

`static/scss/main.scss` imports the `_index.scss` file found in each of the sub-directories, which in turn import each Sass partial in the same directory.

### COMPILE

To compile your Sass to CSS, run

```sh
npm run build:css
```

## JAVASCRIPT

### OVERVIEW

#### FILES

The `static/js/` directory includes:

- `app.js` - the point of entry for our JavaScript code
- `build.js` - the final compiled file we desploy, which is created when we use jspm to bundle our files. `build.js` is the equivalent to deploying `app.js` + SystemJS.
- `config.js` - automatically maintained by jspm. It's the configuration file for SystemJS, including how to find each of our third-party dependencies and our application
- `\jspm_packages\` - a directory ignored by git that should hold all packages installed by jspm (it's the jspm equivalent to a `node_modules` directory)
- `\app\` - a directory intended to hold modules imported into `app.js`

#### DEPLOYMENT

_The following is automated via Wercker (see [SITE DEPLOYMENT](#site-deployment)), making any manual changes to the code is unnecessary prior to deploying._

We use [SystemJS](https://github.com/systemjs/systemjs) to be able to write and deploy JavaScript as modules, and [jspm](http://jspm.io/) to bundle those modules and our third-party libraries for faster page loads.

SystemJS evaluates what we've written and imported into `app.js` to determine which files should be loaded on the page, including the modules we wrote in the `static\js\app\` sub-directory and any third-party libraries we imported into those modules (or directly into `app.js`). Any file that isn't eventually imported into `app.js` will not be loaded by SystemJS.

When used directly on a webpage, SystemJS makes a separate xhr request for every imported module, which is why we bundle everything using jspm for deployment. jspm will use SystemJS to determine what modules are imported into `app.js`, and then bundle them into one file (`build.js`).

To use SystemJS alone, include the following script (to load SystemJS, then the configuration file that lets SystemJS know how to find each module and third-party library, and then to import `app.js` into SystemJS):

```ssh
<script src="/js/jspm_packages/system.js"></script>
<script src="/js/config.js"></script>
<script>
  System.import('/js/app').catch(function(err){ console.error(err); });
</script>
```

When you have a build file from jspm, you just need to deploy that build file:

```ssh
<script src="/js/build.js"></script>
```

### COMMANDS

#### BUILD

To build your JavaScript once, run

```sh
npm run build:js
```

To watch for changes and create a new build file on each save, run

```sh
npm run watch:js
```

#### INSTALLING THIRD-PARTY LIBRARIES

To add a new dependency, install it using jspm, for example:

```ssh
jspm install npm:lodash-node
```

Then, jspm would automatically update our `config.js` file so SystemJS knows where to find lodash. We would ultimately need to import lodash directly into `app.js` or indirectly via another module we wrote in `js\app\` and in turn import into `app.js`.

### TROUBLESHOOTING AND REFERENCES

The jspm [getting started guide](http://jspm.io/docs/getting-started.html) can help to explain the role of jspm and SystemJS.

Rerunning `npm install` and `jspm install` before compiling with `jspm bundle-sfx --minify js/app` would be necessary if any new packages were added to `package.json` on your last pull from the repository. This could be easy to overlook, since `build.js` should include all dependencies.

## SITE DEPLOYMENT

Deployment is achieved via [Wercker](https://app.wercker.com/bppwrite/bppwrite.github.io). The build steps in [wercker.yml](wercker.yml) dictate how this is done.

A [custom Docker image](https://hub.docker.com/r/marcguyer/docker-golang-npm/) was created for this purpose and includes the needed versions of Go and Nodejs.

Wercker is engaged immediately after a new commit (or a set of commits) is pushed to the Github repository. Wercker, via it's configured build steps, compiles and minifies the javascript and scss code, builds the Hugo site, then deploys the resulting static files to the [master branch](bppwrite/bppwrite.github.io/tree/master)

The latest build is automatically rerun every morning at 7am so that date-based logic can be somewhat dynamic. This is scheduled via @marcguyer's Zapier account.
