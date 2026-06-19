import mongoose from "mongoose";


// creating of user schemmaa -- it is a basically a blueprint 
const userschema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true  // means username unique ho same na ho
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
     profileImage:{
        type:String,
        required:false,
    },
     coverImage:{
        type:String,
        required:false,
    },
     headline:{
        type:String,
        required:false,
    },
    skills:[{
        type:String
    }],
    education:[
        {
            college:{type:String},
            degree:{type:String},
            fieldofStudy:{type:String}
        }
    ],
    location:{
        type:String
    },
    gender:{
        type:String,
        enum:["Male" , "Female" , "Other"]  // used when we have a option
    },
    experience:[
        {
            title:{type:String},
            company:{type:String},
            description:{type:String}
        }
    ],
    connection:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]





} , {timestamps:true})

const User = mongoose.model("User" , userschema)

export default User