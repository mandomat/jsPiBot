// setup GPIO for motors and leds
var GPIO = require('onoff').Gpio,
  redLed = new GPIO(23, 'out');
  greenLed = new GPIO(24, 'out');
  enableRight = new GPIO(14, 'out');
  enableLeft = new GPIO(15, 'out');
  rightWheelFRWRD = new GPIO(4, 'out');
  rightWheelBCKWRD = new GPIO(17, 'out');
  leftWheelFRWRD = new GPIO(27, 'out');
  leftWheelBCKWRD = new GPIO(22, 'out');

//enable motors
enableRight.writeSync(1);
enableLeft.writeSync(1);

//enable ultrasonic sensor
var sensor = require('./sensor.js');
sensor.init();

//set GPIOs for movement
var movement = require('./movement.js');
movement.setGPIO(redLed,greenLed,rightWheelFRWRD,rightWheelBCKWRD,leftWheelFRWRD,leftWheelBCKWRD);

// start the server
var server = require('./server.js')();
