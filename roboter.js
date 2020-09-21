'use strict';

const roboter = require('roboter');

roboter
  .workOn('server')
  .equipWith(task => {
    task('universal/analyze', {
      src: ['**/*.js', '!node_modules/**/*.js'],
      rules: '.eslintrc.json'
    });
    task('universal/shell', {
      'test-live': './node_modules/mocha/bin/_mocha --async-only --bail ' +
      '--colors --recursive --reporter spec --timeout 10000 --ui tdd test/live'
    });
    task('universal/license', {
      disable: true
    });
  })
  .start();
