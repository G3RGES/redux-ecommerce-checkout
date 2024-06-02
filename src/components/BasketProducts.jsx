import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProducts = () => {
  const { products, total, amount } = useSelector((store) => store.basket);

  return (
    <div className="py-4">
      {amount > 0 ? (
        <>
          {products.map((product, idx) => (
            <Product
              key={idx}
              //   key={new Date().getTime()+Math.random()}//* DIFFERENT WAY TO HAVE A KEY
              className=""
              name={product.name}
              price={product.price}
              image={product.image}
              amount={product.amount}
            />
          ))}

          <div className="flex flex-row items-center justify-evenly">
            <p className="text-2xl font-medium">Total</p>
            <p className="text-2xl font-medium">${total}</p>
          </div>
        </>
      ) : (
        <p className="text-center text-2xl font-semibold text-red-800">
          No Products
        </p>
      )}
    </div>
  );
};

export default BasketProducts;
