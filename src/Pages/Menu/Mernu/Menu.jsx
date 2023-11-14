import { Helmet } from "react-helmet-async";
import Cover from "../../../Share/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>

            <Helmet>
                <title>bistro boss |menu</title>
                
            </Helmet>
            <Cover img={img}></Cover>
            <h1>Man mau manue</h1>
        </div>
    );
};

export default Menu;