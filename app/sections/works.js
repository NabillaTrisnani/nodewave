'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import Image from 'next/image'
import "@/app/css/swiper.css"

const works = [
    {
        id: 1,
        background: "/works/bg/1.png",
        thumbnail: "1.png",
        name: "Rayu Motor",
        description: "AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales",
        link: ""
    }, {
        id: 2,
        background: "/works/bg/2.png",
        thumbnail: "2.png",
        name: "Jasabung",
        description: "Penjelasan",
        link: "#"
    },
]

export default function Works() {
    return (
        <section className="works py-[50px]">
            <div className='container'>
                <h1 className='text-center text-[32px] font-semibold leading-normal mb-[41px]'>Our Works</h1>
                {/* <div className='md:flex md:overflow-x-auto md:gap-x-[30px]'> */}
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={30}
                >
                    {
                        works.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div
                                        className={`bg-no-repeat bg-cover flex-shrink-0 rounded-[14px] md:w-1/2 lg:w-[873px] lg:min-h-[520px] flex flex-col lg:flex-row gap-x-[20px] pl-4 pr-5 py-6 lg:pt-[95px] lg:pb-[96px] mb-4 md:mb-0`}
                                        style={{ backgroundImage: `url(${item.background})` }}
                                    >
                                        <Image
                                            src={`/works/${item.thumbnail}`}
                                            width={557}
                                            height={557}
                                            alt={item.name}
                                            className='rounded-[10px] lg:w-[557px] mb-2 lg:mb-0'
                                        />
                                        <div className='flex-[1_1_100%]'>
                                            <h1 className='text-2xl lg:text-[32px] font-semibold mb-0.5 text-white text-center whitespace-break-spaces'>{item.name}</h1>
                                            <p className='text-base lg:text-xl leading-normal whitespace-break-spaces mb-7'>{item.description}</p>
                                            <a href={item.link} className={`w-fit block focus:outline-none text-white bg-primary focus:ring-4 focus:ring-green-300 font-medium text-sm md:text-lg lg:text-xl py-2 px-[18px] mb-[31px] mx-auto font-semibold rounded-full ${item.link === "" ? 'hidden' : ''}`}>Visit Web</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                {/* </div> */}
            </div>
        </section>
    );
}