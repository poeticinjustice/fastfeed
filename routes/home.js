const router        = require('express').Router();

const newsCategories  = ['business', 'entertainment', 'gaming', 'general', 'sport', 'technology'];

const newsSources     = ['arstechnica', 'associatedpress', 'bbcnews', 'bbcsport', 'bloomberg', 'buzzfeed', 'cnbc', 'cnn', 'engadget', 'entertainmentweekly', 'espn', 'googlenews', 'hackernews', 'ign', 'independent', 'mashable', 'metro', 'polygon', 'recode', 'redditrall', 'reuters', 'techcrunch', 'theguardianuk', 'thehindu', 'thehuffingtonpost', 'thenewyorktimes', 'thenextweb', 'thetimesofindia', 'theverge', 'thewallstreetjournal', 'thewashingtonpost', 'time'];

// create home route
router.get('/', function(req,res) {
  res.render('index', { sources: newsSources, categories:newsCategories })
});

module.exports = router;
