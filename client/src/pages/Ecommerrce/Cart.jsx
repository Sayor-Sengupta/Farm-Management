import React, { useEffect, useState } from "react";
import axios from "axios";
import EcommerceSideBar from "@/components/ecommerce/EcommerceSideBar";
import CartCard from "@/components/ecommerce/CartCard";
import CheckoutCard from "@/components/ecommerce/CheckoutCard";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const cartProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/Ecom/CartProducts",
        {
          withCredentials: true,
        }
      );
      setCart(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    cartProducts();
  }, []);

  // Function to handle quantity increase in the state
  const handleQuantityIncrease = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.productId._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDelete = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-cSkin h-screen p-5 w-screen flex flex-row overflow-y-hidden">
      <EcommerceSideBar />
      <div className="divider divider-horizontal py-10 pr-5 divider-success w-1"></div>
      <div className="flex flex-row gap-9 justify-between mt-10">
        <div className="h-fit w-fit border border-black rounded-lg">
          <div className="flex flex-row justify-between items-center p-5">
            <h1 className="text-3xl">Cart</h1>
          </div>
          <div className="flex flex-col gap-5 p-5">
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <CartCard
                  key={index}
                  name={product.productId.name}
                  price={product.productId.price}
                  quantity={product.quantity}
                  productId={product.productId._id}
                  onQuantityIncrease={handleQuantityIncrease}
                  onDelete={() => handleDelete(index)}
                  image={product.productId.image}
                />
              ))
            ) : (
              <h1 className="h-24 w-[700px] text-center flex items-center justify-center rounded-lg p-4">
                No Products Found
              </h1>
            )}
          </div>
        </div>
        {/* Pass cart to CheckoutCard */}
        <CheckoutCard cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
