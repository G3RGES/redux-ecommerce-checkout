import React from "react";

import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <div
      className="flex flex-row justify-evenly items-center
     mt-2 pt-4 text-lg font-medium bg-gray-500"
    >
      <p>Home</p>
      <p>
        Cart
        <span
          className="text-xs align-top bg-red-500 text-white
         rounded-full px-2 py-1 mx-1"
        >
          0
        </span>
      </p>
    </div>
  );
};

export default Navbar;
