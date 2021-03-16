const express = require("express");
const server = express();
const bodyparser = require("body-parser");
const path = require("path");

server.use(express.static(path.join(__dirname, "../public")));

server.use(bodyparser.urlencoded({ extended: false }));
server.use(bodyparser.json());

server.get("/", (req, res) => {
  res.send("Xmas-Lights up and running.  API listening.  Merry Christmas!");
});

server.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = server;
