import React from 'react'
import Link from 'next/link'


const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "1":
            data = {
                title: "Semester 1",
                list: (
                    <ul>
                        <li>Linear Algebra And Calculus (MAT101)</li>
                        <li>Engineering Physics A (PHT100)</li>
                        <li>Engineering Graphics (EST110)</li>
                        <li>Basics Of Civil And Mechanical Engineering (EST120)</li>
                        <li>Life Skills (HUN101)</li>
                    </ul>
                ),
                link: (<Link href={"studymaterial/S1/Notes"} >Semester 1 : Notes</Link>),
                link2: (<Link href={"studymaterial/S1/PreYearQuestion"} >Semester 1 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 1 : Syllabus</Link>),
                icon: "",
            };break;

        case '2':
            data = {
                title: "Semester 2",
                list: (
                    <ul>
                        <li>Engineering Chemistry (CYT100)</li>
                        <li>Engineering Mechanics (EST100)</li>
                        <li>Basics Of Electrical And Electronics Engineering (EST130)</li>
                        <li>Professional Communication (HUN102)</li>
                        <li>Programming In C (EST102)</li>
                        <li>Vector Calculus, Differential Equations And Transforms (MAT102)</li>
                    </ul>
                ),
                link: (<Link href={"#"} >Semester 2 : Notes</Link>),
                link2: (<Link href={"#"} >Semester 2 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 2 : Syllabus</Link>),
                icon: "",
            };break;
        
        case '3':
            data = {
                title: "Semester 3",
                list: (
                    <ul>
                        <li>Discrete Mathematical Structures (MAT203)</li>
                        <li>Data Structures (CST201)</li>
                        <li>Logic System Design (CST203)</li>
                        <li>Object Oriented Programming Using Java (CST205)</li>
                        <li>Professional Ethics (Hut200)</li>
                        <li>Sustainable Engineering (MCN201)</li>
                        <li>Data Structures Lab (CSL201)</li>
                        <li>Object Oriented Programming Lab In Java (CSL203)</li>
                    </ul>
                ),
                link: (<Link href={"#"} >Semester 3 : Notes</Link>),
                link2: (<Link href={"#"} >Semester 3 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 3 : Syllabus</Link>),
                icon: "",
            };break;
        
        case "4":
            data = {
                title: "Semester 4",
                list: (
                    <ul>
                        <li>Graph Theory (MAT206)</li>
                        <li>Computer Organisation And Architecture (CST202)</li>
                        <li>Database Management Systems (CST204)</li>
                        <li>Operating Systems (CST206)</li>
                        <li>Design And Engineering (EST200)</li>
                        <li>Constitution Of India (MCN202)</li>
                        <li>Operating Systems Lab (CSL204)</li>
                        <li>Digital Lab (CSL202)</li>
                    </ul>
                ),
                link: (<Link href={"#"} >Semester 4 : Notes</Link>),
                link2: (<Link href={"#"} >Semester 4 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 4 : Syllabus</Link>),
                icon: "",
            };break;

        case "5":
            data = {
                title: "Semester 5",
                list: (
                    <ul>
                        <li>Disaster Management (MCN301)</li>
                        <li>Formal Languages And Automata Theory (CST301)</li>
                        <li>Computer Networks (CST303)</li>
                        <li>Software Engineering (CST305)</li>
                        <li>Microprocessors And Microcontrollers (CST307)</li>
                        <li>Management Of Software Systems (CST309)</li>
                        <li>System Software And Microprocessors Lab (CSL331)</li>
                        <li>Database Management Systems Lab (CSL333)</li>
                    </ul>
                ),
                link: (<Link href={"#"} >Semester 5 : Notes</Link>),
                link2: (<Link href={"#"} >Semester 5 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 5 : Syllabus</Link>),
                icon: "",
            };break;

        case "6":
            data = {
                title: "Semester 6",
                list: "",
                link: (<Link href={"#"} >Semester 6 : Notes</Link>),
                link2: (<Link href={"#"} >Semester 6 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 6 : Syllabus</Link>),
                icon: "",
            };break;
        
        case "7":
            data = {
                title: "Semester 7",
                list: "",
                link: (<Link href={"#"} >Semester 7 : Notes</Link>),
                link2: (<Link href={"#"} >Semester 7 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 7 : Syllabus</Link>),
                icon: "",
            };break;
        
        case "8":
            data = {
                title: "Semester 8",
                list: "",
                link: (<Link href={"#"} >Semester 8</Link>),
                link2: (<Link href={"#"} >Semester 8 : Question Papers</Link>),
                link3: (<Link href={"#"} >Semester 8 : Syllabus</Link>),
                icon: "",
            };break;
    };

    return (
        <div className='p-2'>
            <div className='widget'>
                <div className='left'>
                    <div className='title'> {data.title} </div>
                    <div className='list'> {data.list} </div>
                    <div className='link'> {data.link} </div>
                    <div className='link'> {data.link2} </div>
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