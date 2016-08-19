'use strict'

const router    = require('express').Router();
const request   = require('request');

const naKey     = process.env.NEWSAPI_KEY;

const tech      = ['/hackernews', '/recode']

router.get('/tech', function(req, res) {
  request(tech,
    function (error, response, body) {
      res.send(body);
    }
  )
})

router.get('/hackernews', function(req, res) {
  request('https://newsapi.org/v1/articles?source=hackernews&sortBy=top&apiKey='+naKey,
    function (error, response, body) {
      res.send(body);
    }
  )
})

router.get('/recode', function(req, res) {
  request('https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey='+naKey,
    function (error, response, body) {
      res.send(body);
    }
  )
})

module.exports = router;


// pass array
// http://stackoverflow.com/questions/15350025/express-js-single-routing-handler-for-multiple-routes-in-a-single-line
