import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";


const AuthContext = createContext();  // same as navigate


const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({
        user:null,
        token:""
    });


    // default axios
    axios.defaults.headers.common['Authorization'] = auth?.token;


    useEffect(() => {
        const data = localStorage.getItem('auth')   // here 'auth' is data collection name
        if(data){
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token,
            });
        }
        //eslint-disable-next-line 
    },[]); 

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
              {children}
        </AuthContext.Provider>
    )    
}

// custom hook
const useAuth = () => useContext(AuthContext);   // to use the created context

export {useAuth, AuthProvider};    
