import Bannar from "../Banner/Bannar";
import Catagory from "../Catagory/Catagory";
import Fetured from "../Fetured/Fetured";
import PopularMenu from "../PopularMenu/popularMenu";



const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Catagory></Catagory>
           <PopularMenu></PopularMenu>
            <Fetured></Fetured>
           
        </div>
    );
};

export default Home;