import {useContext} from 'react'
import { CartContext } from './Context/cart'

function Cart() {
    const {cartItems,addToCart,removeCart,itemQuantity,getCartTotal,clearCart}=useContext(CartContext)
  return (
  <div className='container p-2 min-h-screen'>
     <div className="flex flex-col flex-wrap gap-4 ">
        {cartItems.map((product)=>(
          <div className="flex items-center gap-4 shadow-lg" key={product.id}>
            {/* <div className="pl-2 pb-3 md:flex  lg:flex gap-4 " >
               <img  className='h-[200px] m-auto '  src={product.image &&product.image.url} alt={product.title}/> */}
               <div className="pl-2 pb-3 md:flex gap-4 lg:flex  " >
                 <img  className='h-[200px] m-auto '  src={product.image} alt={product.title}/>
               <div className="flex gap-4 md:ml-28 lg:ml-48 mt-4 lg:flex flex-col  ">
                 {/* <h2 className='text-lg uppercase font-bold md:text-2xl  '>{product.title && product.title.title}</h2>
                 <p className="text-2xl font-bold">${product.price && product.price.rate}</p> */}
                 <h2 className='text-lg uppercase font-bold md:text-2xl  '>{product.title}</h2>
                 <p className="text-2xl font-bold">${product.price}</p>
               </div>
               <div className="flex items-center px-4 py-2 bg-gray-500 text-white text-lg rounded-lg w-40 gap-2 mt-4 md:h-12 md:mt-36 lg:mt-36 lg:mr-28">
               <button onClick={()=>{addToCart(product)}}>
                +
               </button>
               <p className=' mx-4 px-2 bg-white text-black rounded-lg'> {product.quantity} </p>
               <button onClick={()=>{removeCart(product)}}>
                -
               </button>
             </div>
            </div>
          </div>
        ))}
      </div> 
      {
      cartItems.length > 0 ? ( 
       
         <div className="flex flex-col float-right mt-10 mr-2 shadow-md p-4 ">
          <h1 className="text-lg font-medium mb-4">Items Quantity: {itemQuantity()}</h1>
          <h1 className="text-lg font-bold mb-10">Total Price: ${getCartTotal()} </h1>
          <button className="px-2 py-2 text-lg font-bold bg-black text-white rounded-lg " onClick={()=>{clearCart()}}>
            Clear Cart
          </button>
        </div>
      ):(
        <h1 className="text-lg font-bold ">Your Cart is Empty</h1>
      )
    }       
  </div>

  
  )
}



export default Cart
