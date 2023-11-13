import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";



const PopularMenu = () => {
    const [popular,setpopular]=useState(null)

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularitems=data.filter(items=>items.category=== 'popular')
            setpopular(popularitems)

        })

    },[])
    console.log(popular)
    return (
        <section>
            <SectionTitle
            subHeader={"cheak it out"}
            Header={'from our menu'}>
               
            </SectionTitle>

           
        </section>
    );
};

export default PopularMenu;