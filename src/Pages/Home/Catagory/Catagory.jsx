import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Catagory = () => {
    return (
       <div>

        <SectionTitle
        subHeader={"from 11:00am to 10:00pm"} 
        Header={"order online"}
        ></SectionTitle>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
            <img className='w-full' src={img1} alt="" />
            <h3 className='text-4xl text-white -mt-16 text-center uppercase'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src={img2} alt="" />
        <h3 className='text-4xl text-white -mt-16 text-center uppercase'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src={img3} alt="" />
        <h3 className='text-4xl text-white -mt-16 text-center uppercase'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src={img4} alt="" />
        <h3 className='text-4xl text-white -mt-16 text-center uppercase'>Dagarts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full' src={img5} alt="" />
        <h3 className='text-4xl text-white -mt-16 text-center uppercase'>salads</h3>
        </SwiperSlide>
        
        
      </Swiper>
       </div>
    );
};

export default Catagory;