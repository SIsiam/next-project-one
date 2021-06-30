import React from 'react';
import Image from 'next/image'
import img from "../../Images/error.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Swipper = () => {
    return (
      
        <Swiper
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>

        <SwiperSlide>
            <Image
                src={img}
                alt="Picture of the author"
                width={100}
                height={120}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                src={img}
                alt="Picture of the author"
                width={120}
                height={120}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                src={img}
                alt="Picture of the author"
                width={120}
                height={120}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                src={img}
                alt="Picture of the author"
                width={120}
                height={120}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                src={img}
                alt="Picture of the author"
                width={120}
                height={120}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                src={img}
                alt="Picture of the author"
                width={120}
                height={120}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
                src={img}
                alt="Picture of the author"
                width={120}
                height={120}
            />
        </SwiperSlide>
    </Swiper>
    );
};

export default Swipper;