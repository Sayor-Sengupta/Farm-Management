import EcommerceSideBar from "@/components/ecommerce/EcommerceSideBar";
import SoldItemCard from "@/components/ecommerce/SoldItems";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SoldItems = () => {
  const [soldItems, setSoldItems] = useState([]); // Store sold items data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch sold items from the backend
  useEffect(() => {
    const fetchSoldItems = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/Ecom/sellerProduct",
          { withCredentials: true }
        );
        setSoldItems(res.data.data); // Assuming the API returns an array of sold items
      } catch (error) {
        console.error("Error fetching sold items", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSoldItems(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="bg-cSkin h-screen overflow-hidden flex flex-row">
      <EcommerceSideBar />
      <div className="divider divider-success divider-horizontal py-10 w-1"></div>
      <div className="flex flex-col p-14 gap-2  ">
        <h1 className="text-2xl font-bold mb-10">Listed Items</h1>
        {loading ? (
          <p>Loading...</p> // Show loading text while fetching
        ) : soldItems.length > 0 ? (
          soldItems.map((item, index) => (
            <SoldItemCard
              key={index}
              image={item.image} // Image URL from backend
              productName={item.name} // Product name
              sold={item.sold ? "Yes" : "No"} // Display sold status
              price={item.price} // Product price
            />
          ))
        ) : (
          <h1 className="text-center w-full text-xl font-bold">
            No Sold Items Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default SoldItems;
