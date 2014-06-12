var request = require('superagent');
var should = require('should');
var director = require('./helpers');
var mocha = require('mocha');

var validData = {
  livestream_id: 648883,
  value: 'nikkon 1234',
  attribute: 'favorite_camera'
};

var validHeader = ['Authorization', 'Olphinz Web'];
var invalidHeader = ['Authorization', 'wrong name'];

var updateResponse = { 
  livestream_id: 648883,
  full_name: 'Olphinz Web',
  dob: '1982-01-01T00:00:00.000Z',
  favorite_camera: 'nikkon 1234',
  favorite_movies: '',
  id: 1 
};

var test = {a: 1, b: 2};
test.should.eql({a:1, b:2});

describe('update', function(){

  it('Updates with valid request', function(done){
    director.update(validData, validHeader, function (error, response) {
      response.body.should.eql(updateResponse);
      done();
    });
  });

  it('Will not allow update without valid Authorization', function(done){
    director.update(validData, invalidHeader, function(error, response){
      response.body.error.should.equal('Unathorized access');
      done();
    });
  });



});

