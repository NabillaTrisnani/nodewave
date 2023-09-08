'use client'

import { Rubik, Roboto } from 'next/font/google'
import React, { useState } from 'react';
import Image from 'next/image'

const rubik = Rubik({
    weight: ['400', '500'],
    subsets: ['latin']
})
const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin']
})

export default function Product() {
    const [active, setActive] = useState('tab-1');

    const handleClick = (event) => {
        setActive(event.target.getAttribute("data-tab"));
    };

    return (
        <section className="product pt-10 pb-[50px]">
            <div className='container'>
                <div className='lg:w-11/12 mx-auto'>
                    <h1 className='text-center text-[32px] font-semibold leading-normal mb-[41px]'>Our Product</h1>
                    <div className='md:flex gap-x-6'>
                        <div className='md:w-4/6'>
                            <div className={`p-4 md:p-6 lg:px-10 lg:py-12 border border-white rounded-3xl shadow flex items-center md:flex-col lg:flex-row mb-6 gap-x-6 mx-auto ${active === 'tab-1' ? 'bg-white hover:bg-slate-50 w-full md:w-full' : 'bg-black hover:bg-slate-950 w-full md:w-11/12'}`} data-tab="tab-1" onClick={handleClick}>
                                <Image
                                    src="/icon/icon-mobile.svg"
                                    width={60}
                                    height={60}
                                    alt="Mobile Apps"
                                    data-tab="tab-1"
                                    onClick={handleClick}
                                />
                                <div>
                                    <h5 className={`${rubik.className} mb-2 text-2xl font-bold tracking-tight text-left ${active === 'tab-1' ? 'text-secondary' : 'text-white'}`} data-tab="tab-1" onClick={handleClick}>Mobile Apps</h5>
                                    <p className={`${roboto.className} font-normal text-left ${active === 'tab-1' ? 'text-secondary_light' : 'text-white'}`} data-tab="tab-1" onClick={handleClick}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <Image
                                    src="/icon/icon-arrow.svg"
                                    width={20}
                                    height={20}
                                    alt="Mobile Apps"
                                    className='hidden md:block self-end'
                                    data-tab="tab-1"
                                    onClick={handleClick}
                                />
                            </div>
                            <div className={`p-4 md:p-6 lg:px-10 lg:py-12 border border-white rounded-3xl shadow flex items-center md:flex-col lg:flex-row mb-6 md:mb-0 gap-x-6 mx-auto ${active === 'tab-2' ? 'bg-white hover:bg-slate-50 w-full md:w-full' : 'bg-black hover:bg-slate-950 w-full md:w-11/12'}`} data-tab="tab-2" onClick={handleClick}>
                                <Image
                                    src="/icon/icon-website.svg"
                                    width={60}
                                    height={60}
                                    alt="Website"
                                    data-tab="tab-2"
                                    onClick={handleClick}
                                />
                                <div>
                                    <h5 className={`${rubik.className} mb-2 text-2xl font-bold tracking-tight text-left ${active === 'tab-2' ? 'text-secondary' : 'text-white'}`} data-tab="tab-2" onClick={handleClick}>Website</h5>
                                    <p className={`${roboto.className} font-normal text-left ${active === 'tab-2' ? 'text-secondary_light' : 'text-white'}`} data-tab="tab-2" onClick={handleClick}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <Image
                                    src="/icon/icon-arrow.svg"
                                    width={20}
                                    height={20}
                                    alt="Mobile Apps"
                                    className='hidden md:block self-end'
                                    data-tab="tab-2"
                                    onClick={handleClick}
                                />
                            </div>
                        </div>
                        <div className={`p-5 md:p-6 lg:p-10 rounded-3xl bg-white md:w-5/6 ${active === 'tab-1' ? '' : 'hidden'}`}>
                            <Image
                                src="/mockup-mobile.png"
                                width={225}
                                height={120}
                                alt="Mobile Apps"
                                className='mx-auto mb-[32px]'
                            />
                            <h2 className={`${rubik.className} text-secondary text-center font-medium text-[32px] mb-2`}>Mobile Apps</h2>
                            <p className={`${roboto.className} text-secondary_light text-center mb-[32px]`}>Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
                            <a href='#' className={`${rubik.className} bg-primary px-5 py-2.8 text-base font-medium w-fit block mx-auto rounded-lg`}>Pelajari Selengkapnya</a>
                        </div>
                        <div className={`p-5 md:p-6 lg:p-10 rounded-3xl bg-white md:w-5/6 ${active === 'tab-2' ? '' : 'hidden'}`}>
                            <Image
                                src="/mockup-mobile.png"
                                width={225}
                                height={120}
                                alt="Mobile Apps"
                                className='mx-auto mb-[32px]'
                            />
                            <h2 className={`${rubik.className} text-secondary text-center font-medium text-[32px] mb-2`}>Website</h2>
                            <p className={`${roboto.className} text-secondary_light text-center mb-[32px]`}>Website dengan fitur sesuka anda. Bisa Website transaksi jual beli, Website kasir, Website Informasi, maupun Website chat dengan fitur GPS.</p>
                            <a href='#' className={`${rubik.className} bg-primary px-5 py-2.8 text-base font-medium w-fit block mx-auto rounded-lg`}>Pelajari Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
