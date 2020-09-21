# fqdn-multi

<!-- toc -->

-   [Purpose](#purpose)
-   [Usage](#usage)
-   [OS Support](#os-support)
-   [Reference](#reference)

<!-- tocstop -->

## Purpose

Simple utility to get the FQDN of a machine. Can be used synchronously or asynchronously

**_Why?:_** os.hostname() _only_ returns the hostname rather than the FQDN

## Usage

```javascript
const fqdn = require('fqdn-multi');

// Async
fqdn((err, name) => {
  if(err) {
    throw err;
  }

  console.log(name);
});

/* OR */

// Sync
const name = fqdn();
```

## OS Support

**_Works on Windows, Linux and MacOS_**

## Reference

This code is based on the [original code](https://github.com/opentable/fqdn-nodejs).
