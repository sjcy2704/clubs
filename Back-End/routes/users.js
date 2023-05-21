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

      res.json(rows);
    });
  });
});

router.get("/:username", function (req, res, next) {
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

module.exports = router;
