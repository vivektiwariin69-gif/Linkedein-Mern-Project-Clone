import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signUp = async (req , res)=>{
    try {
        const {firstName , lastName , userName , email , password} = req.body;
        let existEmail = await User.findOne({email})
        let exisUserName = await User.findOne({userName})
        if(exisEmail){
            // console.log("Email Exist")
            return res.status(400).json({message:"Email already exist!"})
        }
        if(exisUserName){
            // console.log("User Exist")
            return res.status(400).json({message:"User already exist!"})
        }
        const hassedPaswword = await bcrypt.hash(password , 10)
    } catch (error) {
        
    }
}