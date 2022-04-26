const mongoose = require("mongoose");

const petdetailsSchema = new mongoose.Schema({
     imgUrl:{type:String, required:true},
    name:{type:String, required:true},
    limit:{type:String, required:true},
    petsize:{type:String, required:true},
    walks:{type:String, required:true},
    area:{type:String, required:true},
    sleep:{type:String, required:true},
    pettype:{type:String, required:true},
    transport:{type:String, required:true},
     pet_id:{type:mongoose.Schema.Types.ObjectId , ref:"pethouse" , required:true}
})

module.exports = mongoose.model("petdetails", petdetailsSchema)