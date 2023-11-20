import { useContext } from "react";
import { AuthContext } from "../Pages/Auth/AuthProvider";


const PrivateRout = (children) => {
    const {user,loding}=useContext(AuthContext)
    if(loding){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    
    return (
        <div>
            
        </div>
    );
};

export default PrivateRout;