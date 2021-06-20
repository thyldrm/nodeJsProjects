const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");


const app=express();

//--DB CONNECT
mongoose.connect("mongodb://localhost/misfit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

//--TEMPLATE ENGINE
app.set("view engine", "ejs");

//--MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//--ROUTES
app.get("/", (req,res)=>{
    res.render("index");
})
app.get("/gallery", (req,res)=>{
    res.render("gallery");
})
app.get("/contact", (req,res)=>{
    res.render("contact");
})
app.get("/about", (req,res)=>{
    res.render("about");
})
app.get("/trainer", (req,res)=>{
    res.render("trainer");
})




















const port=3000;

app.listen(port, ()=>{
    console.log(`Sunucu port ${port}'de başlatıldı.`)
});