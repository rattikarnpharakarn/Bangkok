'use client';
import React from 'react'
import { useTheme } from '../../contexts/Theme/Theme.context';
import Image1 from '../../public/images/cover_4.jpg'
import Image2 from '../../public/images/bac_1.jpg'
import Image3 from '../../public/images/markets.jpg'
import Image4 from '../../public/images/wat-arun.jpg'
import Image5 from '../../public/images/cover_5.jpg'
import Image6 from '../../public/images/cover_1.jpg'
import Image7 from '../../public/images/y_1.jpg'
import Image8 from '../../public/images/cover_2.jpg'
import Image9 from '../../public/images/wat_cover.jpg'
import Image10 from '../../public/images/cover_3.jpg'
import Image11 from '../../public/images/jang_1.jpg'
import Image12 from '../../public/images/jang_2.jpeg'
import Image13 from '../../public/images/bac_2.jpg'
import Image14 from '../../public/images/a.jpg'
import Avartar from '../../public/images/avatar3.jpg'


import { Carousel, Typography } from "@material-tailwind/react";


const Footer = () => {
    const { theme } = useTheme();
    const { themeType } = useTheme();
    const currentYear = new Date().getFullYear();
    const login = sessionStorage.getItem("login");

    return (
        <footer
            className={login ? 'app' : 'app opacity-60'}
            style={{
                ...theme
            } as React.CSSProperties}
        >
            <div className='container font-sans rounded mt-8 p-4 md:p-24 text-center h-1/6'>
                <Carousel transition={{ duration: 2 }} autoplay className="rounded-xl w-full h-1/4" >
                    <img
                        src={Image1.src}
                        alt="image 1"
                        className="h-2/6 w-full object-cover"
                    />
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
                    <img
                        src={Image9.src}
                        alt="image 9"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image10.src}
                        alt="image 10"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image11.src}
                        alt="image 11"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image12.src}
                        alt="image 12"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image13.src}
                        alt="image 13"
                        className="h-1/4 w-full object-cover"
                    />
                    <img
                        src={Image14.src}
                        alt="image 14"
                        className="h-1/4 w-full object-cover"
                    />

                </Carousel>
            </div>

            <div className='flex w-full items-center font-sans p-8 md:p-24'>
                <img className="w-10 h-10 rounded-full mr-4" src={Avartar.src} alt="Avatar of Author" />
                <div className="flex-1">
                    <p className={themeType === 'red' ? 'text-base font-bold text-base md:text-xl leading-none text-black'
                        : themeType === 'dark' ? 'text-base font-bold text-base md:text-xl leading-none text-red'
                            : themeType === 'blue' ? 'text-base font-bold text-base md:text-xl leading-none text-white' :
                                themeType === 'white' ? 'text-base font-bold text-base md:text-xl leading-none text-blue'
                                    : themeType === 'gold' ? 'text-base font-bold text-base md:text-xl leading-none text-black'
                                        : 'text-base font-bold text-base md:text-xl leading-none text-gold'}>Thank you 🙏</p>
                    <p className={themeType === 'red' ? ' text-xs md:text-base text-black'
                        : themeType === 'dark' ? ' text-xs md:text-base text-red'
                            : themeType === 'blue' ? ' text-xs md:text-base text-white' :
                                themeType === 'white' ? ' text-xs md:text-base text-blue'
                                    : themeType === 'gold' ? ' text-xs md:text-base text-black'
                                        : ' text-xs md:text-base text-gold'}>I hope your trip is enjoyable.</p>
                </div>
                <div className="justify-end">
                    🙌
                </div>
            </div>

            <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
                <div className="w-full mx-auto flex flex-wrap items-center">
                    <div className={themeType === 'red' ? ' flex w-full md:w-1/2 justify-center md:justify-start  font-extrabold text-black'
                        : themeType === 'dark' ? ' flex w-full md:w-1/2 justify-center md:justify-start  font-extrabold text-red'
                            : themeType === 'blue' ? ' flex w-full md:w-1/2 justify-center md:justify-start  font-extrabold text-white' :
                                themeType === 'white' ? ' flex w-full md:w-1/2 justify-center md:justify-start  font-extrabold text-blue'
                                    : themeType === 'gold' ? ' flex w-full md:w-1/2 justify-center md:justify-start  font-extrabold text-black'
                                        : ' flex w-full md:w-1/2 justify-center md:justify-start  font-extrabold text-gold'}>
                        <a className="no-underline hover:no-underline" href="#">
                            👻 <span className={themeType === 'red' ? '  text-base  text-black'
                                : themeType === 'dark' ? '  text-base  text-red'
                                    : themeType === 'blue' ? '  text-base  text-white' :
                                        themeType === 'white' ? '  text-base  text-blue'
                                            : themeType === 'gold' ? '  text-base  text-black'
                                                : '  text-base  text-gold'}>React.js Next.js Tailwind CSS</span>
                        </a>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                            <li>
                                <a className={themeType === 'red' ? ' inline-block py-2 px-3  no-underline text-black'
                                    : themeType === 'dark' ? ' inline-block py-2 px-3  no-underline text-red'
                                        : themeType === 'blue' ? ' inline-block py-2 px-3  no-underline text-white' :
                                            themeType === 'white' ? ' inline-block py-2 px-3  no-underline text-blue'
                                                : themeType === 'gold' ? ' inline-block py-2 px-3  no-underline text-black'
                                                    : ' inline-block py-2 px-3  no-underline text-gold'}> © Copyright {currentYear}</a>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>


        </footer>
    )
}

export default Footer