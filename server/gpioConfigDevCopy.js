//Rename this file to gpioConfigDev.js when running on Dev HW other than an RPi.
//This replaces the GPIO interaction with messages to the console.

class GpioDev {
  constructor(pin) {
    this.pin = pin;
  }

  writeSync(val) {
    console.log(this.pin, val);
  }
}

//Tie light objects to GPIO pins and set pin behavior.  This is how the SW accesses the HW

const light0 = new GpioDev("L1");
const light1 = new GpioDev("L2");
const light2 = new GpioDev("L3");
const light3 = new GpioDev("L4");
const light4 = new GpioDev("L5");
const light5 = new GpioDev("L6");
const light6 = new GpioDev("L7");
const light7 = new GpioDev("L8");
const lightStatus = new GpioDev("S1");

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
