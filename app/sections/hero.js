import Navbar from "../components/navbar";
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="hero bg-[url('/bg-hero.png')] bg-right-top bg-no-repeat h-screen">
            <Navbar />
            <div className='container lg:relative h-5/6 flex items-center'>
                <div className='lg:relative'>
                    <Image
                        src="/icon/icon-code.svg"
                        width={30}
                        height={30}
                        alt="icon code"
                        className="lg:absolute -top-5 -left-5"
                    />
                    <h1 className='font-semibold text-2xl md:text-4xl lg:text-5xl lg:w-7/12 leading-normal mb-[9px]'>
                        Make Your Own Website and Mobile Application With Nodewave
                        <Image
                            src="/icon/icon-idea.svg"
                            width={50}
                            height={50}
                            alt="icon idea"
                            className="hidden lg:inline"
                        />
                    </h1>
                    <button type="button" className="focus:outline-none text-white bg-primary focus:ring-4 focus:ring-green-300 font-medium text-base md:text-lg lg:text-xl p-2.5 mb-[31px] font-semibold rounded-full">Get Started Now</button>
                    <p className="lg:w-10/12 text-base md:text-xl lg:text-2xl leading-normal">Create Mobile Applications and Websites for Companies or Your Business
                        Have a transparent pricing, easy and straightforward development process</p>
                </div>
            </div>
        </section>
    );
}