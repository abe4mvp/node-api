var caminte = require('caminte');
var Schema = caminte.Schema;

var envFile = process.env.REDISTOGO_URL ? 'production.js' : 'local.js';
var db = require('./enviornments/' + envFile);

var schema = new Schema(db.driver, db);

module.exports = schema;