import React from "react";

const ItemCard = () => {
  return (
  
    <div className="w-[550px] bg-white shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all rounded-lg mx-auto p-4">
      <div className="flex">
        <div className="p-4 w-1/2 text-center">
          <img
            src="download.jpeg"
            alt="Farm Product"
            className="h-64 mx-auto rounded-lg"
          />
        </div>

        <div className="p-4 w-1/2 border-l-2 border-gray-200">
          <h2 className="text-gray-700 text-lg uppercase font-medium">
            Organic Tomatoes
          </h2>
          <h4 className="text-gray-500 text-xs uppercase font-medium">
            Fresh Farm Produce
          </h4>
          <h1 className="text-gray-700 text-2xl font-light mt-2">Rs. 100 </h1>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Organic tomatoes grown without pesticides, perfect for salads,
            sauces, and more.
          </p>
          <div className="mt-6">
            <div className="flex flex-row gap-8">
              <div className="h-8 w-20 border flex justify-center items-center  bg-orange-50 rounded-lg ">
                <h1 className="text-green-700">#Tech</h1>
              </div>
              <div className="h-8 w-20 border flex justify-center items-center  bg-orange-50 rounded-lg ">
                <h1 className="text-green-700">#sound</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
