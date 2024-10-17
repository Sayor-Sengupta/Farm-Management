import mongoose from "mongoose";

const OptSchema = new mongoose.Schema({
    userId: String,
    otp: String,
    createdAt: Date,
    expiredAt: Date,

})
export const UserOpt = mongoose.model("UserOpt", OptSchema);