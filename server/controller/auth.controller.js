import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import genCookie from "../utils/genCookie.js";
import { UserOpt } from "../models/otp.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

let transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});
console.log("Auth email:", process.env.AUTH_EMAIL);
console.log("Auth password:", process.env.AUTH_PASS);

transporter.verify((error, success) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("transporter is ready");
    console.log(success);
  }
});

export const signIn = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, email } = req.body;

    if (password !== confirmPassword) {
      return res.status(401).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ userName });

    if (user) return res.status(400).json({ error: "UserName already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      email,
      verified: false,
    });

    console.log(newUser);

    await newUser
      .save()
      .then((result) => {
        sendOTP(result, res);
        return;
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "failed",
          message: "error when saving account",
        });
      });

    genCookie(newUser._id, res);

    // const createdUser = await User.findById(newUser._id).select("-password");
    // console.log(createdUser);

    // return res.status(200).json({
    //   createdUser,
    //   message: "User registered successfully",
    // });
  } catch (error) {
    console.log("Error in signup:", error.message);
    return res.status(500).json({ error: "Error in signup" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    const user = await User.findOne({ $or: [{ userName }, { email }] });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(401).json({
        error: "invalid username or password",
      });
    }

    genCookie(user._id, res);

    const loggedInUser = await User.findById(user._id).select("-password");

    return res.status(200).json({
      loggedInUser,
      messages: "loggedInSuccess",
    });
  } catch (error) {
    console.log("error in login", error.message);
    return res.status(500).json({ message: "error -login " });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ messages: "Logged out" });
  } catch (error) {
    console.log("error in logout", error.message);
    return res.status(500).json({ error: "internal server error" });
  }
};
const sendOTP = async ({ email, _id }, res) => {
  try {
    const otp = `${Math.floor(Math.random() * 9000 + 1000)}`;
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "verify your email",
      html: `<h1>verify your email</h1><p>Your OTP is ${otp}</p>`,
    };
    const genSalt = 10;
    const hashedOtp = await bcrypt.hash(otp, genSalt);
    const newOtpVerification = await new UserOpt({
      userId: _id,
      otp: hashedOtp,
      createdAt: Date.now(),
      expiredAt: Date.now() + 3600000,
    });
    // log.("newOtpVerification", newOtpVerification);
    await newOtpVerification.save();
    await transporter.sendMail(mailOptions);

    res.json({
      status: "pending",
      message: "OTP sent successfully",
      data: {
        userId: _id,
        email,
      },
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
};
export const verifyOtp = async (req, res) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      res.json({
        message: "Empty otp ",
      });
    } else {
      const userOtpVerify = await UserOpt.findOne({ userId });
      console.log(userOtpVerify);
      if (userOtpVerify.length <= 0) {
        res.json({
          message:
            "Account record doesnt exist or has been verified .please sign up or login",
        });
      } else {
        const { expiredAt } = userOtpVerify;
        const hashedOtp = userOtpVerify.otp;
        if (expiredAt < Date.now()) {
          await userOtpVerify.deleteMany({ userId });
          res.json({
            message: "OTP has expired",
          });
        } else {
          const vaildOtp = await bcrypt.compare(otp, hashedOtp);
          if (!vaildOtp) {
            res.json({
              message: "Invalid OTP",
            });
          } else {
            await User.updateOne({ _id: userId }, { verified: true });
            await UserOpt.deleteMany({ userId });
            res.json({
              message: "OTP verified successfully",
              status: "verified",
            });
          }
        }
      }
    }
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
};
export const resendOTP = async (req, res) => {
  try {
    let { userId, email } = req.body;
    if(!userId || !email){
      res.json({
        message:"Empty otp "

      })
    }else{
        await UserOpt.deleteMany({userId})   
        sendOTP({_id:userId,email},res) 

    }
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
};
