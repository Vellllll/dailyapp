"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between m-5">
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="p-4 bg-lime-200 rounded-xl"
                >
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_13956079"><g fill="#000"><path d="m2 5c0-.55228.44772-1 1-1h13c.5523 0 1 .44772 1 1s-.4477 1-1 1h-13c-.55228 0-1-.44772-1-1z"></path><path d="m2 12c0-.5523.44772-1 1-1h18c.5523 0 1 .4477 1 1s-.4477 1-1 1h-18c-.55228 0-1-.4477-1-1z"></path><path d="m3 18c-.55228 0-1 .4477-1 1s.44772 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1z"></path></g></svg>
                </button>
                <Image src={`/images/suzybae.jpeg`} alt="" width={60} height={60} className="rounded-xl" style={{ maxWidth: '60px', maxHeight: '60px' }}/>
            </div>
            <div className={`w-full px-5 ${isOpen ? "block" : "hidden"} md:block`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-lime-200">
                    <li>
                        <a href="#" className="block py-2 px-3 text-white bg-lime-900 rounded-sm" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-lime-900 rounded-sm">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-lime-900 rounded-sm">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-lime-900 rounded-sm">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-lime-900 rounded-sm">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
}