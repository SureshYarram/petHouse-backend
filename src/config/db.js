const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://suresh:suresh_123@cluster0.t9hji.mongodb.net/PetHouseData?retryWrites=true&w=majority")
}

// mongodb+srv://Prachi:prachi_123@cluster0.o9cs6.mongodb.net/PetHouseData?retryWrites=true&w=majority