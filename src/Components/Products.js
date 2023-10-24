import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';

function Products() {
    const [data,setData] = useState([]);
    const [filter,setFilter] =useState([]);

    useEffect(() => {
         const FetchData = async () =>{
            const response = await fetch("https://fakestoreapi.com/products");
            const jsonData = await response.json();
            setData(jsonData);
            setFilter(jsonData)
         }
         FetchData();
    }, []);

 

    const filterProduct =(cat)=>{
      const updatedlist = data.filter((x)=>x.category===cat)
      setFilter(updatedlist);
    }
  return (
    <div className='container p-5'>
       <div className=" flex-row">
       <div className=" text-3xl">
            <h2 className='font-bold text-center '>
                Latest Products</h2><hr/>
         </div>
         </div>
         <div className=" flex flex-row justify-center mt-10 ">
            <div className=" space-x-1 m-3 lg:space-x-4 md:m-8">
                <button className='bg-white-800 text-black  p-1 hover:bg-black hover:text-white rounded-lg'onClick={()=>setFilter(data)}>All</button>
                <button className='bg-white-800 text-black  p-1 hover:bg-black hover:text-white rounded-lg'onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                <button className='bg-white-800 text-black  p-1 hover:bg-black hover:text-white rounded-lg'onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                <button className='bg-white-800 text-black  p-1 hover:bg-black hover:text-white rounded-lg'onClick={()=>filterProduct("jewelery")}>Jewellery</button>
                <button className='bg-white-800 text-black  p-1 hover:bg-black hover:text-white rounded-lg'onClick={()=>filterProduct("electronics")}>Electornic</button>
            </div>
         
       </div>
       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
       {
                  filter.map((product)=>{
                      return(
                        <div className='border border-2 m-2 shadow-slate-700 '>
                           <div className="mb-5">
                           <div key={product.id}  className="h-full text-center p-4">
                                <img className='h-[250px] m-auto'src={product.image} alt={product.title} />
                          
                            <div className="font-medium text-lg py-4 space-y-4 ">
                                <h5 >{product.title.substring(0,15)}</h5>
                                <p className='pb-4' >${product.price}</p>
                                <NavLink className='bg-white-800 text-black outline outline-1  p-1 hover:bg-black hover:text-white rounded-lg'to={`/Products/${product.id}`}>Buy Now</NavLink> 
                            </div>
                            </div>
                          </div>
                        </div>
                      )
                  }
                  
                  )
                }
        </div>
    </div>
  )
}

export default Products
