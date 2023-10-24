import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Products from "./Components/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
         <Navbar/>
   
      <Routes>
       <Route path='/home' element={<Home/>}/> 
       <Route path='/Products' element={<Products/>}/>  
       <Route path='/Products/:id'element={<Product/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
