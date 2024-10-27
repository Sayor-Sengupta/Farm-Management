import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: String,
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
    quantity: Number,
    price: Number,
},{timeseries: true});
export const Order = mongoose.model("Order", orderSchema);