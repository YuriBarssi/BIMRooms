var express = require('express');
var roomsRouter = express.Router();
var path = require('path');

var myRooms = [{'id':1,'number':'One'},{'id':2,'number':'Two'},{'id':3,'number':'Three'}];

var rooms = myRooms;//JSON.parse(list_rooms.json);

roomsRouter.get('/', function (request, response){
    console.log("Hello world Dev!")
    //response.status(200).json(path.join(__dirname,'/listofrooms.json'));
});

roomsRouter.get('/getroom', function (request, response){
  response.json(myRooms);
});

roomsRouter.get('/getroom/:id', function (request, response){
  response.json(myRooms[request.params.id.id]);
});

module.exports = roomsRouter;
