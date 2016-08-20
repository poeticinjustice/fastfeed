'use strict'

// building app

const env              = process.env.NODE_ENV || 'development';
const DEV              = env==='development';
const dotenv           = (DEV) ? require('dotenv').config() : undefined;

// above from https://github.com/ga-students/wdi-nyc-purple-rain-students/blob/master/unit3/d13/instructor/muviehaus/server.js

const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const path            = require('path');

// Routes
const homeRoute       = require('./routes/home');
const keyRoute        = require('./routes/key');

// declare app and port
const app             = express();
const port            = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', homeRoute);
app.use('/key', keyRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log('Listening on', port);
})

