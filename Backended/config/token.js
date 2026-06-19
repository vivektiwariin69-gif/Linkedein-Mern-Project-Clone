import jwt from "jsonwebtoken"

const genToken = async (userId)=>{
try {
    let token = await jwt.sign({userId} ,process.env.JWT_SECRET , {expiresIn:"7d"} )  // token create ho jayega aur token variable me save rahegaa

    return token
} catch (error) {
    console.log(error)
}

}

export default genToken