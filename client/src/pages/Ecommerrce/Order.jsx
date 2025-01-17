import React, { useEffect, useState } from "react";
import EcommerceSideBar from "@/components/ecommerce/EcommerceSideBar";
import OrderCard from "@/components/ecommerce/OrderCard";
import axios from "axios";
import { useAuthStore } from "@/State/useAuth";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { authUser } = useAuthStore();

  // Fetch orders from the API
  const fetchOrders = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/Ecom/getOrders",
        { userId: authUser._id }, // Send userId in the request body
        { withCredentials: true }
      );
      console.log(res.data);
      setOrders(res.data.data); // Assuming the orders are in `data.data`
    } catch (error) {
      console.log("Error fetching orders: ", error.message);
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders when the component mounts
  }, []);

  return (
    <div className="bg-cSkin h-screen overflow-hidden flex flex-row ">
      <EcommerceSideBar />
      <div className="divider divider-success divider-horizontal py-10 w-1"></div>
      <div className="mt-12 pl-5 ml-10 p-9  ">
        <h1 className="text-2xl font-bold mb-10 ">Orders</h1>

        {/* Map over orders and display each using OrderCard */}
        <div className=" p-8  border border-black    rounded shadow mt-4 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-rose-400 scrollbar-track-red-600">
          {" "}
          <div className="  ">
            {" "}
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5  py-5 w-fit border-gray-300 "
                >
                  {/* <h1 className="text-lg mb-5">OrderId: #{order._id}</h1> */}
                  <OrderCard
                    orderId={order._id} // Pass orderId
                    productName={order.productId.name} // Get product name
                    quantity={order.quantity} // Get quantity from order
                    price={order.price} // Get price from order
                    image={order.productId.image} // Get product image
                  />
                  <div className="h-0.5  bg-gray-200"></div>
                </div>
              ))
            ) : (
              <h1 className="p-5">No Orders Found</h1> // Display if no orders are available
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
