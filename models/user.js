const mongoose = require("mongoose");
require('dotenv').config();

const userSchema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String ,required:[true, 'Enter an email'] , unique:[true, 'Email already exists']},
    phone:{type:String},


});

const User = mongoose.model('user', userSchema);

module.exports=User;