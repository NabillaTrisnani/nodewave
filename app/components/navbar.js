'use client'

import { useState } from 'react'
import Image from 'next/image'

function NavLink({ to, children }) {
    return <a href={to} className={`text-xl`}>
        {children}
    </a>
}
function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 -left-[24px] z-40 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="ml-4 mb-4 mt-6 w-3/12 flex items-center">
                <a className="" href="/">
                    <Image
                        src="/logo.svg"
                        width={226}
                        height={44}
                        alt="Nodewave"
                    />
                </a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-md font-medium my-3" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </a>
                <a className="text-md font-normal my-3" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </a>
                <a className="text-md font-normal my-3" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Portfolio
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className='container'>
            <nav className="flex filter drop-shadow-md py-6 h-20 items-center">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="w-3/12 flex items-center">
                    <a className="" href="/">
                        <Image
                            src="/logo.svg"
                            width={226}
                            height={44}
                            alt="Nodewave"
                        />
                    </a>
                </div>
                <div className="w-9/12 flex justify-end items-center">

                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>

                    <div className="hidden lg:flex items-center gap gap-[30px]">
                        <NavLink to="#">
                            Website
                        </NavLink>
                        <NavLink to="#">
                            Mobile Apps
                        </NavLink>
                        <NavLink to="#">
                            Portfolio
                        </NavLink>
                        <button type="button" className="focus:outline-none text-white bg-primary focus:ring-4 focus:ring-green-300 font-medium text-xl px-5 py-2.8 rounded-full">Make an App</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}