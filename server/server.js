const express = require("express");
const server = express();
const path = require("path");

server.use(express.static(path.join(__dirname, "../public")));

server.get("/", (req, res) => {
  res.send("Xmas-Lights up and running.  API listening.  Merry Christmas!");
});

server.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = server;
