import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menuitem from "../../../Share/menuitem/Menuitem";
import useMenu from "../../../Components/usemenu/Usemenu";



const PopularMenu = () => {
    const [popular,setpopular]=useState(null)

    const [menu]=useMenu();

    const popularitems=menu?.filter(items=>items.category=== 'popular')
    setpopular(popularitems)


   

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
            
    //         setpopular(popularitems)

    //     })

    // },[])
//    console.log(popular)
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