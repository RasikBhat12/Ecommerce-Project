import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";  // custom hook
import { Outlet } from "react-router-dom";     // for routing
import axios from "axios";                     // to get data from backend
import Spinner from "./Spinner";



export default function AdminRoute() {
    const [ok,setOk] = useState(false)
    const [auth,setAuth] = useAuth()
    

    useEffect(()=> {
        const authCheck = async() => {
            const res = await axios.get('/api/v1/auth/admin-auth')  
        if(res.data.ok) {
            setOk(true)
        }
         else {
            setOk(false)
         }
        }
          if(auth?.token) authCheck()
    }, [auth?.token]);

    return ok ? <Outlet></Outlet> : <Spinner path={""}></Spinner>;
}