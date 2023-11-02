import React from 'react'

function Home() {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-4'>
       <div className="w-full bg-sky-200  ">
          <div className="translate-y-0 space-y-4 p-2 md:translate-y-4 xl:translate-y-36">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl ">Find Your Perfect Items</h1>
        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque corporis reiciendis dolor nemo deserunt ea consectetur quibusdam aspernatur minus incidunt, consequatur quaerat quam quidem quo cumque minima saepe cum voluptas.</p>
        <button className=' p-2 bg-red-500 rounded-lg hover:bg-red-400 font-semibold '>Shop Now</button>
          </div>
       </div>
       <div className=" mt-10 md:mt-0 lg:mt-0">
         <img className='w-full' src="/bgimg.jpg" alt="herosection" />          
       </div>  
    </div>
  )
}

export default Home
