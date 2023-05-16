var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var passport = require("passport");
var initPassport = require("./passport-config");

var mysql = require("mysql");

var dbConnectionPool = mysql.createPool({
  host: "localhost",
  database: "studentclubs",
});

initPassport(passport, dbConnectionPool);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var clubsRouter = require("./routes/clubs");
var membersRouter = require("./routes/members");

var app = express();

app.use(function (req, res, next) {
  req.pool = dbConnectionPool;
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "7b7df068e90fc19b966f23d67ca7a2dc38b977ef78bfb4050b36069a90c9f35a",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/clubs", clubsRouter);
app.use("/members", membersRouter);

module.exports = app;
