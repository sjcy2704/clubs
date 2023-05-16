const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initPassport(passport) {
  const authenticateUser = async (req, username, password, done) => {
    let user;
    req.pool.getConnection(function (err, connection) {
      if (err) {
        throw err;
      }

      const query = "SELECT * FROM Users WHERE username = ?";
      connection.query(query, username, function (err, rows, fields) {
        connection.release();
        if (err) {
          throw err;
        }

        user = rows[0];
      });
    });

    if (user == null) {
      return done(null, false, { message: "No user with that username" });
    }

    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Incorrect password" });
    }
  };

  const getUserID = (id) => {
    req.pool.getConnection(function (err, connection) {
      if (err) {
        throw err;
      }

      const query = "SELECT * FROM Users WHERE userID = ?";

      connection.query(query, id, function (err, rows, field) {
        connection.release();
        if (err) {
          throw err;
        }

        return rows[0];
      });
    });
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.userID);
  });
  passport.deserializeUser((userID, done) => {
    return done(null, getUserID(userID));
  });
}

module.exports = initPassport;
