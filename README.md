# jsPiBot
Raspberry Pi robot with ultrasonic sensor HC-SR04 and Raspberry Pi camera remotely controlled by AngularJs application and Nodejs.

## Client
The client part, written in Angularjs, consists in $http requests to the server. The image received is in binary format so it must be converted in base64 format to be displayed:
```javascript
var binaryToBase64 = function(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  ```
  where buffer is the response data.
  Then in the HTML page:
  ```HTML
  <img data-ng-src="data:image/jpeg;base64,{{image}}">
   ```
   ![alt text](./21459987_10212766779638266_645192797_o.jpg)
