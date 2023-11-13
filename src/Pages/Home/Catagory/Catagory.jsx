import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"


const Catagory = () => {
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />
        </SwiperSlide>
        
        
      </Swiper>
    );
};

export default Catagory;