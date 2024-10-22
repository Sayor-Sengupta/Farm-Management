import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: String,
    productId: String,
    quantity: Number,
},{timeseries: true});
export const Cart = mongoose.model("Cart", cartSchema);