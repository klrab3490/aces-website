"use client";

import Image from "next/image";
import Link from "next/link";
// images
import cs_alert from "./img/cs-alert-system.png";
import mobilEASE     from "./img/mobilEASE.jpg"

const ProjectCard = () => {
    const project = [
        // {
        //     pimg: "",
        //     pid: "" ,
        //     pname: "" ,
        //     pdesc: "" ,
        //     git_link: "" ,
        //     web_link: "" ,
        //     add_link: "" ,
        // },
        {
            pimg: cs_alert ,
            pid: "1" ,
            pname: "CS Library Alert System" ,
            pdesc: "Basically, this system is introduced so that all the students could search for the needed books in the library and take them for reference. If a book is found but not in the library, we can add it to the cart for notification and then collect it when it's available in the library. It also informs us about our book return dates as well." ,
            git_link: "https://github.com/klrab3490/cs-library-alert-system" ,
            web_link: "https://cs-library-alert-system.vercel.app/" ,
            app_link: "" ,
        },{
            pimg: mobilEASE ,
            pid: "2" ,
            pname: "mobilEASE" ,
            pdesc: "A Web-Based Traffic Complaint System that can be used by citizens for reporting various traffic and civic issues. " ,
            git_link: "https://github.com/vivekkj123/mobilEASE" ,
            web_link: "https://mobilease.vercel.app/" ,
            app_link: "" ,
        },{
            pimg: mobilEASE ,
            pid: "2" ,
            pname: "mobilEASE" ,
            pdesc: "A Web-Based Traffic Complaint System that can be used by citizens for reporting various traffic and civic issues. " ,
            git_link: "https://github.com/vivekkj123/mobilEASE" ,
            web_link: "https://mobilease.vercel.app/" ,
            app_link: "" ,
        },
    ]
    return (
        <div className="p-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {project.map((item) => (
                    <div key={item.id} className="projectcard p-4 bg-gray-300 shadow-md rounded">
                        <div>
                            <Image src={item.pimg} width={578} alt={item.id} className="flex-center" />
                        </div>
                        <h1 className=" text-xl font-satoshi font-semibold flex-center">{item.pname}</h1>
                        <h1 className="text-gray-600  flex-center">{item.pdesc}</h1>
                        <div className="flex-center">
                            <Link href={item.git_link} className="px-4 py-2 mt-4 mr-2 text-white border-black bg-black rounded hover:bg-gray-200">Github</Link>
                            {
                                item.web_link ? <Link href={item.web_link} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Website</Link> : ""
                            }
                            {
                                item.app_link ? <Link href={item.app_link} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">App Download</Link> : ""
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;    