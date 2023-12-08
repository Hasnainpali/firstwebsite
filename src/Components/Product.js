import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import data from './Data';
import { CartContext } from './Context/cart';

function Product() {
    const {addToCart}= useContext(CartContext)
    const {id} = useParams();
    const [product, setProduct]=useState([])
  
    useEffect(() => {
      const selectedProduct = data.content[0].Heading[0].subHeading[0].items.find((item)=> item.id === parseInt(id));
       setProduct(selectedProduct);
    }, [id]);
 
  return (
    <div >
          {product &&(
             <div key={product.id} className='min-h-screen'>
                       <div className='grid md:grid-cols-2 lg:grid-cols-2'>
                         {product.image &&(
                           <img src={product.image.url} alt={product.title} style={{width:400, height:400, marginBottom:"20px",}}/>
                         )}
                       <div className='space-y-6 mt-0 sm:mt-8'>
                       {product.category &&(
                         <p> <span style={{fontWeight:"bold", }}>Category:</span> {product.category} </p>
                        )}
                         {product.title &&(
                          <h2> <span style={{fontWeight:"bold", }}>Title: </span> {product.title.title} </h2>
                        )}
                         {product.rating &&(
                           <p style={{display:"flex",}} > <span style={{fontWeight:"bold", }}>Rating:</span> {product.rating && product.rating.rate} <AiFillStar className="mt-1 ml-2 text-yellow-300" /> </p>
                        )}
                         {product.rating &&(
                           <p> <span style={{fontWeight:"bold", }}>Price: </span> ${product.price.rate}  </p>
                        )}
                        {product.description &&(
                          <p> <span style={{fontWeight:"bold", }}>Description: </span> {product.description.title} </p>
                        )} 
                          <button onClick={()=>addToCart(product)} style={{
                                  backgroundColor: "black",
                                  width:"50%",
                                  color: "white",
                                  padding: "10px",
                                  cursor: "pointer",
                                  marginBottom: "15px",
                                  borderRadius: "20px",
                                  }}> Add to Cart  </button>
                        
                       </div>
                       </div>
                    </div>
                    )
          }
    </div>
  )
}

export default Product

