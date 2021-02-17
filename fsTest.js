const fs = require("fs");

let configuration = {
  mode: "show",
  delay: 50,
  cycles: 5,
};

let data = JSON.stringify(configuration);

fs.writeFile("./config.json", data, function (err) {
  if (err) {
    console.log("There has been an error saving configuration data.");
    console.log(err.message);
    return;
  }
  console.log("Configuration data saved successfully.");
});
