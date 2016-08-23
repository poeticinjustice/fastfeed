#Fast Feed

General: This project will begin a much larger evolutionary process. For now, the MVP:

The MVP will use a news api, https://newsapi.org/

####Deployed site
https://infinite-tundra-58529.herokuapp.com/

####Summary


####User Stories
_There will only be guest users for the MVP_

I want to go to a site and choose from a list of specific feeds.

I want to be able to see articles from that specific feed. For example, I would like to see the last five articles published by the Independent after choosing their feed.

If I click on an Article from any of the feeds, then I want the original page to pop up in a separate tab.

I want to be able to add and save the feed content of specific articles to favorites.

I want to delete articles that I’ve previously favorited.

Once I've favorited a feed, I would like to be able to edit the title and description after clicking on the link. I would like to make the news mine...and personal.

####Tech
* Javascript
* jQuery
* AJAX
* Node
* Express
* PostgreSQL
* Bootstrap
* newsapi.org

####WireFrame

![fastfeed wireframe](./fastfeed_wireframe.png "fastfeed wireframe")

####ERD
![fastfeed erd](./defeeded_erd.png "fastfeed erd")


####Thanks
Thanks Mike Stenzler for much help on this!

Thanks Fizal for helping me deploy to Heroku!

####Resources
For gitignore and as a general resource, I used my aggrenews project which relied on Bobby's express auth and jQuery help from Stack Overflow:

https://github.com/poeticinjustice/aggrenews/tree/master

https://github.com/ga-students/wdi-nyc-purple-rain-students/tree/master/unit2/d11/instructor/express_auth_with_students

http://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key

Also referred to:

https://github.com/ga-students/wdi-nyc-purple-rain-students/blob/master/unit3/d13/instructor/muviehaus

Followed examples from Bobby's exercise re postgreSQL database manipulation to create CRUD functions:

https://github.com/ga-students/wdi-nyc-purple-rain-students/blob/master/unit3/d03/instructor/express_postgres_solution/db/db.js

http://stackoverflow.com/questions/8978328/get-the-value-of-a-dropdown-in-jquery

fix delete error:

http://stackoverflow.com/questions/25351870/express-response-takes-request-method

