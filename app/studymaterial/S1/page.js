import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'ACES Study Material - Semester 1',
    description: 'Generated by Rahul A B',
}

const page = () => {
    return (
        <section className='w-full flex-col'>
            <h1 className='head_text font-bold text-black text-4xl flex justify-center'>
                <div className='underline'>Semester 1</div>
            </h1>
            <h2 className='mt-5 head_text font-bold text-black text-2xl'>Study Materials :</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <ul className="list-disc ml-5 w-full">
                    <li> <Link href={"/studymaterial/S1/Notes/MAT101"}>Linear Algebra And Calculus (MAT101)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/Notes/PHT100"}>Engineering Physics A (PHT100)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/Notes/EST110"}>Engineering Graphics (EST110)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/Notes/EST120"}>Basics Of Civil And Mechanical Engineering (EST120)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/Notes/HUN101"}>Life Skills (HUN101)</Link> </li>
                </ul>       
            </div>
            <h2 className='mt-5 head_text font-bold text-black text-2xl'>Previous Year Question Papers :</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <ul className="list-disc ml-5 w-full">
                    <li> <Link href={"/studymaterial/S1/PreYearQuestion/MAT101"}>Linear Algebra And Calculus (MAT101)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/PreYearQuestion/PHT100"}>Engineering Physics A (PHT100)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/PreYearQuestion/EST110"}>Engineering Graphics (EST110)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/PreYearQuestion/EST120"}>Basics Of Civil And Mechanical Engineering (EST120)</Link> </li>
                    <li> <Link href={"/studymaterial/S1/PreYearQuestion/HUN101"}>Life Skills (HUN101)</Link> </li>
                </ul>       
            </div>
        </section>
    )
}

export default page