/* need to create a middleware to manage/serve static assets
- created a server folder in the root directory
- created an assets-router.js file in the server folder

*/

// // import express and create a router:
// const express = require("express");
// const router = express.Router();

// // define the regex for images and videos:
// const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/; // image formats
// const videoRegex = /\/.+\.(mp4|ogv)$/ //video formats

// // iterate over the regex patterns and create a route for each:
// router.get(imageRegex, (req, res) => {
//   const filePath = req.path;
//   res.redirect(303, `http://localhost:3000/src${filePath}`);
// });
// router.get(videoRegex, (req, res) => {
//   const filePath = req.path;
//   res.redirect(303, `http://localhost:3000/src${filePath}`);
// });

// //export the router:
// module.exports = router; //reference in server.js file


//Above cide kept giving me issues, trying this instead:
  // import express and create a router:
  import express from 'express'; // Use import instead of require bc ES modules
  import path from 'path';
  import { fileURLToPath } from 'url';

  // Serve all assets directly from the dist folder (including images and videos)
  //router.use(express.static(path.join(__dirname, "../dist"))); <- no longer works after adding ES modules bc __dirname isn't available
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const router = express.Router();
  router.use(express.static(path.join(__dirname, "../dist"))); //try again after defining dirname



  // export the router:
  //module.exports = router;
  export default router; //using ES module syntax
