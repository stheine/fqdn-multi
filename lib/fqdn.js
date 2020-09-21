'use strict';

const shell = require('shelljs');

module.exports = function fqdn(callback) {
  let command;
  let processStdout;

  if(process.platform === 'win32') {
    // On Windows, run 'ipconfig /all' and merge the data from
    // 'Host Name' and 'Primary Dns Suffix' to get the fqdn.

    command = 'ipconfig /all';
    processStdout = function(stdout) {
      const nameData = stdout.split(/\r?\n/)
        .filter(line => /^ *(Host Name|Primary Dns Suffix)/.test(line))
        .reduce((result, line) => {
          line = line.trim();

          const key   = line.replace(/ \..*$/, '').trim();
          const value = line.replace(/^.* : /, '').trim();

          result[key] = value;

          return result;
        }, {});

      return `${nameData['Host Name']}.${nameData['Primary Dns Suffix']}`;
    };
  } else {
    // On Linux/ UX/ etc, run 'hostname -f' to get the fqdn.

    command = 'hostname -f';
    processStdout = function(stdout) {
      return stdout.trim();
    };
  }

  if(callback) {
    // Async

    shell.exec(command, {silent: true}, (exitcode, stdout, stderr) => {
      if(exitcode) {
        return callback(new Error(`command exited with code: ${exitcode}\n` +
          `stdout: ${stdout}\n` +
          `stderr: ${stderr}`));
      }

      callback(null, processStdout(stdout));
    });
  } else {
    // Sync

    const execResult = shell.exec(command, {silent: true});

    if(execResult.code) {
      throw new Error(`command exited with code: ${execResult.code}\n` +
        `stdout: ${execResult.stdout}\n` +
        `stderr: ${execResult.stderr}`);
    }

    return processStdout(execResult.stdout);
  }
};
