//businee work inside it
const mongoose=require("mongoose");
const bcrypt = require('bcryptjs');



const userSchema= new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    roles:{type:Array ,default:["user"],required:true}
},
{
    timestamps:true,
    versionKey:false
});

// password encrypt
// middle ware before saving it this creating & updating we modifying it what we want;
// use reay mate hook;
//this call back fun run
// its not work with aerro func bcz this is not work with  => func.. geting undefined 

userSchema.pre("save",function(next){

// let hashpassword=this.password+"anythingaddtoencrypt";
// this.password=hashpassword;
//use bcrpyt to hash pass ...... require and 
const hash = bcrypt.hashSync(this.password, 8);
// Store hash in your password DB.
this.password=hash;
    return next();
});

//match pass-------------------with------------------------hash pass------->
userSchema.methods.checkpassword=function(password){
    // Load hash from your password DB.
    //compare pass with hash pass.
return bcrypt.compareSync(password,this.password); // true
}

const User=mongoose.model("user",userSchema);

module.exports = User;