import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, src }) => {
  return (
    <div
      className="card col-6 col-md-4 col-lg-3 p-4 mb-3"
      style={{ width: "339px", margin: "auto", height: "420px" }}
    >
      <h3>{title}</h3>
      <img
        style={{ height: "300px", marginBottom: "20px" }}
        src={src}
        alt="..."
      />
      <Link to="#">Shop now</Link>
    </div>
  );
};

export default Card;
