import About from "./Components/About";
import Cart from "./Components/Cart";
import Contaact from "./Components/Contaact,";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Products from "./Components/Products";
import { Routes, Route, useLocation } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useContext, useEffect, useState } from "react";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import { Data } from "./Components/Context/SigninSignupContext";
import LoginSignup from "./Components/Login";

function App() {
  // const [users, setusers] = useState([]);
  const { navFooter, setNavFooter } = useContext(Data);
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname == '/login'){
      setNavFooter(false)
    }else{
      setNavFooter(true)
    }
    
  },[location.pathname, setNavFooter])

  // const handleSignup = (user) => {
  //   const updateduser = [...users, user];
  //   setusers(updateduser);
  //   console.log("Sign Up User", updateduser);
  // };
  return (
    <>
    
          {navFooter  && <Navbar />}

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Products" element={<Products />} />
            <Route exact path="/Products/:id" element={<Product />} />
            <Route exact path="/Contact" element={<Contaact />} />
            <Route exact path="/About" element={<About />} />
            {/* <Route
              exact
              path="/Register"
              element={<Signup handleSignup={handleSignup} />}
            /> */}
            <Route exact path="/Login" element={<LoginSignup />} />
            <Route exact path="/Cart" element={<Cart />} />
          </Routes>

      {navFooter  && <Footer />}
    </>
  );
}

export default App;
