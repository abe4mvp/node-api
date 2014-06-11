var schema = require('../../schema.js');
var Director = schema.models.Director;
var director;


module.exports = {
  helloWorld: function(req, res) {
    res.send('hello world');
  },
  modelTest: function(reg, res) {
    Director.all().run({},function(err, model) {
      
      director = model;
      res.send(director);
    });
  },

  forms: function(req, res) {
    res.render('index.html');
  }
};