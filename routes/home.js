'use strict'

const router          = require('express').Router();

const { getSavedStories,
        getSavedStory,
        addStory,
        updateStory
      }               = require('../db/db');

const sendJSONresp = (req,res)=>res.json(res.rows);

const newsCategories  = ['business', 'entertainment', 'gaming', 'general', 'sport', 'technology'];

const newsSources     = ['associatedpress', 'bbcnews', 'bbcsport', 'bloomberg', 'buzzfeed', 'cnbc', 'cnn', 'engadget', 'entertainmentweekly', 'espn', 'googlenews', 'hackernews', 'ign', 'independent', 'mashable', 'metro', 'polygon', 'recode', 'redditrall', 'reuters', 'techcrunch', 'theguardianuk', 'thehindu', 'thehuffingtonpost', 'thenewyorktimes', 'thenextweb', 'thetimesofindia', 'theverge', 'thewallstreetjournal', 'thewashingtonpost', 'time'];

// create home route
router.get('/', getSavedStories, function(req,res) {
  res.render('index', { sources: newsSources, categories:newsCategories, savedStories:res.rows })
});

// create post route to add saved story
router.post('/addNews', addStory, function(req, res) {
  res.status(200).send('story saved');
})


// // go to single story
// router.get('/:story', getSavedStory, (req, res) => {
//   res.render('/')
// })


module.exports = router;
