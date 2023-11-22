import { useQuery } from "@tanstack/react-query";
import UseAxios from "../useAxios/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../../Pages/Auth/AuthProvider";



const UseCard = () => {

    const {user}=useContext(AuthContext)
    const axiosSecure=UseAxios()

   const {refetch,data :card=[]}=useQuery({
    queryKey: ['card',user?.email],
    queryFn:async()=>{
        const res= await axiosSecure.get(`/order?email=${user.email}`)
       
        return res.data;
    }
   })

   return [card ,refetch]
};

export default UseCard;