var controllerDir = './app/controllers/';
var fs = require('fs');
var controllerFiles = fs.readdirSync(controllerDir);
var controllers = {};


/**
 * import and populate all controllers and actions
 * @param  {File} file the files in the controller directory
 */
controllerFiles.forEach(function (file) {
  var controller = file.split('.');
  if (controller[1] === 'js'){
    controllers[controller[0]] = require(controllerDir + file);    
  }
});

exports.init = function(app) {
  // static routes
  app.get('/', controllers.static.forms);


  // director routes
  app.post('/directors', controllers.directors.create);
  app.put('/directors', controllers.directors.update);
  app.get('/directors', controllers.directors.index);
  app.get('/directors/:id', controllers.directors.show);
  app.del('/directors', controllers.directors.del);
};