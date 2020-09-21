'use strict';

const check = require('check-types-2');

const fqdn  = require('../../../lib/fqdn');

suite('fqdn', () => {
  test('is a function', done => {
    check.assert.function(fqdn);
    done();
  });

  test('async', done => {
    fqdn((err, res) => {
      check.assert.null(err);
      check.assert.not.undefined(res);
      done();
    });
  });

  test('sync', done => {
    check.assert.not.undefined(fqdn());
    done();
  });
});
