import mongoose from "mongoose";


// creating of user schemmaa -- it is a basically a blueprint 
const userschema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lasttName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true  // means username unique ho same na ho
    },
    emailName:{
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
        required:true,
    },
     coverImage:{
        type:String,
        required:true,
    },
     headline:{
        type:String,
        required:true,
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
        ref:User
    }]





} , {timestamps:true})

const User = mongoose.model("User" , userschema)

export default User