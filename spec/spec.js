var request = require('superagent');
var should = require('should');
var director = require('./helpers');

var validData = {
  livestream_id: 648883,
  value: 'nikkon',
  attribute: 'favorite_camera'
};

var validHeader = ['Authorization', '12345'];


director.update(validData, validHeader, function (error, response) {
  console.log(response);
});