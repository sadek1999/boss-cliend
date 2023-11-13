import Bannar from "../Banner/Bannar";
import Catagory from "../Catagory/Catagory";
import Fetured from "../Fetured/Fetured";
import PopularMenu from "../PopularMenu/popularMenu";
import Testemoneals from "../Teastemoneals/Testemoneals";



const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Catagory></Catagory>
           <PopularMenu></PopularMenu>
            <Fetured></Fetured>
            <Testemoneals></Testemoneals>
           
        </div>
    );
};

export default Home;