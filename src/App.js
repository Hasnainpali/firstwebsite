import About from "./Components/About";
import Cart from "./Components/Cart";
import Contaact from './Components/Contaact,';
import { CartProvider } from "./Components/Context/cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Products from "./Components/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import { useState } from "react";

function App() {
 const [users,setusers]=useState([])

 const handleSignup =(user)=>{
    const updateduser =[...users,user];
     setusers(updateduser)
     console.log("Sign Up User",updateduser)
 }
  return (
    <>
                                              
     <BrowserRouter>
     <CartProvider>
         <Navbar/>
        <Routes>
       <Route exact path='/' element={ <Home/>}>
        
       </Route>
       <Route exact path='/Products' element={<Products/>}>
        </Route>  
       <Route exact path='/Products/:id'element={<Product/>}>
        </Route>
       <Route exact path="/Contact" element={<Contaact/>}/>
       <Route exact path="/About" element={ <About/>}>
        </Route>
       <Route exact path="/Register" element={<Signup handleSignup={handleSignup} />}/>
       <Route exact path="/Login" element={<Login users={users}/>}/>
       <Route exact path='/Cart' element={<Cart/>}/>
       </Routes>
       
      </CartProvider>
      </BrowserRouter>
      <Banner/>
      <Footer/>
    </>
  );
}

export default App;
