const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
  const pinCode = req.body.pinCode;
  const units = "metric";
  const key = "d784e40ef3683797e2662eba5d5ef52b"

  const url = "https://api.openweathermap.org/data/2.5/weather?zip="+pinCode+",in&appid="+key+"&units="+units;
  https.get(url, function(response){
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const cityName = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        res.write("<h1> Temp in " + cityName +" is " + temp + "C and weather is "+ desc+" </h1>");
        res.write("<img src ="+ imageUrl +">")
    })
  })
})


app.listen(3000, function(){
  console.log("Sever is runing on port 3000");
});
