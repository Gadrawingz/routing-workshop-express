/**
 * Route paths based on strings
 * This route path will match requests to the root route "/".
 **/
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Strings: Root page!");
});

// route path that matchs requests to /about.
router.get("/about", (req, res) => {
  res.send("Strings: About page!");
});

// route path that matchs requests to /info.txt
router.get("/info", (req, res) => {
  res.send("info.txt");
});

/**
 *
 * Route based on string patterns
 * access: like
 * http://localhost:3009/string-url/opqrsyz => opqrs?yz
 * http://localhost:3009/string-url/opqryz => opqrs?yz
 **/
router.get("/opqrs?yz", (req, res) => {
  res.send("opqrs?yz");
});

/*
 *
 * Route based on string patterns:
 * http://localhost:3009/string-url/opqrsyz => opqrs?yz
 * http://localhost:3009/string-url/opqryz => opqrs?yz
 **/
router.get("/ab?yz", (req, res) => {
  res.send("opqrs?yz");
});

/**
 *
 * Route path that matchs mnst, mnnst, mnnnst, mnnnnst...
 * http://localhost:3009/string-url/mnst => opqrs?yz
 * http://localhost:3009/string-url/mnnst =>
 * http://localhost:3009/string-url/mnnnst =>
 * http://localhost:3009/string-url/mnnnnst =>
 **/
router.get("/mn+st", (req, res) => {
  res.send("mn+st");
});

/**
 *
 * Route path that matchs ally, a...ly, aRANDOMly, a12ly, etc.
 * http://localhost:3009/string-url/awesomely
 * http://localhost:3009/string-url/amazingly
 * http://localhost:3009/string-url/absolutely
 **/
router.get("/a*ly", (req, res) => {
  res.send("Anything starts with (a) and end with (ly) works here");
});

/**
 *
 * Route path that matchs ally, a...ly, aRANDOMly, a12ly, etc.
 * http://localhost:3009/string-url/opqrstuv
 * http://localhost:3009/string-url/opuv
 *
 **/
router.get("/op(qrst)?uv", (req, res) => {
  res.send("Something like this");
});

/**
 *
 * Route paths based on regular expressions
 * -----------------------------------------
 * Route path will match anything with an "e" in it
 * http://localhost:3009/string-url/buzzword
 * http://localhost:3009/string-url/realize
 *
 *
 **/
router.get(/z/, (req, res) => {
  res.send("Anything that contains: /z/");
});

/**
 *
 * This route path will match butterfly, superfly and
 * dragonfly, but not butterflyman, dragonflyman.
 * http://localhost:3009/string-url/superfly
 *
 *
 **/
router.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/");
});

module.exports = router;
