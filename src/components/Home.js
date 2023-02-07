import React from "react";
import Cards from "./Cards";
import ProductsSlider from "./ProductsSlider";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Cards />
      <ProductsSlider />
    </div>
  );
};

export default Home;
