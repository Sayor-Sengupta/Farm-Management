import React from "react";
import { Text } from "react-font";
import { Link } from "react-router-dom";

const GotoCard = ({ title, image, link, className = "" }) => {
  return (
    <Link
      to={link} 
      className={`h-64 w-96 pl-5 pt-4 pr-5 bg-green-300 rounded-2xl flex flex-col hover:bg-green-400   `}
    >
      <Text family="Space Grotesk" className="text-xl">
        {title}
      </Text>
      <img
        src={image}
        className={`h-48 w-64 ml-16   ${className}`}
        style={{ mixBlendMode: "multiply" }}
        alt=""
      />
    </Link>
  );
};

export default GotoCard;
