const fs = require("fs");

let configuration = {
  defaultMode: "show",
  baseDelay: 50,
  baseCycles: 5,
  latitude: 42.192324,
  longtitude: -88.088098,
  elevation: 260,
  defaultStartTime: 1020,
  defaultStopTime: 1430,
  port: 3000,
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
