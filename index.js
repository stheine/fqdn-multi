var exec = require("child_process").exec;

module.exports = function(callback){
    exec("hostname -f", function(error, stdout, stderr){
        if(error || stderr){
            callback(error || stderr);
        }

        callback(null, stdout);
    });
};
