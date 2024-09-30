import React from "react";

const CheckoutCard = () => {
  return (
    <>
      <div className="h-72 w-[400px] border  rounded-2xl p-4 bg-gray-100 flex flex-col items-center ">
        <h1 className="mb-5 text-xl">Promo Code</h1>
        <label className="input h-10  bg-gray-100 flex items-center gap-2">
          <input
            type="text"
            className=" grow placeholder:text-gray-600 "
            placeholder="Daisy"
          />
          <span className="badge  h-8 w-32 text-white hover:bg-gray-600 ">Apply</span>
        </label>

        <div className="divider divider-vertical   divider-neutral"></div>
        <div className="flex flex-row  w-full px-5 justify-between  ">
          <h1>Subtotal: </h1>
          <h1>Rs.100</h1>
        </div>
        <div className="flex flex-row w-full px-5 justify-between  ">
          <h1>Discount: </h1>
          <h1>Rs.0</h1>
        </div>
        <div className="flex flex-row  w-full px-5 justify-between  ">
          <h1>Total: </h1>
          <h1>Rs.100</h1>
        </div>

        <button className="bg-black mt-2 w-72 h-10 hover:bg-gray-600 text-white rounded-xl">
          Place Order
        </button>
      </div>
    </>
  );
};

export default CheckoutCard;
