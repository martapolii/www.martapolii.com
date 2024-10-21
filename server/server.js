/*
File name: server.js
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 13, 2024 
 */

// Creating the server with Express
  // This file is the entry point of the server
  // main purpose: initialize the server, connect to the database, and start express app
      //should be able to use "touch server.js" to create the file
      // since this didn't work, I created a server.js file in the root directory manually 
      // this file allows us to use out frontend in the backend

//Importing the required modules:
  import { fileURLToPath } from 'url';
  import path from 'path';
  import { dirname } from 'path';   // __dirame is not available by default:
  import dotenv from 'dotenv';  // import dotenv to use environment variables
  import mongoose from 'mongoose' //import mongoose to connect to MongoDB
  import config from '../config/config.js'; //import the configuration file
  import app from './express.js'; // import the express application

// Define the __filename and __dirname variables for ES modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

// Load environment variables from a .env file into process.env
   dotenv.config({ path: path.resolve(__dirname, '../.env') }); // make sure dotenv is reading .env file from the root directory
   // dotenv.config(); <- normally this would work, but since we are using a different directory structure, we need to specify the path

/**** MONGOOSE ****/ 
  mongoose.Promise = global.Promise
  mongoose.connect(config.mongoUri, { useNewUrlParser: true,
    //useCreateIndex: true, //commented out because deprecated
    //useUnifiedTopology: true
    } )
      .then(() => {
        console.log("Connected to the database!");
      }) 
    mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`) 
    })

// Display a message when the server is accessed: 
  app.get("/", (_req, res) => {
    res.send('{"message" : "Welcome to the DressStore Application. - Marta"}');
  });


// Starting the server 
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




