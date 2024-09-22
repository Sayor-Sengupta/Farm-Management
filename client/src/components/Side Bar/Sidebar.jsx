import React from "react";
import { FaWheatAwn } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";
import { BiBookOpen } from "react-icons/bi";
import { MdOutlinePestControl } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className=" h-full py-6  m-6 flex flex-col items-center">
        <div className="flex flex-row  gap-3 ">
          <FaWheatAwn className="text-3xl" />
          <h1 className="text-2xl font-bold">Farm Manage</h1>
        </div>
        <div className="divider divider-success  "></div>

        <div className="flex flex-col justify-between h-full mt-5 overflow-hidden">
          <div className="flex  flex-col gap-3 ">
            <div className="px-3 py-2 h-10 w-52 flex flex-row gap-2  rounded-md hover:bg-cyan-200">
              <ImProfile className="text-2xl" />{" "}
              <h1 className="font-bold">Profile</h1>
            </div>
            <div className="px-3 py-2 h-10 flex flex-row w-52 gap-2 rounded-md hover:bg-cyan-200">
              {" "}
              <TiWeatherCloudy className="text-2xl " />
              <h1 className="font-bold">Weather Forcast</h1>
            </div>
            <div className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              {" "}
              <FaCartShopping className="text-2xl" />
              <h1 className="font-bold">Buy and sell goods</h1>
            </div>
            <div className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              {" "}
              <BiBookOpen className="text-2xl " />
              <h1 className="font-bold">Crop planning </h1>
            </div>
            <div className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              {" "}
              <MdOutlinePestControl className="text-2xl " />
              <h1 className="font-bold">Pest Control </h1>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="divider divider-success"></div>
            <div>
              <h1 className="text-center">Version - 1.0.0</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
