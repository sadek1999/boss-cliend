import { useContext } from "react";
import { AuthContext } from "../Pages/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user,loding}=useContext(AuthContext)

    const location=useLocation();

    if(loding){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    
    return <Navigate to={"/login"} state={{from:location}} ></Navigate>
};

export default PrivateRout;