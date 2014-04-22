wdconsole
=========

[![Build Status](https://travis-ci.org/ericmedem/wdconsole.svg?branch=master)](https://travis-ci.org/ericmedem/wdconsole)

Helper library for retrieving console info from a webdriver instance.

wd.js
=====

```
var wdconsole = require('wdconsole');

return browser
    .init(capabilities)
    .get(url)
    .execute(wdconsole.configure())
    ... do some stuff
    .execute(wdconsole.dump()).then(function(mylogs) {
        console.log(mylogs);
    });
```
