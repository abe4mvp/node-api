var express = require('express');
var app =  express();
var redis = require('redis');


// connect to local or remote redis instance
if (process.env.REDISTOGO_URL) {
  var db = require('./enviornments/production.js');
  console.log(db);
  var client = redis.createClient(db.port, db.host);
  client.auth(db.password);
} else {
  redis.createClient();
  console.log('local');
}

// var schema = require('./schema.js');

require('./config.js').init(app);
require('./routes.js').init(app);


var port =  Number(process.env.PORT || 3000);

app.listen(port, function() {
  console.log("Listening on " + port);
});
console.log("Initalized API");