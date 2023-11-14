import { Helmet } from "react-helmet-async";
import Cover from "../../../Share/Cover/Cover";
import img1 from '../../../assets/menu/banner3.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/salad-bg.jpg'
import img5 from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../Components/usemenu/Usemenu";
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import MenuCatagory from "../manuCatagory/MenuCatagory";
import Menuitem from "../../../Share/menuitem/Menuitem";


const Menu = () => {

    const [menu]=useMenu()

    const desserts=menu?.filter(items=>items.category=== 'dessert')
    const pizza=menu?.filter(items=>items.category=== 'pizza')
    const salad=menu?.filter(items=>items.category=== 'salad')
    const soup=menu?.filter(items=>items.category=== 'soup')
    const offered=menu?.filter(items=>items.category=== 'offered')
    console.log(offered)
    return (
        <div className="space-y-10">

            <Helmet>
                <title>bistro boss |menu</title>
                
            </Helmet>
            <Cover img={img1} title={"our menu"}></Cover>

            <SectionTitle subHeader={" Don't mess"} Header={"Todays offer"}></SectionTitle>

            <MenuCatagory items={offered}></MenuCatagory>
           


            <Cover img={img2} title={'dessert'}></Cover> 
           
            <MenuCatagory items={desserts}></MenuCatagory>

            <Cover img={img5} title={'soup'}></Cover>
            <MenuCatagory items={soup}></MenuCatagory>


            <Cover img={img4} title={'salad'}></Cover>
            <MenuCatagory items={salad}></MenuCatagory>


            <Cover img={img3} title={'pizza'}></Cover>
            <MenuCatagory items={pizza}></MenuCatagory>

         

            
           
        </div>
    );
};

export default Menu;