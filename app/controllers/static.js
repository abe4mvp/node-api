var schema = require('../../schema.js');
var Director = schema.models.Director;
var director;


module.exports = {
  helloWorld: function(req, res) {
    res.send('hello world');
  },


  /**
   * front end forms for experimenting with api
   */
  forms: function(req, res) {
    res.render('index.html');
  }
};