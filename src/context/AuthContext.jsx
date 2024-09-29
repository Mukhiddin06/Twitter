import { createContext, useState } from "react";



export const Context = createContext()

export const AuthContext = ({children}) => {
    const [ token, setToken ] = useState( JSON.parse(localStorage.getItem("token")) || null) 
    const [path, setPath] = useState(JSON.parse(localStorage.getItem("path")) || "/")
    const [register, setRegister ] = useState(null)

    localStorage.setItem("token", JSON.stringify(token))

    return (
        <Context.Provider value={{token, setToken, register, setRegister ,path, setPath}}>{children}</Context.Provider>
    )
}