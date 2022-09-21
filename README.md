# MyFlix

The objective of this project is to build the server-side component of a "movies" web application.
The web application will provide users with access to information about different movies, directors, and genres.
Users will be able to sign up, update their personal information, and create a list of their favorite movies.

## Tech

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>Node</li>
</ul>

## The 5 Ws

1. Who—Your immediate users will be frontend developers who’ll work on the client-side for the application based on what’s been documented on the server-side (in this case, this developer is also you!). You should also consider the users of the myFlix application. These will be movie enthusiasts who enjoy reading information about different movies.
2. What—The complete server-side of your web application, including the server, business logic, and business layers of the application. It will consist of a well-designed REST API and architected database built using JavaScript, Node.js, Express, and MongoDB. The REST API will be accessed via commonly used HTTP methods like GET and POST. Similar methods (CRUD) will be used to retrieve data from your database and store that data in a non-relational way. 
3. When—Whenever users of myFlix are interacting with the application, the server-side of the application will be in use, processing their requests and performing operations against the data in the database. These users will be able to use the myFlix application whenever they like to read information about different movies or update their user information, for instance, their list of “Favorite Movies.” 
4. Where—The application will be hosted online. The myFlix application itself is responsive and can therefore be used anywhere and on any device, giving all users the same experience. 
5. Why—Movie enthusiasts want to be able to access information about different movies, directors, and genres. The server-side of the myFlix application will ensure they have access to this information, that their requests can be processed, and that all necessary data can be stored.

## User Stories

<ul> 
<li>As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.</li> 
<li>As a user, I want to be able to create a profile so I can save data about my favorite movies.</li> 
</ul>

## Dependencies

"bcrypt": "^5.0.1",<br>
"bcryptjs": "^2.4.3",<br>
"body-parser": "^1.19.2",<br>
"cors": "^2.8.5",<br>
"express": "^4.17.3",<br>
"express-validator": "^6.14.0",<br>
"jsonwebtoken": "^8.5.1",<br>
"lodash": "^4.17.21",<br>
"mongoose": "^6.2.9",<br>
"morgan": "^1.10.0",<br>
"passport": "^0.5.2",<br>
"passport-jwt": "^4.0.0",<br>
"passport-local": "^1.0.0",<br>
"uuid": "^8.3.2"