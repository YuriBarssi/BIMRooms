var mainDirectory = require('../../constants');

var express = require('express');
var router =  express.Router();

var myRooms = require('../data/list_rooms.json');

router.route('/')
.get(function(request, response) {
  console.log(json);
  response.sendFile(mainDirectory+'/src/index.html');
});

router.get('/getrooms', function (request, response){
  response.json(myRooms);
});

router.route('/room/:id')
.get(function(request, response) {
  response.json(myRooms[request.params.id]);
})
.post(function(request, response) {
  response.send('cool It works in post and body response ' + request.params.name);
});
module.exports = router;
