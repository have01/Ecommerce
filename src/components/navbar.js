import React from "react";
import "../style/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./cart";
import { Link } from "react-router-dom";
const Navbar = ({ cartLength }) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          {" "}
          <div className="logo">
            <Link to="/" className="logo_text">
              {" "}
              TreeRex Store
            </Link>
          </div>
          <div className="navbar_product">
            <div className="cart_icon">
              {" "}
              <Link to="/cart" className="cart_page">
                {" "}
                <AiOutlineShoppingCart fill="#FFF" />{" "}
                <p className="cart_length_icon"> {cartLength}</p>
              </Link>
            </div>
            <span style={{ bordeBottom: "black" }}> Cart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
