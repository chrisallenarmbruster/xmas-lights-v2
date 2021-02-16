const process = require("process");
const { lightArray, lightStatus } = require("./config");
const server = require("./server");

server.listen(3000);

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
