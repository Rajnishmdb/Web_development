
const express = require("express");

const app = express();
app.get("/", function(req, res){
  res.send("<h1>Hello</h1>");
})

app.get("/contact", function(req, res){
  res.send("<h1>Kya bat hai</h1>");
})

app.get("/about", function(req, res){
  res.send("<h1>Kuchho nae</h1>");
})

app.listen(3000);
