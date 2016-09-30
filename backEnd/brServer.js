var express = require('express');
var app = express();
const port = 8080;
var roomsRoute =  require('./routes/roomsRoute');
var mainRoute = require('./routes/mainRoute');

app.use('/', mainRoute);
app.use('/rooms', roomsRoute);


app.listen(port, function(){
  console.log('listening to port 8080');
});
