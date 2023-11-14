
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menuitem from "../../../Share/menuitem/Menuitem";
import useMenu from "../../../Components/usemenu/Usemenu";



const PopularMenu = () => {
    


    const [menu]=useMenu();
    
    const popular=menu?.filter(items=>items.category=== 'popular')
   
    return (
        <section className="space-y-5 my-4">
            <SectionTitle
            subHeader={"cheak it out"}
            Header={'from our menu'}>
               
            </SectionTitle>
            {
                popular?  <div className="grid md:grid-cols-2 gap-2 ">
                {
                    popular.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>:<div></div>
            }
          

           
        </section>
    );
};

export default PopularMenu;