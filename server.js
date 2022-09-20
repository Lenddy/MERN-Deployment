//? use this line to create the dependencis folder  install express and mongoose
// npm init -y
// npm install mongoose cors express
const express = require("express"); //to import express
//todo uncomment this after  testing the routes
//! #################################################################
//? #################################################################
//* #################################################################
const cors = require('cors'); // allows the back end to share resources with the react app
//* #################################################################
//? #################################################################
//! #################################################################
//todo ##############################################################
const app = express(); //initialising expres
const port = 8000;


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors());


//connect to db
require("./server/config/mongoose.config"); // importing  file that have the conction to the data base


//import the routes file
require('./server/routes/pet.route')(app); //* make sure to change it 



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: port`) );