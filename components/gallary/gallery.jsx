import Image from "next/image";
import React from "react";

import img1 from './img/sahrdaya.jpg';
import img2 from './img/sahrdaya.jpg';
import img3 from './img/sahrdaya.jpg';
import img4 from './img/sahrdaya.jpg';
import img5 from './img/sahrdaya.jpg';
import img6 from './img/sahrdaya.jpg';

function Gallery() {
    const imgUrls = [ img1,img2,img3,img4,img5,img6,img1,img2,img3,img4,img5,img6,img4,img5,img6 ,img6,img4,img5 ];

    const sectionStyle = {
        background: `url('/bg.jpg')`, // Update the path to your background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "40px 0",
        position: "relative",
    };

    return (
        <section className="py-6 text-gray-50" style={sectionStyle}>
            <div className="container grid grid-cols-2 gap-4 p-1 mx-auto md:grid-cols-6">
                {imgUrls.map((url, index) => (
                    <div key={index} 
                        className={`w-full h-auto rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
                        index === 0 || index === imgUrls.length - 1
                            ? "col-span-2 row-span-2"
                            : ""
                        } ${
                        index === 0
                            ? "md:col-start-3 md:row-start-1"
                            : index === imgUrls.length - 1
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
