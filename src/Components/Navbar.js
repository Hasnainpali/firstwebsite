import React,{useState} from 'react'
import {CiLogin} from 'react-icons/ci'
import {BsFillPersonPlusFill, BsCartPlus} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {HiBars3} from 'react-icons/hi2'
function Navbar() {
  const [isOpen,setIsOpen]= useState(false);

  const toggledropdown =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="container bg-slate-100 py-2">
         <div className="flex justify-between items-center py-4 px-4 m-auto max-w-7xl">
         <div className="block md:hidden mr-4">
               <div className="text-black">
                   <HiBars3 onClick={toggledropdown} className=''/>
                   </div>
                   {
                    isOpen && ( 
                      <div className="relative flex flex-col ">
                         <div className="absolute bg-slate-50 p-2 mt-4">
                         <ul className=" space-y-1 ">
                         <li>
                             <NavLink  to="/">Home</NavLink>
                         </li>
                         <li>
                             <NavLink  to='/Products'>Products</NavLink>
                         </li>
                         <li>
                             <NavLink  to='/Contact'>Contact</NavLink>
                         </li>
                         <li>
                             <NavLink  to='/About'>About</NavLink>
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
               <div className="space-x-1 text-xl flex md:space-x-2 ">
                  <NavLink to='/Login' className=' bg-white-800 text-black   hover:bg-green-800 hover:text-white p-1 rounded-lg'>
                  <CiLogin className='inline-block me-0 md:me-1'/>Login</NavLink>
                  <NavLink to='/Register' className='bg-white-800 text-black  hover:bg-green-800 hover:text-white p-1 rounded-lg'>
                    <BsFillPersonPlusFill className='inline-block me-0 md:me-1'/>Register</NavLink>
                  <NavLink to='/Cart' className=' bg-white-800 text-black  hover:bg-green-800 hover:text-white p-1 rounded-lg'>
                    <BsCartPlus className='inline-block me-0 md:me-1' />Cart </NavLink>
               </div>
               
         </div>
    </div>
  )
}

export default Navbar
