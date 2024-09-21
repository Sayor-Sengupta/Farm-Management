import React from "react";
import { FaWheatAwn } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <div className="m-6 ">
        <div className="flex flex-row  gap-3 ">
          <FaWheatAwn className="text-3xl" />
          <h1 className="text-2xl font-bold">Farm Manage</h1>
        </div>
        <div className="flex mt-32 flex-col gap-3 ">
          <div className="px-3 py-2 h-10 w-52 flex flex-row gap-2  rounded-md hover:bg-cyan-200">
            <ImProfile className="text-2xl"/> <h1 className="font-bold">Profile</h1></div>  
          <div className="px-3 py-2 h-10 flex flex-row w-52 gap-2 rounded-md hover:bg-cyan-200"> <TiWeatherCloudy className="text-2xl "/><h1 className="font-bold">Weather Forcast</h1></div>  
          <div className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200"> <FaCartShopping className="text-2xl"/><h1 className="font-bold">Buy and sell goods</h1></div>  
        </div>

        
      </div>
    </>
  );
};

export default Sidebar;
