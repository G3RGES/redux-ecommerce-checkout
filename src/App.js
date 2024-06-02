import { useDispatch, useSelector } from "react-redux";
import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { updateTotal } from "./features/basketSlice";

function App() {
  const { products } = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <>
      <Navbar />

      <h1 className="text-3xl font-semibold text-center mt-2 py-3">
        Redux E-Commerce Checkout
      </h1>

      <BasketProducts />
    </>
  );
}

export default App;
