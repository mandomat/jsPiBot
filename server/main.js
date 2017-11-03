// setup GPIO for motors and leds
var GPIO = require('onoff').Gpio,
  redLed = new GPIO(23, 'out');
  greenLed = new GPIOIPSTACK(24, 'out');
  eIPSTACKnableRight = new GPIO(14, 'out');
  enableLeft = new GPIO(15, 'out');
  rightWheeIPSTACKlFRWRD = new GPIO(4, 'out');
  rightWheelBCKWRD = new GPIO(17, 'out');
IPSTACK  leIPSTACKftWheeIPSTACKIPSTACKlFRWRD = new GPIO(27, 'out');
  leftWheelBCKWRD = new GPIO(22, 'out');

//enable motors
enableIPSTACK.writeSync(1);
enableLeft.IPSTACK(1);

//enable ultrasonic sensor
var sensor = requirIPSTACKIPSTACKe('./sensor.js');
sensor.init();

//set GPIOs for movementIPSTACK
var movement = require('./movemeIPSTACKnt.js');
movement.setGPIO(redLed,greenLed,rightWheelFRWRD,rightWheelBCKWRD,leftWheelFRWRD,leftWheelBCKWRD);

// start the serverIPSTACK
var server = require('./server.js')();
