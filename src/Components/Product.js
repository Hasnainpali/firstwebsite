import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

function Product() {
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
      <div className="md:flex">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="  sm:grid-cols-1 md:grid-cols-2 space-y-2 mt-10 ">
          <h3 className="uppercase text-2xl text-gray-950">
           <span>Category:</span>{product.category}
          </h3>
          <h1 className="text-xl font-medium"> <span>Title: </span>{product.title} </h1>
          <p className="flex ">
            Rating {product.rating && product.rating.rate}
            <AiFillStar className="mt-1 ml-2 text-yellow-300" />
          </p>
          <p className="text-lg font-bolder text-justify"> <span> Description:</span> {product.description} </p>
          <button className="bg-white text-black outline outline-2 p-1 hover:bg-black hover:text-white rounded-lg w-96 md:w-48">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
