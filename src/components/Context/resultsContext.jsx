import { createContext } from "react";
import React, { useState } from "react";

const resultsContext = createContext();

const ProvideResultsContext = ({children}) => {
    const [results, setResults] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [famous, setFamous] = useState([]);
    return (
    <resultsContext.Provider value={{results, setResults, searchTerm, setSearchTerm, famous, setFamous}}>
        {children}
    </resultsContext.Provider>
    )
}
export default ProvideResultsContext
export {resultsContext}
