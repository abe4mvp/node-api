var request = require('superagent');

var endpoint = 'http://localhost:3000/directors';

module.exports = {
  create: function(id, callback) {
    request
      .post(endpoint)
      .send({livestream_id: id})
      .end(callback);
  },

  show: function(id, callback) {
    request.get(endpoint + '/' + id).end(callback);
  },

  index: function(callback) {
    request.get(endpoint).end(callback);
  },

  update: function(data, header, callback) {
    request
      .put(endpoint)
      .send(data)
      .set(header[0], header[1])
      .end(callback);
  }

};