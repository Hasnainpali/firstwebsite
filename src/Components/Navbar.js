import React,{ useContext,useState} from 'react'
import { BsCartPlus} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {HiBars3} from 'react-icons/hi2'
import { CartContext } from './Context/cart'


function Navbar() {
  const{cartItems}=useContext(CartContext)
  const [isOpen,setIsOpen]= useState(false);
  const toggledropdown =()=>{
    setIsOpen(!isOpen);
   
  }
  const handleonclick = ()=>{
    setIsOpen(false)
  }
  return (
    <div className="bg-slate-100 py-2 ">
         <div className="flex justify-between items-center py-4 px-4 m-auto max-w-7xl ">
         <div className="block md:hidden mr-4">
               <div className="text-black">
                   <HiBars3 onClick={toggledropdown} />
                   </div>
                   {
                    isOpen && ( 
                      <div className="relative flex flex-col z-10">
                         <div className="absolute  bg-slate-50 p-2 mt-4">
                         <ul className=" space-y-1 ">
                         <li>
                             <NavLink onClick={handleonclick} to="/">Home</NavLink>
                         </li>
                         <li>
                             <NavLink onClick={handleonclick} to='/Products'>Products</NavLink>
                         </li>
                         <li>
                             <NavLink onClick={handleonclick} to='/Contact'>Contact</NavLink>
                         </li>
                         <li>
                             <NavLink onClick={handleonclick} to='/About'>About</NavLink>
                         </li>
                      </ul>
                         </div>
                    </div>
                    )
                   }
               </div>
               <div className="text-xl font-medium md:text-3xl">
                <h1>Online Store</h1>
               </div>
                <div className="hidden md:block m-2">
                <ul className=" flex inline-block space-x-4 text-xl font-medium-semibold ml-4  ">
                    <li>
                        <NavLink className=" hover:underline" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className=" hover:underline" to='/Products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink className=" hover:underline" to='/Contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className=" hover:underline" to='/About'>About</NavLink>
                    </li>
                 </ul>
          
                </div>
               <div className="space-x-1 text-xl flex md:space-x-4 ">
                <NavLink to="/login"  className=' bg-white-800 text-black   hover:bg-green-800 hover:text-white p-1 rounded-lg' >
                   <span>Login</span>
                  </NavLink>
                  <NavLink to='/Register' className='bg-white-800 text-black  hover:bg-green-800 hover:text-white p-1 rounded-lg'>
                    Register</NavLink>
                <NavLink to="/Cart" className=' relative bg-white-800 text-black  hover:bg-green-800 hover:text-white p-1 rounded-lg'>
                    <BsCartPlus className='inline-block 'size={30} />
                    <span className='absolute text-xs font-bold top-0 bottom-0'> ({cartItems.length}) </span> </NavLink>
               </div>   
         </div>
    </div>

  )
}

export default Navbar
