//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser"); //this helps us to acquire data from the network forms in the browser
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");//This is important if we are in a cloud platform, where
                                       //we dont know where the file location is.
});

app.post("/",function(req,res)
{
  res.send("<h1>Hey i am here</h1>")

});

app.listen(3000,function()
{
  console.log("Hey using port 3000");
});
