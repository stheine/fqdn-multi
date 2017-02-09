#!/usr/bin/env node

'use strict';

/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const fqdn = require('../lib/fqdn');

console.log('fqdn(), sync:', fqdn());

fqdn((err, name) => {
  if(err) {
    console.error(err);
    process.exit(1);
  }

  console.log('fqdn(), async:', name);
});
