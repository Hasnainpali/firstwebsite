import { createContext, useState } from "react";

const Data = createContext();
 function SignInUpContext({children}){
   const [users, setUsers] = useState([])


   return(
        <>
        
           <Data.Provider value={{users,setUsers }}>
                {children}
           </Data.Provider>
        
        
        </>
   )}

 export default SignInUpContext;
 export {Data};
