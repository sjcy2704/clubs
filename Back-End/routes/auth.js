var express = require("express");
var router = express.Router();

var passport = require("passport");

router.post(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    res.redirect("http://localhost:5173");
  }
);

module.exports = router;
