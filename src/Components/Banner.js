import React from 'react'

function Banner() {
  return (
    <div className=''>
       <div className=" flex mt-4 bg-gray-200 p-3 ' ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             <li><a href="/">Quick Links</a></li>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ul className='flex flex-col'>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Speed Test</a></li>
                    <li><a href="/">Help Center</a></li>
                    <li><a href="/">Jobs</a></li>
          </ul>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ul className='flex flex-col'>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Speed Test</a></li>
                    <li><a href="/">Help Center</a></li>
                    <li><a href="/">Jobs</a></li>
          </ul>
          </div>
          <div className="">
          <ul className='flex flex-col'>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Speed Test</a></li>
                    <li><a href="/">Help Center</a></li>
                    <li><a href="/">Jobs</a></li>
          </ul>
          </div>
       </div>

    </div>
  )
}

export default Banner
