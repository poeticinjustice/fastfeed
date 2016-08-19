DROP TABLE IF EXISTS news;

CREATE TABLE news (
  story_id  SERIAL PRIMARY KEY NOT NULL,
  story_title VARCHAR NOT NULL,
  story_desc TEXT
);

