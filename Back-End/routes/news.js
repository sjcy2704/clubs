var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const query = "SELECT * FROM News";

    connection.query(query, function (err, rows) {
      connection.release();
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.json(rows);
    });
  });
});

router.post("/remove", function (req, res) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { newsID } = req.body;

    const query = "DELETE FROM News WHERE newsID = ?";

    connection.query(query, newsID, function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.send(200);
    });
  });
});
module.exports = router;
