import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData.slice(0,8));
    };
    FetchData();
  }, []);

//   const filterProduct = (cat) => {
//     const updatedlist = data.filter((item) => item.category === cat);
//     setFilter(updatedlist);
//     setActiveCategory(cat);
//   };

//   const showAllProduct = () =>{
//      setFilter(data)
//      setActiveCategory("All")
//   }
  //  const [filtered, setFiltered]= useState([]);

  // useEffect(()=>{
  //     setFiltered(data.content[0].Heading[0].subHeading[0].items)
  // },[])

  // const filterData = (category)=>{
  //    const updatedData = data.content[0].Heading[0].subHeading[0].items.filter((item)=> item.category === category);
  //    setFiltered(updatedData);
  //    console.log(updatedData)
  // }
  return (
    <div className="container p-5">
      <div className=" flex-row">
        <div className="flex justify-content-between mb-3 ">
          <h2 className="font-bold text-3xl">Featured Products</h2>
          <button className="btn btn-outline-primary" onClick={() => navigate('/Products')} >View All</button>
        </div>
      </div>
     
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {data.map((product) => {
          return (
            <div
              className="bg-white shadow-md rounded-lg border-1 border-black hover:scale-y-105 hover:m-2 "
              key={product.id}
            >
              <div className="mb-5">
                <div className="h-full text-center p-4 ">
                  <img
                    className="h-[250px] m-auto"
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="font-medium text-lg py-4 space-y-4 ">
                    <h5>{product.title.substring(0, 15)}</h5>
                    <p className="pb-4">${product.price}</p>
                    <NavLink
                      className="bg-white-800 text-black outline outline-1  p-1 hover:bg-black hover:text-white rounded-lg"
                      to={`/Products/${product.id}`}
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
