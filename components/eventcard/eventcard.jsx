"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/eventcard.module.css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

//Image Import
import coding from './img/coding.jpeg';
import football from './img/football.jpeg';
import project from './img/project.jpeg';
import webdev from './img/webdev.jpeg';

const EventCard = () => {
    const events = [
        { id: 1, image: coding, button: "https://www.rahulab.live/" },
        { id: 2, image: football, button: "https://www.rahulab.live/" },
        { id: 3, image: project, button: "https://www.rahulab.live/" },
        { id: 4, image: webdev, button: "https://www.rahulab.live/" },
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3); // Set initial number of slides per view

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };

    useEffect(() => {
        const handleResize = () => {
            // Adjust slidesPerView based on screen width
            const screenWidth = window.innerWidth;
            if (screenWidth >= 920) {
                setSlidesPerView(3);
            } else if (screenWidth >= 480) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        // Initial calculation on mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='mt-6'> 
            <div className='container'>
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    slidesPerView={slidesPerView}
                    centeredSlides={true}
                    initialSlide={0}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    modules={[ Autoplay ]}
                    className='mySwiper'
                >
                    {events.map((data, index) => (
                        <SwiperSlide key={index}>
                            <center>
                                <Image src={data.image} alt={data.image} height={402} width={402} />
                                <button className='py-2'>
                                    <Link href={data.button}>Register Now</Link>
                                </button>
                            </center>
                        </SwiperSlide>
                    ))}
                    <br />
                </Swiper>
            </div>
        </section>
    );
};

export default EventCard;
