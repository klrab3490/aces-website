"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

import satheesh from "@public/img/faculty/satheesh.jpeg";
import sundar from "@public/img/faculty/sundar.jpeg";
import Link from 'next/link';

const FacultyCard = () => {
    const data = [
        {
            id: 1,
            name: "Dr. R. Satheesh Kumar",
            position: "Professor & Head of the Department",
            img: satheesh,
            about: "",
            email: "mailto:satheesh@sahrdaya.ac.in",
            instagram: "https://www.instagram.com/dr.r.satheesh",
            linkedin: "https://www.linkedin.com/in/dr-r-satheesh-kumar-80956a118",
            website: ""
        },{
            id: 2,
            name: "Dr. Krishnadas J",
            position: "Associate Professor",
            img: "",
            email: "mailto: @sahrdaya.ac.in",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/dr-krishnadas-j-047245111/",
            website: ""
        },{
            id: 3,
            name: "Dr. R. Sundar",
            position: "Associate Professor",
            img: sundar,
            email: "mailto:sundar@sahrdaya.ac.in",
            instagram: "https://www.instagram.com/ramasamysundar",
            linkedin: "https://www.linkedin.com/in/dr-sunder-ramasamy-20491976",
            website: ""
        },{
            id: 4,
            name: "Dr. Manishankar S",
            position: "Associate Professor",
            img: "",
            email: "mailto: @sahrdaya.ac.in",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/manishankar-s-2279a087/",
            website: ""
        },{
            id: 5,
            name: "Ms. Jasmy Davies",
            position: "Associate Professor",
            doing: "Ph.D doing",
            img: "",
            email: "mailto: @sahrdaya.ac.in",
            instagram: "https://www.instagram.com/jasmydavies/",
            linkedin: "https://www.linkedin.com/in/jasmy-davies-28597b20/",
            website: ""
        },//{
            //id: 6,
            //name: "	Ms. Anila Thomas",
            //position: "Associate Professor",
            //img: "",
            //email: "mailto: @sahrdaya.ac.in",
            //instagram: "https://www.instagram.com/",
            //linkedin: "https://www.linkedin.com/in/",
            //website: ""
        //},
        {
            id: 7,
            name: "Ms. Deepa Devassy",
            position: "Associate Professor",
            doing: "Ph.D doing",
            img: "",
            email: "mailto:deepa@sahrdaya.ac.in",
            website: ""
        },{
            id: 8,
            name: "Ms. Divya R",
            position: "Associate Professor",
            doing: "Ph.D doing",
            img: "",
            email: "mailto:divyar@sahrdaya.ac.in",
            website: ""
        },{
            id: 9,
            name: "Ms. Priya K V",
            position: "Associate Professor",
            doing: "Ph.D doing",
            img: "",
            email: "mailto:priya@sahrdaya.ac.in",
            website: ""
        },{
            id: 10,
            name: "Ms. Sreetha E S",
            position: "Associate Professor",
            doing: "Ph.D doing",
            img: "",
            email: "mailto:sreetha@sahrdaya.ac.in",
            instagram: "https://www.instagram.com/sreethaunnikrishnan/",
            website: ""
        },{
            id: 11,
            name: "Ms. Livya George",
            position: "Associate Professor",
            img: "",
            email: "mailto:livya@sahrdaya.ac.in",
            linkedin: "https://www.linkedin.com/in/livya-george-1471b88b/",
            website: ""
        },{
            id: 12,
            name: "	Ms. Anusree K",
            position: "Associate Professor",
            img: "",
            email: "mailto:anusree@sahrdaya.ac.in",
            instagram: "https://www.instagram.com/anusree129/",
        },{
            id: 13,
            name: "Ms. Roshni R Menon",
            position: "Associate Professor",
            doing: "Ph.D doing",
            img: "",
            email: "mailto:roshni@sahrdaya.ac.in",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/roshni-r-menon-375776122/",
            website: ""
        },{
            id: 14,
            name: "Ms. Anly Antony",
            position: "Associate Professor",
            doing: "Ph.D doing",
            img: "",
            email: "mailto:anly@sahrdaya.ac.in",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/anly-antony-566a64202/",
            website: ""
        },{
            id: 15,
            name: "Ms. Uma E S",
            position: "Associate Professor",
            img: "",
            email: "mailto:uma@sahrdaya.ac.in",
            instagram: "https://www.instagram.com/uma_e_s/",
            linkedin: "",
            website: ""
        },{
            id: 16,
            name: "Ms. Megha K K",
            position: "Associate Professor",
            img: "",
            email: "mailto:megha@sahrdaya.ac.in",
            website: ""
        },{
            id: 17,
            name: "Ms. Princy T D",
            position: "Associate Professor",
            img: "",
            email: "mailto:princy@sahrdaya.ac.in",
            website: ""
        },{
            id: 18,
            name: "Ms. Elsa Raju",
            position: "Associate Professor",
            img: "",
            email: "mailto:elsa@sahrdaya.ac.in",
            website: ""
        },{
            id: 19,
            name: "	Ms. Geethu Wilson",
            position: "Associate Professor",
            img: "",
            email: "mailto:geethu@sahrdaya.ac.in",
            website: ""
        },{
            id: 20,
            name: "Ms. Sruthy Sukumaran",
            position: "Associate Professor",
            img: "",
            email: "mailto:sruthy@sahrdaya.ac.in",
            website: ""
        },{
            id: 21,
            name: "Ms. Kavya Clare P Shaji",
            position: "Associate Professor",
            img: "",
            email: "mailto:kavya@sahrdaya.ac.in",
            website: ""
        },{
            id: 22,
            name: "	Ms. Viji Varghese",
            position: "Associate Professor",
            img: "",
            email: "mailto:viji@sahrdaya.ac.in",
            website: ""
        },{
            id: 23,
            name: "Mr. Gokul Ajith",
            position: "Lab Instructor",
            img: "",
            email: "mailto:gokul@sahrdaya.ac.in",
            website: ""
        },{
            id: 24,
            name: "Mr. Akhil P R",
            position: "Lab Attender",
            img: "",
            email: "mailto:akhil@sahrdaya.ac.in",
        },{
            id: 25,
            name: "	Mr. Ajil P S",
            position: "Lab Instructor",
            img: "",
            email: "mailto:ajil@sahrdaya.ac.in",
            website: ""
        },{
            id: 26,
            name: "Ms. Divya",
            position: "Lab Instructor",
            img: "",
            email: "mailto:divya@sahrdaya.ac.in",
            website: ""
        }
    ];
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.map((data, index) => (
                <div key={index} className={`max-w-sm border rounded-lg shadow mb-4`}>
                    <div className="flex items-center justify-center p-3">
                        <Image className="rounded-lg" src={data.img} alt={data.name} width={150} height={150} />
                    </div>
                    <div className="p-2">
                        <h5 className="flex-center text-2xl font-bold tracking-tight">{data.name}</h5>
                        <p className="flex-center mb-3 font-normal text-gray-400"> {data.position} </p>
                        <div className="flex-center space-x-4 mb-2">{}
                            {
                                data.instagram ? <Link href={data.instagram}> <AiFillInstagram size={30} /> </Link> : ""
                            }
                            {
                                data.linkedin ? <Link href={data.linkedin}> <AiFillLinkedin size={30} /> </Link> : ""
                            }
                            {
                                data.email ? <Link href={data.email}> <MdEmail size={30} /> </Link> : ""
                            }
                            {
                                data.website ? <Link href={data.website}> <FaGlobe size={25} /> </Link> : ""
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FacultyCard;
