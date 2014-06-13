var md5 = require('MD5');


module.exports = {
  notFound: {error: "Director not found"},

  immutable: {error: "This field can not be changed"},

  unauthorized: {error: 'Unathorized access'},

  is_mutable: function(attr) {
    var mutables = ['favorite_movies', 'favorite_camera'];
    return mutables.indexOf(attr) === - 1 ? false : true;
  },

  is_authorized: function(req, director) {
    var hash = req.headers.authorization;
    return hash === md5(director.full_name);
  }
};