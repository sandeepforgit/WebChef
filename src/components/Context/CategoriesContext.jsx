import { createContext, useState } from "react";
import React from "react";


const categoryContext = createContext();

const CategoryContextProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    return (
    <categoryContext.Provider value={{categories, setCategories}}>
        {children}
    </categoryContext.Provider>
    )
}

export default CategoryContextProvider
export {categoryContext}