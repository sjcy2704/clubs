var express = require("express");
var router = express.Router();

var bcrypt = require("bcrypt");
var passport = require("passport");

router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log(req.session);
  res.send("Login successful");
});

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      throw err;
    }

    res.send("Logged Out Successfully");
  });
});

router.post("/signup", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { firstName, familyName, username, password, email, phone, manager } =
      req.body;

    let userType = "user";
    if (manager) {
      userType = "manager";
    }

    bcrypt.hash(password, 10, function (err, hash) {
      const query =
        "INSERT INTO Users (firstName, familyName, username, password, email, phone, userType) VALUES (?,?,?,?,?,?,?)";

      connection.query(
        query,
        [firstName, familyName, username, hash, email, phone, userType],
        function (err) {
          if (err) {
            res.sendStatus(500);
            return;
          }

          res.send("User registered successfully!");
        }
      );
    });
  });
});

module.exports = router;
