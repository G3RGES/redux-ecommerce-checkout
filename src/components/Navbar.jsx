import React from "react";

import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.basket.amount);

  return (
    <div
      className="flex flex-row justify-evenly 
     mt-2 pt-4 text-lg font-medium bg-gray-400"
    >
      <p>Home</p>
      <p>
        Cart
        <span
          className="text-xs align-top bg-red-500 text-white
         rounded-full px-2 py-1 mx-1"
        >
          {amount}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
