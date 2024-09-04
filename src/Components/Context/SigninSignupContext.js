import { createContext, useState } from "react";

const Data = createContext();
 function SignInUpContext({children}){
   const [users, setUsers] = useState([])
   const [navFooter, setNavFooter] = useState(true);


   return(
        <>
        
           <Data.Provider value={{users,setUsers,navFooter, setNavFooter }}>
                {children}
           </Data.Provider>
        
        
        </>
   )}

 export default SignInUpContext;
 export {Data};
