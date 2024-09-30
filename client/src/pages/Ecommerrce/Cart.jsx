import CartCard from "@/components/ecommerce/CartCard";
import CheckoutCard from "@/components/ecommerce/CheckoutCard";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const Cart = () => {
  return (
    <>
      <div className="bg-cSkin h-screen p-5 overflow-x-scroll">
        <div className="flex flex-row gap-9 font-bold text-3xl  justify-center items-center ">
          <h1 className=" p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700  ">
            Buy Page
          </h1>
          <h1 className="p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700 ">
            Sell Page
          </h1>
          <h1 className="p-5 hover:underline  border-spacing-2  hover:underline-offset-8 hover:text-cyan-700 ">
            Cart
          </h1>
        </div>
        <div className="divider divider-vertical  divider-neutral mb-10"></div>

        <div className="flex flex-row gap-9 justify-between px-20">
          <div className="h-fit w-fit border border-black rounded-lg ">
            <div className="flex flex-row justify-between items-center p-5 ">
              {" "}
              <h1 className="text-3xl">Cart</h1>
              <h1 className="flex flex-row gap-2 text-red-600">
                <RxCross1 className="text-2xl pt-2" />
                <span className="text-xl">Clear Cart</span>
              </h1>
            </div>
            <div className="flex flex-col gap-5 p-5">
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
          </div>
          <CheckoutCard />
        </div>
      </div>
    </>
  );
};

export default Cart;
