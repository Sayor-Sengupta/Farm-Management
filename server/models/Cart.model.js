import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: String,
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
    quantity: Number,
},{timeseries: true });
export const Cart = mongoose.model("Cart", cartSchema); 