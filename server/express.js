// this file is for creation and configuring the express app, which is then used by server.js

// import modules
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import Template from './../template.js'; //import the template.js file do its served at the root URL
import userRoutes from './routes/user.routes.js'; //import the users routes
import contactRoutes from './routes/contact.routes.js'; // import contact routes
import assetsRouter from './assets-router.js'; // Import the assets router defined in assets-router.js

// Define the __filename and __dirname variables for ES modules - have to do this for each file using __dirname (server.js, express.js, assets-router.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//create an express app
const app = express(); 

//configure express to use body-parser as middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configure express  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

//serve template at the root URL
app.get('/', (req, res) => {
  res.status(200).send(Template()) 
  });

//configure routes for users and contacts API's
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

// API Endpoint: 
app.get("/api/v1", (_req, res) => { //defines a route handler for GET requests to /api/v1
    res.json({ // sends a JSON response with details about the project
      project: "React and Express Boilerplate",
      from: "Vanaldito",
    });
  });

// Configure assets router to serve images and videos:
app.use("/", assetsRouter); 

// Serving Static files from dist
  app.use(express.static(path.join(__dirname, "../dist"))); //middleware that serves static files from the dist folder when the root URL (/) is specified

//catch-all route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html")); // Serves index.html for non-API routes
});

//export the express app
export default app;
