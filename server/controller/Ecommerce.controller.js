import { Cart } from "../models/Cart.model.js";
import { Product } from "../models/product.model.js";
import { roleIdentify } from "../utils/roleIdentify.js";
import uploadOnCloudinary from "../utils/uploadToCloudinary.js";

export const uploadProduct = async (req, res) => {
  try {
    const loggedInUser = req.user;
    console.log(loggedInUser.Role);
    const isBuyerSeller = await roleIdentify(loggedInUser._id);
    if (!isBuyerSeller) {
      return res.status(401).json({ error: "Unauthorized - Invalid user role" });
    }

    console.log("files", req.file);
    console.log("body", req.body);

    const { name, description, price, category } = req.body;

    if (!name || !description || !price || !category) {
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
      description,
      price,
      category,
    });

    res.json({
      message: "Product uploaded successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
    const search = await Product.find({ category: { $in: category } });
    res.json({ message: "Product list fetched successfully", data: search });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const searchProduct = async (req, res) => {
  try {
    const {search} = req.query;

    const searchOptions  = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    };

    const products = await Product.find(searchOptions);

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found matching your search criteria." });
    }

    res.json({ message: "Products found", data: products });
  } catch (error) {
    res.status(500).json({ error: error.message, message: "Search failed" });
  }
};
export const addToCart = async (req, res) => {
  try {
    const { productId } = req?.body;
    const loggedInUser = req.user._id;
    console.log(loggedInUser);
    console.log(typeof productId);

    const product = await Cart.findOne({ productId });
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
