'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
    const [isOpen, setStatus] = useState(false);

    return <>
        <nav className={`bg-white w-screen ${isOpen ? 'h-44' : 'h-14'} transition-all duration-100`}>
            <div className="grid sm:grid-cols-6 grid-cols-5 w-full items-center justify-start p-1 container mx-auto">
                <div className="flex items-center justify-center space-x-4">
                    <Link href="#" onClick={() => { setStatus(!isOpen) }}>
                        <RxHamburgerMenu className="text-2xl text-standard" />
                    </Link>
                    <Image src="https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png" width={25} height={25} alt="Logo" />
                </div>
                <div className="text-black sm:col-span-4 col-span-3">
                    <div className="flex items-center justify-center">
                        <input type="text" className="sm:w-[100%] w-[65%] pl-2 text-base rounded-l p-2 outline-none border-gray-400 border-t border-l border-b" placeholder="Search products" />
                        <div className="bg-standard rounded-r p-3 border-t border-r border-b border-gray-400 hover:bg-standard-hover hover:cursor-pointer transition-colors duration-300">
                            <IoSearchSharp />
                        </div>
                    </div>
                </div>
                <div className="text-black font-bold flex items-center justify-center space-x-[30%]">
                    <Link href="#">
                        <FiShoppingCart className="text-2xl text-standard" />
                    </Link>
                </div>
            </div>
            <div className={`grid grid-cols-6 w-full mx-auto container ${!isOpen && 'hidden'} text-black`}>
                <ul className="flex flex-col items-center justify-center">
                    <li>
                        <Link href="#">
                            Teste
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Teste
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Teste
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Teste
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>;
};