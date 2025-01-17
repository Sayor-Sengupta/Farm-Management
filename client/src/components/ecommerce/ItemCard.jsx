import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ItemCard = ({ id, name, Price, image, originalPrice }) => {
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
      setVisible(false);
    } catch (error) {
      console.error("Error adding product to cart", error);
      toast.error("Failed to add product to cart.");
    }
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-[450px] hover:bg-gray-100">
      {/* Image Section */}
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <LazyLoadImage
          loading="lazy"
          src={image}
          alt="product image"
          className="object-cover"
        />
      </a>

      {/* Details Section */}
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${Price}</span>
            {originalPrice && (
              <span className="text-sm text-slate-900 line-through ml-2">
                Rs.{originalPrice}
              </span>
            )}
          </p>
        </div>

        {/* Add to Cart Button */}
        {visible ? (
          <button
            onClick={addToCart}
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        ) : (
          <p className=" h-10 text-center absolute pt-2 rounded-sm p-1 bg-green-300 w-28">Added to Cart</p>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
