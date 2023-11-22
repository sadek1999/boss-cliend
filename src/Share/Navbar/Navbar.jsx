import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/Auth/AuthProvider";
import UseCard from './../../Components/useCard/UseCard';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [card]=UseCard()
    const handlsingout = () => {
        logout()
            .then(res => {
                console.log(res)
            })
    }
    // console.log(user)

    const navoptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/order'}>Order</Link></li>

        {
            user ?
                <li><button onClick={handlsingout}>logout</button></li> :
                <li><Link to={'/login'}>Login</Link></li>
        }




    </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navoptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navoptions}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/dashbord'}>
                <label tabIndex={0} className="btn btn-ghost btn-circle text-red-400">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{card?.length}</span>
                    </div>
                </label>
                </Link>
               
                {
                    user?.displayName ? <p>{user.displayName}</p> : <p></p>

                }
                <a className="btn">Button</a>

            </div>
        </div>
    );
};

export default Navbar;