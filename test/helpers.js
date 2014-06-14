var request = require('superagent');
var md5 = require('MD5');

var endpoint = 'http://localhost:3000/directors';
// var endpoint = 'http://livestream-api.herokuapp.com/directors';

module.exports = {

  /**
   * simulates creating a director
   * @param  {Number}   id       livestream_id for account to be created
   * @param  {Function} callback test case to be executed after request
   */
  create: function(id, callback) {
    request
      .post(endpoint)
      .send({livestream_id: id})
      .end(callback);
  },


  /**
   * simulate a show request
   * @param  {Number}   id       livestream_id
   * @param  {Function} callback test case to be executed after request
   */
  show: function(id, callback) {
    request.get(endpoint + '/' + id).end(callback);
  },

  /**
   * simulate a request for all directors 
   * @param  {Function} callback test case to be executed after request
   */
  index: function(callback) {
    request.get(endpoint).end(callback);
  },

  /**
   * simulate an update request
   * @param  {JSON}   data     attribute, new value and which director to change
   * @param  {Array}   header   Authorization: md5(director.full_name)
   * @param  {Function} callback test case to be executed after request
   */
  update: function(data, header, callback) {
    request
      .put(endpoint)
      .send(data)
      .set(header[0], md5(header[1]))
      .end(callback);
  },

  del: function(id, header, callback){
    request
      .del(endpoint)
      .send({livestream_id: id})
      .set(header[0], header[1])
      .end(callback);
  }

};