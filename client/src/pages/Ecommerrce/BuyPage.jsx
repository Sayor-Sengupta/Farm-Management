import EcommerceSideBar from "@/components/ecommerce/EcommerceSideBar";
import FilterBar from "@/components/ecommerce/FilterBar";
import ItemCard from "@/components/ecommerce/ItemCard";
import MessageSkeleton from "@/components/ecommerce/Skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BuyPage = () => {
  const [productList, setProductList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch products based on search query
  const fetchProducts = async (query = "") => {
    setLoading(true); // Set loading to true
    try {
      const res = await axios.get(
        `http://localhost:3000/api/Ecom/search?search=${query}`,
        { withCredentials: true }
      );
      console.log(res.data);
      setProductList(res.data.data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false); // Set loading to false after request
    }
  };

  const applyFilters = async (appliedFilters) => {
    setLoading(true); // Set loading to true
    try {
      const res = await axios.post(
        "http://localhost:3000/api/Ecom/filter",
        { category: appliedFilters.category },
        { withCredentials: true }
      );
      console.log(res.data);
      setProductList(res.data.data);
    } catch (error) {
      console.error("Error applying filters", error);
    } finally {
      setLoading(false); // Set loading to false after request
    }
  };

  // Fetch all products on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Trigger search when user presses Enter
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchProducts(searchQuery);
    }
  };

  // Handle filter changes from the FilterBar
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  // Skeleton array for loading placeholders
  const skeletonCards = Array(8).fill(null); // Customize the number of skeletons to match layout

  return (
    <div className="bg-cSkin p-5 flex flex-row h-screen">
      <EcommerceSideBar />
      <div className="divider divider-horizontal divider-success py-10 w-1"></div>
      <div className="h-screen flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-between">
          <label className="input input-bordered bg-white border-black flex items-center gap-4">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex flex-row gap-5 justify-center">
          <div className="grid grid-cols-2 gap-16 mr-30 overflow-y-auto h-[calc(100vh-200px)] overflow-x-hidden">
            {loading ? (
              skeletonCards.map((_, index) => (
                <div className="overflow-hidden">
                  {" "}
                  <MessageSkeleton key={index} />{" "}
                </div>
                // Display skeleton for each card
              ))
            ) : productList.length > 0 ? (
              productList.map((product, index) => (
                <ItemCard
                  key={index}
                  name={product.name}
                  category={product.category}
                  description={product.description}
                  Price={product.price}
                  image={product.image}
                  id={product._id}
                />
              ))
            ) : (
              <h1 className="text-center w-[450px] text-2xl font-bold">
                No Products Found
              </h1>
            )}
          </div>
          <div>
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
