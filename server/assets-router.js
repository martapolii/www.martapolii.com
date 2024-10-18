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


//trying this instead:
// import express and create a router:
const express = require("express");
const router = express.Router();
const path = require("path");

// Serve all assets directly from the dist folder (including images and videos)
router.use(express.static(path.join(__dirname, "../dist")));

// export the router:
module.exports = router;
