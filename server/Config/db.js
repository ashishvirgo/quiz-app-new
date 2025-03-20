const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const DB_URL=process.env.MONGO_URL;
const DBConnect=async()=>{
    try{
      await mongoose.connect(DB_URL);
      console.log("DB connected successfully");
    }
    catch(error){
      console.error("connection failed",error.message);
      process.exit(1);
    }
}

module.exports = DBConnect;