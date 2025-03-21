import { useAuthStore } from "@/State/useAuth.js";
import React from "react";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const EcommerceSideBar = () => {
  const { authUser } = useAuthStore();
  const location = useLocation();

  const getActiveClass = (path) => {
    if (location.pathname === "/" && path === "/buyPage") return "bg-cyan-200"; // Default to Buy Page
    return location.pathname === path ? "bg-cyan-200" : "";
  };

  return (
    <div className="h-full py-6 m-6 flex flex-col items-center">
      <div className="flex flex-row gap-3">
        <Link to="/">
          <IoArrowBackSharp className="text-3xl hover:cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-bold">Ecommerce</h1>
      </div>
      <div className="divider divider-success"></div>
      <div className="flex flex-col justify-between h-full mt-5 overflow-hidden">
        <div className="flex flex-col gap-3">
          <div>
            <Link
              to="/buypage"
              className={`px-3 py-2 h-10 w-44 flex flex-row gap-2 rounded-md hover:bg-cyan-200 ${getActiveClass(
                "/buypage"
              )}`}
            >
              <IoMdCart className="text-2xl" />
              <h1 className="font-bold">Buy Page</h1>
            </Link>
          </div>
          {authUser.Role !== "BuyerAndSelle" ? (
            <Link
              to="/sellpage"
              className={`px-3 py-2 h-10 flex flex-row w-44 gap-2 rounded-md hover:bg-cyan-200 ${getActiveClass(
                "/sellpage"
              )}`}
            >
              <IoMdCart className="text-2xl" />
              <h1 className="font-bold">Sell Page</h1>
            </Link>
          ) : null}
          <Link
            to="/cart"
            className={`px-3 py-2 h-10 w-44 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${getActiveClass(
              "/cart"
            )}`}
          >
            <IoMdCart className="text-2xl" />
            <h1 className="font-bold">Cart</h1>
          </Link>
          <Link
            to="/order"
            className={`px-3 py-2 h-10 w-44 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${getActiveClass(
              "/order"
            )}`}
          >
            <IoMdCart className="text-2xl" />
            <h1 className="font-bold">Orders</h1>
          </Link>
          <Link
            to="/sold"
            className={`px-3 py-2 h-10 w-44 rounded-md flex flex-row gap-2 hover:bg-cyan-200 ${getActiveClass(
              "/sold"
            )}`}
          >
            <IoMdCart className="text-2xl" />
            <h1 className="font-bold">Listed Items</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSideBar;
