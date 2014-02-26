# Timezones for AngularJS [![Build Status](https://secure.travis-ci.org/michaelahlers/angular-timezones.png)](http://travis-ci.org/michaelahlers/angular-timezones)

[AngularJS](http://angularjs.com/) features for [TimezoneJS](https://github.com/mde/timezone-js)-enhanced JavaScript `Date` objects.

## Inclusion

### Bower

[Bower](https://github.com/bower/bower) users can add the following to their package dependencies. Be sure to see [_tags_](https://github.com/michaelahlers/angular-timezones/tags) for a list of available versions.

```json
{
  "dependencies" : {
    "angular-timezones" : "git@github.com:michaelahlers/angular-timezones.git#0.3.8"
  }
}
```

## Usage

After including `angular-timezones.js`, add this package to your application.

```javascript
var yourApplication = angular.module('your-application', ['Timezones'])
```

### Configuration

This package provides the [IANA timezone data](http://iana.org/time-zones), but you may have this resource served from a different location or you wish to provide your own data. To change that location, set the `$timezones.definitions.location` property to the appropriate path or URL.

```javascript
yourApplication.constant('$timezones.definitions.location', '/custom/path/to/tz/data')
```

This is done by the unit tests and illustrated in `docs/examples`.

### Resolution

The `$timezones.resolve(timezone, reference)` function will, using the reference `Date` provided, look up complete details about the timezone&mdash;including the abbreviation, offset, and decomposed region and locality. This is useful for avoiding clever tricks to extract abbreviations from `Date.toString` (which is not particularly portable or robust). Additionally, resulting values are derived from the authoritative IANA timezone data.

### Detection

If [jsTimezoneDetect](https://bitbucket.org/pellepim/jstimezonedetect) is included, the `$timezones.getLocal()` function will detect the browser's local timezone and provide a complete definition that's resolved against the IANA database.

## Examples

See `docs/examples` for demonstrations of these features. As timezone data (found in `tz/data`) _must_ be served from a web server, these examples will not work from the local disk. A quick solution is to use the included node web-server.js script. With [node](http://nodejs.org) installed run 'node scripts/web-server.js', and point your browser to http://localhost:8000/docs/examples/filters.html

```shell
python -m SimpleHTTPServer
```

Once running, visit `http://localhost:8000/` in your web browser, and navigate to the examples folder.

## Developers

_Timezones for Angular_ is tested with [Karma](http://karma-runner.github.io/) and [PhantomJS](http://phantomjs.org/) against the latest available release of [jQuery](http://jquery.com/) (2.0.0) and [AngularJS](http://angularjs.com/) (1.1.4).

With [NPM](http://npmjs.com/) installed, you can test your modifications with the following.

```
npm install
npm test
```

## Acknowledgements

This project was originally forked from [`angular-timezone-js`](https://github.com/LeZuse/angular-timezone-js) by [Tomas Ruzicka](https://github.com/LeZuse).

[Timezone data provided by IANA](http://iana.org/time-zones) (extracted from [tzdata2013c.tar.gz](http://www.iana.org/time-zones/repository/releases/tzdata2013c.tar.gz)).
