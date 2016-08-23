#Fast Feed

General: This project will begin a much larger evolutionary process. For now, the MVP:

The MVP will use a news api, https://newsapi.org/

####Deployed site
fastfeed.herokuapp.com

####Summary
This application is a news reader that allows visitors to edit the headlines and summaries of stories that they save for personal reference. Just like their burgers, people don't always want news exactly the way some journalist presents it. Sure, depending on the news organization, the journalist may be educated and understand a thing or two about integrity, but this is a free country, and I like to have things my way, including the news. This app lets me do that. It gives me freedom.

To use the app, go to the home page. There will be a drop down menu under the heading, "News Feed" that will allow you to choose from a number of news feeds. Choose one and click on the select button. That will generate a feed under the heading, "News Stories." With the feed, you will see several story titles and brief summaries. By clicking on the title of the news story, a new window will pop up and lead you to the original link. You can also save the story by clicking on the "Add" button.

Once the story has been saved, it will appear in the "Saved Stories" column after you refresh the page. (This app likes proactive users for now). You can also delete the story and it will disappear, again, after you refresh the page. If you're not satisfied with the title or description of the saved story though, you can edit it yourself! Click on the title of the story, and you will be brought to a form where you can edit the content of your story. Click on "update story," and you've updated it!

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
![fastfeed erd](./fastfeed_erd.png "fastfeed erd")


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

