var express = require('express');
var app =  express();

var redis = require('redis');
var client = redis.createClient();
client.on('error', function (err) {
  console.log('Error ' + err);
});

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