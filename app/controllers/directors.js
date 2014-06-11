var schema = require('../../schema.js');
var Director = schema.models.Director;
var request = require('superagent');


var apiEndpoint = 'https://api.new.livestream.com/accounts/';

module.exports = {

  create: function(req, res) {
    var livestreamId = Number(req.body.id);

    if (true) {
      request.get(apiEndpoint + livestreamId)
        .end(function(error, response) {

          var fullName = response.body.full_name;
          var dob = response.body.dob;

          var newDirector = new Director({
            livestream_id: livestreamId,
            full_name: fullName,
            dob: dob
          });

          newDirector.save();
          res.send(newDirector);
        });
    }

  },

  update: function(req, res) {
    var id = Number(req.body.id);
    var attr = req.body.attribute;
    var newValue = req.body.value;
    console.log(attr + ': ' + newValue);

    // validations
    
    if (true) {
      Director
        .findById(id, function(err, director) {
          director.updateAttribute(attr, newValue, function(error, model) {
            console.log(model);
            console.log(director);
            res.send(director);
          });
      });
    } 
  },

  index: function(req, res) {
    Director.all().run({},function(err, directors) {
      res.send(directors);
    });
  }
};