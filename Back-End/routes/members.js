var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const query =
      "SELECT u.userID, u.username, u.email, u.firstName, u.familyName, u.phone, u.userType, c.name FROM Users u JOIN ClubMembers cm ON u.userID = cm.userID JOIN Clubs c ON cm.clubID = c.clubID";
    connection.query(query, function (err, rows, fields) {
      connection.release();
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.json(rows);
    });
  });
});

router.post("/", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { clubID, userID } = req.body;

    const query = "INSERT INTO ClubMembers (clubID, userID) VALUES (?, ?)";

    connection.query(query, [clubID, userID], function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.send("Member added!");
    });

    const update = "UPDATE Clubs SET members = members + 1 WHERE clubID = ?";

    connection.query(update, clubID, function (err) {
      connection.release();

      if (err) {
        res.sendStatus(500);
        return;
      }
    });
  });
});

router.get("/:id", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { id } = req.params;

    const query =
      "SELECT u.userID, u.username, u.email, u.firstName, u.familyName, u.phone, u.userType, c.name FROM Users u JOIN ClubMembers cm ON u.userID = cm.userID JOIN Clubs c ON cm.clubID = c.clubID WHERE c.clubID = ?";
    connection.query(query, id, function (err, rows, fields) {
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
