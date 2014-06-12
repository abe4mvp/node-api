var caminte = require('caminte');
var Schema = caminte.Schema;

var envFile = process.env.REDISTOGO_URL ? 'production.js' : 'local.js';
var db = require('./enviornments/' + envFile);

var schema = new Schema(db.driver, db);

var Director = schema.define('Director', {
  livestream_id: {type: schema.Number, index: true, unique: true},
  full_name: {type: schema.String, index: true},
  dob: String,
  favorite_camera: {type: schema.String, default: null },
  favorite_movies: Number
});

Director.validatesUniquenessOf('livestream_id', {message: 'account already created for this director'});

module.exports = schema;