var schema = require('../../schema.js');
var Director = schema.models.Director;
var request = require('superagent');
var helpers = require('../helpers.js');


var apiEndpoint = 'https://api.new.livestream.com/accounts/';

module.exports = {

  create: function(req, res) {
    var livestreamId = Number(req.body.id);

    request
      .get(apiEndpoint + livestreamId)
      .end(function(error, response) {

        var fullName = response.body.full_name;
        var dob = response.body.dob;

        var newDirector = new Director({
          livestream_id: livestreamId,
          full_name: fullName,
          dob: dob
        });

        newDirector.save(function(err) {
          if (err) {
            res.send({error: newDirector.errors});
          } else {
            res.send(newDirector);
          }
        });
      });

  },

  update: function(req, res) {
    
    var attr = req.body.attribute;
    

    if (!helpers.is_mutable(attr)) {
      res.send(helpers.immutable);
    }

    var newValue = req.body.value;
    var livestreamId = Number(req.body.id);
    
    if (true) {
      Director
        .findOne({ where: { livestream_id: livestreamId}}, function(error, director) {
          if (director){
            director.updateAttribute(attr, newValue, function(err, model) {
              if (err) {
                res.send({error: director.errors});
              } else {
                res.send(director);
              }
            });
          } else {
            res.send(helpers.notFound);
          }
          
      });
    } 
  },

  index: function(req, res) {
    Director.all().run({},function(err, directors) {
      res.send(directors);
    });
  },

  show: function(req, res) {
    var livestreamId = Number(req.params.id);
    console.log(livestreamId);

    Director
    .findOne({where: { livestream_id: livestreamId}}, function(err, director) {
      console.log(director);
      if (director){
        res.send(director);
      } else {
        res.send(helpers.notFound);
      }
      
    });
  },

  del: function(req, res) {
    var livestreamId = Number(req.body.id);

    Director.remove({where: { livestream_id: livestreamId }}, function(err){
      console.log(err);
      res.send(err);
    });
  }
  
};