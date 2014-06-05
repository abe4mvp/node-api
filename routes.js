var controllerDir = './app/controllers/';
var fs = require('fs');
var controllerFiles = fs.readdirSync(controllerDir);
var controllers = {};

// controllerFiles.forEach(function (controller) {
//   controllers[controller.split('.')[0]] = require(controllerDir + controller);
// });
controllers.static = require('./app/controllers/static.js');

exports.init = function(app) {
  app.get('/', controllers.static.modelTest);
};