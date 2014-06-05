var express = require('express');
var app =  express();

require('./config.js').init(app);
require('./routes.js').init(app);



var redis = require('redis');
var client = redis.createClient();
client.on('error', function (err) {
  console.log('Error ' + err);
});

var caminte = require('caminte');
var Schema = caminte.Schema;
var db = {
 driver     : "redis",
 host       : "localhost",
 port       : "6379"
};
var schema = new Schema(db.driver, db);

var port =  Number(process.env.PORT || 3000);

app.listen(port, function() {
  console.log("Listening on " + port);
});
console.log("Initalized API");