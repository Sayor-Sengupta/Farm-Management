import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const CheckoutCard = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState(""); // Address state

  useEffect(() => {
      const total = cart.reduce((acc, product) => {
          return acc + product.productId.price * product.quantity;
      }, 0);
      setTotalPrice(total);
  }, [cart]);

  const handlePlaceOrder = async () => {
      if (!address.trim()) {
          alert("Please enter a delivery address.");
          return;
      }

      try {
          const res = await axios.post(
              "http://localhost:3000/api/Ecom/order",
              { userId: cart[0]?.userId, address }, // Send address in the request
              { withCredentials: true }
          );

          if (res.status === 201) {
              toast.success("Order placed successfully!");
              window.location.reload();
          } else {
              alert("Error placing the order.");
          }
      } catch (error) {
          console.error("Error placing the order:", error);
          toast.error("Failed to place the order. Please try again.");
        }
  };

  return (
      <div className="h-72 w-[400px] border rounded-2xl p-4 bg-gray-100 flex flex-col items-center">
          <h1 className=" text-xl">Checkout</h1>
          
          {/* Address Input */}
          <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter delivery address"
              className="w-80 h-10 px-2 border rounded  bg-white border-black mb-4"
          />

          <div className="flex flex-row w-full px-5 justify-between">
              <h1>Subtotal:</h1>
              <h1>Rs.{totalPrice}</h1>
          </div>
          <div className="flex flex-row w-full px-5 justify-between">
              <h1>Discount:</h1>
              <h1>Rs.0</h1>
          </div>
          <div className="flex flex-row w-full px-5 justify-between">
              <h1>Total:</h1>
              <h1>Rs.{totalPrice}</h1>
          </div>

          <button
              className="bg-black mt-2 w-72 h-10 hover:bg-gray-600 text-white rounded-xl"
              onClick={handlePlaceOrder}
          >
              Place Order
          </button>
      </div>
  );
};

export default CheckoutCard;
