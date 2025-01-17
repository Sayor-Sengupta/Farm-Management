import { get } from "mongoose";
import { Cart } from "../models/Cart.model.js";
import { Order } from "../models/Order.model.js";
import { Product } from "../models/product.model.js";
import { roleIdentify } from "../utils/roleIdentify.js";
import uploadOnCloudinary from "../utils/uploadToCloudinary.js";

export const uploadProduct = async (req, res) => {
  try {
    const loggedInUser = req.user;
    // console.log(loggedInUser.Role);
    // const isBuyerSeller = await roleIdentify(loggedInUser._id);
    // if (!isBuyerSeller) {
    //   return res.status(401).json({ error: "Unauthorized - Invalid user role" });
    // }

    console.log("files", req.file);
    console.log("body", req.body);

    const { name, description, price, category } = req.body;

    console.log(name, price, category);

    if (!name || !price || !category) {
      return res.json({ error: "Please fill all the fields" });
    }

    const imagePath = req.file?.path;
    if (!imagePath) {
      return res.json({ error: "Please upload an image" });
    }

    const upload = await uploadOnCloudinary(imagePath);
    if (!upload || !upload.url) {
      return res.json({ error: "Image upload failed" });
    }

    const product = await Product.create({
      image: upload.url,
      name,

      price,
      category,
      sold: false,
      seller: req.user._id,
    });

    res.json({
      message: "Product uploaded successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
export const getProductList = async (req, res) => {
  try {
    const productList = await Product.find().sort({ createdAt: -1 });
    res.json({
      message: "Product list fetched successfully",
      data: productList,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const filterProduct = async (req, res) => {
  try {
    const { category } = req.body || [];
    const userId = req.user._id; // Assuming you have user information in the request

    let query = {};
    if (category && category.length > 0) {
      query.category = { $in: category };
    }

    // Exclude products created by the current user
    const filteredProducts = await Product.find({
      ...query,
      seller: { $ne: userId }, // Exclude products created by the current user
    }).sort({ createdAt: -1 });

    if (filteredProducts.length === 0) {
      return res.json({
        message: "No filters selected or no matching products found",
        data: filteredProducts,
      });
    }

    res.json({
      message: "Product list fetched successfully",
      data: filteredProducts,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const searchProduct = async (req, res) => {
  try {
    const { search } = req.query;
    const userId = req.user._id;

    const searchOptions = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    };

    const products = await Product.find({
      ...searchOptions,
      seller: { $ne: userId }, // Exclude products created by the current user
    }).sort({ createdAt: -1 });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found matching your search criteria." });
    }

    res.json({ message: "Products found", data: products });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Search failed",
    });
  }
};
export const addToCart = async (req, res) => {
  try {
    const { productId } = req?.body;
    const loggedInUser = req.user._id;
    console.log(loggedInUser);
    console.log(typeof productId);

    const product = await Cart.findOne({ productId, userId: loggedInUser });
    if (product) {
      return res.json({ error: "Product already added to cart previously" });
    }
    const addtocard = new Cart({
      productId: productId,
      quantity: 1,
      userId: loggedInUser,
    });
    await addtocard.save();
    res.json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.json({ error: error.message, message: "Product add to card failed" });
  }
};
export const allCartProduct = async (req, res) => {
  try {
    const loggedInUser = req.user;
    const cart = await Cart.find({ userId: loggedInUser._id }).populate(
      "productId"
    );
    res.json({ message: "Cart fetched successfully", data: cart });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const deleteCartProduct = async (req, res) => {
  try {
    const loggedInUser = req.user;
    const { productId } = req.body;
    const cart = await Cart.findOneAndDelete({
      userId: loggedInUser._id,
      productId,
    });
    res.json({ message: "Product deleted successfully", data: cart });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const addOneToQuantity = async (req, res) => {
  try {
    const loggedInUser = req.user;
    const { productId } = req.body;
    console.log(loggedInUser._id);
    const cart = await Cart.findOneAndUpdate(
      { userId: loggedInUser._id, productId },
      { $inc: { quantity: 1 } },
      { new: true }
    );
    if (!cart) {
      return res.status(404).json({ error: "Product not found in cart" });
    }
    res.json({ message: "Quantity increased by one", data: cart });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const addOrderFromCart = async (req, res) => {
  try {
    const { userId, address } = req.body;

    const cartItems = await Cart.find({ userId }).populate("productId");

    if (cartItems.length === 0) {
      return res
        .status(400)
        .json({ message: "No items in the cart to place an order" });
    }

    const orders = cartItems.map((item) => ({
      userId: item.userId,
      productId: item.productId._id,
      quantity: item.quantity,
      price: item.productId.price * item.quantity,
      address, // Add the address to each order
    }));

    await Order.insertMany(orders);

    await Cart.deleteMany({ userId });

    return res
      .status(201)
      .json({ message: "Order placed successfully", orders });
  } catch (error) {
    console.error("Error placing order:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while placing the order" });
  }
};
export const getOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await Order.find({ userId }).populate("productId");
    res.json({ message: "Orders fetched successfully", data: orders });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const sellerProduct = async (req, res) => {
  try {
    const userId = req.user._id;
    const sellerProducts = await Product.find({ seller: userId });
    res.json({
      message: "Seller products fetched successfully",
      data: sellerProducts,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
