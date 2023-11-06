import React,{useState} from 'react'
import {SiAwslambda} from 'react-icons/si'
import { NavLink } from 'react-router-dom'

function Signup({handleSignup}) {
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const HandleSubmit =(event)=>{
    event.preventDefault();
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    handleSignup({firstname,lastname,email,password})
    
  }

  return (
    <div className='container w-96  m-auto  '>
        <form onSubmit={HandleSubmit}>
        <div className="form flex flex-col justify-center items-center m-4 rounded-lg  shadow-lg gap-5">
         <div className="header text-4xl font-medium underline text-black ">
             <div className='m-4'>
             <SiAwslambda className='w-[50px] m-auto '/>
             </div>
             <h1>Sign Up</h1> 
         </div> 
         <div className="input">
           <div className="flex flex-col border-none outline-none">
            <input id="firstname" className='px-2 py-2 w-80 m-2 rounded-lg bg-gray-200' type="text" placeholder='FirstName' value={firstname} onChange={(event)=>setFirstname(event.target.value)}   /> 
            <input id="lastname" className='px-2 py-2 w-80 m-2 rounded-lg bg-gray-200' type="text"  placeholder='LastName.' value={lastname} onChange={(event)=>setLastname(event.target.value)} />
            <input id="email" className='px-2 py-2 w-80 m-2 rounded-lg bg-gray-200' type="email" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
            <input id="password" className='px-2 py-2 w-80 m-2 rounded-lg bg-gray-200' type="password"  placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)} />
           </div>   
         </div>  
          <div className="forgetpswd text-blue-400 underline space-x-4">
            <a className='' href="/">Already Account is Here? </a>
            <NavLink to='/Login'>Login</NavLink>
          </div>
          <div className="btn m-2 w-80 bg-purple-600  rounded-lg text-center">
            <button type='submit' className='p-2 text-white ml-4 text-lg'>Sign Up </button>
         
          </div>

     </div>  
        </form>    
    </div>
  )
}

export default Signup
