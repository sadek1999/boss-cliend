import { useState } from "react";
import Cover from "../../../Share/Cover/Cover";
import banner from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Components/usemenu/Usemenu";

import FoodCataogory from "../Foodcatagrory/FoodCataogory";
import { useParams } from "react-router-dom";

const Order = () => {
    const catagorys=['salad', 'pizza','soup','desserts','drinks']
    const {catagory} =useParams()
    const initalIndex=catagorys.indexOf(catagory)

    const [tabIndex,setTabindex]=useState(initalIndex)
    const [menu]=useMenu();
 
    // setTabindex(initalIndex)

    const desserts=menu?.filter(items=>items.category=== 'dessert')
    const pizza=menu?.filter(items=>items.category=== 'pizza')
    const salad=menu?.filter(items=>items.category=== 'salad')
    const soup=menu?.filter(items=>items.category=== 'soup')
    const drinks=menu?.filter(items=>items.category=== 'drinks')
    return (
        <div>
            <Cover title={'our shop'} img={banner}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                   
                </TabList>
                <TabPanel>
                   <FoodCataogory items={salad}></FoodCataogory>
                </TabPanel>
                <TabPanel>
                <FoodCataogory items={pizza}></FoodCataogory>
                </TabPanel>
                <TabPanel>
                <FoodCataogory items={soup}></FoodCataogory>
                </TabPanel>
                <TabPanel>
                <FoodCataogory items={desserts}></FoodCataogory>
               
                </TabPanel>
                <TabPanel>
                <FoodCataogory items={drinks}></FoodCataogory>
               
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;