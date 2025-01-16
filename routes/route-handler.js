const express = require("express");
const router = express.Router();
/**
 * Here, More than one callback function can handle a
 * route (make sure you specify the next object)
 *
 **/

router.get(
  "/stuff/one",
  (req, res, next) => {
    console.log("Response will be sent 2 the next function");
    next(); // Pass it down here
  },
  (req, res) => {
    res.send("Hello from one!");
  }
);

module.exports = router;
