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
       <Route exact path='/' element={<Home/>}/> 
       <Route exact path='/Products' element={<Products/>}/>  
       <Route exact path='/Products/:id'element={<Product/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
