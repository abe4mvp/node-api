var rtg   = require('url').parse(process.env.REDISTOGO_URL);

module.exports = {
 driver     : "redis",
 host       : rtg.hostname,
 port       : rtg.port
};