const router = require('express').Router();

// create home route
router.get('/', function(req,res) {
  res.render('index')
});

module.exports = router;
