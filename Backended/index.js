import express from "express"
import dotenv from "dotenv"
import connectdb from "./config/db.js"
dotenv.config()

let app = express()
let port = process.env.PORT || 5000
app.get("/" , (req , res)=>{   
    res.send("Hello Buddy")
})

app.listen(8000 , ()=>{
    connectdb()
    console.log("Server started")
    
})