const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"));

// const request = require("request");
// const https = require("https");


app.get("/", function(req, res){
  res.sendFile(__dirname+"/signup.html");
})

app.post("/", function(req, res){
  const Fname = req.body.fname;
  const Lname = req.body.lname;
  const Email = req.body.email;

  // const data = {
  //   members:[
  //     {
  //       email_address : Email,
  //       status : "Subscribed",
  //       merge_fields :{
  //         FNAME : Fname,
  //         LNAME : Lname
  //       }
  //     }
  //   ]
  // };
  //
  //  const jsonData = JSON.stringify(data);
  //  const url = "https://us14.api.mailchip.com/13.0/lists/47a4c1d90c1e2521df57d3ea0d1073fe";
  //  content options ={
  //    method:"POST";
  //  }
  //  https.request(url,options, function(response){
  //
  //  })
   console.log(Fname,Lname,Email);
  // 47a4c1d90c1e2521df57d3ea0d1073fe-us14
});


app.listen(3000, function(){
  console.log("Sever is runing on port 3000");
});
