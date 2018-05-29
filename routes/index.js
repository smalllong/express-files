var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('files', {files: fs.readdirSync('./public')});
});

router.get('/*', function(req, res, next) {
  res.render('files', {files: fs.readdirSync('./public/'+req.params[0])});
});

module.exports = router;
