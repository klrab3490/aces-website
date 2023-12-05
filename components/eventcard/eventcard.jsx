"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@styles/eventcard.module.css';

import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import Image from "next/image";
import Link from 'next/link';

import coding from './img/coding.jpeg';
import football from './img/football.jpeg';
import project from './img/project.jpeg';
import webdev from './img/webdev.jpeg';

const EventCard = () => {
    const events = [
        { id:1, image: coding, button: "https://www.rahulab.live/" },
        { id:2, image: football, button: "https://www.rahulab.live/" },
        { id:3, image: project, button: "https://www.rahulab.live/" },
        { id:4, image: webdev, button: "https://www.rahulab.live/" },
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
                pagination={true}
                modules={[ EffectCoverflow, Autoplay, Pagination ]}
                className="mySwiper"
            >
                {events.map((data,index) => (
                    <SwiperSlide key={index}>
                        <center>
                            <Image src={data.image} height={402} width={402} />
                            <button className='py-2'> <Link href={data.button}>Register Now</Link> </button>
                        </center>
                    </SwiperSlide>
                ))}
                <br/>
            </Swiper>
        </>
    )
};

export default EventCard;