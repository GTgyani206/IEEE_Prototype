const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport =require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/ieeeAnnouncement";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge:1000 * 60 * 60 * 24 * 7,
  }, 
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.render("routes/home.ejs");
});

app.get("/announcement", (req, res) => {
  res.render("routes/announcement.ejs");
});

app.get("/announcement/login", (req,res) => {
  res.render("routes/login.ejs");
});

app.get("/announcement/signup", (req,res) => {
  res.render("routes/signUp.ejs");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
