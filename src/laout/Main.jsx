
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';
import { Outlet, useLocation} from 'react-router-dom';

const Main = () => {
   
    const location=useLocation()
    const noHeaderFooter=location.pathname.includes('login')||location.pathname.includes('singup')
    return (
        <div>
            {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {  noHeaderFooter  ||<Footer></Footer>}
        </div>
    );
};

export default Main;