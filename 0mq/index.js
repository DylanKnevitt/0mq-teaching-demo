const express = require('express')
const app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.json());
 
let zmq = require('zeromq')
, sock = zmq.socket('push');
sock.bindSync('tcp://127.0.0.1:1234');
console.log('Producer bound to port 1234');

app.post('/v1/orderFood', function (req, res) {
    let body = req.body;
    
        setTimeout(function() {
            //Step 1. Download data from google cloud
            //Step 2. Create intents from data
            //Step 3. Train th`e bot
            //Step 4. Assign it to a server
            res.send({ "message" : "Hi" + body.name + "Here is your:" + body.foodType});
          }, 2000);


  });

  app.post('/v2/orderFood', function (req, res) {
    let body = req.body;
    
            // producer.js

            sock.send(JSON.stringify(body));
            res.send("Hi" + body.name + "Your" + body.foodType + " will be ready shortly.")



  });


 
app.listen(3000)
console.log("running on port 3000");    