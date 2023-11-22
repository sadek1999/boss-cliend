import axios from "axios";


 const axiosSecure=axios.create({
    baseURL:"http://localhost:5001"
})

const UseAxios = () => {
    return axiosSecure;
};

export default UseAxios;