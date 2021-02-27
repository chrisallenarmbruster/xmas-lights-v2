const process = require("process");
let gpio;
try {
  gpio = require("./gpioConfigDev"); //gpio module fallback for Dev when not running on Pi
} catch (e) {
  gpio = require("./gpioConfig"); //gpio module for Prod when running on Pi
}
const { lightArray, lightStatus } = gpio;
const server = require("./server");
const { loadConfigFromStorage, saveConfigToStorage } = require("./config.js");

let configuration = loadConfigFromStorage();
console.log(configuration);

server.listen(configuration.port, (err) => {
  console.log(
    err
      ? "CAN'T start web services!!!"
      : `Server listening on Port ${configuration.port}`
  );
});

function allLightsOff() {
  for (let i = 0; i < lightArray.length; i++) {
    lightArray[i].writeSync(0);
  }
}

function allLightsOn() {
  for (let i = 0; i < lightArray.length; i++) {
    lightArray[i].writeSync(1);
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function flash() {
  while (true) {
    allLightsOn();
    await sleep(1000);
    allLightsOff();
    await sleep(1000);
  }
}

async function flashStatus() {
  while (true) {
    lightStatus.writeSync(1);
    await sleep(250);
    lightStatus.writeSync(0);
    await sleep(250);
  }
}

process.on("SIGINT", () => {
  allLightsOff();
  lightStatus.writeSync(0);
  process.exit();
});

flash();
flashStatus();
