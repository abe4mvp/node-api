var express = require('express');
var app =  express();

require('./config.js').init(app);
require('./routes.js').init(app);

app.listen(3000);
console.log("Initalized API");