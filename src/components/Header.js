import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="header py-2 px-3 d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "var(--primary)",
        hight: "60px",
        width: "1366px",
      }}
    >
      <Link to="/" className="logo" style={{ width: "130px" }}>
        <img src={Logo} alt="Amazon Logo" className="w-100 h-100" />
      </Link>
      <Link
        to="/location"
        className="location d-flex justify-content-between align-items-center"
        style={{ width: "90px" }}
      >
        <i className="fa-solid fa-location-dot text-white"></i>
        <div>
          <span className="text-white-50">Delevir to</span>
          <p className="m-0 text-white">Egypt</p>
        </div>
      </Link>
      <div
        className="search-input d-flex align-items-center"
        style={{ width: "555px", padding: "10px 5px" }}
      >
        <select
          className="text-dark-50"
          style={{
            width: "120px",
            height: "100%",
            cursor: "pointer",
            padding: "13px 5px",
            backgroundColor: "#eee",
            fontSize: "11px",
          }}
        >
          <option>All Categories</option>
          <option>Devices</option>
          <option>Fashion</option>
          <option>Home & Garden</option>
          <option>Health</option>
          <option>Ofice</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon "
          className="h-100 border-0"
          style={{ width: "70%", cursor: "pointer", padding: "11px 5px" }}
        />
        <i
          className="fa-solid fa-magnifying-glass search-icon"
          style={{
            backgroundColor: "orange",
            width: "50px",
            textAlign: "center",
            padding: "12px 0",
            cursor: "pointer",
          }}
        ></i>
      </div>
      <div
        className="language text-white"
        style={{ width: "75px", cursor: "pointer" }}
      >
        <div className="language-options p-3 bg-white border rounded">
          <form>
            <div
              className="language-option mb-3 border-bottom text-dark"
              style={{ cursor: "pointer" }}
            >
              <input
                id="ar"
                type="radio"
                name="language"
                style={{ cursor: "pointer" }}
              />
              <label
                className="ms-2"
                htmlFor="ar"
                style={{ cursor: "pointer" }}
              >
                العربية- AR
              </label>
            </div>
            <div
              className="language-option mb-3 border-bottom text-dark"
              style={{ cursor: "pointer" }}
            >
              <input
                checked
                id="en"
                type="radio"
                name="language"
                style={{ cursor: "pointer" }}
              />
              <label
                className="ms-2"
                htmlFor="en"
                style={{ cursor: "pointer" }}
              >
                English - EN
              </label>
            </div>
            <Link to="/learn-more">Learn more</Link>
          </form>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/220px-Flag_of_Egypt.svg.png"
          alt="Egypt"
          style={{
            width: "20px",
            height: "20px",
            marginRight: "10px",
          }}
        />
        EN <i className="fa-solid fa-arrow-down"></i>
      </div>
      <Link
        to="/login"
        className="user"
        style={{ width: "140px", cursor: "pointer" }}
      >
        <span className="text-white-50">Hello, Sign in</span>
        <p className="m-0 text-white">
          Accounts & Lists <i className="fa-solid fa-arrow-down"></i>
        </p>
      </Link>
      <Link
        to="/orders"
        className="orders text-white"
        style={{ width: "60px", cursor: "pointer" }}
      >
        Orders
      </Link>
      <Link
        to="/cart"
        className="cart text-white position-relative"
        style={{ width: "85px", cursor: "pointer" }}
      >
        <span
          className="counter position-absolute"
          style={{
            top: "-24px",
            left: "15%",
            fontSize: "20px",
            fontWeight: "bold",
            color: "orange",
          }}
        >
          0
        </span>
        <i
          className="fa-solid fa-cart-shopping"
          style={{
            fontSize: "30px",
          }}
        ></i>
        <span>Cart</span>
      </Link>
    </div>
  );
};

export default Header;
