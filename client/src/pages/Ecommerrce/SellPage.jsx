import SellCard from "@/components/ecommerce/SellCard";
import React from "react";

const SellPage = () => {
  return <>
    <div className="bg-cSkin h-screen p-5 overflow-x-scroll">
    <div className="flex flex-row gap-9 font-bold text-3xl  justify-center items-center ">
          <h1 className=" p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700  ">
            Buy Page
          </h1>
          <h1 className="p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700 ">
            Sell Page
          </h1>
          <h1 className="p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700 ">
            Cart
          </h1>
        </div>
        <div className="divider divider-vertical  divider-neutral mb-10"></div>
        <SellCard/>
    </div>
  </>;

};

export default SellPage;
