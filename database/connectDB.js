const mongoose = require("mongoose");

mongoose.set("strictQuery",false)
const connectDB=()=>{
    mongoose.connect("mongodb+srv:/ enter your own url").then(()=>{
        console.log("Database is connected!!");
    });
   
}

module.exports = connectDB;
