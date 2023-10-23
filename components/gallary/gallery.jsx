"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    // Define your initial image URLs array
    const initialImgUrls = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img4, img5, img6, img6, img4, img5];

    // Use state to store the shuffled image URLs
    const [shuffledImgUrls, setShuffledImgUrls] = useState(initialImgUrls);

    useEffect(() => {
        // Shuffle the array when the component mounts
        setShuffledImgUrls(shuffleArray(initialImgUrls));
    }, []);

    return (
        <section className="py-6 text-gray-50">
            <div className="container grid grid-cols-2 gap-4 p-1 mx-auto md:grid-cols-6">
                {shuffledImgUrls.map((url, index) => (
                <div key={index} 
                    className={`w-full h-auto rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
                    index === 0 || index === shuffledImgUrls.length - 1
                        ? "col-span-2 row-span-2"
                        : ""
                    } ${
                    index === 0
                        ? "md:col-start-3 md:row-start-1"
                        : index === shuffledImgUrls.length - 1
                        ? "md:col-start-1 md:row-start-3"
                        : ""
                    }`} >
                    <Image src={url} alt={`Image ${index}`} className="w-full h-full object-cover" />
                </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;
