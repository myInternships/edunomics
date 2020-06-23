var express = require('express');
var router = express.Router();
var Calc = require('../model/calc');
const Database = require('../db/database');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var height = req.body.height
  var coeff = req.body.coeff

  var graph = new Calc(height, coeff).output()

  try {
    await (await (await new Database().load()).add(graph)).save()
  } catch(e) {
    // first time only
    await Database.initiate()
    await (await (await new Database().load()).add(graph)).save()
  }

  res.send(graph)
});

module.exports = router;
