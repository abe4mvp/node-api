module.exports = {
  notFound: {error: "Director not found"},

  immutable: {error: "This field can not be changed"},

  unauthorized: {error: 'Unathorized access'},

  is_mutable: function(attr) {
    var mutables = ['favorite_movies', 'favorite_camera'];
    return mutables.indexOf(attr) === - 1 ? false : true;
  }

};