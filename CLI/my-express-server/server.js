//jshint esversion:6

const express = require("express");//we call the express package

const app = express();// this is actually a shortcut to call app package

// app.get("/",function(request,response)
// {
//   console.log(request);
// });
//
// over here we are tryinh to use the get method to get the request from the browser
// and to send a response
// For Ex:

// / is the home route, similarly as DIY

//1
app.get("/",function(response,request)
{
  response.send("<h1>Surprise....!</h1>")
});

//2
app.get("/contact",function(req,res)
{
  res.send("Contact me at kbpoovanna@gmail.com");
});

//3
app.get("/about",function(req,res)
{
  res.send("hey this is K B POOVANNA");
});

//listen at 3000 port
app.listen(3000, function()
{
  console.log("Surprise....!");
});
//Here listen is method of app which will listen
//like http links on channel 3000
//Hence this is a simple server

// When we try to open this in a browser by typing
// localhost:3000
// we are not able to repond to our perse client
