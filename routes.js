var controllerDir = './app/controllers/';
var fs = require('fs');
var controllerFiles = fs.readdirSync(controllerDir);
var controllers = {};

// controllerFiles.forEach(function (controller) {
//   controllers[controller.split('.')[0]] = require(controllerDir + controller);
// });
controllers.static = require('./app/controllers/static.js');
controllers.directors = require('./app/controllers/directors.js');

exports.init = function(app) {
  app.get('/', controllers.static.forms);


  app.post('/directors', controllers.directors.create);
  app.put('/directors', controllers.directors.update);
  app.get('/directors', controllers.directors.index)
};