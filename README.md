# webapp_spring2021_twezzy

Final Deployment of Social Network App
Author: Fernando Campos, Quy Pham

How tasks were split

For the final project, Quy and I split tasks among ourselves evenly compared to past assignments involving our social network. I, Fernando, was responsible
for creating the basic views, routes, initial models for posts and users, along with functionality for users to sign up securely with express and passport, logging
in using passport and express, implementing CRUD functionalities, connecting to the database, and functionalities for logged in users to create posts and to delete them as well. Quy was responsible for a lot of the final modifications that were made to the project. This includes creating functionalities for users to follow/unfollow other users, notifications for users, ability to like/unlike posts, adding hashtags along with the current trending hashtags, commenting on posts, updating the views to use a different styling framework (BULMA), structuring the web app to use a cleaner server populated web framework, and finally, deploying the web app on Heroku. 


Modifications

Before, we were using bootstrap to create a lot of our user interfaces and views. Now however, we decided that we would use a different styling framework that Quy was familiar with to create nicer views for our web application. This new styling framework is Bulma, which is similar to bootstrap in that it includes stylings that we can use to create
visually appealing web pages. Other modifications that we made involved changing the whole structure of the web application, while making it MVC compliant along with RESTful 
architecture. We believed that this restructure would make modifying the code easier for future modifications. Other modifications of course, include adding our final functionalities for the web application, including follwers, notifications, likes, hashtags, trending hashtags, and of course comments!


How to install and launch the project

Simply go to https://tweezyproject.herokuapp.com/ to see the web application up and running!


Design Choices

We believed that making a social network similar to twitter would be easy to follow and simple for users familiar with social networks to use easily. This includes
a page that will always show trends, new users to follow, and a logged in users information, with a middle column showing relevant information for a user depending on
what page they are on in the webpage. With our logo and name, we again took inspiration from twitter to have a Dodo bird as our logo as we thought it would provide a fun
and welcoming tone to our web page. We thought it would be fun to also have a slogan, which is "Connect with your Waddle," where a waddle is a group of Dodo birds, adding
to the theme of the bird on our web app. A cool tone was set for our web app, with green and blue colors with white text cards for simplicity. The colors make the entire web
app visually appealing, which dont strain the eyes if a user is using the application for a long time. The simplicity and ease of use of the application was extremely important
so that virtually anyone can use the application and connect with many different people using Tweezy. 


Future Plans

In the future, we would like to add functionality for users to post images and videos to express themselves even more. Other functionalities include adding more security
to the web app and mongoDB database so that users can rely on the web app to secure their information from attackers. Lastly, adding functionality for promotions and notifications to be sent to a valid email address would be great so that users can get notifications outside of the web application. 
