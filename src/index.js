const express = require("express");

const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
const connect = require("./config/db")
const Authcontroller = require("./controllers/authcontroller")

// app.post("/register",register)
// app.post("/login",login)
const petController = require("./controllers/petcontroller");
const pethouseController = require("./controllers/petdeatilscontroller")
app.use("/",Authcontroller)
app.use("/listing",petController)
app.use("/listing",pethouseController)
app.listen(8080,async()=>{
    try {
        await connect();
        console.log("listening port 8080")
    } catch (error) {
        console.log(error)
    }
})