import React, { useContext, useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { CartContext } from './Context/cart';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { removeSelectedProduct, selectedProduct } from './Redux/Action';

function Product() {
  const [loading, setLoading] = useState(false);
  const{addToCart}=useContext(CartContext);
  const product = useSelector(state => state.product)
  const { id } = useParams();
  const dispatch = useDispatch();

  const FetchDetailData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // const jsonData = await response.json();
     dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if(id && id !== "") FetchDetailData();
    return () =>{
      dispatch(removeSelectedProduct())
    }
    
  }, [id]);

  const handleaddToCart = () =>{
    setLoading(true)
    setTimeout(() => {
      addToCart(product);
      setLoading(false)
    }, 2000);
  
  };

    // const {addToCart}= useContext(CartContext)
    // const {id} = useParams();
    // const [product, setProduct]=useState([])
  
    // useEffect(() => {
    //   const selectedProduct = data.content[0].Heading[0].subHeading[0].items.find((item)=> item.id === parseInt(id));
    //    setProduct(selectedProduct);
    // }, [id]);
 
  return (
    <div className="container p-4 ">
        <div className="md:flex lg:flex">
          <div className="w-full">
            <img
              className="h-[300px] lg:w-[50%] lg:h-[350px] m-auto "
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className=" space-y-4 ml-0 mt-10 md:mt-0 md:ml-10 lg:ml-10 ">
            <h3 className="uppercase text-3xl text-gray-950">
              <span>Category:</span>
              {product.category}
            </h3>
            <h1 className="text-2xl font-medium">
              {" "}
              <span>Title: </span>
              {product.title}{" "}
            </h1>
            <p className="flex ">
              Rating {product.rating && product.rating.rate}
              <AiFillStar className="mt-1 ml-2 text-yellow-300" />
            </p>
            <p className="font-medium text-2xl">${product.price}</p>
            <p className="text-lg font-bolder text-justify">
              {" "}
              <span> Description:</span> {product.description}{" "}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleaddToCart}
                className="bg-white text-black text-center border-black border-2 p-1 rounded-lg w-48 "
              >
               {loading ? "Adding...": "Add to Cart"}
              </button>
              <NavLink
                to="/Cart"
                className="bg-white text-black text-center border-black border-2 p-1 rounded-lg w-48"
              >
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product

