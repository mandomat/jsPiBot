exports.setGPIO = function (redLed,greenLed,rightWheelFRWRD,rightWheelBCKWRD,leftWheelFRWRD,leftWheelBCKWRD){
global.redLed = redLed;
global.greenLed = greenLed;
global.rightWheelFRWRD = rightWheelFRWRD;
global.rightWheelBCKWRD = rightWheelBCKWRD;
global.leftWheelFRWRD = leftWheelFRWRD;
global.leftWheelBCKWRD = leftWheelBCKWRD;
}
 //MOVE FORWARD AND GREEN LED ON
exports.moveFRWRD = function(){
 redLed.writeSync(0);
 greenLed.writeSync(1);
 rightWheelBCKWRD.writeSync(0);
 leftWheelBCKWRD.writeSync(0);
 rightWheelFRWRD.writeSync(1);
 leftWheelFRWRD.writeSync(1);
}
 //MOVE BACKWARD AND RED LED ON
exports.moveBCKWRD = function (){
  greenLed.writeSync(0);
  redLed.writeSync(1);
  rightWheelFRWRD.writeSync(0);
  leftWheelFRWRD.writeSync(0);
  rightWheelBCKWRD.writeSync(1);
  leftWheelBCKWRD.writeSync(1);

}
 //STOP AND RED LED ON
exports.stop = function (){
 greenLed.writeSync(0);
 redLed.writeSync(1);
 rightWheelFRWRD.writeSync(0);
 leftWheelFRWRD.writeSync(0);
 rightWheelBCKWRD.writeSync(0);
 leftWheelBCKWRD.writeSync(0); 
 console.log("stopping");

}
//TURN RIGHT AND LEDs OFF
exports.turnRight = function (){
 greenLed.writeSync(0);
 redLed.writeSync(0);
 rightWheelFRWRD.writeSync(0);
 leftWheelBCKWRD.writeSync(0);
 
 rightWheelBCKWRD.writeSync(1);
 leftWheelFRWRD.writeSync(1);

 setTimeout(function(){ 
 rightWheelBCKWRD.writeSync(0);
 leftWheelFRWRD.writeSync(0);
  }, 500);

}
//TURN LEFT AND LEDs OFF
exports.turnLeft = function () {
 greenLed.writeSync(0);
 redLed.writeSync(0);
 rightWheelFRWRD.writeSync(0);
 leftWheelFRWRD.writeSync(0);
 rightWheelBCKWRD.writeSync(0);
 leftWheelBCKWRD.writeSync(0);

 leftWheelBCKWRD.writeSync(1);
 rightWheelFRWRD.writeSync(1);

 setTimeout(function(){
 leftWheelBCKWRD.writeSync(0);
 rightWheelFRWRD.writeSync(0);
  }, 500);

}


