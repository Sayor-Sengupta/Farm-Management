import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterBar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category }); // Send the selected category to the parent component
  };

  return (
    <div className="h-full w-72 m-2 p-2">
      <div>
        <h1 className="text-3xl font-bold flex flex-row gap-2">
          <FaFilter className="h-6 mt-2" /> {""}Filters
        </h1>

        <div className="mt-7 ml-5">
          <h1 className="text-2xl font-semibold">Categories</h1>
          <div className="ml-5 mt-3 ">
            <h1
              className={`px-3 py-2 h-10 w-40 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${
                selectedCategory === "all" ? "bg-cyan-300" : ""
              }`}
              onClick={() => handleCategoryClick("")}
            >
              All
            </h1>
            <h1
              className={`px-3 py-2 h-10 w-44 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${
                selectedCategory === "fruits & vegetables" ? "bg-cyan-300" : ""
              }`}
              onClick={() => handleCategoryClick("fruits & vegetables")}
            >
              Fruits & Vegetables
            </h1>
            <h1
              className={`px-3 py-2 h-10 w-40 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${
                selectedCategory === "machineries" ? "bg-cyan-300" : ""
              }`}
              onClick={() => handleCategoryClick("machineries")}
            >
              Machineries
            </h1>
            <h1
              className={`px-3 py-2 h-10 w-40 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${
                selectedCategory === "crops" ? "bg-cyan-300" : ""
              }`}
              onClick={() => handleCategoryClick("crops")}
            >
              Crops
            </h1>
            <h1
              className={`px-3 py-2 h-10 w-40 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${
                selectedCategory === "others" ? "bg-cyan-300" : ""
              }`}
              onClick={() => handleCategoryClick("others")}
            >
              Others
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
