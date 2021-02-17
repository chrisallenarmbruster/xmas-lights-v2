const fs = require("fs");

let data = fs.readFileSync("./config.json"),
  configuration;

try {
  configuration = JSON.parse(data);
  console.dir(configuration);
} catch (err) {
  console.log("There has been an error parsing your JSON.");
  console.log(err);
}
