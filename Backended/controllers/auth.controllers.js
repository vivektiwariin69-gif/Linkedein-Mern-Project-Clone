import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// SIGNUP
export const signUp = async (req, res) => {
    try {
        const { firstName, lastName, userName, email, password } = req.body;

        const existEmail = await User.findOne({ email });

        if (existEmail) {
            return res.status(400).json({
                message: "Email already exists!"
            });
        }

        const existUserName = await User.findOne({ userName });

        if (existUserName) {
            return res.status(400).json({
                message: "Username already exists!"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters!"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password: hashedPassword
        });

        const token = genToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            message: "User Registered Successfully",
            user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

// LOGIN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existUser = await User.findOne({ email });

        if (!existUser) {
            return res.status(400).json({
                message: "User not found!"
            });
        }

        const match = await bcrypt.compare(
            password,
            existUser.password
        );

        if (!match) {
            return res.status(400).json({
                message: "Invalid Credentials!"
            });
        }

        const token = genToken(existUser._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Login Successful",
            user: existUser
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};