# Brno list

Brno list is a hybrid mobile application that presents an opinionated list of good go-out places in Brno, Czech republic, created as a way to try some new technology.

Built with:
- [Bower](http://bower.io/)
- [Gulp](http://gulpjs.com/)
- [Apache Cordova](https://cordova.apache.org/)
- [Backbone.js](http://backbonejs.org/)
- [Foundation](http://foundation.zurb.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Jasmine](http://jasmine.github.io/)

## Build requirements

Install Node.js/npm. Then install Bower, Gulp and Cordova npm packages.

```
npm install -g bower
npm install -g gulp
npm install -g cordova
```

## Build application

Clone repository and download dependencies:
```
git clone https://github.com/stribny/brno-list.git
cd brno-list
bower install
```

Copy resources for Cordova mobile app via Gulp:
```
npm install gulp --save-dev 
gulp
```

Build the mobile application (Android in this case):
```
cd app
cordova platforms add android
cordova build
```

## Run tests

To run tests, open `SpecRunner.html` in a browser.

Author: [Petr Stříbný](http://stribny.name)
