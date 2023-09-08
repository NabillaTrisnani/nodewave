import Image from 'next/image'

export default function How() {
    return (
        <section className="how pt-[30px] pb-[37px] bg-[url('/bg-how.png')] bg-no-repeat bg-cover">
            <div className='container'>
                <h1 className='text-center text-[32px] font-semibold leading-normal mb-[69px]'>How We Work</h1>
                <div className="bg-[url('/bg-card-how.png')] bg-no-repeat bg-cover rounded-[10px] md:flex gap-x-[50px] py-[29px] pl-[30px] pr-[35px] mx-auto lg:w-8/12">
                    <Image 
                        src="/chat.png"
                        alt="Contoh Chat"
                        width={289}
                        height={444}
                        className='rounded-[10px] w-full lg:w-auto mb-6 md:mb-0'
                    />
                    <div>
                        <p className='text-white font-semibold text-xl leading-normal mb-2 md:mb-[13px]'>Estimate</p>
                        <p className='text-white text-xl leading-normal'>Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}