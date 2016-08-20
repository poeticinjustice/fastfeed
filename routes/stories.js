'use strict'

const router    = require('express').Router();
const request   = require('request');

const { getSavedStories,
        getSavedStory,
        addStory,
        updateStory
      }               = require('../db/db');


router.get('/:id', getSavedStory, function(req, res) {
  res.render('updateStory', { story: res.rows });
})

router.post('/update_story', updateStory, function(req, res) {
  res.redirect('/');
})

module.exports = router;
