'use strict'

const router    = require('express').Router();
const request   = require('request');

const naKey     = process.env.NEWSAPI_KEY;

router.get('/categoryChoice', function(req, res) {
  console.log("req.query = ", req.query)
  var categoryChoice = req.query.categoryChoice
  console.log(categoryChoice);
  request('https://newsapi.org/v1/articles?source='+categoryChoice+'&sortBy=top&apiKey='+naKey,
    function (error, response, body) {
      res.send(body);
    }
  )
})

router.get('/newsSourceChoice', function(req, res) {
  console.log("req.query = ", req.query)
  var newsSourceChoice = req.query.newsSourceChoice
  console.log(newsSourceChoice);
  request('https://newsapi.org/v1/articles?source='+newsSourceChoice+'&sortBy=top&apiKey='+naKey,
    function (error, response, body) {
      res.send(body);
    }
  )
})

module.exports = router;

