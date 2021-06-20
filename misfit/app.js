const express = require("express");
const mongoose = require("mongoose");

const ejs = require("ejs");
const pageRoute = require("./routes/pageRoute");


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
app.use("/", pageRoute)




const port=3000;

app.listen(port, ()=>{
    console.log(`Sunucu port ${port}'de başlatıldı.`)
});