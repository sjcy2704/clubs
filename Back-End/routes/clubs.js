var express = require("express");
var router = express.Router();
var multer = require("multer");
const path = require("path");
const DIR = path.join(__dirname, "../public/club-logos");

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

router.post("/", upload.single("logo"), function (req, res) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { name, short_name, category, description, manager } = req.body;
    let path;
    let query =
      "INSERT INTO Clubs(name, short_name, category, description, manager) VALUES (?, ?, ?, ?, ?)";
    let values = [name, short_name, category, description, manager];

    if (req.file) {
      path = `${req.protocol}://${req.get("host")}/club-logos/${
        req.file.filename
      }`;

      values.push(path);

      query =
        "INSERT INTO Clubs(name, short_name, category, description, manager, logo) VALUES (?, ?, ?, ?, ?, ?)";
    }

    connection.query(query, values, function (err, rows) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      query = "INSERT INTO Managers(clubID, manager) VALUES (?,?)";

      connection.query(query, [rows.insertId, manager], function (err) {
        if (err) {
          res.sendStatus(500);
          return;
        }
      });

      query = "INSERT INTO ClubMembers(clubID, userID) VALUES (?,?)";

      connection.query(query, [rows.insertId, manager], function (err) {
        if (err) {
          res.sendStatus(500);
          return;
        }
      });

      connection.release();

      res.sendStatus(201);
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

      res.json(rows[0]);
    });
  });
});

router.get("/:id/managers", function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { id } = req.params;

    const query = "SELECT manager FROM Managers WHERE clubID = ?";
    connection.query(query, id, function (err, rows) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      connection.release();
      res.json(rows);
    });
  });
});

router.get("/:id/events", function (req, res) {
  req.pool.getConnection(function (err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const { id } = req.params;

    let query = "SELECT * FROM Events WHERE clubID = ?";

    connection.query(query, id, function (err, rows) {
      connection.release();

      if (err) {
        res.sendStatus(500);
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

    const query =
      "SELECT c.* FROM Clubs c INNER JOIN Managers m ON c.clubID = m.clubID WHERE m.manager = ?";
    connection.query(query, managerID, function (err, rows) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      connection.release();

      res.json(rows);
    });
  });
});

module.exports = router;
