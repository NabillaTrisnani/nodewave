import Image from 'next/image'

export default function Pricing() {
    return (
        <section className="pricing py-[50px]">
            <div className='container'>
                <h1 className='text-center text-[32px] font-semibold leading-normal mb-[41px]'>Start Creating Websites or Mobile Apps For You Now</h1>
                <div className='lg:w-5/6 md:flex md:gap-x-4 justify-between mx-auto'>
                    <div className='md:w-1/2 lg:w-5/12 bg-white flex align-center rounded-[10px] h-[338px] mb-6 md:mb-0'>
                        <div className='w-1/2 flex flex-col justify-center px-3.5'>
                            <h1 className='text-secondary text-[32px] font-semibold leading-none -tracking-[2.4px] text-center mb-[19px]'>Website</h1>
                            <p className='text-xl text-center text-secondary font-semibold'>Start from</p>
                            <p className='line-through text-[#FF3939] text-center relative'>
                                <span className='text-sm leading-normal text-[#717171]'>Rp, 1.000.000</span>
                                <Image
                                    src="/icon/icon-discount.svg"
                                    alt="icon discount"
                                    width={20}
                                    height={20}
                                    className='absolute -top-1 right-4 md:right-5 lg:right-10 rounded-r-[10px]'
                                />
                            </p>
                            <p className='text-sm leading-normal text-secondary font-medium text-center mb-[47px]'>Rp, 500.000</p>
                            <a href='#' className="focus:outline-none text-white bg-primary focus:ring-4 focus:ring-green-300 font-medium text-sm w-fit block mx-auto px-6 py-2.5 rounded-full">Order Now</a>
                        </div>
                        <Image
                            src="/price-website.png"
                            alt="website"
                            width={242}
                            height={338}
                            className='w-1/2'
                        />
                    </div>
                    <div className='md:w-1/2 lg:w-5/12 bg-white flex align-center rounded-[10px] h-[338px]'>
                        <div className='w-1/2 flex flex-col justify-center px-3.5'>
                            <h1 className='text-secondary text-[32px] font-semibold leading-none -tracking-[2.4px] text-center mb-[19px]'>Mobile Apps</h1>
                            <p className='text-xl text-center text-secondary font-semibold'>Start from</p>
                            <p className='text-sm leading-normal text-secondary font-medium text-center mb-[97px]'>Rp, 999.000</p>
                            <a href='#' className="focus:outline-none text-white bg-primary focus:ring-4 focus:ring-green-300 font-medium text-sm w-fit block mx-auto px-6 py-2.5 rounded-full">Order Now</a>
                        </div>
                        <Image
                            src="/price-mobile.png"
                            alt="mobile"
                            width={242}
                            height={338}
                            className='w-1/2'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}