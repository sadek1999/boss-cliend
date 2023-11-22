import { NavLink, Outlet } from "react-router-dom";

import { FaCar, FaHome } from "react-icons/fa";
const Dashbord = () => {
    return (
        <div className="flex">
            <div className=" menu p-4 w-64 min-h-full bg-orange-300">
                <ul>
                    <li><NavLink to={'/dashbord/card'}>
                        <FaHome></FaHome>
                        use Home</NavLink>
                    </li>
                    <li><NavLink to={'/dashbord/review'}>
                        <FaHome></FaHome>
                        add a review</NavLink>
                    </li>
                    <li><NavLink to={'/dashbord/booking'}>
                        <FaHome></FaHome>
                        my order</NavLink>
                    </li>
                    <li><NavLink to={'/dashbord/reservation'}>
                        <FaCar></FaCar>
                        my order</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10 ">
            <Outlet ></Outlet>
            </div>
         

        </div>
    );
};

export default Dashbord;