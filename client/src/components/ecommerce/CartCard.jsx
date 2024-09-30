import React from "react";
import { RxCross1 } from "react-icons/rx";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartCard = () => {
  return (
    <>
      <div className="h-24 w-[700px] flex flex-row items-center justify-between border border-gray-300 rounded-lg p-4 bg-white">
        <img
          src="./logosvg.svg"
          alt="logo"
          className="h-20 w-14 rounded-full object-cover"
        />

        <h1> Apple </h1>

        <div className="flex flex-row gap-2 items-center text-2xl ">
          <CiCirclePlus className="text-3xl" /> 1 <CiCircleMinus className="text-3xl" />{" "}
        </div>

        <h1>Rs.100</h1>
        <RxCross1 />
      </div>
    </>
  );
};

export default CartCard;
