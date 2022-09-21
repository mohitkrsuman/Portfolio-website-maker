const express = require('express');
const User = require('../model/userschema');
const router = express.Router();

router.get("/", (req,res)=>{
   res.status(200).render("home");
});

router.get("/about", (req,res)=>{
   res.status(200).render("about");
})

router.get("/resume", (req,res)=>{
   res.status(200).render("resume");
});

router.get("/portfolio", (req,res)=>{
   res.status(200).render("portfolio");
})

router.get("/blog", (req,res)=>{
   res.status(200).render("blog");
});

router.post("/contact", (req,res)=>{
   let newPortfolio = new User({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
   });
   newPortfolio.save();
   res.redirect("/contact");
   const {name, email, subject, message} = req.body;

   if(!name || !email || !subject || !message){
        return res.json({error: "Plz fill the field properly"});
      //   return res.json({error: "Plz fill the field properly"});
   }

   User.findOne({ email : email})
   .then((userExist)=>{
      if(userExist){
         return res.status(422).json({error: "Email already exists"});
      }
      const user = new User({name: name, email: email, subject: subject, message: message});
      user.save().then(()=>{
         res.status(201).json({message: "user registered succesfully"})
      }).catch((err)=> res.status(500).json({error: "failed to Submit"}));
   })
   // console.log(name);
   // console.log(email);
   // console.log(req.body.phone);
   // res.json({message: req.body});
});

router.get("/contact", (req,res)=>{
      res.status(200).render("contact");
});

router.get("*", (req,res)=>{
   res.send("404 error");
});
module.exports = router;