import React from "react";

import { useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeProduct,
} from "../features/basketSlice";

const Product = ({ name, price, image, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center gap-8 px-10 border border-gray-200">
      <img className="w-40" src={image} alt={name} />
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="w-1/2 px-10">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-lg tracking-wide">$ {price}</p>
          <button
            className="text-red-500 tracking-wide pt-1 pb-2
        text-lg font-medium "
            onClick={() => dispatch(removeProduct({ name }))}
          >
            Remove
          </button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium">Amount</p>
          <div className="flex flex-row items-center gap-3 font-medium ">
            <button
              className="text-red-700 text-xl"
              onClick={() => {
                amount > 1
                  ? dispatch(decreaseAmount({ name }))
                  : dispatch(removeProduct({ name }));
              }}
            >
              -
            </button>
            <p>{amount}</p>
            <button
              className="text-green-700 text-xl"
              onClick={() => dispatch(increaseAmount({ name }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
