import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="navbar d-flex px-3 py-0 flex-nowrap"
      style={{ backgroundColor: "var(--sacandry)", height: "40px" }}
    >
      <ul
        className="links d-flex"
        style={{
          fontSize: "15px",
          flex: "1",
        }}
      >
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/">Today's Deals</Link>
        </li>
        <li>
          <Link to="/">Mobile Phones</Link>
        </li>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">Electronics</Link>
        </li>
        <li>
          <Link to="/">Appliances</Link>
        </li>
        <li>
          <Link to="/">Prime</Link>
        </li>
        <li>
          <Link to="/">Fashion</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Grocery</Link>
        </li>
        <li>
          <Link to="/">Video Games</Link>
        </li>
      </ul>
      <div className="features" style={{ width: "30%" }}>
        <img
          src="https://m.media-amazon.com/images/G/42/Sunrise/Events/2022/NTAWeclomePage/XCM_Manual_1441675_4773841_400x39_2X._CB634027545_.jpg"
          alt="..."
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </nav>
  );
};

export default Nav;
