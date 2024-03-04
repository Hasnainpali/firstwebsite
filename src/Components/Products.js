import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import data from './Data';

function Products() {
 const [filtered, setFiltered]= useState([]);

useEffect(()=>{
    setFiltered(data.content[0].Heading[0].subHeading[0].items)
},[])
 
const filterData = (category)=>{
   const updatedData = data.content[0].Heading[0].subHeading[0].items.filter((item)=> item.category === category);
   setFiltered(updatedData);
   console.log(updatedData)
}
   return(
     <div > 
           {data.content[0].Heading.map((headItem,HeadIndex)=>(
              <div key={HeadIndex} className='min-h-screen mt-4'>
                {headItem.headingTitle.type === 'Text' &&(
                  <h1  style={headItem.headingTitle.style}>
                     {headItem.headingTitle.Title}
                     <hr></hr>
                  </h1>
                )}
                {headItem.subHeading.map((subItem,subIndex)=>(
                  <React.Fragment key={subIndex} >
                    <div style={subItem.styles} >
                       {subItem.subTitle1.type === 'Text'&&(
                        <button onClick={()=>setFiltered(data.content[0].Heading[0].subHeading[0].items)} style={subItem.subTitle1.style}>{subItem.subTitle1.title} </button>
                       )}
                         {subItem.subTitle2.type === 'Text'&&(
                        <button onClick={()=>filterData("men's clothing")} style={subItem.subTitle2.style}>{subItem.subTitle2.title} </button>
                       )}
                         {subItem.subTitle3.type === 'Text'&&(
                        <button onClick={()=>filterData("women's clothing")} style={subItem.subTitle3.style}>{subItem.subTitle3.title} </button>
                       )}
                         {subItem.subTitle4.type === 'Text'&&(
                        <button onClick={()=>filterData("jewelery")} style={subItem.subTitle4.style}>{subItem.subTitle4.title} </button>
                       )}
                         {subItem.subTitle5.type === 'Text'&&(
                        <button onClick={()=>filterData("electronics")} style={subItem.subTitle5.style}>{subItem.subTitle5.title} </button>
                       )}
                    </div>
                     <div style={{...data.content[0].style}}>
                     {filtered.map((item,index)=>{
                    return(
                           <div key={index} style={item.style}>
                               <img src={item.image.url} alt={item.title} style=  {{width:item.image.width, height:item.image.height ,margin:item.image.margin}} />
                               <h2 style={item.title.style}>{item.title.title.slice(0,20)} </h2>
                               <p style={item.price.style}>${item.price.rate} </p>
                              <NavLink to={`/Products/${item.id}`}  style={{
                                  backgroundColor: "#008CBA",
                                  "//Blue color": "",
                                  color: "#fff",
                                  padding: "10px",
                                  cursor: "pointer",
                                  marginBottom: "15px",
                                  borderRadius: "20px",
                                  }} >
                                 Buy Now 
                               </NavLink>
                            </div>
                          )
                      })}
                     </div>
                  </React.Fragment>
                ))}
              </div>
             ))
           }
     </div>
   )
}

export default Products
