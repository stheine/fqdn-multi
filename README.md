# stheine/fqdn

<!-- toc -->

## Purpose

Simple utility to get the FQDN of a machine. Can be used synchronously or asynchronously

___Why?:___ os.hostname() *only* returns the hostname rather than the FQDN

## Usage

```javascript
const fqdn = require('fqdn');

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

___Works on Windows, Linux and MacOS___

## Reference

This code is based on the [original code](https://github.com/opentable/fqdn-nodejs).
