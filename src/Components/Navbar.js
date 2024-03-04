import React, { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CartContext } from "./Context/cart";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
   <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light max-w-8xl">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Online Store
        </NavLink>
      </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/About">
                About
              </NavLink>
            </li>
          </ul>
          <div className="space-x-1 text-xl flex md:space-x-4">
            <NavLink
              to="/login"
              className="bg-white-800 text-black hover:bg-green-800 hover:text-white p-1 rounded-lg"
            >
              <span>Login</span>
            </NavLink>
            <NavLink
              to="/Register"
              className="bg-white-800 text-black hover:bg-green-800 hover:text-white p-1 rounded-lg"
            >
              Register
            </NavLink>
          </div>
        </div>
        {/* Cart NavLink outside the collapse section */}
        <NavLink
          to="/Cart"
          className="relative bg-white-800 text-black mt-2 ml-3 hover:bg-green-800 hover:text-white rounded-lg"
        >
          <BsCartPlus className="inline-block " size={30} />
          <span className="absolute text-xs font-bold left-2.5 bottom-6 ">
            {" "}
            ({cartItems.length}){" "}
          </span>{" "}
        </NavLink>
      
    </nav>
   </>
  );
}

export default Navbar;
