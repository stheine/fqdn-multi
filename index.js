var shell = require("shelljs");

module.exports = function(callback){
  var cb = callback ? function(code, output){
    if(code !== 0){
      callback(new Error("command exited with code: " + code + " output: " + output));
    }
    callback(null, output.trim());
  } : undefined;

  return shell.exec("hostname -f", { silent: true }, cb);
};
