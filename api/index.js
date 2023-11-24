const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

require('dotenv').config();

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose.connect(process.env.MONGODB_URL, 
    {useNewUrlParser: true,
    useUnifiedTopology: true,}
).then(() => {console.log("Connected to mongoDB")
}).catch((err) => {console.log("Error connecting to mongoDB", err)});

app.listen(port, () => {
    console.log("Server is running on port 8000");
})

const User = require("./models/user");
//endpoint to register a user in the backend
app.post("/register", async(req,res) => {
    try{
        const {name,email,password} = req.body;

        //check if the email is already registered
        const existingUser = await User.findOne({email});
        if(existingUser){
            console.log("Email already registered")
            return res.status(400).json({message:"Email already registered"})
        }

        //create a new user
        const newUser = new User({
            name,
            email,
            password
        });

        //generate the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the user to the database
        await newUser.save();

        //send the verification email to the registered user
        sendVerificationEmail(newUser.email, newUser.verificationToken);

        res.status(202).json({message:"Registration successful. Please check your mail for verification"})
    } catch(error) {
        console.log("Error registering user", error);
        res.status(500).json({message:"Registration failed"})
    }
});

const sendVerificationEmail = async(email,verificationToken) => {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"jpboro01@gmail.com",
            pass:"rvbt zqhb duef pmqd"
        }
    });

    const mailOptions = {
        from:"PrepMaster",
        to:email,
        subject:"Email verification",
        text:"Please click the following link to verify your email : https://prepmaster-cgib.onrender.com/verify/"+verificationToken,
    };

    //send the email
    try{
        await transporter.sendMail(mailOptions);
        console.log("Verification email sent successfully")
    } catch(error){
        console.log("Error sending the cerification email")
    }
};

//endpoint to verify email
app.get("/verify/:token", async(req,res) => {
    try{
        const token = req.params.token;

        const user = await User.findOne({verificationToken: token});
        if(!user){
            return res.status(404).json({message:"Invalid verification token"})
        }
        //mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message:"Email verified successfully"})

    } catch(error){
        res.status(500).json({message:"Email verification failed"})
    }
})

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");

    return secretKey;
};

const secretKey = generateSecretKey();

//endpoint to login a user
app.post("/login", async(req,res) => {
    try{
        const {email,password} = req.body;

        //check if user exists already
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid email or password"})
        }

        //check if the password is correct
        if(user.password != password){
            return res.status(401).json({message:"Invalid password"})
        }

        const token = jwt.sign({userId:user._id},secretKey);

        res.status(200).json({token});

    } catch(error){
        res.status(500).json({message:"Login failed"})
    }
})

//endpoint to show first questions
const Questions = require("./models/questionSchema");

app.get("/questions/paper1", async(req,res) => {
    try {
        const questions = req.params.question;

        const question = await Questions.find({questions});
        if(!question){
            return res.status(404).json({message:"Question not found"})
        }
        
        res.status(200).json({question})
    } catch(err) {
        res.status(500).json({message:"Error retrieving questions"})
    }
});
