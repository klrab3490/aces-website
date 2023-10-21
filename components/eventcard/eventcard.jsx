"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/eventcard.module.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";

import coding from './img/coding.jpeg';
import football from './img/football.jpeg';
import project from './img/project.jpeg';
import webdev from './img/webdev.jpeg';

const EventCard = () => {
    return (
        <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 25, stretch: 0, depth: 100, modifier: 2.5, }} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, }} modules={[EffectCoverflow, Pagination, Navigation]} className="swiper_container mt-8 justify-center items-center" >
                <SwiperSlide>
                    <Image src={coding} height={500} alt='img1' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={football} height={500} alt='img2' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={project} height={500} alt='img3' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={webdev} height={500} alt='img4' />
                </SwiperSlide>
                <div className="slider-controler pt-10">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default EventCard;
