import Image from 'next/image'

const types_full = [
    {
        id: 1,
        icon: "icon-attendance.svg",
        name: "Online Attendance",
        description: "With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:",
        features: [
            "Clock in and Clock Out attendance",
            "Face Photo",
            "Face Recognition",
            "Accurate time stamp down to seconds",
            "GPS location of employees"
        ]
    },
    {
        id: 2,
        icon: "icon-sport.svg",
        name: "Sport Center",
        description: "Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to",
        features: [
            "Choose a booking schedule",
            "Online payments",
            "Automatic scheduling system",
            "Search for Friends feature",
            "Split Payment with team members",
            "Information and announcements from you"
        ]
    },
    {
        id: 3,
        icon: "icon-booking.svg",
        name: "Booking",
        description: "Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:",
        features: [
            "Memilih jenis dan kategori jasa yang dikehendaki",
            "Melakukan reservasi online dan pembayaran dengan metode pembayaran digital",
            "Penjadwalan dengan tim lapangan",
            "Aplikasi khusus untuk tim",
            "Promosi dan Kode voucher khusus"
        ]
    },
]

const types = [
    {
        id: 4,
        icon: "icon-ecommerce.svg",
        name: "E-commerce"
    }, {
        id: 5,
        icon: "icon-company.svg",
        name: "Company Profile"
    }, {
        id: 6,
        icon: "icon-cashier.svg",
        name: "Cashier"
    }, {
        id: 7,
        icon: "icon-chat.svg",
        name: "Chat"
    }, {
        id: 8,
        icon: "icon-workshop.svg",
        name: "Workshop"
    }, {
        id: 9,
        icon: "icon-construction.svg",
        name: "Construction"
    },
]

export default function Application() {
    return (
        <section className="application pt-[33px] pb-[50px]">
            <div className='container'>
                <h1 className='text-center text-[32px] font-semibold leading-normal mb-[50px]'>Applications that can be made</h1>
                <div className='md:flex flex-wrap lg:flex-nowrap justify-center -mx-2.5 mb-[50px]'>
                    {
                        types_full.map((item) => {
                            return (
                                <div className='md:w-1/2 lg:w-4/12 px-2.5 mb-6 lg:mb-0' key={item.id}>
                                    <header className='flex gap-x-[20px] items-center mb-2.5'>
                                        <Image
                                            src={`/icon/${item.icon}`}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                        />
                                        <p className='text-xl leading-normal font-semibold'>{item.name}</p>
                                    </header>
                                    <p className='text-base leading-normal mb-6'>{item.description}</p>
                                    <ul className='list-disc pl-6'>
                                        {item.features.map((item, index) => {
                                            return (
                                                <li key={`feature_${index}`}>
                                                    <p className='text-base leading-normal'>{item}</p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex gap-[20px] justify-center flex-wrap'>
                    {
                        types.map((item) => {
                            return (
                                <div className='flex gap-x-[10px] items-center' key={item.id}>
                                    <Image
                                        src={`/icon/${item.icon}`}
                                        alt={item.name}
                                        width={50}
                                        height={50}
                                    />
                                    <p className='text-xl leading-normal font-semibold'>{item.name}</p>
                                </div>

                            )
                        })
                    }
                    <p className='text-xl leading-normal font-semibold'>and many others</p>
                </div>
            </div>
        </section>
    );
}