# CONTRIBUTING FRONT-END DEVELOPMENT CHANGES

<!-- MDTOC maxdepth:6 firsth1:2 numbering:0 flatten:0 bullets:1 updateOnSave:1 -->

- [SETUP](#setup)
   - [INSTALL](#install)
- [WEBPACK](#webpack)
   - [WHAT IS THIS](#what)
   - [HOW DO I USE IT](#how)
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

2. Install Dependencies with npm

  If you completed step one and installed Node, npm was automatically installed on your computer. Now, you need to use npm to install our the packages our site depends on (these are listed in the `package.json` file for this project).

  First, navigate to the root directory for this project (ie. "wherever-you-cloned-it").

  Second, run `npm install`.

  ```sh
  cd ~/wherever-you-cloned-it
  npm install
  ```

## WEBPACK

### WHAT IS THIS

We use [webpack](https://webpack.js.org/) to take our Sass and JavaScript files and prepare them for our website. webpack was installed for this project when you ran `npm install`.

### HOW DO I USE IT

```sh
npm run build
```

`npm run build` will rerun the process of taking our Sass and JavaScript files, and preparing them for the site. Whenever you run `npm install`, a postinstall script will run `npm run build`.

## SASS

### OVERVIEW

Changes to the stylesheets should be made in the sub-directories within `static/scss/`.

`static/scss/main.scss` imports the `_index.scss` file found in each of the sub-directories, which in turn import each Sass partial in the same directory.

### COMPILE

Use [webpack](#how).

## JAVASCRIPT

### OVERVIEW

`app.js` in the `static/js/` directory is the entry point for all of our JavaScript code.

#### COMPILE

Use [webpack](#how).

## SITE DEPLOYMENT

Deployment is achieved via [Wercker](https://app.wercker.com/bppwrite/bppwrite.github.io). The build steps in [wercker.yml](wercker.yml) dictate how this is done.

A [custom Docker image](https://hub.docker.com/r/marcguyer/docker-golang-npm/) was created for this purpose and includes the needed versions of Go and Nodejs.

Wercker is engaged immediately after a new commit (or a set of commits) is pushed to the Github repository. Wercker, via it's configured build steps, compiles and minifies the javascript and scss code, builds the Hugo site, then deploys the resulting static files to the [master branch](bppwrite/bppwrite.github.io/tree/master)

The latest build is automatically rerun every morning at 7am so that date-based logic can be somewhat dynamic. This is scheduled via @marcguyer's Zapier account.
