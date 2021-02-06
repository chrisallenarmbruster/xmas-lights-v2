const process = require("process");
const lightArray = require("./config");

for (let i = 0; i < lightArray.length; i++) {
  lightArray[i].writeSync(1);
}

function allLightsOff() {
  for (let i = 0; i < lightArray.length; i++) {
    lightArray[i].writeSync(0);
  }
}

process.on("SIGINT", () => {
  console.log("Received SIGINT");
  allLightsOff();
  process.exit();
});

while (true) {}
