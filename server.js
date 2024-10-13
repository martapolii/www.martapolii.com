// Creating the server with Express
// This file is the entry point of the server
    //should be able to use "touch server.js" to create the file
    // since this didn't work, I created a server.js file in the root directory manually 
    // this file allows us to use out frontend in the backend. this will 'break' some routes (ex static assets will no longer show, need to fix this)

//1. Importing the required modules: 
const express = require("express"); // to create an express application
const path = require("path"); // to work with file and directory paths

//2. Creating an Express application:
const app = express(); // initializes the express application

//7. Importing the assets router defined in assets-router.js:
const assetsRouter = require("./server/assets-router");app.use("/src", assetsRouter);

//3. Serving Static Files: 
app.use("/", express.static(path.join(__dirname, "public"))); //middleware that serves static files from the public folder when the root URL (/) is specified 

//4. API Endpoint: 
app.get("/api/v1", (req, res) => { //defines a route handler for GET requests to /api/v1
  res.json({ // sends a JSON response with details about the project
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});

//5. Catch-All Route for client-side routing: 
app.get("/*", (_req, res) => { //a catch-all route for requests that don't match any other routes 
  res.sendFile(path.join(__dirname, "public", "index.html")); //serves index.html from the public directory. useful for SPA's
/***********************************************************
^ this is where the code for the message requested in assignment 2 is, it is served through the public/index.html file. 
***********************************************************/
})

//6. Starting the server 
const { PORT = 5001 } = process.env; // sets port variable to 5000 unless specified in .env
app.listen(PORT, () => { // starts express server on specified port
  // console.log prints messages to the console
  console.log();
  console.log(`  App running in port ${PORT}`); // server is running
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`); // prints URL where server can be accessed 

});


