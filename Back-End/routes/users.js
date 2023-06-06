var express = require("express");
var router = express.Router();

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
      connection.release();
      res.json(rows);
    });
  });
});

router.get("/username/:username", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { username } = req.params;
    const query = "SELECT userID FROM Users WHERE username = ?";
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

router.get("/:userID/clubs", function (req, res) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { userID } = req.params;
    const query =
      "SELECT c.* FROM Clubs c INNER JOIN ClubMembers m ON c.clubID = m.clubID WHERE m.userID = ?";

    connection.query(query, userID, function (err, rows) {
      if (err) {
        res.sendStatus(500);
      }
      connection.release();

      res.json(rows);
    });
  });
});

module.exports = router;
