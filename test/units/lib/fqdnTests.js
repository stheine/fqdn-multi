'use strict';

const fqdn   = require('../../../lib/fqdn');
const assert = require('assertthat');

suite('fqdn', () => {
  test('is a function', done => {
    assert.that(fqdn).is.ofType('function');
    done();
  });

  test('async', done => {
    fqdn((err, res) => {
      assert.that(err).is.null();
      assert.that(res).is.not.undefined();
      done();
    });
  });

  test('sync', done => {
    assert.that(fqdn()).is.not.undefined();
    done();
  });
});
