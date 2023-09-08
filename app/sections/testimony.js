'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const testimony = [
    {
        id: 1,
        testimony: "Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.",
        nama: "Ahmad Prasetyo"
    }, {
        id: 2,
        testimony: "Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.",
        nama: "Laras Ratnadewi"
    }, {
        id: 3,
        testimony: "Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!",
        nama: "Yusuf Uwais"
    },
]

export default function Testimony() {
    return (
        <section className="testimony py-[50px]">
            <div className='container'>
                <h1 className='text-2xl font-semibold mb-6'>Testimony</h1>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        2560: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {
                        testimony.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className='inline-block whitespace-break-spaces bg-white pt-3.5 px-4 pb-[11px] rounded-md'>
                                        <p className='text-secondary font-medium text-sm leading-normal mb-3.5'>{item.testimony}</p>
                                        <p className='text-primary font-medium text-sm leading-normal'>{item.nama}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
}