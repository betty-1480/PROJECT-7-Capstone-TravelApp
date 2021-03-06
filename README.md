# PROJECT 7-Capstone-TravelApp

## Project Summary
----------------
This project aims to build a custom travel app which is JavaScript heavy, expecting to create a clean and appealing HTML/CSS. 
It is targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. 
Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.
The project will include a form where you enter the location you are traveling to and the date you are leaving. You will get the current weather forecast using the Weatherbit API. Weatherbit API only takes in coordinates for weather data. So, the application get those coordinates from the Geonames API. Once have all of this data, it display an image of the location entered using the Pixabay API.

## Webpack set up to work with this project
-----------------------------------------------
•	The src folder should contain a client folder and a server folder.
•	Server folder should contain your server.js content.
•	Client folder should contain a js folder, media folder, styles folder, and views folder, as well as an index.js file.
•	Application js should go into the js file, css into styles, and index.html into views.
•	 Webpack builds a dist file. Server access the dist folder. app.use(express.static('dist'))
•	index.js file inside the client folder imports the main function of the application javascript, it imports scss, and it exports main function from the application javascript. 
•	babel, babel loader, css loader, file loader, html loader, html webpack plugin, node sass, sass loader, style loader, webpack, webpack cli, and webpack dev server have been added to get webpack going
•	Scripts are added in package.json for test, dev, start, and build. 
•	Source maps is used to debug css.
•	To get webpack running, first run npm run dev, then npm build to get dist folder created. Once that is created run npm run dev and npm start simultaneously to have hot loading of the project as well as a working express environment.
•	Accounts have been created with geonames api, Weatherbit api, and Pixabay api

## Extend Project Further - Roadmap/Strategy
Following features are implemented to extend the project further:
•	Allow the user to add flight data.
•	Allow the user to remove the trip.
•	Allow the user to add a todo list for their trip.
