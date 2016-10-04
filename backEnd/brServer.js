var express = require('express');
var app = express();
var path = require('path');
var mainDirectory = require('../constants');
var roomsRoute =  require('./routes/roomsRoute');
var mainRoute = require('./routes/mainRoute');
const port = 8080;

app.use('/', mainRoute);
app.use('/rooms', roomsRoute);
app.use('/static', express.static(path.join(mainDirectory, 'frontEnd')));
/*
var logger = require('./logger');
app.use(logger);
*/
app.listen(port, function(){
  console.log('listening to port 8080');
});
