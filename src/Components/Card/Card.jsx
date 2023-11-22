import { useContext } from "react";
import { AuthContext } from "../../Pages/Auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UseCard from "../useCard/UseCard";


const Card = ({item}) => {
    const {user}=useContext(AuthContext)
    const {image,recipe,price,name ,_id}=item;
    const navigate=useNavigate()
    const locaton=useLocation()
    const[,refetch]=UseCard()
    const handlorder=food=>{

        
        if(user){
            // console.log(food)
            const order ={
                foodId:_id,
                email:user?.email,
                name,
                price,
                image

            }
            console.log(order)
            axios.post('http://localhost:5001/order',order)
            .then(res=>{
                console.log(res)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "added to card",
                    showConfirmButton: false,
                    timer: 1000
                  });
                  refetch()
                  
            })
            .catch ( error=>{
                console.error(error);
            } )
        }
        else{
            Swal.fire({
                title: "Your not login",
                text: "pleas login for order",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                  
                  navigate('/login',{state:{from:locaton}})
                }
              });
        }
    }
    return (
        <div className="card relative card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 px-3 mt-4 mr-10">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>{handlorder(item)}} className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;