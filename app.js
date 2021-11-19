//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require("lodash");
const aboutContent = "The best ideas can change who we are. Daily Journal is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.";

const app = express();



let posts=[];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
 
  res.render("home",{
    
    posts:posts
    });
  
});


app.get("/TedX",function(req,res){
  res.render("TedX");
});

app.get("/resources",function(req,res){
  res.render("resources");
});

app.get("/opportunity",function(req,res){
  res.render("opportunity");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.get("/contact", function(req,res){
  res.render("contact");
});



app.get("/quiz",function(req,res){
  res.render("quiz");
});




app.post("/quiz",function(req,res){
  
  var c=0;
  if(req.body.year1) 
  res.render("first");
  else if(req.body.year2)
  res.render("second");
  else if(req.body.year3)
  res.render("third");
  else if(req.body.year4)
  res.render("fourth");
});

app.post("/first",function(req,res){
  var p=0,n=0;
  if(req.body.year1_ans11)
  n++;
  if(req.body.year1_ans12 || req.body.year1_ans13) 
  p++;
  if(req.body.year1_ans21)
  p++;
  if(req.body.year1_ans22) 
  n++;
  if(req.body.year1_ans34)
  n++;
  if(req.body.year1_ans31 || req.body.year1_ans32 || req.body.year1_ans33) 
  p++;
  if(n>1)
  res.render("needPractice");
  else
  res.render("allWell");

  
  

})

app.post("/second",function(req,res){
  var p=0,n=0;
  if(req.body.year2_ans11)
  n++;
  if(req.body.year2_ans12) 
  p++;
  if(req.body.year2_ans21)
  p++;
  if(req.body.year2_ans22) 
  n++;
  if(req.body.year2_ans31)
  n++;
  if(req.body.year2_ans32) 
  p++;
  if(req.body.year2_ans41)
  n++;
  if(req.body.year2_ans42)
  p++;
  if(req.body.year2_ans51)
  n++;
  if(req.body.year2_ans52)
  p++;
  if(n>=p)
  res.render("needPractice");
  else
  res.render("allWell");

  
  

})


app.post("/third",function(req,res){
  var p=0,n=0;
  if(req.body.year3_ans11)
  n++;
  if(req.body.year3_ans12) 
  p++;
  if(req.body.year3_ans21)
  n++;
  if(req.body.year3_ans22) 
  p++;
  if(req.body.year3_ans31)
  n++;
  if(req.body.year3_ans32) 
  p++;
  if(req.body.year3_ans41)
  n++;
  if(req.body.year3_ans42)
  p++;
  if(req.body.year3_ans51)
  n++;
  if(req.body.year3_ans52)
  p++;
  if(n>=p)
  res.render("needPractice");
  else
  res.render("allWell");

  
  

})


app.post("/fourth",function(req,res){
  var p=0,n=0;
  if(req.body.year4_ans11)
  n++;
  if(req.body.year4_ans12) 
  p++;
  if(req.body.year4_ans21)
  n++;
  if(req.body.year4_ans22) 
  p++;
  
  
  if(n>p)
  res.render("needPractice");
  else
  res.render("allWell");

  
  

})





app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});




