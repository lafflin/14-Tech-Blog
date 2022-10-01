# Module 14 Challenge

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#Screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
  ​

## Overview

This weeks challenge was create a tech blog using sequelize, express, and express-session
​

### The challenge

Create an app from scratch using sequelize, express, and express-session

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

### Screenshot

![Screenshot of home page](/homework-repo/14homework/public/assets/screenshot.png)

### Links

- Solution URL: [Solution](https://github.com/lafflin/14-Tech-Blog)
- Heroku: [Heroku](https://web-dev-blog-hw14.herokuapp.com/)
  ​

## My process

1. Firstly, I wrote out some psuedocode to break down how I was going to do the assignment.
2. Then, I got the server up and running, got the connection working, and made the models.
3. After this I created the associations and did the seeding, which took a while and I had to revisit this a few times.
4. Finally, I began working on routing and creating handlebars pages, slowly working my way through all of the requirements. I started with '/', then to '/home', then '/dash', etc
5. While doing this, I would work on the functionality of the pages as they came up, so while working on '/' I worked on the signin/signup, when working on '/home' I worked on signout.
6. While working my way through all of that, I ended up getting stuck a few times, but eventually got to the end. The final things I did were make this README, and deploy the app to heroku.

### Built with

- Node.js
- Express.js
- MySql
- mysql2, Sequelize, dotenv, express-session, handlebars
- Heroku

### What I learned

- Exercise was good to practice routing, all things sequelize, and handlebars

### Continued development

- More work with sequelize and handlebars
- Specifically I realized near the very end that my routing needed some more separation for cleanliness sake, but as I was already at the end I opted to leave it for now

### Useful resources

- Google, there was a lot of useful information about how to do the queries and mysql2 stuff when I was having issues.

## Author

- Linkedin - [Max McLaughlin](https://www.linkedin.com/in/max-mcla/)

## Acknowledgments

- Huge thanks to an assortment of LA's, many times helping me out when I would get stuck and be unsure how to continue.
