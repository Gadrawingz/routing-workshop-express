/***
 * express.Router class, used to create modular, mountable route handlers.
 * A Router instance is a complete middleware and routing system; often referred to as a “mini-app”.
 *
 * @description: Here, I create a router as a module, loads a middleware function in it, defines some routes,
 * and mounts the router module on a path in the main app file is named colors.js in the app directory.
 *
 ***/
const express = require("express");
const router = express.Router({ mergeParams: true });
// express.Router();

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  const thisDate = new Date();
  const hours = thisDate.getHours();
  const minutes = thisDate.getMinutes();
  const seconds = thisDate.getSeconds();
  console.log(`For colors only: time: ${hours}: ${minutes}: ${seconds}`);
  next(); // helps 2 proceed to the next step(middleware)
};
router.use(timeLog);

// 01. Color index page route
router.get("/", (req, res) => {
  res.send("Colors Home page");
});

// 02. About page route
router.get("/about", (req, res) => {
  res.send("About page specific to colors");
});

// 03. About page route
router.get("/objectives", (req, res) => {
  res.send("Objectives page specific to colors");
});

// 04. Post color page route
router.post("/add", (req, res) => {
  console.log(`Color name is posted!`);
});

module.exports = router;
