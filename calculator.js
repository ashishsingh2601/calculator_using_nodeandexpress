//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(__dirname, '/public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");

});

app.get("/public/css/style.css", function(req, res){
    res.sendFile(__dirname + "/public/css/style.css");

});

app.post("/", function(req, res){
  var number1 =  Number(req.body.num1);  //parsing data as number
  var number2 = Number(req.body.num2);  //by default is get parsed as text
  
  var result = number1+ number2;
  res.send(`Result of Adding first and second number: ${result}`);
});

app.listen(4000, function(){
console.log("server started");
});