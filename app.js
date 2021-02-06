//const process = require("process");
const lightArray = require("./config");

for (let i = 0; i < lightArray.length; i++) {
  lightArray[i].writeSync(1);
}

function allLightsOff() {
  for (let i = 0; i < lightArray.length; i++) {
    lightArray[i].writeSync(0);
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loop() {
  while (true) {
    await sleep(100);
    console.log("looping");
  }
}

process.on("SIGINT", () => {
  allLightsOff();
  process.exit();
});

loop();
