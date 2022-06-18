import { createContext, useState } from "react";
import parameters from "../parameters";

const ThemeContext = createContext();

export const  mainContext = ({children}) => {
    const [params,setParams] = useState(['id','first_name', 'last_name', 'email', 'company', 'address']);
    
    return(
        <ThemeContext.Provider
            value={{params,setParams}}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default mainContext;
  
  