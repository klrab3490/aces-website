"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = ({ toggleDarkMode, darkMode }) => {
    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if(!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };
    
    return (
        <nav className={`flex-between w-full mb-3 px-4 py-2 ${darkMode ? "dark-mode" : "light-mode"}`} style={{ zIndex: "12 !important", position: "fixed", top: 0, width: "100%"  }} >
            <Link href='/' className="flex gap-4 flex-center">
                {darkMode
                    ? <Image src="/aces-white.png" alt="ACES Logo" width={90} height={70} />
                    : <Image src="/aces.png" alt="ACES Logo" width={90} height={70} />
                }
                <p className="logo_text">ACES</p>
            </Link>
            <div className="justify-left">
                <ul className="hidden sm:flex gap-4">
                    <li className="logo_text hover:text-gray-600"> <Link href={"/"}> Home </Link> </li>
                    <li className="logo_text hover:text-gray-600"> <Link href={"/event"}> Events </Link> </li>
                    <li className="logo_text hover:text-gray-600"> <Link href={"/project"}> Project </Link> </li>
                    <li className="logo_text hover:text-gray-600"> <Link href={"/team"}> Team </Link> </li>
                    <li className="logo_text hover:text-gray-600"> <Link href={"/faculty"}> Faculty </Link> </li>
                    <li className="logo_text hover:text-gray-600">
                        <button onClick={toggleDarkMode} >
                            {darkMode
                                ? <FaSun size={20} />
                                : <FaMoon size={20} />
                            }   
                        </button>
                    </li>
                </ul>
                
            </div>            

            {/* Mobile View */}
            <div className="flex flex-center sm:hidden">
                <button onClick={toggleDarkMode}>
                    {darkMode
                        ? <FaSun size={20} />
                        : <FaMoon size={20} />
                    }
                </button>
                <div onClick={handleNav} className="px-4 z-10 block  hover:text-gray-600">
                    {nav
                        ? <AiOutlineClose size={20} />
                        : <AiOutlineMenu size={20} />
                    }
                </div>
            </div>
            {darkMode
                ? <>
                    <div className={
                        nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                        <div>
                            <ul className="sm:flex font-satoshi font-semibold">
                                <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/"}> Home </Link> </li>
                                <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/event"}> Events </Link> </li>
                                <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/about"}> About </Link> </li>
                                <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/project"}> Project </Link> </li>
                                <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/team"}> Team </Link> </li>
                                <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/faculty"}> Faculty </Link> </li>
                            </ul>
                        </div>  
                    </div>
                </> 
                : <>
                <div className={
                    nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'}>
                    <div>
                        <ul className="sm:flex font-satoshi font-semibold">
                            <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/"}> Home </Link> </li>
                            <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/event"}> Events </Link> </li>
                            <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/about"}> About </Link> </li>
                            <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/project"}> Project </Link> </li>
                            <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/team"}> Team </Link> </li>
                            <li className="p-4 text-4xl hover:text-gray-600" onClick={handleNav}> <Link href={"/faculty"}> Faculty </Link> </li>
                        </ul>
                    </div>  
                </div>
            </>
            }
        </nav>  
    )
}

export default Navbar;