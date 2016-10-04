var mainDirectory = require('../../constants');
var express = require('express');
var router =  express.Router();
var myRooms = require('../data/list_rooms.json');
router.route('/')
.get(function(request, response) {
  response.json(myRooms);
});
// router.route('/room/:id')
// .get(function(request, response) {
//   response.json(myRooms[request.params.id]);
// })
// .post(function(request, response) {
//   response.send('cool It works in post and body response ' + request.params.id);
// });
module.exports = router;