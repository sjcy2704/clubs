var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var mysql = require("mysql");

var dbConnectionPool = mysql.createPool({
  host: "localhost",
  database: "studentclubs",
});

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
    secret: "somesecretstring",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// var { auth } = require("express-openid-connect");

// app.use(
//   auth({
//     authRequired: false,
//     auth0Logout: true,
//     secret: "7b7df068e90fc19b966f23d67ca7a2dc38b977ef78bfb4050b36069a90c9f35a",
//     baseURL: "http://localhost:3000",
//     clientID: "Ligyn1mtkO8cwg9fcnpIdZPHcO2iPGW0",
//     issuerBaseURL: "https://world-execute-me.au.auth0.com",
//   })
// );
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
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
