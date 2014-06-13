var schema = require('../../schema.js');
var Director = schema.models.Director;
var request = require('superagent');
var helpers = require('../helpers.js');
var sanitize = require('sanitize-html');



var apiEndpoint = 'https://api.new.livestream.com/accounts/';

module.exports = {

  create: function(req, res) {
    var livestreamId = Number(sanitize(req.body.livestream_id));

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
            res.send(400, {error: newDirector.errors});
          } else {
            res.send(201, newDirector);
          }
        });
      });

  },

  update: function(req, res) {
    
    var attr = sanitize(req.body.attribute);
    

    if (!helpers.is_mutable(attr)) {
      res.send(403, helpers.immutable);
    }

    var newValue = sanitize(req.body.value);
    var livestreamId = Number(sanitize(req.body.livestream_id));
 
    Director
      .findOne({ where: { livestream_id: livestreamId}}, function(error, director) {

        if (director){
          if (helpers.is_authorized(req, director)) {
            director.updateAttribute(attr, newValue, function(err, model) {
              if (err) {
                res.send(400, {error: director.errors});
              } else {
                res.send(200, director);
              }
            });
          } else {
            res.send(401, helpers.unauthorized);
          }
        } else {
          res.send(404, helpers.notFound);
        }
        
    });
  },

  index: function(req, res) {
    Director.all().run({},function(err, directors) {
      res.send(200, directors);
    });
  },

  show: function(req, res) {
    var livestreamId = Number(sanitize(req.params.id));

    Director
    .findOne({where: { livestream_id: livestreamId}}, function(err, director) {
      if (director){
        res.send(200, director);
      } else {
        res.send(404, helpers.notFound);
      }
      
    });
  },

  del: function(req, res) {
    var livestreamId = Number(sanitize(req.body.livestream_id));

    Director
    .findOne({where: { livestream_id: livestreamId}}, function(err, director) {
      if (director){
          if (helpers.is_authorized(req, director)) {
            director.destroy(function(err) {
              if (err) {
                res.send(400, {error: director.errors});
              } else {
                res.send(204, {deleted: livestreamId});
              }
            });
          } else {
            res.send(401, helpers.unauthorized);
          }
        } else {
          res.send(404, helpers.notFound);
        }
      
    });
  }
  
};