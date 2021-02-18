const fs = require("fs");
const defaultConfiguration = {
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

function loadConfigFromStorage() {
  let configuration, data;
  try {
    data = fs.readFileSync("./config.json");
    configuration = JSON.parse(data);
    console.log("Configuration file found and parsed successfully.");
  } catch (err) {
    console.log(
      "There has been an error either finding or parsing your configuration file; restoring defaults."
    );
    configuration = saveConfigToStorage(defaultConfiguration);
  }
  return configuration;
}

function saveConfigToStorage(configuration) {
  let data = JSON.stringify(configuration);
  fs.writeFile("./config.json", data, (err) => {
    if (err) {
      console.log("There has been an error saving configuration data.");
      console.log(err);
    } else {
      console.log("Configuration data saved successfully.");
    }
  });
  return configuration;
}

module.exports = { loadConfigFromStorage, saveConfigToStorage };
