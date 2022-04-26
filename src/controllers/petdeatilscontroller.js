
const express = require("express");

const router = express.Router();


const Pethouse = require("../Models/petdetailsmodel")


router.post("/create/add" , async(req,res)=>{

    try {
        let pethouse = await Pethouse.create(req.body);
        return res.send(pethouse)
    } catch (error) {
        return res.send(error.message)
    }
})

router.get("/:id" , async(req,res)=>{

    try {
        let pethouse = await Pethouse.findOne({pet_id:req.params.id}).lean().exec();
        return res.send(pethouse)
    } catch (error) {
        return res.send(error.message)
    }
})


module.exports = router;