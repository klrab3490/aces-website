import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <section className='w-full flex-col'>
            <h2 className='mt-5 head_text font-bold text-black text-2xl'> Projects 🧑🏻‍💻 : </h2>
            <div className="">

                <div class="">
                    <Image src="/aces.png" width={150} height={150} alt="logo"/>
                    <p>Chess</p>
                </div>

                <div class="">
                    <Image src="/aces.png" width={150} height={150} alt="logo"/>
                    <p>Connect - 4</p>
                </div>
            </div>
        </section>
    )
}

export default page