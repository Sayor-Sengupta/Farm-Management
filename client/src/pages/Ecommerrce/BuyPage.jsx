import FilterBar from "@/components/ecommerce/FilterBar";
import ItemCard from "@/components/ecommerce/ItemCard";
import React from "react";

const BuyPage = () => {
  return (
    <>
      <div className="bg-cSkin h-screen p-5 overflow-x-scroll">
        <div className="flex flex-row gap-9 font-bold text-3xl  justify-center items-center ">
      
          <h1 className=" p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700  ">Buy Page</h1> 
          <h1 className="p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700 ">Sell Page</h1>
          <h1 className="p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700 ">Cart</h1>
        </div>
        <div className="divider divider-vertical  divider-neutral "></div>
        <div className="flex flex-row justify-center items-center h-full">
          <FilterBar />
          <div className="grid grid-cols-2 gap-16 p-10">
            {" "}
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default BuyPage;
