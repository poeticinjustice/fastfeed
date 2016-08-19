'use strict'

const router          = require('express').Router();

const { getSavedStories,
        getSavedStory,
        addStory
      }               = require('../db/db');


const newsCategories  = ['business', 'entertainment', 'gaming', 'general', 'sport', 'technology'];

const newsSources     = ['associatedpress', 'bbcnews', 'bbcsport', 'bloomberg', 'buzzfeed', 'cnbc', 'cnn', 'engadget', 'entertainmentweekly', 'espn', 'googlenews', 'hackernews', 'ign', 'independent', 'mashable', 'metro', 'polygon', 'recode', 'redditrall', 'reuters', 'techcrunch', 'theguardianuk', 'thehindu', 'thehuffingtonpost', 'thenewyorktimes', 'thenextweb', 'thetimesofindia', 'theverge', 'thewallstreetjournal', 'thewashingtonpost', 'time'];

// create home route
router.get('/', getSavedStories, function(req,res) {
  res.render('index', { sources: newsSources, categories:newsCategories, savedStories:res.rows })
});

module.exports = router;
