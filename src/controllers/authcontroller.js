const jwt = require('jsonwebtoken');
require('dotenv').config()
const express = require("express")
const router = express.Router()
const User= require("../Models/usermodel")
const authorise = require("../Middlewares/authorise")
const newToken=(user)=>{

//2nd rember this , kind of salt by this we decrypt this pass
//use .env framwork by this we can acees anyhtg
return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

router.post("/register",async(req,res)=>{
try{
//check if email is already exsit or not

//for that we have to take user

let user=await User.findOne({email:req.body.email});

// check if user email exist

if(user){
   return res.status(404).send({message:"Email already exists"})
}

 //user does'nt exist so create it
// else{
  user=await User.create(req.body);
  //create function for token
  const token=newToken(user); // using extrnal libraary for this token
  return res.status(202).send({user,token});
// }   
}
catch(err){
res.status(404).send({message : err.message})
}
}
)



// 1st email exist

router.post("/login", async(req,res)=>{
    console.log("comeIn")
    try{
       
        //check email have or not
        const user=await User.findOne({email:req.body.email})
       console.log(user)
        if(!user){
            return res.status(404).send({message:"Wrong email or password"})
         }

         //if have then check password
        //   console.log(password);
          const match=user.checkpassword(req.body.password);
          console.log(match);
          //if does nt match
          if(!match){
              return res.status(404).send("Wrong email or password")
          }

          else{
              const token=newToken(user);
              return res.status(202).send({user,token});
          }
 
      }
      catch(err){
      res.status(404).send({message : err.message})
      }
}
)

router.get("/login",async(req,res)=>{
    try {
        let users = await User.find().lean().exec();
        return res.send(users)
    } catch (error) {
        return res.send(error.message)
    }
})
module.exports = router;