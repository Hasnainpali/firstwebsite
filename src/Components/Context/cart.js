import { createContext,useState,useEffect} from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
 const [cartItems,setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[])

const addToCart = (item)=>{
     const isItemInCart = cartItems.find((cartItem)=> cartItem.id === item.id)
       if(isItemInCart){
         setCartItems(
            cartItems.map((cartItem)=> cartItem.id === item.id ? {...cartItem, quantity : cartItem.quantity + 1} : cartItem )
         )
                   
       }else{
          setCartItems([...cartItems,{...item, quantity:1}])
       }
}

const removeCart = (item)=>{
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    if(isItemInCart.quantity === 1 ){
        setCartItems(cartItems.filter((cartItem)=>cartItem.id !== item.id))
    }else{
        setCartItems(
            cartItems.map((cartItem)=>cartItem.id === item.id ? {...cartItem,   quantity:cartItem.quantity - 1} :cartItem)
        )
    }
    }
const clearCart = ()=>{
    setCartItems([])
}
const getCartTotal =()=>{
    return (
        cartItems.reduce((total,item)=>total + item.price * item.quantity, 0) 
        // cartItems.reduce((total,item)=>total + item.price && item.price.rate * item.quantity, 0) 
    )
   
}
const itemQuantity = () =>{
    return(
        cartItems.reduce((total,item)=> total + item.quantity,0)
    )
}

 useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
}, [cartItems]);
 


return(
    <CartContext.Provider
     value={{
        cartItems,
        addToCart,
        removeCart,
        clearCart,
        getCartTotal,
        itemQuantity,
    
     }}>
        {children}
     </CartContext.Provider>
)
}