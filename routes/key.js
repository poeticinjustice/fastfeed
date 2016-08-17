'use strict'

const router    = require('express').Router();
const request   = require('request');

const naKey    = process.env.NEWSAPI_KEY;

router.get('/newsapi', function(req, res) {
  request('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey='+naKey,
    function (error, response, body) {
      res.send(body);
  })
})

module.exports = router;
