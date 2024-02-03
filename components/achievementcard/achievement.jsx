"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@styles/eventcard.module.css';

import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

import Image from "next/image";
import Link from 'next/link';

import coding from './img/coding.jpeg';
import football from './img/football.jpeg';
import project from './img/project.jpeg';
import webdev from './img/webdev.jpeg';

const AchievementCard = () => {
    const events = [
        { id:1, image: coding, button: "https://www.rahulab.live/", desc: "Aces congratulates Robin Francis" },
        { id:2, image: project, button: "https://www.rahulab.live/" },
        { id:3, image: webdev, button: "https://www.rahulab.live/" },
    ]

    return (
        <>
            <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[ EffectCoverflow, Autoplay, Pagination ]}
                className="mySwiper"
            >
                {events.map((data,index) => (
                    <SwiperSlide key={index} className='px-2'>
                        <center>
                            <Image src={data.image} height={402} width={402} />
                            <p className='p-2'>  </p>
                        </center>
                    </SwiperSlide>
                ))}
                <br/>
            </Swiper>
        </>
    );
};

export default AchievementCard;