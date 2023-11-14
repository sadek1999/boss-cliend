import Menuitem from "../../../Share/menuitem/Menuitem";


const MenuCatagory = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-2 ">
                {
                    items?.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
        </div>
    );
};

export default MenuCatagory;