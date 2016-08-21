'use strict'

const router    = require('express').Router();
const request   = require('request');

const { getSavedStories,
        getSavedStory,
        addStory,
        updateStory,
        deleteStory
      }               = require('../db/db');


router.get('/:id', getSavedStory, function(req, res) {
  res.render('updateStory', { story: res.rows });
})

router.post('/update_story', updateStory, function(req, res) {
  res.redirect('/');
})

router.delete('/:id', deleteStory, function(req, res) {
    res.send('/');
});

module.exports = router;
