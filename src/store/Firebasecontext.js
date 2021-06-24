import {createContext, useState } from 'react';
export const Firebasecontext=createContext();
export const Authcontext= createContext();


export default function Context ({children}){
    const[user,setuser]=useState(null)
    return(
        <Authcontext.Provider value={{user,setuser}}>
                 {children}
        </Authcontext.Provider>
    )
} 