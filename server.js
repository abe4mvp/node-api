var express = require('express');
var app =  express();

var redis = require('redis');
// var client = redis.createClient();
// var url = require('url');
// var redisURL = url.parse(process.env.REDISCLOUD_URL);
// console.log('redis hostname -----', redisURL.hostname);
// console.log('redis port -----', redisURL.port);
// console.log('redis auth -----', redisURL.auth.split(":")[1]);

// var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
// client.auth(redisURL.auth.split(":")[1]);

// client.on('error', function (err) {
//   console.log('Err:: ' + err);
// });
// 
if (process.env.REDISTOGO_URL) {
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  console.log("reddddddd", rtg.port, rtg.hostname);
  var client = redis.createClient(rtg.port, rtg.hostname);
  client.auth(rtg.auth.split(":")[1]);
  console.log("production");
} else {
  redis.createClient();
  console.log("local");
}

var schema = require('./schema.js');

var Director = schema.define('Director', {
  full_name: {type: schema.String, index: true},
  dob: String,
  favorite_camera: String,
  favorite_movies: Number
});

var abe = new Director({
  full_name: "Abe",
  dob: "1/19/90",
  favorite_camera: "iphone",
  favorite_movies: 7
});

abe.save();



require('./config.js').init(app);
require('./routes.js').init(app);






var port =  Number(process.env.PORT || 3000);

app.listen(port, function() {
  console.log("Listening on " + port);
});
console.log("Initalized API");