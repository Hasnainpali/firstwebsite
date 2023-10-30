import React, { useContext,useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import { CartContext } from './Context/cart'


function Product() {

    const{addToCart}=useContext(CartContext)
  const { id } = useParams();
  const [product, setProduct] = useState([]);


  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData = await response.json();
      setProduct(jsonData);
    };
    FetchData();
  }, [id]);
  return (
    <div className="container p-6">
      <div className="md:flex ">
        <div className="grid grid-cols-4">
          <img className=""
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
          />
        </div>
        <div className="grid cols-span-6 space-y-4 mt-10 md:mt-0 ">
          <h3 className="uppercase text-3xl text-gray-950">
           <span>Category:</span>{product.category}
          </h3>
          <h1 className="text-2xl font-medium"> <span>Title: </span>{product.title} </h1>
          <p className="flex ">
            Rating {product.rating && product.rating.rate}
            <AiFillStar className="mt-1 ml-2 text-yellow-300" />
          </p>
          <p className="font-medium text-2xl">${product.price}</p>
          <p className="text-lg font-bolder text-justify"> <span> Description:</span> {product.description} </p>
          <div className="flex space-x-4">
          <button onClick={()=> addToCart(product)}  className="bg-white text-black text-center outline outline-2 p-1 hover:bg-black hover:text-white rounded-lg w-48 ">
            Add to Cart
          </button>
          <NavLink  to="/Cart" className="bg-white text-black text-center outline outline-2 p-1 hover:bg-black hover:text-white rounded-lg w-48">
            Go to Cart
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
