var http = require("http"),
  port = 8080;
var sensor = require("./sensor.js"); 
var dist = "-1";
var movement = require("./movement.js")
 



module.exports = function() {
  var server = http.createServer(function(request, response) {

  

    
    if ( request.method == 'GET') {
      //MOVE FORWARD AND GREEN LED ON
      if(request.url=='/moveFRWRD') { 
        movement.moveFRWRD();  
        console.log("moving forward");
       
      }
      //MOVE BACKWARD AND RED LED ON
       else if(request.url == '/moveBCKWRD'){
       movement.moveBCKWRD();
       console.log("moving backward");

      }
      //STOP AND RED LED ON
      else if(request.url=='/stop') {
        movement.stop();
        console.log("stopped");
      }
      //CALCULATE DISTANCE
      else if(request.url == '/distance'){
       dist = sensor.calculate();
       console.log(""+dist);
       }
       //TURN RIGHT AND LEDs OFF
       else if (request.url == '/turnRight'){
       movement.turnRight();
       console.log("turning right");
       } 
       //TURN LEFT AND LEDs OFF
       else if (request.url == '/turnLeft'){
       movement.turnLeft();
       console.log("turning left");
       }

       

        response.writeHeader(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });
           response.write("" + dist);
           response.end();

    } else {
      response.writeHeader(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });
      response.write('{ "status": false }');
      response.end();
    }

  });

  server.listen(port);
  console.log("Server running on " + port + ".\nLaunch http://localhost:" + port);
  return server;
}
