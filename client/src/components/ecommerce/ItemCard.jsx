import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, category, description, Price, image }) => {
  // Add to cart function
  const [visible, setVisible] = useState(true);
  const addToCart = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/Ecom/addToCart",
        {
          productId: id, // Pass the product id
        },
        { withCredentials: true }
      );
      // Notify success
      toast.success("Product added to cart!");
      setVisible(false)
    } catch (error) {
      console.error("Error adding product to cart", error);
      toast.error("Failed to add product to cart.");
    }
  };

  return (
    <div className="w-[450px] h-72 bg-white shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all rounded-lg mx-auto p-4">
      <div className="flex">
        <div className="w-1/2 p-2 flex items-center justify-center">
          <img
            src={image}
            alt="Farm Product"
            className="h-60 mx-auto rounded-lg"
          />
        </div>

        <div className="p-4 w-1/2 border-l-2 border-gray-200">
          <h2 className="text-gray-700 text-lg uppercase font-medium">{name}</h2>
          <h4 className="text-gray-500 text-xs uppercase font-medium">{category}</h4>
          <h1 className="text-gray-700 text-2xl font-light mt-2">{Price}</h1>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">{description}</p>
          <div>
          {visible ? ( 
              <button onClick={addToCart} className="btn btn-primary mt-10">
                Add to Cart
              </button>
            ) : (
              <p className="text-green-600 mt-10">Added to Cart</p> // Message after adding to cart
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
