var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var passport = require("passport");

/* GET users listing. */
router.get("/", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const query = "SELECT * FROM Users";

    connection.query(query, function (err, rows, fields) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.json(rows);
    });
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

router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log(req.session);
  res.send("Login successful");
});

router.delete("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      throw err;
    }

    res.send("Logged Out Successfully");
  });
});

router.get("/:username", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { username } = req.params;
    const query = "SELECT username FROM Users WHERE username = ?";
    connection.query(query, username, function (err, rows, fields) {
      connection.release();
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.json(rows);
    });
  });
});

module.exports = router;
