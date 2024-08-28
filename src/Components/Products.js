import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All")


  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData);
      setFilter(jsonData);
      setActiveCategory("All")
      console.log(jsonData, "data")
    };
    FetchData();
  }, []);

  const filterProduct = (cat) => {
    const updatedlist = data.filter((item) => item.category === cat);
    setFilter(updatedlist);
    setActiveCategory(cat);
  };

  const showAllProduct = () =>{
     setFilter(data)
     setActiveCategory("All")
  }
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
        <div className=" text-3xl">
          <h2 className="font-bold text-center ">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className=" flex flex-row justify-center ">
        <div className=" space-x-1 m-3 lg:space-x-4 md:m-8">
          <button
            className={`rounded-lg  p-2 ${ activeCategory === "All" ? "bg-black text-white " :"bg-white-800 text-black" }`}
            onClick={showAllProduct}
          >
            All
          </button>
          <button
            className={`rounded-lg  p-2 ${ activeCategory === "men's clothing" ? "bg-black text-white " :"bg-white-800 text-black" }`}
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className={`rounded-lg  p-2 ${ activeCategory === "women's clothing" ? "bg-black text-white " :"bg-white-800 text-black" }`}
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className={`rounded-lg  p-2 ${ activeCategory === "jewelery" ? "bg-black text-white " :"bg-white-800 text-black" }`}
            onClick={() => filterProduct("jewelery")}
          >
            Jewellery
          </button>
          <button
            className={`rounded-lg  p-2 ${ activeCategory === "electronics" ? "bg-black text-white " :"bg-white-800 text-black" }`}
            onClick={() => filterProduct("electronics")}
          >
            Electornic
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {filter.map((product) => {
          return (
            <div
              className="bg-white shadow-md rounded-lg hover:scale-y-105 hover:m-2"
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
    //  <div > 
    //        {data.content[0].Heading.map((headItem,HeadIndex)=>(
    //           <div key={HeadIndex} className='min-h-screen mt-4'>
    //             {headItem.headingTitle.type === 'Text' &&(
    //               <h1  style={headItem.headingTitle.style}>
    //                  {headItem.headingTitle.Title}
    //                  <hr></hr>
    //               </h1>
    //             )}
    //             {headItem.subHeading.map((subItem,subIndex)=>(
    //               <React.Fragment key={subIndex} >
    //                 <div style={subItem.styles} >
    //                    {subItem.subTitle1.type === 'Text'&&(
    //                     <button onClick={()=>setFiltered(data.content[0].Heading[0].subHeading[0].items)} style={subItem.subTitle1.style}>{subItem.subTitle1.title} </button>
    //                    )}
    //                      {subItem.subTitle2.type === 'Text'&&(
    //                     <button onClick={()=>filterData("men's clothing")} style={subItem.subTitle2.style}>{subItem.subTitle2.title} </button>
    //                    )}
    //                      {subItem.subTitle3.type === 'Text'&&(
    //                     <button onClick={()=>filterData("women's clothing")} style={subItem.subTitle3.style}>{subItem.subTitle3.title} </button>
    //                    )}
    //                      {subItem.subTitle4.type === 'Text'&&(
    //                     <button onClick={()=>filterData("jewelery")} style={subItem.subTitle4.style}>{subItem.subTitle4.title} </button>
    //                    )}
    //                      {subItem.subTitle5.type === 'Text'&&(
    //                     <button onClick={()=>filterData("electronics")} style={subItem.subTitle5.style}>{subItem.subTitle5.title} </button>
    //                    )}
    //                 </div>
    //                  <div style={{...data.content[0].style}}>
    //                  {filtered.map((item,index)=>{
    //                 return(
    //                        <div key={index} style={item.style}>
    //                            <img src={item.image.url} alt={item.title} style=  {{width:item.image.width, height:item.image.height ,margin:item.image.margin}} />
    //                            <h2 style={item.title.style}>{item.title.title.slice(0,20)} </h2>
    //                            <p style={item.price.style}>${item.price.rate} </p>
    //                           <NavLink to={`/Products/${item.id}`}  style={{
    //                               backgroundColor: "#008CBA",
    //                               "//Blue color": "",
    //                               color: "#fff",
    //                               padding: "10px",
    //                               cursor: "pointer",
    //                               marginBottom: "15px",
    //                               borderRadius: "20px",
    //                               }} >
    //                              Buy Now 
    //                            </NavLink>
    //                         </div>
    //                       )
    //                   })}
    //                  </div>
    //               </React.Fragment>
    //             ))}
    //           </div>
    //          ))
    //        }
    //  </div>
  );
}

export default Products;
