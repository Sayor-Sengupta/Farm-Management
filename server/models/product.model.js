  import mongoose from "mongoose";
  const projectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      
    },
    price: {
      type: Number,
      required: true, 
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    sold:{
      type:Boolean
    },
    seller:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }

  },{timestamps:true}); 
  export const Product = mongoose.model("Product", projectSchema);

