const express=require("express");
const dotenv=require("dotenv");
const User = require("./Model/UserModel");
const DBConnect=require("./Config/db")
dotenv.config();
const cors=require("cors");
const bcrypt = require("bcrypt");
const app=express();
const port=process.env.PORT;
DBConnect();
app.use(cors())
app.use(express.json())
app.get("/users",async(req,res)=>{
    res.json(await User.find());
})
app.get("/user/:email",async(req,res)=>{
    try{
        const email=req.params.email;
        const findUser=await User.findOne({email})    
         if(!findUser){
            res.status(400).json({message: "User not found"});
         }   
         res.status(200).json({ message: "User Found", user: findUser }); 
    }
    catch(error){
        res.status(500).json({messsge: "Server Error",error});
    }
})
app.post("/createuser",async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({messsge: "all fields required"});
        }
        const existinguser=await User.findOne({email});
        if(existinguser){
            return res.status(400).json({messsge: "user already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=new User({name,email,password:hashedPassword});
         await newUser.save();
        res.status(201).json({messsge: "user created successfully",data: newUser});
        
    }
    catch(error){
        res.status(500).json({messsge: "Server Error",error});
    }
    
})
app.put("/edituser/:email",async(req,res)=>{
    try{
        const email=req.params.email;
        const {name,password}=req.body;
        if(!name || !password){
            return res.status(400).json({messsge: "all fields required"});
        }
        const editeduser=await User.findOneAndUpdate({email},{name,password},{new:true});
        if(!editeduser){
            return res.status(400).json({messsge: "user not found"});   
        }
        res.json({messsge: "user edited successfully",user: editeduser});
            
    }
    catch(error){
        res.status(500).json({messsge: "Server Error",error});
    }
})
app.delete("/deleteuser/:email",async(req,res)=>{
    try{
        const email=req.params.email;
        const deletedUser=await User.findOneAndDelete({email})    
         if(!deletedUser){
            res.status(400).json({message: "User not found"});
         }   
         res.status(200).json({ message: "User deleted successfully", user: deletedUser }); 
    }
    catch(error){
        res.status(500).json({messsge: "Server Error",error});
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})