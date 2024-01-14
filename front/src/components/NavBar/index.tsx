'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    const [isOpen, setStatus] = useState(false);

    return <>
        <nav className=" bg-standard w-screen">
            <div className="grid grid-cols-3 container w-full items-center justify-center mx-auto">
                <div className="">
                    <Image src="https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png" width={75} height={75} alt="Logo" />
                </div>
                <div className="">

                    <form>
                        <div className="flex">
                            <div className="relative w-full">
                                <input type="search" className="w-64 bg-white p-2 border-l border-t border-b rounded-l" />
                                <button className="p-2 bg-red-600 rounded-r">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-black font-bold flex items-center justify-center">
                    <ul className="flex flex-row space-x-8">
                        <li>
                            <Link href="#">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Cadastrar
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Produtos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>;
};