import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductsSlider = () => {
  return (
    <div className="products-slider px-3" style={{ marginTop: "-150px" }}>
      <Carousel responsive={responsive}>
        <Product
          src="https://m.media-amazon.com/images/I/41JD84UuRuL._AC_SY200_.jpg"
          price="EGP4295 and under"
          heading="top deal"
          text="Save on Bebe Women Apparel"
        />
        <Product
          src="https://m.media-amazon.com/images/I/41B0RIP5rnL._AC_SY200_.jpg"
          price="EGP4295 and under"
          heading="top deal"
          text="Save on Bebe Women Apparel"
        />
        <Product
          src="https://m.media-amazon.com/images/I/31taNDQEvXL._AC_SY200_.jpg"
          price="EGP4295 and under"
          heading="top deal"
          text="Save on Bebe Women Apparel"
        />
        <Product
          src="https://m.media-amazon.com/images/I/41+zB5tPs3L._AC_SY200_.jpg"
          price="EGP4295 and under"
          heading="top deal"
          text="Save on Bebe Women Apparel"
        />
        <Product
          src="https://m.media-amazon.com/images/I/31cujIBydTL._AC_SY200_.jpg"
          price="EGP4295 and under"
          heading="top deal"
          text="Save on Bebe Women Apparel"
        />
        <Product
          src="https://m.media-amazon.com/images/I/31vOdYbThrL._AC_SY200_.jpg"
          price="EGP4295 and under"
          heading="top deal"
          text="Save on Bebe Women Apparel"
        />
        <Product
          src="https://m.media-amazon.com/images/I/41aGUvha0gL._AC_SY200_.jpg"
          price="EGP4295 and under"
          heading="top deal"
          text="Save on Bebe Women Apparel"
        />
      </Carousel>
    </div>
  );
};

export default ProductsSlider;
