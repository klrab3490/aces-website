"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/logocard.module.css';

import { Autoplay, Pagination } from 'swiper/modules';

const LogoCard = () => {
    return(
        <section className='mt-6 flex items-center justify-center'>
            <div className='container h-10'>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}  
                    modules={[ Pagination, Autoplay ]}
                    className="mySwiper h-30 w-30 flex items-center justify-center"
                >
                    <SwiperSlide><center> ACES Media Cell </center></SwiperSlide>
                    <SwiperSlide><center> ACES AI/ML Club </center></SwiperSlide>
                    <SwiperSlide><center> ACES Android Club </center></SwiperSlide>
                    <SwiperSlide><center> ACES Software Club </center></SwiperSlide>
                    <SwiperSlide><center> ACES Cyber Security Club </center></SwiperSlide>
                    <SwiperSlide><center> ACES Sports Club </center></SwiperSlide>
                    <SwiperSlide><center> ACES Arts Club </center></SwiperSlide>
                </Swiper>
            </div> 
        </section>
    )
}

export default LogoCard;