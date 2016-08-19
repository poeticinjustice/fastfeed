'use strict'
// saved news stories

const router  = require('express').Router();

const { getSavedStories,
        getSavedStory,
        addStory
      }       = require('../db/db');

router.get('/' getSavedStories, (req, res) => {
  res.render('/stories')
})


module.exports = { getSavedStories };



 // followed examples from Bobby's exercise re postgreSQL database manipulation to create CRUD functions
  // https://github.com/ga-students/wdi-nyc-purple-rain-students/blob/master/unit3/d03/instructor/express_postgres_solution/db/db.js
