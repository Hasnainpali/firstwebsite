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
      <div className="flex">
        <div className=" grid grid-cols-2">
          <img
            src={product.image}
            alt={product.title}
            height="600px"
            width="600px"
          />
        </div>
        <div className=" grid-cols-2 space-y-2 md:space-y-6">
          <h3 className="uppercase text-2xl text-gray-950">
            {product.category}{" "}
          </h3>
          <h1 className="text-xl font-medium"> {product.title} </h1>
          <p className="flex ">
            Rating {product.rating && product.rating.rate}
            <AiFillStar className="mt-1 ml-2 text-yellow-300" />
          </p>
          <p className="text-lg font-bolder"> {product.description} </p>
          <button className="bg-white text-black outline outline-2 p-1 hover:bg-black hover:text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
