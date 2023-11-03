import React,{useState}from 'react'
import {SiAwslambda} from 'react-icons/si'
import { NavLink } from 'react-router-dom'

function Login({users}) {
    const[Email,setEmail] = useState("")
    const[Password,setPassword] = useState("")
    const [loginStatus,setLoginStatus] = useState("")
  
    const HandleSubmit =(e)=>{
     e.preventDefault();
     const Founduser = users.find((user)=>user.Email === Email && user.Password === Password);
     if(Founduser){
       setLoginStatus("Login Sucessfully")
     }
       else{
           setLoginStatus("Invalid email and password")
       }
      }
     
    
    
  return (
    <div className='container w-96 m-auto   '>
              <form onSubmit={HandleSubmit}>
        <div className="form flex flex-col justify-center items-center m-4 rounded-lg  shadow-lg gap-5">
         <div className="header text-4xl font-medium underline text-black ">
             <div className='m-4'>
             <SiAwslambda className='w-[50px] m-auto '/>
             </div>
             <h1>Log In</h1> 
         </div> 
         <div className="input">
           <div className="flex flex-col border-none outline-none">
            <input id="email" className='px-2 py-2 w-80 m-2 rounded-lg bg-gray-200' type="email" value={Email} onChange={(event)=>{setEmail(event.target.value)}} placeholder='Email' />
            <input id="password" className='px-2 py-2 w-80 m-2 rounded-lg bg-gray-200' type="password" value={Password} onChange={(event)=>{setPassword(event.target.value)}} placeholder='Password' />
           </div>   
         </div>  
         <div className="text-lg font-medium ">
            <p>{loginStatus}</p>
         </div>
          <div className="forgetpswd text-blue-400 underline space-x-4">
            <a className='' href="/">ForgetPassword? </a>
            <NavLink to='/Register'>Signup</NavLink>
          </div>
          <div className="btn m-2 w-80 bg-purple-600  rounded-lg text-center">
            <button type='submit' className='p-2 text-white ml-4 text-lg'users={users}>Log In </button>
         
          </div>

     </div>  
        </form>
  </div>
  )
}

export default Login
