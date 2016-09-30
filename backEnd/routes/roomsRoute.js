var express = require('express');
var router =  express.Router();

router.route('/')
.get(function(request, response) {
  response.send('hello world from roomsRoute');
});
module.exports = router;
