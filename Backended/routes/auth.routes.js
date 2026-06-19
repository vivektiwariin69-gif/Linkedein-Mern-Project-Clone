import express from "express"
import { login, signUp } from "../controllers/auth.controllers.js"

let authRouter = express.Router() // means bas hamne poora express na lekar bas router wala part hi express module se liya


authRouter.post("/signup" , signUp)
authRouter.post("/login" , login)

export default authRouter