// const pg              = require('pg-promise')({});

const pg              = require('pg');

pg.defaults.ssl       = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

const pgConfig        = { host: process.env.PG_HOST,
                          port: process.env.PG_PORT,
                          database: 'fastfeed',
                          user: process.env.PG_USER,
                          password: process.env.PG_PASSWORD };

  const db            = pg(pgConfig);

  function getSavedStories(req, res, next) {
    db.any(`SELECT * FROM news`)
      .then( data => {
        res.rows = data;
        next();
      })
      .catch( error => {
        console.log('Error from getSavedStories function (db.js)', error);
      }
    );
  }

  function getSavedStory(req, res, next) {
    db.one(`SELECT *
            FROM news
            WHERE story_id=$1`, [req.params.id])
      .then(data => {
        res.rows = data;
        next();
      })
      .catch( error => {
        console.log('Error from getSavedStory function (db.js)', error);
      }
    );
  }

  function addStory(req, res, next) {
    db.none(`INSERT INTO news
           (story_title, story_desc)
           VALUES
           ($1, $2);`,
           [req.body.story_title, req.body.story_desc])
      .then( data => {
        console.log('New story added from db.js');
        next();
      })
      .catch( error => {
        console.log('Error from addStory function (db.js)', error)
      }
    );
  }

  function updateStory(req, res, next) {
    db.none(`UPDATE news SET
           (story_title, story_desc) =
           ($1, $2) where story_id = $3;`,
           [req.body.story_title, req.body.story_desc, req.body.story_id])
      .then( data => {
        console.log('Updated story from db.js');
        next();
      })
      .catch( error => {
        console.log('Error from updateStory function (db.js)', error)
      }
    );
  }

  function deleteStory(req, res, next) {
    db.none(`DELETE FROM news
             WHERE story_id = $1;`,
           [req.params.id])
      .then( data => {
        console.log('Deleted from db.js');
        next();
      })
      .catch( error => {
        console.log('Error from deleteStory function (db.js)', error)
      }
    );
  }



module.exports = { getSavedStories, getSavedStory, addStory, updateStory, deleteStory};

  // followed examples from Bobby's exercise re postgreSQL database manipulation to create CRUD functions
  // https://github.com/ga-students/wdi-nyc-purple-rain-students/blob/master/unit3/d03/instructor/express_postgres_solution/db/db.js
  // **may move to models later**
