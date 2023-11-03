
import About from "./Components/About";
import Cart from "./Components/Cart";
import Contaact from "./Components/Contaact,";
import { CartProvider } from "./Components/Context/cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Products from "./Components/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import React,{useState} from 'react'
function App() {
  const [users, setUsers] = useState([]); 
  const handlesignup = (user) => {
    const upateduser=[...users, user];
    setUsers(upateduser)
    console.log("All Signup user",upateduser)
  };
  return (
    <>
      
     <BrowserRouter>
     <CartProvider>
         <Navbar/>
      <Routes>
       <Route exact path='/' element={<Home/>}/> 
       <Route exact path='/Products' element={<Products/>}/>  
       <Route exact path='/Products/:id'element={<Product/>}/>
       <Route exact path="/Contact" element={<Contaact/>}/>
       <Route exact path="/About" element={<About/>}/>
       <Route exact path="/Register" element={<Signup handlesignup={handlesignup} />}/>
       <Route exact path="/Login" element={<Login users={users} />}/>
       <Route exact path='/Cart' element={<Cart/>}/>
      
      </Routes>

      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
