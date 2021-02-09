const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Xmas-Lights up and running.  API listening.  Merry Christmas!");
});

module.exports = server;
