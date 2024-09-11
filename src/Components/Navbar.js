import React, { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "./Context/cart";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Redux/Action";
import { Data } from "./Context/SigninSignupContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { setNavFooter } = useContext(Data);
  const [navCollapse, setNavCollapse]= useState(false);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Auth State Updated:", auth.isAuth);
  
  useEffect(() => {

    setNavFooter(false);
    
  }, [ setNavFooter]);

  const handleNavCollapse =()=>{
    setNavCollapse(!navCollapse)
  }
  const closeNavCollaspse=()=>{
    setNavCollapse(false)
    setNavFooter(false)
  }

  const handleLogout = () =>{
    dispatch(logout())
    navigate('/login')
    setNavFooter(false)
};


  return (
   <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light max-w-8xl">
      <div className="container-fluid">
        <h1 className="text-4xl font-semibold">
          Online Store
        </h1>
      </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!navCollapse ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${!navCollapse ? "" : "show"} `}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/" onClick={closeNavCollaspse}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Products" onClick={closeNavCollaspse}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Contact" onClick={closeNavCollaspse}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/About" onClick={closeNavCollaspse}>
                About
              </NavLink>
            </li>
          </ul>
          <div className="space-x-1 text-xl flex md:space-x-4">
           {!auth.isAuth ?
            <NavLink
            to="/login"
            className="bg-white-800 text-black hover:bg-green-800 hover:text-white p-1 rounded-lg"
            onClick={closeNavCollaspse}
          >
            <span>Login</span>
          </NavLink>:
          <button
          className="bg-white-800 text-black hover:bg-green-800 hover:text-white p-1 rounded-lg"
          onClick={handleLogout}
         >
          Logout
        </button>
          }
            
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
