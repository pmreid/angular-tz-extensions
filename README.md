Angular TZ Extensions

Originally forked from  https://github.com/michaelahlers/angular-timezones.

### Install 

Install using [Bower](https://github.com/bower/bower):

    bower install angular-tz-extensions

Once installed include the follwing scripts in your app:

    <script type="text/javascript" src="/bower_components/timezone-js/src/date.js"></script>
    <script type="text/javascript" src="/packages/jstimezonedetect/jstz.min.js"></script>
    <script type="text/javascript" src="/bower_components/angular-tz-extensions/lib/angular-tz-extensions.js"></script>

## Usage

After including `angular-timezones.js`, add this package to your application.

    var yourApplication = angular.module('your-application', ['Timezones'])

### Configuration

This package provides the [IANA timezone data](http://iana.org/time-zones), but you may have this resource served from a different location or you may wish to provide your own data. To change that location, set the `$timezones.definitions.location` property to the appropriate path or URL.

    yourApplication.constant('$timezones.definitions.location', '/custom/path/to/tz/data')

This is done by the unit tests and illustrated in `docs/examples`.

### Resolution

The `$timezones.resolve(timezone, reference)` function will, using the reference `Date` provided, look up complete details about the timezone&mdash;including the abbreviation, offset, and decomposed region and locality. This is useful for avoiding clever tricks to extract abbreviations from `Date.toString` (which is not particularly portable or robust). Additionally, resulting values are derived from the authoritative IANA timezone data.

### Detection

If [jsTimezoneDetect](https://bitbucket.org/pellepim/jstimezonedetect) is included, the `$timezones.getLocal()` function will detect the browser's local timezone and provide a complete definition that's resolved against the IANA database. For convenience, jsTimezoneDetect is included in packages/jstimezonedetect. You may want to pull the latest version in from bitbucket.

## Examples

A sample application is included. Run it locally using [Node](http://nodejs.org):

    node scripts/web-server.js

Once running, point your browser to http://localhost:8000/app/filters.html

## Developers

_Timezones for Angular_ is tested with [Karma](http://karma-runner.github.io/) and [PhantomJS](http://phantomjs.org/) against the latest available release of [jQuery](http://jquery.com/) (2.0.0) and [AngularJS](http://angularjs.com/) (1.1.4).

With [NPM](http://npmjs.com/) installed, you can test your modifications with the following.

```
npm install
npm test
```
