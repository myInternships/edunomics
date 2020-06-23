var express = require('express');
const Database = require('../db/database');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var db = await new Database().load()
  res.send(db["file"])
});

module.exports = router;
