import Sidebar from "@/components/Side Bar/Sidebar";
import React from "react";

const WeatherPredict = () => {
  return (
    <>
      <div className=" w-full bg-cSkin h-screen overflow-hidden rounded-lg shadow-lg flex flex-row ">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="divider divider-horizontal py-10  divider-success w-1"></div>
      </div>
    </>
  );
};

export default WeatherPredict;
