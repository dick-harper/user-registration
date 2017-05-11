var express = require('express');
var path = require('path');
var morgan = require('morgan');

// routes
var login = require('../routes/login');

module.exports = function () {
  const app = express();

  app.use(morgan('short'));
  app.use(express.static(path.join(__dirname, '../../client/')));

  app.use('/login', login);

  app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/layout/layout.html'));
  });

  return app;
};
