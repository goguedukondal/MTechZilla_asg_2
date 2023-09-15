import { createContext ,useContext,useState} from "react";
import React from 'react'
const MyContext = createContext()
export const  useData = ()=>useContext(MyContext)
function Context({children}) {
    const  [user,setUser] = useState([])
  return (
    <MyContext.Provider value={{user,setUser}}>
        {children}
    </MyContext.Provider>
  )
}

export default Context