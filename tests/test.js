var fqdn = require("../index"),
    should = require("should");

describe('fqdn', function(){
  it('should return the fqdn', function(done){
    fqdn(function(err, res){
      should.exist(res);
      done(err);
    });
  });
});
