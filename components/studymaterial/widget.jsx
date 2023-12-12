import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s1w from '@components/studymaterial/ico/s1w.png'
import s2w from '@components/studymaterial/ico/s2w.png'
import s3w from '@components/studymaterial/ico/s3w.png'
import s4w from '@components/studymaterial/ico/s4w.png'
import s5w from '@components/studymaterial/ico/s5w.png'
import s6w from '@components/studymaterial/ico/s6w.png'
import s7w from '@components/studymaterial/ico/s7w.png'
import s8w from '@components/studymaterial/ico/s8w.png'
import s1b from '@components/studymaterial/ico/s1b.png'
import s2b from '@components/studymaterial/ico/s2b.png'
import s3b from '@components/studymaterial/ico/s3b.png'
import s4b from '@components/studymaterial/ico/s4b.png'
import s5b from '@components/studymaterial/ico/s5b.png'
import s6b from '@components/studymaterial/ico/s6b.png'
import s7b from '@components/studymaterial/ico/s7b.png'
import s8b from '@components/studymaterial/ico/s8b.png'

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "1":
            data = {
                title: "Semester 1",
                link: (<Link href={"/studymaterial/S1"} >Semester 1</Link>),
                link3: (<Link href={"#"} >Semester 1 : Syllabus</Link>),
                icon: (<Image src={s1w} alt="Semester 1" width={100} height={100} />),
            };break;

        case '2':
            data = {
                title: "Semester 2",
                link: (<Link href={"/studymaterial/S2"} >Semester 2</Link>),
                link3: (<Link href={"#"} >Semester 2 : Syllabus</Link>),
                icon: (<Image src={s2w} alt="Semester 2" width={100} height={100} />),
            };break;
        
        case '3':
            data = {
                title: "Semester 3",
                link: (<Link href={"/studymaterial/S3"} >Semester 3</Link>),
                link3: (<Link href={"#"} >Semester 3 : Syllabus</Link>),
                icon: (<Image src={s3w} alt="Semester 3" width={100} height={100} />),
            };break;
        
        case "4":
            data = {
                title: "Semester 4",
                link: (<Link href={"/studymaterial/S4"} >Semester 4</Link>),
                link3: (<Link href={"#"} >Semester 4 : Syllabus</Link>),
                icon: (<Image src={s4w} alt="Semester 4" width={100} height={100} />),
            };break;

        case "5":
            data = {
                title: "Semester 5",
                link: (<Link href={"/studymaterial/S5"} >Semester 5</Link>),
                link3: (<Link href={"#"} >Semester 5 : Syllabus</Link>),
                icon: (<Image src={s5w} alt="Semester 5" width={100} height={100} />),
            };break;

        case "6":
            data = {
                title: "Semester 6",
                link: (<Link href={"/studymaterial/S6"} >Semester 6</Link>),
                link3: (<Link href={"#"} >Semester 6 : Syllabus</Link>),
                icon: (<Image src={s6w} alt="Semester 6" width={100} height={100} />),
            };break;
        
        case "7":
            data = {
                title: "Semester 7",
                link: (<Link href={"/studymaterial/S7"} >Semester 7</Link>),
                link3: (<Link href={"#"} >Semester 7 : Syllabus</Link>),
                icon: (<Image src={s7w} alt="Semester 7" width={100} height={100} />),
            };break;
        
        case "8":
            data = {
                title: "Semester 8",
                link: (<Link href={"/studymaterial/S8"} >Semester 8</Link>),
                link3: (<Link href={"#"} >Semester 8 : Syllabus</Link>),
                icon: (<Image src={s8w} alt="Semester 8" width={100} height={100} />),
            };break;
    };

    return (
        <div className='p-2'>
            <div className='widget'>
                <div className='left'>
                    <div className='title'> {data.title} </div>
                    <div className='link'> {data.link} </div>
                </div>
                <div className='right'>
                    <div className='icon'> {data.icon} </div>
                    <div className='link'> {data.link3} </div>
                </div>
            </div>
        </div>
    )
};

export default Widget;