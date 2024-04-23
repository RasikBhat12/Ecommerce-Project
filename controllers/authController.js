import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";


// 1. POST REGISTER
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer, role } = req.body;
        // validations
        if (!name || !email || !password || !phone || !address  || !answer) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // check user
        const existingUser = await userModel.findOne({ email });

        // existing user
        if (existingUser) {
            return res.status(200).json({
                success: false,
                message: 'Already registered, please log in'
            });
        }

        // hash password
        const hashedPassword = await hashPassword(password);

        // save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword, answer, role }).save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error in registration',
            error: error.message
        });
    }
};


// 2. POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            });
        }
        // check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not Registered'
            });
        }
        const match = await comparePassword(password, user.password);
        // validation
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            });
        }
        // token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).send({
            success: true,
            message: 'Login Successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        });
    }
};



// 4. forgotPasswordController
export const forgotPasswordController = async(req,res) => {
    try {
        const {email,answer,newPassword} = req.body
        if(!email) {
            res.status(400).send({message:'Email is required'})
        }
        if(!answer) {
            res.status(400).send({message:'Answer is required'})
        }if(!newPassword) {
            res.status(400).send({message:'newPassword is required'})
        }

        // check
        const user = await userModel.findOne({email,answer})
        // validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Wrong Email or Answer'
            })
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, {password: hashed});
        res.status(200).send({
            success:true,
            message:'Password Reset Successfully'
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Something went wrong',
            error
        })
        
    }
};



// 3. test controller
export const testController = (req,res) => {
    res.send("Protected Routes");
}