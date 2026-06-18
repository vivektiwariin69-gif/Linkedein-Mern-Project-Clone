import express from "express"
import { signUp } from "../controllers/auth.controllers"

let authRouter = express.Router() // means bas hamne poora express na lekar bas router wala part hi express module se liya


authRouter.post("/signup" , signUp)

export default authRouter