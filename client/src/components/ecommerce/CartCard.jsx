import React from "react";
import { RxCross1 } from "react-icons/rx";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import axios from "axios";

const CartCard = ({ image, name, price, quantity, productId, onQuantityIncrease,onDelete }) => {

  const handleIncreaseQuantity = async () => {
    try {
      // Call the API to increase the quantity of the product
      await axios.post("http://localhost:3000/api/Ecom/addOneToQuantity", { productId },{withCredentials:true});
      // Call the prop function to update the UI after successful API call
      onQuantityIncrease(productId);
    } catch (error) {
      console.error("Error increasing quantity:", error.message);
    }
  };
  const handleDeleteProduct = async () => {
    try {
      await axios.post("http://localhost:3000/api/Ecom/deleteCart",{productId},{withCredentials:true});
      onDelete(productId);
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };


  return (
    <>
      <div className="h-24 w-[700px] flex flex-row items-center justify-between border border-gray-300 rounded-lg p-4 bg-white">
        <img
          src={image} // Assuming `image` comes from props
          alt="product"
          className="h-16 w-14  rounded-lg"
        />
        <h1>{name}</h1>
        <div className="flex flex-row gap-2 items-center text-2xl ">
          <CiCirclePlus className="text-3xl cursor-pointer" onClick={handleIncreaseQuantity} />
          {quantity}
          {/* <CiCircleMinus className="text-3xl cursor-pointer" /> */}
        </div>
        <h1>Rs.{price}</h1>
        <RxCross1 onClick={handleDeleteProduct} className="text-3xl cursor-pointer" />
      </div>
    </>
  );
};

export default CartCard;
