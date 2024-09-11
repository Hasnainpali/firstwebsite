import React, { useContext, useEffect } from 'react'
import { Data } from './Context/SigninSignupContext'

function Footer() {
  const {setNavFooter} = useContext(Data)

  useEffect(()=>{

    setNavFooter(false)

  },[setNavFooter]);
  return (
    <div className=' container pt-2'>
        <hr  />  
        <div className="text-center py-2  ">
        
         &copy;Copyright @Hasnain coder 2023.
        </div>
      
    </div>
  )
}

export default Footer
