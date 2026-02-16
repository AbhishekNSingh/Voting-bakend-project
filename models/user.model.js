const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    adharCardNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["voter","admin"],
        default:"voter"
    },
    isVoted:{
        type:Boolean,
        default:false
    }
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;