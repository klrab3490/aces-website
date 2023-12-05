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
        <section className='mt-6 '>
            <div className='container h-10'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}  
                    modules={[ Pagination, Autoplay ]}
                    className="mySwiper h-10 w-16"
                >
                    <SwiperSlide> Slide 1 </SwiperSlide>
                    <SwiperSlide> Slide 2 </SwiperSlide>
                    <SwiperSlide> Slide 3 </SwiperSlide>
                    <SwiperSlide> Slide 4 </SwiperSlide>
                    <SwiperSlide> Slide 5 </SwiperSlide>
                    <SwiperSlide> Slide 6 </SwiperSlide>
                    <SwiperSlide> Slide 7 </SwiperSlide>
                </Swiper>
            </div> 
        </section>
    )
}

export default LogoCard;