import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterBar = () => {
  return (
    <div className="h-full w-72 m-2 p-2 ">
      <div className="">
        <h1 className="text-3xl font-bold flex flex-row gap-2">
          <FaFilter className="h-6 mt-2" /> {""}Filters
        </h1>

        <div className="mt-7 ml-5">
          <h1 className="text-2xl font-semibold">Categories</h1>
          <div className="ml-5 mt-3 ">
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200 ">
              All
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              fruits & vegetables
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              machineries
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200 ">
              crops
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              others
            </h1>
          </div>

          <h1 className="text-2xl  mt-5 font-semibold ">Price Sort</h1>
          <div className="ml-5 mt-3">
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              100 - 999
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              1000 - 1999
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              2000 - 4999
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              5000- 10000
            </h1>
            <h1 className="px-3 py-2 h-10 w-52  rounded-md flex flex-row gap-2 hover:bg-cyan-200">
              {" "}
              Above 10000
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
