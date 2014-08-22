var exec = require("child_process").exec,
    execSync = require("exec-sync");

module.exports = function(callback){
    if(callback){
      exec("hostname -f", function(error, stdout, stderr){
          if(error || stderr){
              callback(error || stderr);
          }

          callback(null, stdout);
      });
    }
    else {
      return execSync("hostname -f");
    }
};
