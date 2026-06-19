import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signUp = async (req , res)=>{
    try {
        const {firstName , lastName , userName , email , password} = req.body; // taking data from the user

        let existEmail = await User.findOne({email}) // finding the email from the server if this email exist or not
        
        if(existEmail){
            // console.log("Email Exist")
            return res.status(400).json({message:"Email already exist!"})
        }

        let existUserName = await User.findOne({userName}) // again the username from the server if this username exist or not
        if(existUserName){
            // console.log("User Exist")
            return res.status(400).json({message:"User already exist!"})
        }
        const hassedPaswword = await bcrypt.hash(password , 10)  // in this step we hassed the password using bcryptjs -> in this step we just make the password strong

        const user = await User.create({
            firstName,
            lastName,
            email,
            userName,
            password:hassedPaswword
        }) // user ko basically databases me save karliaa

        return res.status(200).json(user
           
        )
    } catch (error) {
        res.status(500).json({
            message:"Interval Servel Error"
        })
        console.log(error)
    }
}