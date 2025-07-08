const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("Result of calculation is " + result);
})

// BMI Calculator

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
  var weight = Number(req.body.w);
  var height = Number(req.body.h);
  var result = weight/(height*height);

  res.send("Result of calculation is " + result);
})



app.listen(3000, function(){
  console.log("Sever is runing on port 3000");
});
