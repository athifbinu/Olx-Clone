import { createContext, useState } from "react";
import React from 'react';

export const FirebaseContext=createContext(null)

 export  const AuthContext=createContext(null)



export default function Context ({children}) {
    const [user,SetUser]=useState(null)



    return(
        <AuthContext.Provider value={{user,SetUser}}>
             {children}
        </AuthContext.Provider>
    )
 }


