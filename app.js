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
  allLightsOff();
  process.exit();
});
