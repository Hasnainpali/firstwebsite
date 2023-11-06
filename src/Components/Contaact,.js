import React from 'react'

function Contaact() {
  const users=[]
  const chnge =()=>{
    let btn = document.getElementById("btn");
     btn.classList.add("bg-green-800","text-white");
     btn.classList.remove("bg-white","text-black")

     
     let name =  document.getElementById("name").value 
     let email =  document.getElementById("email").value 
     let message =  document.getElementById("message").value 
     users.push({name, email, message})
     console.log(users)

      document.getElementById("name").value  = ''
      document.getElementById("email").value = '' 
      document.getElementById("message").value  = ''
  }

    
  return (
    <div className='flex flex-col pt-6 '>
         <div className=" ml-0 md:pl-48 xl:pl-48">
         <div className="text-3xl font-bold ">
              <h1 className="">Message Us</h1>
           </div>
           <div className="flex ">
             <input id="name"className='border-2 m-1 p-2 w-48 md:w-80 xl:w-80 rounded-lg ' type="text" placeholder='Name' />
             <input id='email' className='border-2 m-1 p-2 w-48 md:w-80 xl:w-80 rounded-lg ' type="email" placeholder='Email' />
           </div>
           <div  className="">
              <textarea  id='message'  className="border-2 m-1 w-96 md:w-1/2 xl:w-1/2 rounded-lg p-1 "name="address"  cols="30" rows="10" placeholder='Message Here'></textarea>
           </div>
           <div className="">
            <button id='btn' className='m-1 px-2 py-1 text-lg bg-white border-2 border-black rounded-lg'onClick={chnge}>Submit</button>
           </div>
         </div>

    </div>
  )
}

export default Contaact
