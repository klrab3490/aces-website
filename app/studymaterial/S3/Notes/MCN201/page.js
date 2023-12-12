import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <section className='w-full flex-col'>
            <h1 className='head_text font-bold text-black text-4xl flex sm:text-flex justify-center'>
                <Link href={"/studymaterial/S3"}><div className='underline'>Semester 3 : Notes : Sustainable Engineering</div></Link>
            </h1>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 1:- Sustainability</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5'>
                        <li>Introduction, concept, the evolution of the concept</li>
                        <li>Social, environmental, and economic sustainability concepts</li>
                        <li>Sustainable development, Nexus between Technology and Sustainable development</li>
                        <li>Millennium Development Goals(MDGs) and Sustainable Development Goals(SDGs), Clean Development Mechanism (CDM).</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/12LF8ZYcULh6Gk7O5nYBkzzIrjZiVgYDV/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 2:- Environmental Pollution</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5'>
                        <li>Air Pollution and its effects, Water pollution and its sources, Zero waste concept and 3 R concepts in solid waste management</li>
                        <li>Greenhouse effect, Global warming, Climate change, Ozone layer depletion, Carbon credits, carbon trading and carbon footprint, legal provisions for environmental protection.</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1Cxayu49QUc6GMMKDLlrIH0gFhyyvuXHT/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 3:- Environmental Management Standards</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5'>
                        <li>ISO 14001:2015 framework and benefits</li>
                        <li>Scope and goal of Life Cycle Analysis(LCA)</li>
                        <li>Circular economy</li>
                        <li>Bio-mimicking</li>
                        <li>Environmental Impact Assessment(EIA)</li>
                        <li>Industrial ecology and industrial symbiosis.</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1YFYW5M3_nWf8YQgSCy2QwM9gd7nPCul3/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 4:- Resources And Their Utilisation</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5'>
                        <li>Basic concepts of Conventional and non-conventional energy</li>
                        <li>General idea about solar energy</li>
                        <li>Fuel cells</li>
                        <li>Wind energy</li>
                        <li>Small hydro plants</li>
                        <li>bio-fuels</li>
                        <li>Energy derived from oceans and Geothermal energy</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1rc9y5VUbXBbRVYIeUmlmIAiqKmYmi8G-/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 5:- Sustainability Practices</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5'>
                        <li>Basic concept of sustainable habitat</li>
                        <li>Methods for increasing energy efficiency in buildings</li>
                        <li>Green Engineering</li>
                        <li>Sustainable Urbanisation</li>
                        <li>Sustainable cities</li>
                        <li>Sustainable transport.</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1WBYbXftrxKsZbQH4Ex1zWqKwzuHqYeFC/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
        </section>
    )
}

export default page