var md5 = require('MD5');


module.exports = {
  /**
   * no director was found matching the request params
   * @type {Object}
   */
  notFound: {error: "Director not found"},

  /**
   * attempted to change an attribute that is not allowed
   * @type {Object}
   */
  immutable: {error: "This field can not be changed"},

  /**
   * auth failed
   * @type {Object}
   */
  unauthorized: {error: 'Unathorized access'},

  /**
   * determines whether a attribute is allowed to be changed on a director
   * @param  {string}  attr the attribute that the client is trying to change
   * @return {Boolean}      true if attribute is allowed to change
   */
  is_mutable: function(attr) {
    var mutables = ['favorite_movies', 'favorite_camera'];
    return mutables.indexOf(attr) === - 1 ? false : true;
  },

  /**
   * validates authorization header
   * @param  {Object}  req      request object
   * @param  {Object}  director director instance for comparison
   * @return {Boolean}          true if authorization is valid for the associated director
   */
  is_authorized: function(req, director) {
    var hash = req.headers.authorization;
    return hash === md5(director.full_name);
  }
};