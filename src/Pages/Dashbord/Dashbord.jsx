import { NavLink, Outlet } from "react-router-dom";


const Dashbord = () => {
    return (
        <div>
            <div className="w-64 min-h-screen bg-orange-300">
                <ul>
                    <li><NavLink> my order</NavLink></li>
                </ul>
            </div>
          <Outlet></Outlet>
            
        </div>
    );
};

export default Dashbord;