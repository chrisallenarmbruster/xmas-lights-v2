const Gpio = require("onoff").Gpio; //module for RPi GPIO pin i/o access

//Tie light objects to GPIO pins and set pin behavior.  This is how the SW accesses the HW

const light0 = new Gpio(18, "out");
const light1 = new Gpio(23, "out");
const light2 = new Gpio(24, "out");
const light3 = new Gpio(25, "out");
const light4 = new Gpio(12, "out");
const light5 = new Gpio(16, "out");
const light6 = new Gpio(20, "out");
const light7 = new Gpio(21, "out");
const lightStatus = new Gpio(26, "out");

//Array of light objects.  Each of these is an addressable light circuit.
const lightArray = [
  light0,
  light1,
  light2,
  light3,
  light4,
  light5,
  light6,
  light7,
];

module.exports = {
  lightArray,
  lightStatus,
};
