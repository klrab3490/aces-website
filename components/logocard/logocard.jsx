"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/logocard.module.css';

import { Pagination } from 'swiper/modules';
import Image from "next/image";

const LogoCard = () => {
    return(
        <>
            <Swiper slidesPerView={5} spaceBetween={30} pagination={{ clickable: true }} modules={[ Pagination ]} className='mySwiper'>
                <SwiperSlide> Slide 1 </SwiperSlide>
                <SwiperSlide> Slide 2 </SwiperSlide>
                <SwiperSlide> Slide 3 </SwiperSlide>
                <SwiperSlide> Slide 4 </SwiperSlide>
                <SwiperSlide> Slide 5 </SwiperSlide>
                <SwiperSlide> Slide 6 </SwiperSlide>
                <SwiperSlide> Slide 7 </SwiperSlide>
            </Swiper>        
        </>
    )
}

export default LogoCard;