const express = require("express");
const server = express();

app.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.send("Xmas-Lights up and running.  API listening.  Merry Christmas!");
});

module.exports = server;
