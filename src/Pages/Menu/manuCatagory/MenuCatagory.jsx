import { Link } from "react-router-dom";
import Menuitem from "../../../Share/menuitem/Menuitem";
import Cover from "../../../Share/Cover/Cover";


const MenuCatagory = ({items ,img ,title}) => {
    return (
        <div>{
            img&& <Cover img={img} title={title}></Cover>}
             
            <div className="grid md:grid-cols-2 gap-2 ">
                {
                    items?.map(item=><Menuitem className="p-3" key={item._id} item={item}></Menuitem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 btn-warning">Order now </button>
            </Link>
           
        </div>
    );
};

export default MenuCatagory;