import About from "./Components/About";
import Cart from "./Components/Cart";
import Contaact from "./Components/Contaact,";
import { CartProvider } from "./Components/Context/cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Products from "./Components/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
     <CartProvider>
         <Navbar/>
      <Routes>
       <Route exact path='/' element={<Home/>}/> 
       <Route exact path='/Products' element={<Products/>}/>  
       <Route exact path='/Products/:id'element={<Product/>}/>
       <Route exact path="/About" element={<About/>}/>
       <Route exact path='/Cart' element={<Cart/>}/>
       <Route exact path="/Contact" element={<Contaact/>}/>
      </Routes>

      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
