const express = require('express');
const path = require('path');

const app = express();

// TODO configuration per environment
const port = 3000;

app.use(express.static('./client'));

app.get('/', function (req, res) {
  res.send('test');
});

app.listen(port, function () {
  console.log('listening on port ' + port);
});
