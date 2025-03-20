const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name:{type: String,required: true,trim: true},
    email:{type: String,unique: true,required: true,trim: true},
    password: {type: String,required: true}
},{timestamps: true});

const User=mongoose.model("Users",UserSchema);
module.exports = User;