import React from "react";

const Product = ({ src, price, heading, text }) => {
  return (
    <div
      className=""
      style={{ width: "240px", height: "260px", margin: "auto" }}
    >
      <div className="rounded" style={{ backgroundColor: "#eee" }}>
        <img
          src={src}
          alt="..."
          style={{
            width: "100px",
            height: "185px",
            margin: "auto",
            display: "block",
            mixBlendMode: "darken",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="info mt-2">
        <span className="price bg-danger text-white p-1">{price}</span>
        <span className="heading text-danger fw-bold ps-1">{heading}</span>
        <p className="text mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Product;
