import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import ProductsSlider from "./ProductsSlider";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Cards name="cards-1" />
      <ProductsSlider />
      <Cards name="cards-2" />
      <button
        className="w-100 border-0 p-2 text-light"
        style={{ backgroundColor: "var(--primary)" }}
      >
        Back To Top
      </button>
      <Footer />
    </div>
  );
};

export default Home;
