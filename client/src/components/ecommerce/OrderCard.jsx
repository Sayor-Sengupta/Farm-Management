import React from "react";

const OrderCard = ({ orderId, productName, quantity, price, image }) => {
  return (
    <div className="h-24 w-[700px] flex flex-row items-center justify-between border border-gray-300 rounded-lg p-4 bg-white">
      <img
        src={image} // Display product image
        alt={productName}
        className="h-16 w-14 rounded-md "
      />
      <div className="flex flex-col items-center">
        <h1>Product Name</h1>
        <h1>{productName}</h1> {/* Dynamically show product name */}
      </div>

      <div className="flex flex-col  items-center text-lg ">
        <h1>Quantity:</h1>
        <h1 className="text-sm">{quantity}</h1> {/* Dynamically show quantity */}
      </div>
      <div className="flex flex-col  items-center text-lg">
        <h1>Price</h1>
        <h1 className="text-sm">Rs. {price}</h1> {/* Dynamically show price */}
      </div>
    </div>
  );
};

export default OrderCard;
