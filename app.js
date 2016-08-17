'use strict'

// building app

const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const path            = require('path');

// Routes
const homeRoute       = require('./routes/home');
const keyRoute        = require('./routes/key')

// declare app and port
const app             = express();
const port            = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(bodyParser.json());

app.use('/', homeRoute);
app.use('/key', keyRoute)

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log('Listening on', port);
})

