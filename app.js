const process = require("process");
const lightArray = require("./config");

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

process.on("SIGINT", () => {
  allLightsOff();
  process.exit();
});

flash();
