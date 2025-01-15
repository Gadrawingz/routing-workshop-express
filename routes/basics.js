/***
 *
 * Routing determines how an application responds to a client request to a particular endpoint,
 * which is a URI (or path) and a specific HTTP request method (GET, POST, PUT, etc).
 * Each route can have one or more handler functions, which are executed when the route is matched.
 *
 * Route structure: app.METHOD(PATH, HANDLER)
 * app is an instance of express.
 * METHOD is an HTTP request method, in lowercase.
 * PATH is a path on the server.
 * HANDLER is the function executed when the route is matched.
 *
 ***/
const express = require("express");
const basicRouter = express.Router();

// middleware that is specific to this router
const basicMiddleware = (req, res, next) => {
  console.log(`I am middleware running only from '/basics' route`);
  next();
};
basicRouter.use(basicMiddleware);

// 01. Respond with Basic Home! (/):
basicRouter.get("/", (req, res) => {
  res.send("Basic Home");
});

// 03. Respond to POST request 2 the route (/)
basicRouter.post("/", (req, res) => {
  res.send("Basic Home Post request");
});

// 04. Respond to a PUT request to the /person route
basicRouter.put("/person", (req, res) => {
  res.send("Got a PUT request at /person");
});

// 05. Respond to a DELETE request to the /person route
basicRouter.delete("/person", (req, res) => {
  res.send("Got a DELETE request at /person");
});

module.exports = basicRouter;
