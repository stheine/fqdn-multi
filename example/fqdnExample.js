#!/usr/bin/env node

/* eslint-disable no-console */

import fqdn from '../lib/fqdn.js';

const name = await fqdn();

console.log('fqdn():', name);
