import React from "react";
import Sidebar from "../components/Side Bar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import BuyPage from "./Ecommerrce/BuyPage";

const HomePage = () => {
  return (
    <div className="flex flex-row bg-cSkin ">
      <div className="w-1/6 h-screen bg-cSkin overflow-y-hidden ">
        <Sidebar />
      </div>
      <div className="divider divider-horizontal py-10  divider-success w-1"></div>

  
    </div>
  );
};

export default HomePage;
