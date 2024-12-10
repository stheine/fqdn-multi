# fqdn-multi

<!-- toc -->

-   [Purpose](#purpose)
-   [Usage](#usage)
-   [OS Support](#os-support)
-   [Reference](#reference)
-   [Breaking](#breaking)

<!-- tocstop -->

## Purpose

Simple utility to get the FQDN of a machine. Can be used synchronously or asynchronously

**_Why?:_** os.hostname() _only_ returns the hostname rather than the FQDN

## Usage

```javascript
import fqdn from 'fqdn-multi';

const name = await fqdn();

console.log(name);
```

## OS Support

**_Works on Windows, Linux and MacOS_**

## Reference

This code is based on the [original code](https://github.com/opentable/fqdn-nodejs).

## Breaking

### 1.x

The module is ESM Module style and uses `async`/ `await`.
