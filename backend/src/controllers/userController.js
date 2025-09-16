import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
    try {
        const { username, password } = req.body;

        // check if username exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
        return res.status(400).json({ message: "Username already taken" });
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // save the user
        const newUser = new User({ username, password: hashedPassword});
        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(201).json({ 
            message: "User registered!",
            token,
            user: { id: newUser._id, username: newUser.username }
        });
    } catch (error) {
        console.log("Error in register controller", error);
        res.status(500).json({ error: "Internal server error" })        
    }
}

export async function login(req, res) {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token });

        } catch (error) {
            console.error("Error in login controller", error);
            res.status(500).json({message:"Internal server error"});
        }
}