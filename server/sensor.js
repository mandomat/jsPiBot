var usonic = require('r-pi-usonic');

exports.init = function (){
 usonic.init(function (error) {
    if (error) {
        console.log('Error')
    } else {
         sensor = usonic.createSensor(10,9)
        console.log('Sensor enabled')
    }
 });

}

exports.calculate = function(){

 return  sensor().toFixed(2);
}

