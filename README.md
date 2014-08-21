FQDN
---

Simple utility to get the FQDN of a machine.

___Why?:___ os.hostname() *only* returns the hostname rather than the FQDN

usage:
```
var fqdn = require("fqdn");

fqdn(function(err, res){
  if(err){
    throw err;
  }

  console.log(res);
});
```

___Works on Linux and MacOS___
