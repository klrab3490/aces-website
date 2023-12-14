// imports
import { AiOutlineInstagram, AiOutlineLink } from 'react-icons/ai';
import { LuFacebook } from 'react-icons/lu';
import { PiGithubLogoBold } from 'react-icons/pi';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

// import images
import satheesh from "@public/img/faculty/satheesh.jpeg";

const TeamCard = () => {
    const team = [
        {
            id: 1,
            name: "Rahul A B",
            role: "Website",
            image: satheesh,
            facebook: "a",
            instagram: "a",
            twitter: "a",
            github: "a",
            website: "a"
        },{
            id: 2,
            name: "Rahul A B",
            role: "Website",
            image: satheesh,
            facebook: "a",
            instagram: "a",
            twitter: "a",
            github: "a",
            website: "a"
        },{
            id: 3,
            name: "Rahul A B",
            role: "Website",
            image: satheesh,
            facebook: "a",
            instagram: "a",
            twitter: "a",
            github: "a",
            website: "a"
        },{
            id: 4,
            name: "Rahul A B",
            role: "Website",
            image: satheesh,
            facebook: "a",
            instagram: "a",
            twitter: "a",
            github: "a",
            website: "a"
        },{
            id: 5,
            name: "Rahul A B",
            role: "Website",
            image: satheesh,
            facebook: "a",
            instagram: "a",
            twitter: "a",
            github: "a",
            website: "a"
        },
    ];
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {team.map((member, index) => (
                <div key={index} className={`max-w-sm border rounded-lg shadow mb-4 flex`}>
                    <div className="flex items-center justify-center p-3">
                        <Image src={member.image} alt={member.name} width={150} height={150} className='rounded-lg' />
                    </div>
                    <div className='flex-grow p-4 sm:pl-8'>
                        <h2 className='title-font font-medium text-lg text-gray-900'> {member.name} </h2>
                        <h3 className='text-gray-500 mb-3'> {member.role} </h3>
                        <span className='inline-flex'>
                            { member.facebook ? <Link href={member.facebook}> <LuFacebook size={20} className='text-gray-500' /> </Link> : "" }
                            { member.instagram ? <Link href={member.instagram}> <AiOutlineInstagram  size={20} className='text-gray-500' /> </Link> : "" } 
                            { member.twitter ? <Link href={member.twitter}> <FaXTwitter size={20} className='text-gray-500' /> </Link> : "" }
                            { member.github ? <Link href={member.github}> <PiGithubLogoBold size={20} className='text-gray-500' /> </Link> : "" } 
                            { member.website ? <Link href={member.website}> <AiOutlineLink size={20} className='text-gray-500' /> </Link> : "" }
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;