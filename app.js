'use strict'

// building app

const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const path            = require('path');

// controllers
const homeController  = require('./controllers/home');


// declare app and port
const app             = express();
const port            = process.env.PORT || 3000

app.use(logger('dev'));

app.use(bodyParser.json());

app.listen(port, function() {
  console.log('Listening on ', port);
})

