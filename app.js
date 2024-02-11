const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

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
