var express = require('express');
var router = express.Router();
const Database = require('../db/database');

/* GET home page. */
router.get('/', async function (req, res, next) {
    await Database.initiate()
    res.send("database cleared!")
});

module.exports = router;
