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
//import the users rotes
import userRoutes from './routes/user.routes.js';
// import contact routes
import contactRoutes from './routes/contact.routes.js';
import assetsRouter from './assets-router.js'; // Import the assets router defined in assets-router.js

// Define the __filename and __dirname variables for ES modules - have to do this for each file using __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//create an express app
const app = express(); 

// Serving Static Files:  (**normlly don't need both below methods, but this is what worked for me)
  //serve static files from dist
  app.use(express.static(path.join(__dirname, "../dist"))); //middleware that serves static files from the dist folder when the root URL (/) is specified

//serve template at the root URL
app.get('/', (req, res) => {
  res.status(200).send(Template()) 
  });

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

//configure routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

// Configure assets router to serve images and videos:
app.use("/", assetsRouter); 

//export the express app
export default app;
