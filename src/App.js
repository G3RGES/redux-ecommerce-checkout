import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";

function App() {
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
