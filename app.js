const express = require("express");
const app = express();
const port = 3009;

// load the router modules
const colors = require("./routes/colors");
const basicR = require("./routes/basics");
const stringURL = require("./routes/string-based");
const routerPar = require("./routes/router-params");
const routeHand = require("./routes/route-handler");

/**
 *
 * @access: GET method route
 * respond with "below message" when a req is made 2 the home
 **/
app.get("/", (req, res) => {
  res.send(`GET request to the homepage!`);
});

/**
 *
 * @access: POST method route
 *
 **/
app.get("/", (req, res) => {
  res.send(`POST request to the homepage!`);
});

/**
 *
 * app.all() routes all types of HTTP requests.
 * it will accept all type of HTTP request like:
 * POST, GET, PUT, DELETE, etc.
 * app.all( path, callback )
 * Path: For which the middleware fx is called.
 * Callback: a middleware fx or a series/array of functions.
 **/
app.all("/user", (req, res, next) => {
  res.send(`Access: Any HTTP request!`);
  console.log("User API is called");
  next(); // pass control to the next handler
});

// load the router module in the app:
// if 1 of routes has its own middleware, it will run
app.use("/colors", colors);
app.use("/basics", basicR);
app.use("/string-params", stringURL);
app.use("/router-params", routerPar);
app.use("/route-handler", routeHand);

//  Run app...
app.listen(port, (err) => {
  if (err) {
    console.err(`ERROR OCCURED: ${err}`);
  } else {
    console.info(`RUNNING ON PORT ${port}!`);
  }
});
