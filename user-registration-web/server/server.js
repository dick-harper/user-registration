'use strict';
var express = require('./config/express.config.js');

// TODO configuration per environment
const port = process.env.PORT || 3000;

express().listen(port, function () {
  console.log(`listening on port ${port}`);
});
