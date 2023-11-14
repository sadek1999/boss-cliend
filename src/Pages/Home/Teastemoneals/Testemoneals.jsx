import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testemoneals = () => {
    const [reviews, setreviews] = useState(null);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setreviews(data)
            })
    }, [])
    // console.log(reviews)
    return (
        <div className="my-20 space-y-10">
            <SectionTitle
                subHeader={'What our clients say'}
                Header={'TESTIMONIALS'}>

            </SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews?.map(review => <SwiperSlide className=" " key={review._id}>

                        <Rating
                        className="mx-auto my-8"
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />


                        <div className="text-center">
                            <p>{review.details}</p>
                            <h1 className="text-3xl text-orange-500">{review.name}</h1>

                        </div>

                    </SwiperSlide>)
                }



            </Swiper>
        </div>
    );
};

export default Testemoneals;