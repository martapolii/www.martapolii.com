/*
File name: server.js
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 13, 2024 
 */

// Creating the server with Express
// This file is the entry point of the server
    //should be able to use "touch server.js" to create the file
    // since this didn't work, I created a server.js file in the root directory manually 
    // this file allows us to use out frontend in the backend. this will 'break' some routes (ex static assets will no longer show, need to fix this)

// import dotenv to use environment variables
import dotenv from 'dotenv';
dotenv.config();


    // had to add these to use ES modules since __dirame is not available by default:
    import { fileURLToPath } from 'url';
    import { dirname } from 'path';
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
//1. Importing the required modules:
// const express = require("express"); // to create an express application
// const path = require("path"); // to work with file and directory paths
// change to import since using ES modules:
import express from 'express';
import path from 'path';
//3. Importing the assets router defined in assets-router.js:
//const assetsRouter = require("./assets-router");app.use("/src", assetsRouter);
//const assetsRouter = require("./assets-router");
import assetsRouter from './assets-router.js'; // assuming assets-router is an ES module too
import config from '../config/config.js';

//2. Creating the Express application:
const app = express(); // initializes the express application

//5. Serving Static Files: 
//app.use("/", express.static(path.join(__dirname, "../dist"))); //middleware that serves static files from the dist folder when the root URL (/) is specified 
app.use("/", assetsRouter);

//4. Display a message when the server is accessed: 
app.get("/", (_req, res) => {
  res.send('{"message" : "Welcome to the DressStore Application. - Marta"}');
});

//serve static files from dist
app.use(express.static(path.join(__dirname, "../dist")));

//6. API Endpoint: 
app.get("/api/v1", (_req, res) => { //defines a route handler for GET requests to /api/v1
  res.json({ // sends a JSON response with details about the project
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});

//7. Catch-All Route for client-side routing: 
app.get("/*", (_req, res) => { //a catch-all route for requests that don't match any other routes 
  res.sendFile(path.join(__dirname, "../dist", "index.html")); //serves index.html from the client directory
})

//8. Starting the server 
//const { PORT = 5001 } = process.env; // sets port variable to 5000 unless specified in .env
const port = config.port || 5001; // 
app.listen(port, (err) =>  {// starts express server on specified port
  // console.log prints messages to the console
  if (err) {
    console.log(err) 
    }
  console.log();
  console.log((`Server started on port ${port}.`)); // server is running
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${port}/\x1b[0m`); // prints URL where server can be accessed 
});


