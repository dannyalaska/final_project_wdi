'use strict'

var express  = require('express');
var app      = express();
var morgan   = require('morgan');
var vis      = require('vis');
var d3       = require('d3');
var jsdom    = require('jsdom');
var bower    = require('bower');
var _ = require('lodash');

var document = jsdom.jsdom();
var svg      = d3.select(document.body).append('svg');
var svg2     = d3.select(document.body).append('svg');
/************/

// let's get some good logging in the console
app.use(morgan('combined'));

// serve static files from the public directory
app.use(express.static(__dirname + '/public'));

// set up a default route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// listen on a port
app.listen(3000, function() {
  console.info('Listening on some port...');
});
