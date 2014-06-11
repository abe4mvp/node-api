var express = require('express');

exports.init = function (app) {

  // app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.engine('html', require('ejs').renderFile);

  // app.use('/stylesheets', express.static('./app/assets/stylesheets'));
  app.set('views', './app/views');
};