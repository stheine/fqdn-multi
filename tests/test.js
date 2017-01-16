var fqdn = require("../index"),
    assert = require("assert");

describe('fqdn', function(){
  describe('async', function(){
    it('should return the fqdn', function(done){
      fqdn(function(err, res){
        assert(res);
        done(err);
      });
    });
  });

  describe('sync', function(){
    it('should return the fqdn', function(done){
      assert(fqdn());
      done();
    });
  });
});
