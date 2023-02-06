import React from "react";

const Slider = () => {
  return (
    <div className="carousel" style={{ height: "calc(100vh - 136px)" }}>
      <div
        id="carouselExampleControls"
        class="carousel slide h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img
              src="https://m.media-amazon.com/images/I/71g05W92fUL._SX3000_.jpg"
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://m.media-amazon.com/images/I/61OryArRzSL._SX3000_.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item h-100">
            <img
              src="https://m.media-amazon.com/images/I/61TpbnyJiWL._SX3000_.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
