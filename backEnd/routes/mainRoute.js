var express = require('express');
var router =  express.Router();

router.route('/')
.get(function(request, response) {
  //response.send('Hello From Main Route');
  response.sendFile('/static/index.html');
});
router.route('/:name')
.get(function(request, response) {
  response.send('Cool It works in get ' + request.params.name);
})
.post(function(request, response) {
  response.send('cool It works in post and body response ' + request.params.name);
});
module.exports = router;
