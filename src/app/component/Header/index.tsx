'use client';


import React, { useState } from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image1 from '../../public/images/cover_5.jpg'
import Image2 from '../../public/images/bac_1.jpg'
import Image3 from '../../public/images/markets.jpg'
import Image4 from '../../public/images/wat-arun.jpg'
import Image5 from '../../public/images/cover_4.jpg'
import Image6 from '../../public/images/cover_1.jpg'
import Image7 from '../../public/images/y_1.jpg'
import Image8 from '../../public/images/cover_2.jpg'
import Login from '@/app/pages/login/pages';
import Link from 'next/link';





const Header = () => {
    // const login = sessionStorage.getItem("login");
    const [show, setShow] = useState(false);


    const onClose = () => {
        setShow(false);
    }

    return (
        <>
      
                <Carousel className="rounded-xl">
                    <div className=" h-3/6 w-full">
                        <img
                            src={Image1.src}
                            alt="image 1"
                            className="h-3/6 w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    กรุงเทพมหานคร
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    พบกับความสวยงามของกรุงเทพฯ
                                    พบกับสถานที่ท่องเที่ยวมากมายของกรุงเทพฯได้ที่นี่ ต้องการรู้จักสถานที่ท่องเที่ยวในกรุงเทพมากยิ่งขึ้น
                                    Login เลย  <span className="animate-bounce flex">👇</span>
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="lg" color="white" onClick={() => setShow(true)}>
                                        Login
                                    </Button>
                                    <Link href="/pages/register" color="white">
                                        <Button size="lg" color="white" variant="text">
                                            Signup
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-3/6 w-full">
                        <img
                            src={Image2.src}
                            alt="image 2"
                            className="h-3/6 w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    กรุงเทพมหานคร
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    พบกับความสวยงามของกรุงเทพฯ
                                    พบกับสถานที่ท่องเที่ยวมากมายของกรุงเทพฯได้ที่นี่ ต้องการรู้จักสถานที่ท่องเที่ยวในกรุงเทพมากยิ่งขึ้น
                                    Login เลย  <span className="animate-bounce flex">👇</span>
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="lg" color="white" onClick={() => setShow(true)}>
                                        Login
                                    </Button>
                                    <Link href="/pages/register" color="white">
                                        <Button size="lg" color="white" variant="text">
                                            Signup
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-3/6 w-full">
                        <img
                            src={Image3.src}
                            alt="image 3"
                            className="h-3/6 w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    กรุงเทพมหานคร
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    พบกับความสวยงามของกรุงเทพฯ
                                    พบกับสถานที่ท่องเที่ยวมากมายของกรุงเทพฯได้ที่นี่ ต้องการรู้จักสถานที่ท่องเที่ยวในกรุงเทพมากยิ่งขึ้น
                                    Login เลย
                                    <span className="animate-bounce flex">👇</span>
                                </Typography>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <Button size="lg" color="white" onClick={() => setShow(true)}>
                                            Login
                                        </Button>
                                        <Link href="/pages/register" color="white">
                                            <Button size="lg" color="white" variant="text">
                                                Signup
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                {/* :
                <Carousel transition={{ duration: 2 }} autoplay className="rounded-xl w-full h-1/4" >
                    <div className=" h-2/6 w-full">
                        <img
                            src={Image1.src}
                            alt="image 1"
                            className="h-2/6 w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-center md:w-2/4">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    กรุงเทพมหานคร
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80 text-2xl flex"
                                >
                                    ยินดีต้อนรับสู่ <span className='animate-waving-hand'>👋</span> Blog ที่รวมสถานที่ท่องเที่ยวหลากหลายของกรุงเทพฯ ไว้ที่นี่
                                </Typography>

                                <div className="flex justify-center mt-10">
                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="animate-bounce w-20 h-20 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src={Image2.src}
                        alt="image 2"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image3.src}
                        alt="image 3"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image4.src}
                        alt="image 4"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image5.src}
                        alt="image 5"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image6.src}
                        alt="image 6"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image7.src}
                        alt="image 7"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image8.src}
                        alt="image 8"
                        className="h-1/4 w-full object-cover"
                    />
                </Carousel>
           */}
            {show && <Login onClose={onClose} />}
        </>
    );
}



export default Header