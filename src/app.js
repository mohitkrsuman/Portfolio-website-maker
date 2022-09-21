const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = process.env.PORT || 80;
// const User = require('../model/userschema');
dotenv.config({path:'../config.env'});
require('../db/conn');
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
app.use(express.static(static_path));

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);
app.use(express.json());
app.use(require('../router/auth'));

// app.get("/", (req,res)=>{
//    res.status(200).render("home");
// });

// app.get("/about", (req,res)=>{
//    res.status(200).render("about");
// })

// app.get("/resume", (req,res)=>{
//    res.status(200).render("resume");
// });

// app.get("/portfolio", (req,res)=>{
//    res.status(200).render("portfolio");
// })

// app.get("/blog", (req,res)=>{
//    res.status(200).render("blog");
// });

// app.get("/contact", (req,res)=>{
//    res.status(200).render("contact");
// });

app.listen(port, ()=>{
   console.log(`Listening to the port no ${port}.`);
});