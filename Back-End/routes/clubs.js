var express = require("express");
var router = express.Router();
var multer = require("multer");
const path = require("path");
const DIR = path.join(__dirname, "../public/club-icons");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const query = "SELECT * FROM Clubs";
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

router.post("/", function (req, res) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      throw err;
      return;
    }

    const { name, short_name, category, description, manager } = req.body;

    const query =
      "INSERT INTO Clubs(name, short_name, category, description, manager) VALUES (?, ?, ?, ?, ?)";
    connection.query(
      query,
      [name, short_name, category, description, manager],
      function (err) {
        connection.release();
        if (err) {
          res.sendStatus(500);
          throw err;
          return;
        }

        res.sendStatus(201);
      }
    );
  });
});

router.get("/:id", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { id } = req.params;

    const query = "SELECT * FROM Clubs WHERE clubID = ?";
    connection.query(query, id, function (err, rows, fields) {
      connection.release();
      if (err) {
        res.sendStatus(500);
        return;
      }

      if (rows.length === 0) {
        res.sendStatus(404);
        return;
      }

      res.json(rows);
    });
  });
});

router.get("/manager/:managerID", function (req, res) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { managerID } = req.params;

    const query = "SELECT * FROM Clubs WHERE manager = ?";
    connection.query(query, managerID, function (err, rows) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.json(rows);
    });
  });
});

module.exports = router;
