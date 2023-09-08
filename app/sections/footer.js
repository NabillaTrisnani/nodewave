import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="footer py-[50px]">
            <div className='container'>
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={226}
                    height={44}
                    className='mx-auto mb-[30px]'
                />
                <p className='text-xl leading-normal font-semibold text-center mb-[45px]'>PT NODEWAVE SOLUSI TEKNOLOGI</p>
                <p className='text-xl leading-normal font-semibold text-center mb-[55px]'>
                    Graha Pena Surabaya <br />
                    Jl. Ahmad Yani no. 88 Surabaya <br />
                    Phone : +62811258280 <br />
                    Email : support@nodewave.id <br />
                </p>
                <div className='flex gap-x-[20px] justify-center'>
                    <a href='#'>
                        <Image
                            src="/icon/icon-facebook.svg"
                            alt="facebook"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href='#'>
                        <Image
                            src="/icon/icon-twitter.svg"
                            alt="twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href='#'>
                        <Image
                            src="/icon/icon-youtube.svg"
                            alt="youtube"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href='https://www.linkedin.com/company/nodewaveindonesia' target='_blank'>
                        <Image
                            src="/icon/icon-linkedin.svg"
                            alt="linkedin"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href='https://www.instagram.com/nodewave.id' target='_blank'>
                        <Image
                            src="/icon/icon-instagram.svg"
                            alt="instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}