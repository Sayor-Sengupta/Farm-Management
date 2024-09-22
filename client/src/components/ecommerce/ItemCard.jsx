import React from "react";

const ItemCard = () => {
  return (
    <>
      <div className="h-72 w-[550px] border px-10 border-black bg-orange-50 rounded-3xl flex flex-row items-center">
        <div className="p-5 h-52 w-48 border rounded-3xl border-black">
          <img src="./vite.svg" className="h-full w-full object-cover" />
        </div>
        <div className="p-5    h-52 flex flex-col gap-3 ">
          <h1 className="text-xl font-bold">JBL headphones</h1>

          <h1>Rs. 100</h1>
          <button className="btn hover:bg-gray-500">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
