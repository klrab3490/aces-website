import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <section className='w-full flex-col'>
            <h1 className='head_text font-bold text-black flex text-4xl sm:text-flex justify-center'>
                <Link href={"/studymaterial/S3"}><div className='underline'>Semester 3 : Notes : Professional Ethics</div></Link>
            </h1>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 1:- Human Values</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Morals, values and Ethics </li>
                        <li>Integrity- Academic integrity-Work</li>
                        <li>Ethics - Service Learning, Civic Virtue, Respect for others, Living peacefully, Caring and Sharing, Honestly, courage-Cooperation commitment, Empathy-Self Confidence -Social Expectations</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/132o0qRapeu7KS9Ij6doCIQeaVaVsiNJU/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 2:- Engineering Ethics & Professionalism</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Senses of Engineering Ethics</li>
                        <li>Variety of moral issues- Types of inquiry</li>
                        <li>Moral dilemmas - Moral Autonomy - Kohlberg’s theory, Gilligan’s theory</li>
                        <li>Gilligan’s theory - Consensus and Controversy-Profession and Professionalism</li>
                        <li>Models of professional roles-Theories about right action</li>
                        <li>Self interest-Customs and Religion- Uses of Ethical Theories</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1t_rBCYDfLYi0cos5sprCYMDWF_L8HSP5/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 3:- Engineering as Social Experimentation</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Engineering as Experimentation – Engineers as responsible Experimenters</li>
                        <li>Codes of Ethics</li>
                        <li>Plagiarism</li>
                        <li>A balanced outlook on law - Challenges case study- Bhopal gas tragedy</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/11puqzPCV3raQcZclhOnelN0K_-R2tVek/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 4:- Responsibilities and Rights</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Collegiality and loyalty</li>
                        <li>Managing conflict</li>
                        <li>Respect for authority</li>
                        <li>Collective bargaining</li>
                        <li>Confidentiality</li>
                        <li>Role of confidentiality in moral integrity</li>
                        <li>Conflicts of interest</li>
                        <li>Occupational crime</li>
                        <li>Professional rights</li>
                        <li>Employee right</li>
                        <li>IPR Discrimination</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/1qMuV8tDAQbnNXqwJAppFtWc0fm3LEnT2/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
            <div className=''>
                <h3 className='p-5 font-bold text-black text-xl'>Module 5:- Global Ethical Issues</h3>
                <div className='ml-10'>
                    <div className='underline'>Syllabus<br/></div>
                    <ul className='ml-5 mb-5 list-disc'>
                        <li>Multinational Corporations</li>
                        <li>Environmental Ethics</li>
                        <li>Business Ethics</li>
                        <li>Computer Ethics</li>
                        <li>Role in Technological Development-Engineers as Managers</li>
                        <li>Consulting Engineers</li>
                        <li>Engineers as Expert witnesses and advisors-Moral leadership</li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe src='https://drive.google.com/file/d/15rQxgqIbd82ECWYBz5hSdBQ7iPTZmo71/preview' height={480} allow="autoplay" className="w-full sm:w-2/3 lg:w-1/2"></iframe>
                </div>
            </div>
        </section>
    )
}

export default page