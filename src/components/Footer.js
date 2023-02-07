import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="footer d-flex justify-content-between p-5"
      style={{
        backgroundColor: "var(--primary)",
        color: "white",
      }}
    >
      <ul>
        <h6>Get to Know Us</h6>
        <li>
          <Link to="/">About Amazon</Link>
        </li>
        <li>
          <Link to="/">Careers</Link>
        </li>
        <li>
          <Link to="/">Amazon Science</Link>
        </li>
      </ul>
      <ul>
        <h6>Shop with Us</h6>
        <li>
          <Link to="/">Your Account</Link>
        </li>
        <li>
          <Link to="/">Your Orders</Link>
        </li>
        <li>
          <Link to="/">Your Addresses</Link>
        </li>
        <li>
          <Link to="/">Your Lists</Link>
        </li>
      </ul>
      <ul>
        <h6>Make Money with Us</h6>
        <li>
          <Link to="/">Protect and build your brand</Link>
        </li>
        <li>
          <Link to="/">Advertise Your Products</Link>
        </li>
        <li>
          <Link to="/">Sell on Amazon</Link>
        </li>
        <li>
          <Link to="/">Fulfillment by Amazon</Link>
        </li>
      </ul>
      <ul>
        <h6>Let Us Help You</h6>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">Shipping & Delivery</Link>
        </li>
        <li>
          <Link to="/">Returns & Replacements</Link>
        </li>
        <li>
          <Link to="/">Amazon App Download</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
