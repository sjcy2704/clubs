const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initPassport(passport, db, res) {
  const authenticateUser = (username, password, done) => {
    db.getConnection(function (err, connection) {
      if (err) {
        res.status(401).json({ error: "Invalid input" });
        return;
      }

      const query = "SELECT * FROM Users WHERE username = ?";
      connection.query(query, username, async function (err, rows, fields) {
        connection.release();
        if (err) {
          res.status(401).json({ error: "No user with that username" });
          return;
        }

        if (rows.length === 0) {
          return done(null, false, { message: "No user with that username" });
        }

        const {
          userID,
          firstName,
          familyName,
          username,
          email,
          phone,
          userType,
          avatar,
        } = rows[0];

        const user = {
          userID,
          firstName,
          familyName,
          username,
          email,
          phone,
          userType,
          avatar,
        };

        if (await bcrypt.compare(password, rows[0].password)) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      });
    });
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    db.getConnection(function (err, connection) {
      if (err) {
        res.sendStatus(401);
        return;
      }

      const query = "SELECT * FROM Users WHERE userID = ?";

      connection.query(query, user.userID, function (err, rows, fields) {
        connection.release();
        if (err) {
          res.sendStatus(401);
          return;
        }

        const {
          userID,
          firstName,
          familyName,
          username,
          email,
          phone,
          userType,
          avatar,
        } = rows[0];

        const user = {
          userID,
          firstName,
          familyName,
          username,
          email,
          phone,
          userType,
          avatar,
        };

        return done(null, user);
      });
    });
  });
}

module.exports = initPassport;
