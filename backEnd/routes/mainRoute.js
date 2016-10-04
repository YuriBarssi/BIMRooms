var mainDirectory = require('../../constants');
var express = require('express');
var router =  express.Router();
var path = require('path');

router.route('/')
.get(function(request, response) {
  response.sendFile(path.join(mainDirectory, 'frontEnd/index.html'));
});
router.route('/myworld').get(function(request, response) {
  response.send('hello world');
});


module.exports = router;
