#Fast Feed

General: This project will begin a much larger evolutionary process. For now, the MVP:

The MVP will use a news api, https://newsapi.org/

####User Stories
_There will only be guest users for the MVP_

I want to go to a site and choose from a category of curated feeds, such as a tech category that includes the following sites: Ars Technica, Engadget, Hacker News, Recode, Tech Crunch, The Next Web and The Verge.

Once I choose a category, I want to receive a list of all the articles from the feeds in that category.

I also want to be able to see articles from a specific feed. For example, I would like to see the last five articles published by the Independent after choosing their feed.

If I click on an Article from any of the feeds, then I want the original page to pop up in a separate tab.

I want to be able to add and save the feed content of specific articles to favorites.

I want to delete articles that I’ve previously favorited.

####Tech
* Node
* Express
* PostgreSQL
* Bootstrap
* newsapi.org

Resources
For gitignore and as a general resource, I used my aggrenews project which relied on Bobby's express auth and jQuery help from Stack Overflow:
https://github.com/poeticinjustice/aggrenews/tree/master
https://github.com/ga-students/wdi-nyc-purple-rain-students/tree/master/unit2/d11/instructor/express_auth_with_students
http://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key

Also referred to:
https://github.com/ga-students/wdi-nyc-purple-rain-students/blob/master/unit3/d13/instructor/muviehaus

Followed examples from Bobby's exercise re postgreSQL database manipulation to create CRUD functions:
https://github.com/ga-students/wdi-nyc-purple-rain-students/blob/master/unit3/d03/instructor/express_postgres_solution/db/db.js


