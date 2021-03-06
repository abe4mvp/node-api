var request = require('superagent');
var should = require('should');
var spec = require('./helpers');
var mocha = require('mocha');
var stub = require('./stubs');



var id = 648883;

describe('Api', function(){

  describe('creates', function(){

    it('a new director', function(done){
      spec.create(id, function(error, response){
        response.body.should.eql(stub.createdResponse);
        response.statusCode.should.eql(201);
        done();
      });  
    });

    it('does not allow 2 account with same id', function(done){
      spec.create(id, function(error, response){
        response.statusCode.should.eql(400);
        response.body.error.livestream_id.should.eql(['account already created for this director']);
        done();
      });  
    });

    it('does not create a director with an invalid livestream id', function(done){
      spec.create(1111111111111, function(error, response){
        response.statusCode.should.eql(404);
        response.body.name.should.eql('NotFoundError');
        done();
      });  
    });
  });

  describe('updates', function(){

    it('with valid request', function(done){
      spec.update(stub.validUpdate, stub.validHeader, function (error, response) {
        response.body.should.eql(stub.updatedResponse);
        response.statusCode.should.eql(200);
        done();
      });
    });

    it('will not allow invalid attributes to be chaged', function(done){
      spec.update(stub.invalidUpdate, stub.validHeader, function (error, response) {
        response.statusCode.should.eql(403);
        done();
      });
    });

    it('will not allow update without valid Authorization', function(done){
      spec.update(stub.validUpdate, stub.invalidHeader, function(error, response){
        response.body.error.should.equal('Unathorized access');
        response.statusCode.should.eql(401);
        done();
      });
    });
  });


  describe('shows', function(){

    it('a director with previously persisted changes', function(done){
      spec.show(id, function(error, response){
        response.body.should.eql(stub.updatedResponse);
        response.statusCode.should.eql(200);
        done();
      });
    });

    it('errors out for non existant director', function(done){
      spec.show(id + 1, function(error, response){
        response.statusCode.should.eql(404);
        done();
      });
    });
  });

  describe('index', function(){
    it('returns all available directors', function(done){
      spec.index(function(error,response){
        response.body.length.should.eql(1);
        response.statusCode.should.eql(200);
        done();
      });
    });
  });

  describe('deletes', function(){

    it('only with proper Authorization', function(done){
      spec.del(id, stub.invalidHeader, function(error, response){
        response.statusCode.should.eql(401);
        done();
      });
    });

    it('a record with valid header', function(done){
      spec.del(id, stub.validHeader, function(error, response){
        response.statusCode.should.eql(204);
        done();
      });
    });

    it('a record from the database', function(done){
      spec.index(function(error,response){
        response.body.length.should.eql(0);
        response.statusCode.should.eql(200);
        done();
      });
    });

  });



  

});
  