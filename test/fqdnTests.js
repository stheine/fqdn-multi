import check from 'check-types-2';

import fqdn  from '../lib/fqdn.js';

suite('fqdn()', () => {
  test('is a function', async() => {
    check.assert.function(fqdn);
  });

  test('async', async() => {
    const hostname = await fqdn();

    // eslint-disable-next-line no-console
    console.log(`hostname=${hostname}`);

    check.assert.nonEmptyString(hostname);
  });
});
