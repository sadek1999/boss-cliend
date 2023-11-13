import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg';
import './Fectured.css'

const Fetured = () => {
    return (
        <div className="feturedcss p-3 bg-fixed">
            <SectionTitle
            subHeader={'cheak it out'}
            Header={"From our menu"}></SectionTitle>

            <div className="md:flex justify-center items-center gap-8 my-9 py-16 px-20">
                <div className="w-1/2 flex justify-end ">
                <img className="w-2/3 " src={img} alt="" />
                </div>

               
                <div className="space-y-3 w-1/2 text-white">
                     <p className="text-xl ">November 20 ,2023</p>
                     <h3 className="uppercase text-2xl">Where can i get some</h3>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veritatis. Earum necessitatibus ducimus placeat et reprehenderit distinctio hic consequuntur error corrupti, beatae porro atque voluptatem velit, tempora a neque maiores reiciendis eos eligendi, obcaecati ullam? Consequatur nemo aspernatur laboriosam magnam!</p>

                     <button className="btn btn-outline border-0 border-b-4 btn-warning">Warning</button>

                </div>
            </div>
            
        </div>
    );
};

export default Fetured;