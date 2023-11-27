"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import React, { useEffect, useState } from "react";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from './img/sahrdaya.jpg';
import img2 from './img/sahrdaya.jpg';
import img3 from './img/sahrdaya.jpg';
import img4 from './img/sahrdaya.jpg';
import img5 from './img/sahrdaya.jpg';
import img6 from './img/sahrdaya.jpg';

function shuffleArray(array) {
    // Create a copy of the original array to avoid mutating it
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function Gallery() {
    const initialImgUrls = [img1, img2, img3, img4, img5, img6, img1, img2, img3]; // Define your initial image URLs array
    const [shuffledImgUrls, setShuffledImgUrls] = useState(initialImgUrls); // Use state to store the shuffled image URLs
    useEffect(() => {
        setShuffledImgUrls(shuffleArray(initialImgUrls)); // Shuffle the array when the component mounts
    }, []);

    return (
        <section className="py-6 text-gray-50">
            <div className="container">
                <Swiper
                    effect={'coverflow'}
                    autoplay={{ delay: 2500, disableOnInteraction: false }} 
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={true}
                    modules={[ Autoplay, EffectCoverflow, Pagination ]}
                    loop={true}
                    className="mySwiper"
                >
                {shuffledImgUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex h-full w-full items-center justify-center">
                            <Image src={url} height={500} width={500} alt="gallery" className="block object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Gallery;
