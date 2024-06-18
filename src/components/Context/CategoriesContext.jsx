import { createContext, useState } from "react";
import React from "react";


const categoryContext = createContext();

const CategoryContextProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    return (
    <categoryContext.Provider value={{categories, setCategories, meals, setMeals}}>
        {children}
    </categoryContext.Provider>
    )
}

export default CategoryContextProvider
export {categoryContext}