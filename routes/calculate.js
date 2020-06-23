var express = require('express');
var router = express.Router();
var Calc = require('../model/calc')

/* GET home page. */
router.get('/', function(req, res, next) {

  var height = req.body.height
  var coeff = req.body.coeff

  res.send(new Calc(height, coeff).output())
});

module.exports = router;
