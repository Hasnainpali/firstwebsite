import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { CartContext } from './Context/cart';

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
    // const {addToCart}= useContext(CartContext)
    // const {id} = useParams();
    // const [product, setProduct]=useState([])
  
    // useEffect(() => {
    //   const selectedProduct = data.content[0].Heading[0].subHeading[0].items.find((item)=> item.id === parseInt(id));
    //    setProduct(selectedProduct);
    // }, [id]);
 
  return (
    <div className="container p-4 ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex ">
        <div className="">
          <img className=""
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
          />
        </div>
        <div className=" space-y-4 ml:0 mt-10 md:mt-0 md:ml-10 ">
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
    // <div >
    //       {product &&(
    //          <div key={product.id} className='min-h-screen'>
    //                    <div className='grid md:grid-cols-2 lg:grid-cols-2'>
    //                      {product.image &&(
    //                        <img src={product.image.url} alt={product.title} style={{width:400, height:400, marginBottom:"20px",}}/>
    //                      )}
    //                    <div className='space-y-6 mt-0 sm:mt-8'>
    //                    {product.category &&(
    //                      <p> <span style={{fontWeight:"bold", }}>Category:</span> {product.category} </p>
    //                     )}
    //                      {product.title &&(
    //                       <h2> <span style={{fontWeight:"bold", }}>Title: </span> {product.title.title} </h2>
    //                     )}
    //                      {product.rating &&(
    //                        <p style={{display:"flex",}} > <span style={{fontWeight:"bold", }}>Rating:</span> {product.rating && product.rating.rate} <AiFillStar className="mt-1 ml-2 text-yellow-300" /> </p>
    //                     )}
    //                      {product.rating &&(
    //                        <p> <span style={{fontWeight:"bold", }}>Price: </span> ${product.price.rate}  </p>
    //                     )}
    //                     {product.description &&(
    //                       <p> <span style={{fontWeight:"bold", }}>Description: </span> {product.description.title} </p>
    //                     )} 
    //                       <button onClick={()=>addToCart(product)} style={{
    //                               backgroundColor: "black",
    //                               width:"50%",
    //                               color: "white",
    //                               padding: "10px",
    //                               cursor: "pointer",
    //                               marginBottom: "15px",
    //                               borderRadius: "20px",
    //                               }}> Add to Cart  </button>
                        
    //                    </div>
    //                    </div>
    //                 </div>
    //                 )
    //       }
    // </div>
  )
}

export default Product

