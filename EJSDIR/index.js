const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`listining on post ${port}`);
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
  const follower = ["akash", "piyush", "chaku", "chit"];
  let { username } = req.params;
  res.render("instagram.ejs", { username, follower });
});
