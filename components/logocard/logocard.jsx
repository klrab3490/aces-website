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
        <section className='mt-6'>
            <div className='container'>
                <Swiper 
                    loop={true} 
                    slidesPerView={4} 
                    spaceBetween={20} 
                    pagination={{ clickable: true }} 
                    rewind={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }} 
                    modules={[ Autoplay ]} 
                    className='mySwiper'
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