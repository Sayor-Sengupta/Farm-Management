import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const CheckoutCard = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price when the cart changes
  useEffect(() => {
    const total = cart.reduce((acc, product) => {
      return acc + product.productId.price * product.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  // Function to place the order
  const handlePlaceOrder = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/Ecom/order",
        { userId: cart[0]?.userId }, // Assuming userId is the same for all products
        { withCredentials: true }
      );
      
      if (res.status === 201) {
       toast.success("Order placed successfully!");
        window.location.reload(); // Reload the page to clear the cart UI after placing the order
      } else {
        alert("Error placing the order.");
      }
    } catch (error) {
      console.error("Error placing the order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };

  return (
    <div className="h-72 w-[400px] border rounded-2xl p-4 bg-gray-100 flex flex-col items-center">
      <h1 className="mb-5 text-xl">Promo Code</h1>
      <label className="input h-10 bg-gray-100 flex items-center gap-2">
        <input
          type="text"
          className="grow placeholder:text-gray-600"
          placeholder="enter your code"
        />
        <span className="badge h-8 w-32 text-white hover:bg-gray-600">Apply</span>
      </label>

      <div className="divider divider-vertical divider-neutral"></div>

      {/* Subtotal, Discount, and Total */}
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
