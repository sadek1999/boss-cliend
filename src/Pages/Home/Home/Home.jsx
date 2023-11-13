import { Helmet } from "react-helmet-async";
import Bannar from "../Banner/Bannar";
import Catagory from "../Catagory/Catagory";
import Fetured from "../Fetured/Fetured";
import PopularMenu from "../PopularMenu/popularMenu";
import Testemoneals from "../Teastemoneals/Testemoneals";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>bistro boss| Home</title>
                
            </Helmet>
            <Bannar></Bannar>
            <Catagory></Catagory>
           <PopularMenu></PopularMenu>
            <Fetured></Fetured>
            <Testemoneals></Testemoneals>
           
        </div>
    );
};

export default Home;