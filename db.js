const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO DB CONNECTED");
    }
    catch(err){
        console.log(err);
    }
}


module.exports = connectDB;