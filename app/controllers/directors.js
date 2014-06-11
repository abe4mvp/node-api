var schema = require('../../schema.js');
var Director = schema.models.Director;
var request = require('superagent');


var apiEndpoint = 'https://api.new.livestream.com/accounts/';

module.exports = {

  index: function(req, res) {
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

  }
};