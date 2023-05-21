var express = require("express");
var router = express.Router();

var bcrypt = require("bcrypt");
var passport = require("passport");

router.get("/authenticate", function (req, res) {
  res.send(req.isAuthenticated());
});

router.get("/user", function (req, res) {
  res.json(req.user);
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.cookie("sessionid", req.session.id);
  req.user = req.session.passport.user;
  res.json(req.session.passport.user);
});

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      throw err;
    }

    res.clearCookie("sessionid");
    return res.send("Logged Out Successfully");
  });
});

router.post("/signup", function (req, res, next) {
  const { firstName, familyName, username, password, email, phone, manager } =
    req.body;

  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

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
          connection.release();
          if (err) {
            res.sendStatus(500);
            return;
          }
          res.sendStatus(201);
        }
      );
    });
  });
});

module.exports = router;
