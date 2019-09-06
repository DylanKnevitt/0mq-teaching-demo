// worker.js
// const send = require('gmail-send')({
//     user: 'abc@abc.abc',
//     pass: 'abc',
//     to:   'abc@abc.abc',
//     subject: 'test subject'
//   });

//const nonLinearRegression = require('Kegos-nonlinear-regression');

var zmq = require('zeromq')
  , sock = zmq.socket('pull');

sock.connect('tcp://127.0.0.1:1234');
console.log('Worker connected to port 1234');

sock.on('message', function(msg){
    
    setTimeout(function() {
        //Step 1. Download data from google cloud dataSock.send(GetData)
        //Step 2. Create intents from data
        //Step 3. Train the bot
        //Step 4. Assign it to a server
        let obj = JSON.parse(msg);
        console.log("Hi" + obj.name + " Here is your:" + obj.foodType);
        //Send a message back to the user using something

      }, 5000);
  //Do everything here
});