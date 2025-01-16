const express = require("express");
const router = express.Router();
/**
 * Route parameters are named URL segments that are used to:
 * http://localhost:3009/router-params/students/50/gender/Male
 * studentId: "50", sex:"Male"
 *
 * http://localhost:3009/router-params/students/50/gender/Trans
 * studentId: "50", sex:"Male"
 *
 * http://localhost:3009/router-params/students/765/gender/Female
 * studentId: "765", sex:"Female"
 * req.params: { "studentId": "765", "sex": "8989" }
 *
 **/
router.get("/students/:studentId/gender/:sex", (req, res) => {
  res.send(req.params);
});

/**
 * For data separated by dash (-)
 * Since the hyphen (-) and the dot (.) are interpreted literally,
 * they can be used along with route parameters for useful purposes.
 *
 * [1]From Rwanda to Burundi: Rwanda-Burundi
 * Route Path: /moves/:from-:to
 * Request URL: http://localhost:3009/moves/Rwanda-Burundi
 * req.params: { "from": "Rwanda", "to": "Burundi" }
 *
 * [2]Match of today: Arsenal-Westham
 * Route Path: /match/:homeTeam-:awayTeam
 * Request URL:
 * http://localhost:3009/router-params/match/Arsenal-Wigan
 * req.params: { "homeTeam": "Arsenal", "homeTeam": "Wigan" }
 *
 * [3] Employee Name.Age
 * Route Path: /employee/name.:age
 * Request URL:
 * http://localhost:3009/router-params/employee/Gad.78
 * req.params: { "name": "Gad", "age": "78" }
 *
 **/
router.get("/match/:homeTeam-:awayTeam", (req, res) => {
  res.send(req.params);
});

router.get("/moves/:from-:to", (req, res) => {
  res.send(req.params);
});

router.get("/employee/:name.:age", (req, res) => {
  res.send(req.params);
});

module.exports = router;
