import { createContext, useState } from 'react';
 export const Postcontext=createContext()

 function Postcont({children}){
     
const [postdetails,setpostdetails]=useState()
     return(
         <Postcontext.Provider value={{postdetails,setpostdetails}}>
            {children}
         </Postcontext.Provider>
     )
 }
 export default Postcont