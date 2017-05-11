'use strict';

var express = require('express');

var approute = express.Router();

approute.post('/', function (req, res) {
  console.log('posting login attempt...');
  res.end();
});

module.exports = approute;
