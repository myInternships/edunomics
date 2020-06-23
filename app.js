var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var calculate = require('./routes/calculate');
var history = require('./routes/history');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/calculate', calculate);
app.use('/history', history);

app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;
