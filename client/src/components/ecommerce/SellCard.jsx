import React from "react";

const SellCard = () => {
  return (
    <div className="h-[500px] w-[800px] bg-orange-300 border border-gray-200 rounded-lg p-5 flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl font-bold">Sell Page</h1>
      <input
        type="text"
        className="border input border-gray-200 bg-gray-300 rounded-lg p-2 w-72"
        placeholder="Enter Product Name"
      />
      <input
        type="text"
        className="border input border-gray-200 bg-gray-300 rounded-lg p-2 w-72"
        placeholder="Type"
      />
      <textarea
        className="textarea textarea-bordered resize-none  w-72 min-h-32 bg-gray-300 placeholder:text-black"
        placeholder="Description"
      ></textarea>
      <input
        type="number"
        className="border  border-gray-200 bg-gray-300 rounded-lg p-2 w-72"
        placeholder="Price"
      />
      <h1>Enter 2 tags</h1>
      <div className="flex flex-row gap-8 justify-between">
        {" "}
        <input
          type="text"
          className="border input border-gray-200 bg-gray-300 rounded-lg p-2 w-32"
          placeholder="Enter 2 tags"
        />
        <input
          type="text"
          className="border input border-gray-200 bg-gray-300 rounded-lg p-2 w-32"
          placeholder="Enter 2 tags"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered   bg-gray-400  h-10  w-full max-w-xs"
      />
    </div>
  );
};

export default SellCard;
