const mongoose = require("mongoose");

const URI =process.env.MONGODB_URI;
// const URI = "mongodb+srv://mongodb:Shahrukh23@cluster0.flxl88k.mongodb.net/"
// mongoose.connect(URI);
// const URI = "mongodb+srv://mongodb:Shahrukh23@cluster0.flxl88k.mongodb.net/mern_admin?retryWrites=true&w=majority"

const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log('Connection Succesful to DB')
    }catch(error){
        console.error("DB connection failed")
        process.exit(0);
    }
}

module.exports = connectDb;
