import React from 'react';
import Image from 'next/image';

const FacultyCard = () => {
    const data = [
        {
            name: "Dr. R. Satheesh Kumar",
            position: "HoD",
            designation: "",
            img: "@public/img/faculty/satheesh.jpg",
            email: "",
            instagram: "",
            linkedin: "",
            facebook: "",
            website: ""
        },{
            name: "Dr. R. Sundar",
            position: "",
            designation: "@public/img/faculty/sundar.jpg",
            img: "",
            email: "",
            instagram: "",
            linkedin: "",
            facebook: "",
            website: ""
        },{
            name: "",
            position: "",
            designation: "@public/img/faculty/.jpg",
            img: "",
            email: "",
            instagram: "",
            linkedin: "",
            facebook: "",
            website: ""
        },

    ]

    return (
        <div>
            {data.map((data, index) => 
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image class="rounded-t-lg" src={data.img} alt={data.name} />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {data.name} </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {data.position} <br /> {data.designation}
                    </p>
                    <div class="">
                        
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default FacultyCard;