var express = require('express');

exports.init = function (app) {

  // app.use(express.logger());
  app.use(express.bodyParser());

  // allow hidden inputs in forms that indicate put and del requests
  app.use(express.methodOverride());

  app.engine('html', require('ejs').renderFile);

  app.set('views', './app/views');
};