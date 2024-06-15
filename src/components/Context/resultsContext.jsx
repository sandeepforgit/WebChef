import { createContext } from "react";
import React, { useState } from "react";

const resultsContext = createContext();

const ProvideResultsContext = ({children}) => {
    const [results, setResults] = useState({});
    return (
    <resultsContext.Provider value={{results, setResults}}>
        {children}
    </resultsContext.Provider>
    )
}
export default ProvideResultsContext
export {resultsContext}
