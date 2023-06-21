require("dotenv").config();     //To read .env file
const mongoose = require("mongoose");      //to connect with mongoose database

const connection = async () => {    //Connect to mongoDB database using mongoose(it is a asynchronous function)
    try {
         mongoose.connect(process.env.MONGO_URL, {    //Connection string in .env file(the whole string is passed here)
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}
module.exports = connection;
