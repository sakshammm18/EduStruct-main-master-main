import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async(req,res)=>{
    try {
        const{fullname,email,phoneNumber,password,role}=req.body;


        if (!fullname ||   !phoneNumber || !email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exists",
                success: false,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({fullname,email,phoneNumber,password:hashedPassword,role});
        await newUser.save();
        return res.status(201).json({
            message:"User registered successfully",
            success:true
        });

    } catch (error) {
         console.log(error);
    }
}


export const login = async(req,res)=>{
    try {
        const{email,password,role}=req.body;
        
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User not found",
                success: false,
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        };
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false
            })
        };
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ 
            message:"User fetched successfully",
            success:true,
            users
         });
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
       
        await User.findByIdAndDelete( req.params.id);
        res.status(200).json({ 
            message:"User deleted successfully",
            success:true
         });
    } catch (error) {
        console.log(error);
    }
}







