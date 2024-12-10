import {execa} from 'execa';

export default async function fqdn() {
  let   command;
  const params = [];
  let   processStdout;

  if(process.platform === 'win32') {
    // On Windows, run 'ipconfig /all' and merge the data from
    // 'Host Name' and 'Primary Dns Suffix' to get the fqdn.

    command = 'ipconfig';
    params.push('/all');
    processStdout = function(stdout) {
      const nameData = stdout.split(/\r?\n/)
        .filter(line => /^ *(?:Host Name|Primary Dns Suffix)/.test(line))
        .reduce((result, line) => {
          const trimmedLine = line.trim();

          const key   = trimmedLine.replace(/ \..*$/, '').trim();
          const value = trimmedLine.replace(/^.* : /, '').trim();

          return {
            ...result,
            [key]: value,
          };
        }, {});

      return `${nameData['Host Name']}.${nameData['Primary Dns Suffix']}`;
    };
  } else {
    // On Linux/ UX/ etc, run 'hostname -f' to get the fqdn.

    command = 'hostname';
    params.push('-f');
    processStdout = function(stdout) {
      return stdout.trim();
    };
  }

  const {exitCode, stdout, stderr} = await execa(command, params);

  if(exitCode) {
    throw new Error(`command exited with code: ${exitCode}\n` +
      `stdout: ${stdout}\n` +
      `stderr: ${stderr}`);
  }

  return processStdout(stdout);
}
