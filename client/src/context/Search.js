import { useState, useContext, createContext } from "react";
const SearchContext = createContext();  // same as navigate

// Define a provider component that wraps around its children and provides the context value to them
const SearchProvider = ({children}) => {

    // Define the state for the search context using useState hook
    const [auth,setAuth] = useState({
         keyword: "",                                              // Initial keyword state
         results: []                                                // Initial results state
    });

    // Return the SearchContext.Provider component with the context value set to [auth, setAuth]
    return (
        <SearchContext.Provider value={[auth,setAuth]}>
              {children}
        </SearchContext.Provider>
    )    
}

// custom hook
const useSearch = () => useContext(SearchContext);   // to use the created context

export {useSearch, SearchProvider};    
