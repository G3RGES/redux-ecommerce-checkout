import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProducts = () => {
  const { products, total, amount } = useSelector((store) => store.basket);

  return (
    <div>
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
    </div>
  );
};

export default BasketProducts;
