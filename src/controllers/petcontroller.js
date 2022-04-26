
const express = require("express");

const router = express.Router();


const Pets = require("../Models/petmodel")


router.post("/create" , async(req,res)=>{

    try {
        let pethouse = await Pet.create(req.body);
        return res.send(pethouse)
    } catch (error) {
        return res.send(error.message)
    }
})



router.get("/", async(req,res) =>{
    try {
        var page = req.query.page ||1
        var verified = req.query.verified;
        var city = req.query.city;
        var cost = req.query.cost;
        var rating = req.query.rating;
       
         if( verified=="" && city=="" && cost==0 && rating==0 ){
            var pet = await Pets.find().lean().exec();
            return res.send(pet)
        }
        else if( verified !=="" && city=="" && cost==0 && rating==0 ){
            pet = await Pets.find({ verified : verified}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified =="" && city !=="" && cost==0 && rating==0 ){
            pet = await Pets.find({ city : city}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified =="" && city=="" && cost !==0 && rating==0 ){
            pet = await Pets.find().sort({cost_per_day:cost}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified =="" && city=="" && cost==0 && rating !==0 ){
            pet = await Pets.find().sort({rating : rating}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified !=="" && city !=="" && cost==0 && rating ==0 ){
            pet = await Pets.find({verified :verified , city : city}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified !=="" && city =="" && cost !==0 && rating ==0 ){
            pet = await Pets.find({verified :verified}).sort({cost_per_day : cost}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified !=="" && city =="" && cost ==0 && rating !==0 ){
            pet = await Pets.find({verified :verified}).sort({rating :rating}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified =="" && city !=="" && cost !==0 && rating ==0 ){
            pet =await Pets.find({city :city}).sort({cost_per_day : cost}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified =="" && city !=="" && cost ==0 && rating !==0 ){
            pet =await Pets.find({city :city}).sort({rating :rating}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else if( verified =="" && city =="" && cost !==0 && rating !==0 ){
            pet =await Pets.find().sort({cost_per_day : cost ,rating :rating}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
        else{
            pet =await Pets.find({verified :verified , city : city}).sort({cost_per_day : cost ,rating :rating}).limit(3).skip((page-1)*3).lean().exec();
            return res.send(pet)
        }
    } catch (e) {
        return res.send(e.message)
    }
})


module.exports = router