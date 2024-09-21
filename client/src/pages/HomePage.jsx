import React from "react";
import Sidebar from "../components/Side Bar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";

const HomePage = () => {
  return (
    <div className="flex flex-row  ">
      <div className="w-1/6 h-screen bg-gray-200">
        <Sidebar />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
};

export default HomePage;
