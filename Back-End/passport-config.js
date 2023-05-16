const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initPassport(passport, db) {
  const authenticateUser = (username, password, done) => {
    db.getConnection(function (err, connection) {
      if (err) {
        throw err;
      }

      const query = "SELECT * FROM Users WHERE username = ?";
      connection.query(query, username, async function (err, rows, fields) {
        connection.release();
        if (err) {
          throw err;
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
        } = rows[0];

        const user = {
          userID,
          firstName,
          familyName,
          username,
          email,
          phone,
          userType,
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
      if (err) throw err;

      const query = "SELECT * FROM Users WHERE userID = ?";

      connection.query(query, user.userID, function (err, rows, fields) {
        connection.release();
        if (err) throw err;

        const {
          userID,
          firstName,
          familyName,
          username,
          email,
          phone,
          userType,
        } = rows[0];

        const user = {
          userID,
          firstName,
          familyName,
          username,
          email,
          phone,
          userType,
        };

        return done(null, user);
      });
    });
  });
}

module.exports = initPassport;
