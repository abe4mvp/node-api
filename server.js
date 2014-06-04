var express = require('express');
var app =  express();

require('./config.js').init(app);
require('./routes.js').init(app);
var port =  Number(process.env.PORT || 3000);

app.listen(port, function() {
  console.log("Listening on " + port);
});
console.log("Initalized API");