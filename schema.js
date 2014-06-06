var caminte = require('caminte');
var Schema = caminte.Schema;
var db = {
 driver     : "redis",
 host       : "localhost",
 port       : "6379"
};
var schema = new Schema(db.driver, db);

module.exports = schema;