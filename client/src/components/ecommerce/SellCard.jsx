import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const SellCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Categories for the select input
  const categories = [
    { value: "fruits", label: "Fruit and Vegetables" },
    { value: "crops", label: "Crops" },
    { value: "machineries", label: "Machineries" },
    { value: "others", label: "Others" },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("name", formData.name);
    productData.append("price", formData.price);
    productData.append("category", formData.category);
    productData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/Ecom/upload",
        productData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      toast.success("Product uploaded successfully");
      console.log("Product uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Error uploading product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-3 px-5"
        encType="multipart/form-data"
      >
        {/* Product Name */}
        <div className="flex flex-row gap-5 justify-between w-[800px] items-center ml-5 ">
          <h1 className="text-lg font-bold">
            Product Name
            <br />
            <span className="text-sm font-normal">
              This Will be displayed in the Buy Page
            </span>
          </h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border input border-black bg-cSkin focus:border-black rounded-lg p-2 w-72"
            placeholder="Type Here"
            required
          />
        </div>
        <div className="h-[1px] bg-black rounded-lg mx-5 my-2"></div>

        {/* Category - Changed to Select */}
        <div className="flex flex-row gap-5 justify-between w-[800px] items-center ml-5 ">
          <h1 className="text-lg font-bold">
            Category
            <br />
            <span className="text-sm font-normal">
              This Will be displayed in the Buy Page
            </span>
          </h1>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="select select-bordered bg-cSkin border border-black focus:border-black rounded-lg p-2 w-72"
            required
          >
            <option disabled value="">
              Select Category
            </option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="h-[0.5px] bg-black rounded-lg mx-5 my-2"></div>

        {/* Price */}
        <div className="flex flex-row gap-5 justify-between w-[800px] items-center ml-5 ">
          <h1 className="text-lg font-bold">
            Price
            <br />
            <span className="text-sm font-normal">Enter the product price</span>
          </h1>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border input border-black bg-cSkin focus:border-black rounded-lg p-2 w-72"
            placeholder="Type Here"
            required
          />
        </div>
        {/* <div className="h-[1px] bg-gray-500 rounded-lg mx-5 my-2"></div> */}

        {/* Description */}
        {/* <div className="flex flex-row gap-2 justify-between w-[800px] ml-5">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">
              Description <br />
              <span className="text-sm font-normal">
                This will be displayed in the Buy Page
              </span>
            </h1>
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="textarea textarea-bordered resize-none w-72 min-h-32 bg-cSkin border-black focus:border-black"
            placeholder="Type Here"
            required
          ></textarea>
        </div> */}
        <div className="h-[1px] bg-gray-600 rounded-lg mx-5 my-2"></div>

        {/* Image */}
        <div className="flex flex-row gap-2 justify-between w-[800px] ml-5">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">
              Images <br />
              <span className="text-sm font-normal">
                This will be displayed in the Buy Page
              </span>
            </h1>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input file-input-bordered bg-cSkin h-10 w-full max-w-72 border border-black"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex  w-[800px] ml-5 mt-5">
          <button
            type="submit"
            className="btn bg-cyan-500 text-white"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </div>
      </form>
    </>
  );
};

export default SellCard;
