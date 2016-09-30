var express = require('express');
var path = require('path');

const port = 4000;
const app = express();

var rooms = require('./rooms');
app.use('/rooms', rooms);

var logger = require('./logger');
app.use(logger);

//app.use(express.static('../src'));

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${port}`);
  }
});
