import EcommerceSideBar from "@/components/ecommerce/EcommerceSideBar";
import SellCard from "@/components/ecommerce/SellCard";
import React from "react";

const SellPage = () => {
  return (
    <>
      <div className="bg-cSkin h-screen flex flex-row  p-5 ">
        <EcommerceSideBar />

        <div className="divider divider-horizontal py-10  divider-success w-1"></div>

        <div className="w-full flex justify-center mt-20">
          <SellCard />
        </div>
      </div>
    </>
  );
};

export default SellPage;
