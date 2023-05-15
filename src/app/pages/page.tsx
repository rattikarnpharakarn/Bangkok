'use client';
import React, { createContext, useContext, useState } from 'react'

import { useTheme } from '@/app/contexts/Theme/Theme.context';
import Sidebar from '@/app/component/sidebar';
import Header from '@/app/component/Header';
import Modal from '@/app/component/Modal';
import Footer from '@/app/component/Footer';
import Watpo from '../public/images/watpo.jpg'
import Watpo_1 from '../public/images/po_1.jpeg'
import Watpo_2 from '../public/images/po_2.jpg'

import Watphrakaew from '../public/images/wat_phra_kaew.jpg'
import Watphrakaew_1 from '../public/images/k_1.jpeg'
import Watphrakaew_2 from '../public/images/k_2.jpg'

import Watjang from '../public/images/wat_jang.jpg'
import Watjang_1 from '../public/images/jang_1.jpg'
import Watjang_2 from '../public/images/jang_2.jpeg'
import Asiatique from '../public/images/asiatique.jpg'
import Asiatique_1 from '../public/images/a_1.jpg'
import Asiatique_2 from '../public/images/a_2.jpg'


import Yaowarat from '../public/images/yaowarat.jpg'
import Yaowarat_1 from '../public/images/y_1.jpg'
import Yaowarat_2 from '../public/images/y_2.jpg'

import Sky from '../public/images/sky.jpg'
import Sky_1 from '../public/images/s_1.jpg'
import Sky_2 from '../public/images/s_2.jpg'

import Saochingcha from '../public/images/sao_chingcha.jpg'
import Saochingcha_1 from '../public/images/sa_1.jpg'
import Saochingcha_2 from '../public/images/sa_2.jpg'

import Bacc from '../public/images/bacc.jpg'
import Bacc_1 from '../public/images/bac_1.jpg'
import Bacc_2 from '../public/images/bac_2.jpg'
import Bacc_3 from '../public/images/bac_3.jpg'
import Bacc_4 from '../public/images/bac_4.jpg'
import Bacc_5 from '../public/images/bac_5.jpg'




import { Carousel, Typography, Button } from "@material-tailwind/react";


const Page = () => {
    console.log('ini');
    const { theme } = useTheme();
    const { themeType } = useTheme();

    const user = sessionStorage.getItem('user');
    const login = sessionStorage.getItem("login");
    const [open, setOpen] = useState('');


    return (
        <div
            className={'app'}
            style={{
                ...theme
            } as React.CSSProperties}
        >
            <Sidebar />

            <div className={'app__main'}>
                <Header />
                {user && login && <Modal />}

                <div className={login && user ? 'container px-4 md:px-0 max-w-6xl mx-auto mt-10 ' : 'container px-4 md:px-0 max-w-6xl mx-auto mt-10'}>

                    <div className="mx-0 sm:mx-6">

                        <div className={login ? 'bg-gray-200 w-full text-xl md:text-2xl  leading-normal rounded-t':'bg-gray-200 w-full text-xl md:text-2xl  leading-normal rounded-t opacity-60'}>
                            <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                                <div className="flex flex-wrap no-underline hover:no-underline">
                                    <div className="w-full md:w-2/3 rounded-t">
                                        <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                            <img
                                                src={Bacc.src}
                                                alt="image 1"
                                                className="w-full object-cover h-full"
                                            />
                                            <img
                                                src={Bacc_1.src}
                                                alt="image 2"
                                                className="w-full object-cover h-full"
                                            />
                                            <img
                                                src={Bacc_2.src}
                                                alt="image 3"
                                                className="w-full object-cover h-full"
                                            />
                                            <img
                                                src={Bacc_3.src}
                                                alt="image 4"
                                                className="w-full object-cover h-full"
                                            />
                                            <img
                                                src={Bacc_4.src}
                                                alt="image 5"
                                                className="w-full object-cover h-full"
                                            />
                                            <img
                                                src={Bacc_5.src}
                                                alt="image 6"
                                                className="w-full object-cover h-full"
                                            />

                                        </Carousel>
                                    </div>

                                    <div className='w-full md:w-1/3 flex flex-col flex-grow flex-shrink'>
                                        <div className={themeType === 'red' ? 'flex-1 bg-black rounded-t rounded-b-none overflow-hidden shadow-lg text-red'
                                            : themeType === 'dark' ? 'flex-1 bg-red rounded-t rounded-b-none overflow-hidden shadow-lg text-black'
                                                : themeType === 'blue' ? 'flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg text-blue'
                                                    : themeType === 'white' ? 'flex-1 bg-blue rounded-t rounded-b-none overflow-hidden shadow-lg text-white'
                                                        : themeType === 'gold' ? 'flex-1 bg-black rounded-t rounded-b-none overgoldhidden shadow-lg text-gold'
                                                            : 'flex-1 bg-black rounded-t rounded-b-none overflow-hidden shadow-lg text-black'}>

                                            <h1 className="flex  font-bold text-1xl text-bl mt-10 px-6">
                                                Welcome <span className="animate-waving-hand mb-10">👋 </span>,My blog
                                            </h1>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ:   เปิดทุกวัน 10.00 - 20.00 น.
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:   สี่แยกปทุมวัน แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                            : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                            {login &&
                                                <button type="button" className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                    : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                                    onClick={() => setOpen('1')} >
                                                    Click here
                                                </button>
                                            }

                                        </div>

                                        {open === '1' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                                                                หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร (อังกฤษ: Bangkok Art and Culture Centre) หรือ หอศิลป์กรุงเทพฯ เป็นหอศิลปะร่วมสมัย ตั้งอยู่ที่หัวมุมตะวันตกเฉียงเหนือของสี่แยกปทุมวัน ในย่านสยาม แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร หอศิลป์แห่งนี้ได้เริ่มขึ้นเมื่อ ดร.พิจิตต รัตตกุล ผู้ว่าราชการกรุงเทพมหานครในขณะนั้นมีมติร่วมกับคณะกรรมการโครงการเฉลิมพระเกียรติฯ ศิลปะแห่งรัชกาลที่ 9 เมื่อปี พ.ศ. 2538 ให้กรุงเทพมหานครจัดสร้างหอศิลปะร่วมสมัยแห่งกรุงเทพมหานคร ณ สี่แยกปทุมวัน แต่โครงการกลับมาหยุดลงสมัยนายสมัคร สุนทรเวช เป็นผู้ว่าราชการกรุงเทพฯ ซึ่งต้องการให้เป็นอาคารพาณิชย์มากขึ้น จนเกิดกิจกรรมเคลื่อนไหวคัดค้านจากหมู่นักศึกษาและศิลปิน ต่อมาในสมัยนายอภิรักษ์ โกษะโยธิน ได้รับเลือกตั้งเป็นผู้ว่าราชการกรุงเทพฯ จึงพิจารณาเห็นชอบให้ดำเนินการจัดสร้างตามเดิม
                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร แหล่งรวมนิทรรศการศิลปะสำหรับคนทุกเพศทุกวัย โดยจะเปลี่ยนงานแสดงต่างๆ ตามกิจกรรม เช่น การจัดแสดงผลงานศิลปะ ,ภาพยนตร์ ,ดนตรี และการออกแบบสร้างสรรค์ เป็นต้น อีกทั้งยังมีห้องสมุดศิลปะ ร้านขายของและมุมกาแฟอีกด้วย
                                                            </p>
                                                            <a href="https://www.bacc.or.th/content/11.html" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: https://www.bacc.or.th/content/11.html
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>

                            <div className={
                                themeType === 'red' ? 'flex flex-wrap justify-between pt-12 -mx-6 bg-red'
                                    : themeType === 'dark' ? 'flex flex-wrap justify-between pt-12 -mx-6 bg-black'
                                        : themeType === 'blue' ? 'flex flex-wrap justify-between pt-12 -mx-6 bg-blue'
                                            : themeType === 'white' ? 'flex flex-wrap justify-between pt-12 -mx-6 bg-white'
                                                : themeType === 'gold' ? 'flex flex-wrap justify-between pt-12 -mx-6 bg-gold'
                                                    : 'flex flex-wrap justify-between pt-12 -mx-6 bg-black'}>
                                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                    <div className={themeType === 'red' ? 'flex-1 bg-black rounded-t rounded-b-none overflow-hidden shadow-lg text-red'
                                        : themeType === 'dark' ? 'flex-1 bg-red rounded-t rounded-b-none overflow-hidden shadow-lg text-black'
                                            : themeType === 'blue' ? 'flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg text-blue'
                                                : themeType === 'white' ? 'flex-1 bg-blue rounded-t rounded-b-none overflow-hidden shadow-lg text-white'
                                                    : themeType === 'gold' ? 'flex-1 bg-black rounded-t rounded-b-none overgoldhidden shadow-lg text-gold'
                                                        : 'flex-1 bg-gold rounded-t rounded-b-none overflow-hidden shadow-lg text-black'}>
                                        <div className="flex flex-wrap no-underline hover:no-underline">
                                            <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                                <img
                                                    src={Watpo.src}
                                                    alt="image 1"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Watpo_1.src}
                                                    alt="image 2"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Watpo_2.src}
                                                    alt="image 3"
                                                    className="w-full object-cover h-full"
                                                />


                                            </Carousel>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        "วัดโพธิ์" หรือนามทางราชการว่า "วัดพระเชตุพนวิมลมังคลาราม ราชวรมหาวิหาร"
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ: บริเวณวัด : ทุกวัน 8.00-17.00 น.
                                                    โบสถ์: ทุกวัน 8.00-17.00 น.
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:  2 ถนนสนามไชย แขวงพระบรมมหาราชวัง เขตพระนคร กรุงเทพฯ 10200
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                        : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                        {login &&
                                            <button className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                                onClick={() => setOpen('2')}>
                                                Click here
                                            </button>
                                        }


                                        {open === '2' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                “วัดโพธิ์” หรือวัดพระเชตุพนวิมลมังคลารามราชวรมหาวิหาร
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                                                                หนึ่งในปูชนียสถานที่สำคัญแห่งกรุงรัตนโกสินทร์ วัดแห่งนี้ไม่เพียงเป็นมรดกล้ำค่าของประเทศไทย แต่ได้รับการยอมรับว่าเป็นสถานที่สำคัญทรงคุณค่าในระดับโลก
                                                                ประวัติโดยย่อของ “วัดโพธิ์" เป็นพระอารามหลวงชั้นเอก และเป็นวัดประจำรัชกาลที่ ๑ แห่งราชวงศ์จักรี เดิมชื่อ “วัดโพธาราม" เป็นวัดโบราณที่ราษฎรสร้างไว้ ตั้งแต่สมัยกรุงศรีอยุธยาเป็นราชธานี เมื่อพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช (รัชกาลที่ ๑) เสวยพระราชสมบัติ และทรงย้ายเมืองหลวงมายังฝั่งพระนคร มีการสร้างพระบรมมหาราชวังขึ้นใหม่ จึงทรงปฎิสังขรณ์วัดโพธารามที่อยู่บริเวณเดียวกันไปด้วย
                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                วัดโพธิ์ได้รับการยกย่องจากองค์การยูเนสโกให้เป็น “มรดกความทรงจำแห่งโลก” นั่นคือ “จารึกวัดโพธิ์” ที่ว่าด้วยภูมิปัญญาไทย และสรรพศาสตร์แขนงต่างๆ

                                                                ต้นตำรับการนวดวัดโพธิ์ ก็ถือเป็นจุดกำเนิดการนวดแผนไทย ซึ่งนวดแผนไทย ได้รับการรับรองให้เป็นมรดกภูมิปัญญาทางวัฒนธรรมของมนุษยชาติ

                                                                นอกจากนี้ วัดโพธิ์ ยังเป็นแหล่งรวบรวมศาสตร์ และศิลป์ที่สำคัญไว้หลากหลายแขนง วิจิตรงดงามไปด้วยสถาปัตยกรรมที่ดึงดูดให้มีผู้มาเยือนจากทั่วโลก
                                                            </p>
                                                            <a href="https://mgronline.com/travel/detail/9650000034541" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: https://mgronline.com/travel/detail/9650000034541
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>



                                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                    <div className={themeType === 'red' ? 'flex-1 bg-black rounded-t rounded-b-none overflow-hidden shadow-lg text-red'
                                        : themeType === 'dark' ? 'flex-1 bg-red rounded-t rounded-b-none overflow-hidden shadow-lg text-black'
                                            : themeType === 'blue' ? 'flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg text-blue'
                                                : themeType === 'white' ? 'flex-1 bg-blue rounded-t rounded-b-none overflow-hidden shadow-lg text-white'
                                                    : themeType === 'gold' ? 'flex-1 bg-black rounded-t rounded-b-none overgoldhidden shadow-lg text-gold'
                                                        : 'flex-1 bg-gold rounded-t rounded-b-none overflow-hidden shadow-lg text-black'}>
                                        <div className="flex flex-wrap no-underline hover:no-underline">
                                            <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                                <img
                                                    src={Watjang.src}
                                                    alt="image 1"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Watjang_1.src}
                                                    alt="image 2"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Watjang_2.src}
                                                    alt="image 3"
                                                    className="w-full object-cover h-full"
                                                />


                                            </Carousel>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        วัดอรุณราชวรารามราช วรมหาวิหาร หรือ วัดแจ้ง
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ: 08.00-18.00 น
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:  158 ถนนวังเดิม แขวงวัดอรุณ เขตบางกอกใหญ่ กรุงเทพมหานคร
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                        : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                        {login &&
                                            <button className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                                onClick={() => setOpen('3')}>
                                                Click here
                                            </button>
                                        }


                                        {open === '3' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                “วัดแจ้ง” วัดอรุณราชวรารามราชวรมหาวิหาร
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                                                                วัดแจ้ง เป็นวัดราษฎร์สังกัดคณะสงฆ์ฝ่ายมหานิกาย ตั้งอยู่ในตำบลหน้าเมือง อำเภอเมืองปราจีนบุรี จังหวัดปราจีนบุรี ที่ดินตั้งวัดมีเนื้อที่ 40 ไร่
                                                                วัดแจ้งตั้งเมื่อ พ.ศ. 2391 ที่มาของชื่อวัดสืบเนื่องจากเจ้าพระยาบดินทรเดชา (สิงห์ สิงหเสนี) นำทัพเดินทางกลับจาราชการสงครามที่ประเทศกัมพูชา เมื่อเดินทางถึงบริเวณที่วัดแจ้งก็สว่างดี จึงให้ทหารพักผ่อนที่บริเวณนี้ ต่อมาได้ทำการสร้างวัดขึ้นและได้อัญเชิญพระพุทธรูปที่นำมาจากประเทศกัมพูชา ซึ่งพบ ณ เจดีย์เก่าแก่พุพัง มีต้นโพธิ์ ขนาดใหญ่ขึ้นปกคลุม มาประดิษฐานไว้ในอุโบสถ นามว่า หลวงพ่อเพชร ได้สร้างกุฏิให้อาจารย์เป็นพระภิกษุเขมรที่ติดตามกองทัพมา ให้อาจารย์เป็นผู้ดูแลรักษาวัดในตำแหน่งเจ้าอาวาส วัดได้รับพระราชทานวิสุงคามสีมา เมื่อ พ.ศ. 2499 เขตวิสุงคามสีมา กว้าง 11 เมตร ยาว 29 เมตร
                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                พุทธลักษณะของ หลวงพ่อเพชร เป็นพระพุทธรูปที่หล่อด้วยโลหะ เกศเป็นเกศบัวตูม นั่งขัดสมาธิเพชร คือ พระบาท (เท้า) ทั้งสองไขว้กัน ฝ่าพระบาทเกี่ยวกระหวัดมองเห็นชัดทั้งสองข้าง พระหัตถ์ (มือ) ขวา ห้อยบนพระชานุ (เข่า) ด้านขวา พระหัตถ์ซ้ายวางอยู่บนหน้าตัก เป็นพระพุทธรูปปางสดุ้งมารหรือปางมารวิชัย สันนิษฐานว่าเป็นพระสร้างสมัยเชียงแสน ปัจจุบันประดิษฐานอยู่ในวิหารแบบล้านนา
                                                            </p>
                                                            <a href="https://prachincity.go.th/?p=1088" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: https://prachincity.go.th/?p=1088
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>



                                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                    <div className={themeType === 'red' ? 'flex-1 bg-black rounded-t rounded-b-none overflow-hidden shadow-lg text-red'
                                        : themeType === 'dark' ? 'flex-1 bg-red rounded-t rounded-b-none overflow-hidden shadow-lg text-black'
                                            : themeType === 'blue' ? 'flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg text-blue'
                                                : themeType === 'white' ? 'flex-1 bg-blue rounded-t rounded-b-none overflow-hidden shadow-lg text-white'
                                                    : themeType === 'gold' ? 'flex-1 bg-black rounded-t rounded-b-none overgoldhidden shadow-lg text-gold'
                                                        : 'flex-1 bg-gold rounded-t rounded-b-none overflow-hidden shadow-lg text-black'}>
                                        <div className="flex flex-wrap no-underline hover:no-underline">
                                            <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                                <img
                                                    src={Watphrakaew.src}
                                                    alt="image 1"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Watphrakaew_1.src}
                                                    alt="image 2"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Watphrakaew_2.src}
                                                    alt="image 3"
                                                    className="w-full object-cover h-full"
                                                />


                                            </Carousel>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        วัดพระแก้ว(Wat Phra kaew) วัดพระศรีรัตนศาสดาราม
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ: เปิดบริการ 8.30 น. - 15.30 น.
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:  ถนน หน้าพระลาน แขวงพระบรมมหาราชวัง เขตพ ระนคร กรุงเทพมหานคร 10200
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                        : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                        {login && <button className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                            : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                            onClick={() => setOpen('4')}>
                                            Click here
                                        </button>}

                                        {open === '4' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                “วัดพระแก้ว” วัดพระศรีรัตนศาสดาราม
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                                                                วัดพระแก้วมรกต วัดสำคัญที่สุดของกรุงรัตนโกสินทร์
                                                                “พระศรีรัตนศาสดาราม” แปลว่า “วัดที่ประดิษฐานพระพุทธเจ้าที่สร้างด้วยแก้วมรกตอันเป็นศรีของบ้านเมือง” มีชื่อเรียกอีกชื่อหนึ่งว่า “วัดพระแก้ว”

                                                                ตามราชประเพณีการสร้างพระอารามหลวงในพระราชฐานนั้น เมื่อครั้งกรุงสุโขทัยเป็นราชธานี มีวัดมหาธาตุอยู่ในบริเวณพระราชวัง เมื่อครั้งกรุงศรีอยุธยาเป็นราชธานี มีวัดพระศรีสรรเพชญอยู่ในบริเวณพระบรมมหาราชวัง และในสมัยกรุงรัตนโกสินทร์ เมื่อพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช รัชกาลที่ 1 สถาปนากรุงรัตนโกสินทร์ขึ้นในปี พ.ศ. 2325 ทรงพระกรุณาโปรดเกล้าฯ ให้สร้างพระอารามหลวงพร้อมกับการสร้างพระบรมมหาราชวัง เพื่อเป็นพระอารามในเขตพระราชฐาน และเป็นวัดที่ตั้งพระราชหฤทัยให้เป็นที่ประดิษฐานพระพุทธมหามณีรัตนปฏิมากรแก้วมรกตที่ทรงได้จากกรุงเวียงจันทร์ ประเทศลาว
                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                เมื่อการก่อสร้างแล้วเสร็จ ได้อัญเชิญพระแก้วมรกตแห่จากวัดอรุณราชวราราม ฝั่งกรุงธนบุรี มาประดิษฐานในพระอุโบสถวัดพระศรีรัตนศาสดาราม เมื่อวันที่ 27 มีนาคม พ.ศ. 2327 และพระราชทานนามว่า “พระพุทธมหามณีรัตนปฏิมากร”

                                                                เนื่องจากเป็นวัดที่ทรงตั้งพระราชหฤทัยให้เป็นที่ประดิษฐานพระแก้วมรกต พระพุทธรูปศักดิ์สิทธิ์โดยเฉพาะ จึงทำให้วัดแห่งนี้มีแต่เขตพุทธาวาส ไม่มีเขตสังฆาวาส แต่จะใช้เป็นสถานที่สำหรับบรรพชาและอุปสมบทนาคหลวง และเป็นสถานที่สำหรับประกอบพระราชพิธีตามขนบธรรมเนียมประเพณีโบราณ เช่น พระราชพิธีถือน้ำพระพิพัฒน์สัตยา
                                                            </p>
                                                            <a href="http://www.resource.lib.su.ac.th/rattanakosin/index.php/2014-10-27-08-52-05/2014-10-29-02-26-23/2015-10-19-03-26-15/2016-08-29-03-47-05" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: http://www.resource.lib.su.ac.th/rattanakosin/index.php/2014-10-27-08-52-05/2014-10-29-02-26-23/2015-10-19-03-26-15/2016-08-29-03-47-05
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>



                                <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                                    <div className={themeType === 'red' ? 'flex-1 bg-black text-red rounded-t rounded-b-none overflow-hidden shadow-lg'
                                        : themeType === 'dark' ? 'flex-1 bg-red text-black rounded-t rounded-b-none overflow-hidden shadow-lg'
                                            : themeType === 'blue' ? 'flex-1 bg-white text-blue rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                : themeType === 'white' ? 'flex-1 bg-blue text-white rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                    : themeType === 'gold' ? 'flex-1 bg-black text-gold rounded-t rounded-golde overflow-hidden shadow-lg'
                                                        : 'flex-1 bg-gold text-gold rounded-t rounded-b-none overflow-hidden shadow-lg'}>
                                        <div className="flex flex-wrap no-underline hover:no-underline">
                                            <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                                <img
                                                    src={Asiatique.src}
                                                    alt="image 1"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Asiatique_1.src}
                                                    alt="image 2"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Asiatique_2.src}
                                                    alt="image 3"
                                                    className="w-full object-cover h-full"
                                                />


                                            </Carousel>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        เอเชียทีค เดอะ ริเวอร์ฟรอนท์
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ:  เปิดทุกวัน เวลา : 11.00 - 24.00 น.
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:  2194 ถ. เจริญกรุง แขวงวัดพระยาไกร เขตบางคอแหลม กรุงเทพมหานคร 10120
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                        : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                        {login &&
                                            <button className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                                onClick={() => setOpen('5')}>
                                                Click here
                                            </button>
                                        }
                                        {open === '5' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                เอเชียทีค เดอะริเวอร์ฟรอนต์ (Asiatique The Riverfront)
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                                                                ประวัติศาสตร์ของ เอเชียทีค เดอะ ริเวอร์ฟร้อนท์/The history of ASIATIQUE the riverfront ในคริสต์ศตวรรษที่ 18 ซึ่งตรงกับยุคสมัยของพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัวรัชกาลที่ 5 ประเทศ ในแถบทวีปเอเชียถูกรุกรานโดยชาติมหาอำนาจจากยุโรป และด้วยสายพระเนตรอันยาวไกล พระองค์ทรงมีพระราชดำริที่จะพัฒนาประเทศให้เจริญรุดหน้าทัดเทียมนานาอารยประเทศ จึงทรงตัดสินพระทัยเจริญสัมพันธไมตรีกับราชอาณาจักรเดนมาร์ก พร้อมกับการก่อกำเนิดท่าเรือของบริษัท อีสท์ เอเชียติก

                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                ในวันนี้ ณ ผืนแผ่นดินเดิม อันเป็นที่ตั้งของท่าเรือ อีสท์ เอเชียติก ได้ถูกเนรมิตให้กลับมาเฟื่องฟูอีกครั้ง ภายใต้ชื่อ เอเชียทีค เดอะ ริเวอร์ฟร้อนท์ “ASIATIQUE The Riverfront” โครงการไลฟ์สไตล์ ริมแม่น้ำเจ้าพระยาแห่งแรกที่ใหญ่ที่สุดในเอเชีย แลนด์มาร์คใหม่ล่าสุดของกรุงเทพมหานคร
                                                            </p>
                                                            <a href="https://www.thaifranchisecenter.com/links/show.php?id=3807" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: https://www.thaifranchisecenter.com/links/show.php?id=3807
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                                    <div className={themeType === 'red' ? 'flex-1 bg-black text-red rounded-t rounded-b-none overflow-hidden shadow-lg'
                                        : themeType === 'dark' ? 'flex-1 bg-red text-black rounded-t rounded-b-none overflow-hidden shadow-lg'
                                            : themeType === 'blue' ? 'flex-1 bg-white text-blue rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                : themeType === 'white' ? 'flex-1 bg-blue text-white rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                    : themeType === 'gold' ? 'flex-1 bg-black text-gold rounded-t rounded-golde overflow-hidden shadow-lg'
                                                        : 'flex-1 bg-gold text-gold rounded-t rounded-b-none overflow-hidden shadow-lg'}>
                                        <div className="flex flex-wrap no-underline hover:no-underline">
                                            <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                                <img
                                                    src={Sky.src}
                                                    alt="image 1"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Sky_2.src}
                                                    alt="image 2"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Sky_1.src}
                                                    alt="image 3"
                                                    className="w-full object-cover h-full"
                                                />


                                            </Carousel>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        ท้องฟ้าจำลองกรุงเทพ (Bangkok Planetarium)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ:  อังคาร – อาทิตย์ 9.00 – 16.30 น.
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:  928 ถนนสุขุมวิท แขวง พระโขนง เขตค ลองเตย กรุงเทพมหานคร 10110
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                        : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                        {login &&
                                            <button className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                                onClick={() => setOpen('6')}>
                                                Click here
                                            </button>
                                        }
                                        {open === '6' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                ท้องฟ้าจำลองกรุงเทพ (Bangkok Planetarium)
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
                                                                ท้องฟ้าจำลองกรุงเทพ (Bangkok Planetarium)  ตั้งอยู่ในเขตพื้นที่ส่วนหนึ่งของศูนย์วิทยาศาสตร์เพื่อการศึกษา (Science Center for Education) จัดสร้างขึ้นเมื่อปี พ.ศ. 2505 เสร็จสิ้นและเปิดใช้งานปี พ.ศ. 2507  โดยมีวัตถุประสงค์เพื่อเป็นแหล่งศึกษาหาความรู้จากการจำลองเหมือนของจริงทางด้านดาราศาสตร์ เช่น การดูดาว ตำแหน่งของดวงดาว กลุ่มดาว ดาวฤกษ์ ดาวเคราะห์ต่าง ๆ  และที่น่าสนใจคือ เราสามารถชมดวงดาวตามตำแหน่งดาวในท้องฟ้าในวันนั้น ๆ ที่เข้าชมได้จากที่นี่ท้องฟ้าจำลองกรุงเทพ

                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                ห้องฉายดาวและภาพยนตร์เต็มโดม (Star and Full Dome Show)

                                                                ห้องฉายดาว เป็นหนึ่งห้องสำคัญของท้องฟ้าจำลองกรุงเทพ ห้องมีเป็นรูปทรงวงกลมขนาดใหญ่ หลังคาเป็นรูปโดมสูง สำหรับฉายภาพดวงดาวให้คล้ายกับดวงดาวในท้องฟ้าจริง จากเครื่องฉายดาวที่มีระบบการทำงานซับซ้อน ซึ่งล่าสุดนั้นเป็นระบบฉายดาวดิจิทัล  แบ่งออกเป็น 2 ส่วน ดังนี้คือ

                                                                การฉายภาพ เครื่องฉายดาวระบบดิจิทัลที่มีชื่อว่า "คริสตี้" ถือเป็นหนึ่งในพระเอกของท้องฟ้าจำลองกรุงเทพ  เป็นเครื่องฉายความละเอียดสูงสุด 4K หรือ Ultra High Definition ความสว่างต่อเครื่องสูงถึง 30,000 Lumens โดยฉายภาพจากเครื่องฉายภาพจำนวน 2 ตัวซึ่งภายในบรรจุคอมพิวเตอร์อีก 4 ตัวฉายภาพในมุมที่ต่างกัน และด้วยเลนส์ Fish eye ที่ออกแบบมาเป็นพิเศษ เพื่อให้ฉายภาพได้กว้างกว่าเครื่องฉายภาพทั่วไป และติดตั้งเครื่องฉายภาพ โดยไม่ให้เลนส์โดนส่วนบนของเครื่องฉายดาวระบบกลไกมอเตอร์และเลนส์ ทำให้ลำแสงของเครื่องฉายดาวที่ฉายขึ้นไปบนจอโดมเลยจุดกึ่งกลางของจอโดมและส่วนล่างลำแสงที่ฉายออกไปจะไปสิ้นสุดที่ขอบโดมฉายดาว  ซึ่งทำให้เครื่องฉายทั้ง 2 ตัวนั้นมีพื้นที่ซ้อนทับกันด้านบนกลางจอโดม (Blending Region) ทำให้ภาพที่ได้มีความละเอียด คมชัดจากการซ้อนทับที่ซับซ้อน จนทำให้สามารถฉายดาวทั้งในอดีตและปัจจุบันได้นับแสนดวง และสามารถเชื่อมโยงข้อมูลผ่านระบบคลาวด์โดยสามารถดึงข้อมูลจากท้องฟ้าจำลองทั่วโลกที่ใช้ระบบฉายเดียวแบบเดียวกันมาฉายได้
                                                                การควบคุม "ดิจิสตาร์ไฟว์" (Digistar 5) โปรแกรมควบคุมการทำงานการฉายภาพบนจอโดมในท้องฟ้าจำลองกรุงเทพทั้งหมด โดยใช้เทคโนโลยีของ Digistar5 มีระบบ Auto Blending และ Auto Alignment ที่ทำให้เครื่องฉายภาพ ฉายภาพเป็นภาพเดียวกันได้เสมือนการฉายด้วย เครื่องฉายภาพเครื่องเดียว
                                                                ภาพยนต์ระบบเต็มโดม

                                                                ภาพยนตร์วิทยาศาสตร์ สาระจากพื้นฐานความรู้เกี่ยวกับสิ่งที่เกิดขึ้นในท้องฟ้า และจักรวาล ฉายภาพบนโดมครึ่งวงกลมแบบสมจริงเสมือนการชมภาพยนตร์ 3 มิติ  ซึ่ง ณ ตอนนี้ (กันยายน 2560) ภาพยนตร์เต็มโดมฉายทุกรอบหลังการสอนดูดาวคือเรื่อง "มหัศจรรย์แสงออโรร่า"  (Experience of Aurora) ภาพยนต์ที่จะทำให้เราได้ไปสัมผัสกับแสงออโรรา แสงสวยงามบนท้องฟ้าเกิดจากสิ่งลี้ลับเหนือธรรมชาติ แต่แท้ที่จริงแล้วแสงหลากสีนี้ เกิดขึ้นเพราะสนามแม่เหล็กโลกกำลังปกป้องทุกชีวิตบนโลกให้ปลอดภัยจากจากลมสุริยะ  เสมือนว่าเราอยู่ที่ขั้วโลกจริง ๆ ทั้งนี้ ก็มีอีกหลาย ๆ เรื่อง หมุนเวียนผลัดเปลี่ยนกันไป เช่น “Violent Universe Catastrophes of the Cosmos : จักรวาลอันเกรี้ยวกราด วิบัติการแห่งห้วงอวกาศ“ , “Flight Adventures : กว่าจะบินได้“,“New Horizons : ของฟ้าแห่งใหม่“ ทั้งหมดนี้สามารถรับชมได้เลยที่ท้องฟ้าจำลองกรุงเทพ


                                                            </p>
                                                            <a href="https://www.scimath.org/other-article/item/7427-2017-08-08-08-14-37" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: https://www.scimath.org/other-article/item/7427-2017-08-08-08-14-37
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>



                                <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">

                                    <div className={themeType === 'red' ? 'flex-1 bg-black text-red rounded-t rounded-b-none overflow-hidden shadow-lg'
                                        : themeType === 'dark' ? 'flex-1 bg-red text-black rounded-t rounded-b-none overflow-hidden shadow-lg'
                                            : themeType === 'blue' ? 'flex-1 bg-white text-blue rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                : themeType === 'white' ? 'flex-1 bg-blue text-white rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                    : themeType === 'gold' ? 'flex-1 bg-black text-gold rounded-t rounded-golde overflow-hidden shadow-lg'
                                                        : 'flex-1 bg-black text-gold rounded-t rounded-b-none overflow-hidden shadow-lg'}>
                                        <div className="flex flex-wrap no-underline hover:no-underline">
                                            <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                                <img
                                                    src={Yaowarat.src}
                                                    alt="image 1"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Yaowarat_2.src}
                                                    alt="image 2"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Yaowarat_1.src}
                                                    alt="image 3"
                                                    className="w-full object-cover h-full"
                                                />


                                            </Carousel>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        ถนน เยาวราช (China Town)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ:   เปิดตั้งแต่ 07.00 - 01.00 น.
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:  ถนน เยาราช แขวงจักรวรรดิ์ กรุงเทพฯ 10100
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                        : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                        {login &&
                                            <button className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                                onClick={() => setOpen('7')}>
                                                Click here
                                            </button>

                                        }

                                        {open === '7' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                ถนน เยาวราช (China Town)
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                                                                เมื่อกล่าวถึง ‘เยาวราช’ ดินแดนมังกรในเมืองไทย ที่ผสมผสานครึ่งไทยครึ่งจีนได้อย่างมีเสน่ห์ ภาพร้านทอง ร้านขายอาหาร ที่ตั้งเรียงรายตั้งแต่เช้าจรดเย็น ถูกปกคลุมอย่าหนาแน่นจากเหล่าคนจีนแท้ คนไทย และคนไทยเชื้อสายจีน รวมไปถึงชาวต่างชาติจากประเทศต่างๆ ที่เลือกให้เยาวราชเป็นจุดหมายปลายทางซึ่งต้องมาเยือนให้ได้สักครั้ง

                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                ย้อนไปเมื่อ 100 ปีก่อน (พ.ศ. 2395) ‘ดินแดนมังกร’ ของกรุงเทพฯ นี้ กำเนิดมาจากชาวจีนแผ่นดินใหญ่ที่อพยพเข้ามายังไทย ทำให้พื้นที่ฝั่งตะวันออกของแม่น้ำเจ้าพระยาหรือฝั่งธนบุรี กลายเป็นแหล่งชุมชนคนจีนขนาดใหญ่ แต่เมื่อ ‘พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช’ ทรงสถาปนากรุงรัตนโกสินทร์ขึ้น จึงย้ายราชธานีมาตั้งฝั่งพระนครในปัจจุบัน ชุมชนจีนในครานั้นต้องอพยพขนย้ายกันอีกครา มายังริมแม่น้ำทางทิศใต้ของพระนครที่ถูกเรียกว่า ‘สำเพ็ง’ ต่อมามีการขยับขยายสร้างถนนเส้นใหม่บริเวณใกล้เคียง จึงเป็นที่มาของ ‘เยาวราช’ ถนนหลักสำหรับการสัญจรไปมา
                                                            </p>
                                                            <a href="https://urbancreature.co/yaowarat-culture/" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: https://urbancreature.co/yaowarat-culture/
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>


                                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                    <div className={themeType === 'red' ? 'flex-1 bg-black text-red rounded-t rounded-b-none overflow-hidden shadow-lg'
                                        : themeType === 'dark' ? 'flex-1 bg-red text-black rounded-t rounded-b-none overflow-hidden shadow-lg'
                                            : themeType === 'blue' ? 'flex-1 bg-white text-blue rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                : themeType === 'white' ? 'flex-1 bg-blue text-white rounded-t rounded-b-none overflow-hidden shadow-lg'
                                                    : themeType === 'gold' ? 'flex-1 bg-black text-gold rounded-t rounded-golde overflow-hidden shadow-lg'
                                                        : 'flex-1 bg-black text-gold rounded-t rounded-b-none overflow-hidden shadow-lg'}>
                                        <div className="flex flex-wrap no-underline hover:no-underline">
                                            <Carousel transition={{ duration: 2 }} autoplay className="h-full" >
                                                <img
                                                    src={Saochingcha.src}
                                                    alt="image 1"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Saochingcha_2.src}
                                                    alt="image 2"
                                                    className="w-full object-cover h-full"
                                                />
                                                <img
                                                    src={Saochingcha_1.src}
                                                    alt="image 3"
                                                    className="w-full object-cover h-full"
                                                />


                                            </Carousel>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>

                                                </div>
                                                <div className="col-span-5">
                                                    <p className="w-full  font-bold text-xl text-bl px-6">
                                                        เสาชิงช้า
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full text-xl text-bl px-6 col-span-5">
                                                    เวลาทำการ: -
                                                </div>
                                            </div>
                                            <div className="grid grid-col-6 grid-flow-col  p-4">
                                                <div className="col-span-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                                <div className="col-span-5">
                                                    <p className=" font-serif text-base px-6 mb-5">
                                                        สถานที่ตั้ง:  239 ถนน ดินสอ แขวงบางขุนพรหม เขตพระนคร กรุงเทพมหานคร 10200
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={themeType === 'red' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                        : themeType === 'dark' ? 'flex-none mt-auto bg-red rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                            : themeType === 'blue' ? 'flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                : themeType === 'white' ? 'flex-none mt-auto bg-blue rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                    : themeType === 'gold' ? 'flex-none mt-auto bg-black rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'
                                                        : 'flex-none mt-auto bg-gold rounded-b rounded-t-none overflow-hidden shadow-lg p-6 text-center'}>
                                        {login &&
                                            <button className={themeType === 'red' ? 'bg-red mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'dark' ? 'bg-black mx-auto lg:mx-0 hover:underline text-red font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'blue' ? 'bg-blue mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'white' ? 'bg-white mx-auto lg:mx-0 hover:underline text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : themeType === 'gold' ? 'bg-gold mx-auto lg:mx-0 hover:underline text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                                : 'bg-black mx-auto lg:mx-0 hover:underline text-gold font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                                onClick={() => setOpen('8')}>
                                                Click here
                                            </button>
                                        }
                                        {open === '8' &&
                                            <div id="defaultModal" aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
                                                <div className="relative w-full max-w-2xl max-h-full">

                                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                เสาชิงช้า
                                                            </h3>
                                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen('')}>
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>

                                                        <div className="p-6 space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400">
                                                                ประวัติเสาชิงช้าเป็นสิ่งก่อสร้างสมัยยุคต้นรัตนโกสินทร์ สร้างขึ้นเมื่อ พ.ศ. 2327 ตรงกับรัชสมัยพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช ตามคติความเชื่อแบบพราหมณ์ เสาชิงช้าสร้างขึ้นบนพื้นที่สะดือเมือง เป็นศูนย์กลางของพระนคร โดยวัดจากกำแพงเมืองด้านแม่น้ำเจ้าพระยาตะวันตกถึงป้อมมหากาฬ

                                                                เสาชิงช้าตั้งอยู่บนฐานปูนสูงเป็นวงกลม เสาไม้สูงใหญ่ประดับด้วยแผ่นไม้ฉลุที่ฐานเสาทั้ง 2 ข้าง มีเสาตะเกียบปลายเป็นรูปทรงมัณฑ์ขนาบข้างละ 2 ต้น ทาด้วยสีแดงชาด

                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                                เสาชิงช้า เป็นสิ่งก่อสร้างที่อยู่คู่เกาะรัตนโกสินทร์มาตั้งแต่สร้างเมือง แม้ว่ายุคสมัยจะเปลี่ยนไป ผู้คนก็ยังแวะเวียนมาที่ย่านเสาชิงช้า ทั้งการติดต่อราชการกับศาลาว่าการกรุงเทพมหานคร หรือไหว้พระขอพรสิ่งศักดิ์สิทธิ์คู่บ้านคู่เมืองตั้งแต่ถนนดินสอมาถึงวัดสุทัศน์
                                                            </p>
                                                            <a href="https://www.thairath.co.th/lifestyle/culture/2407661" className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                ข้อมูล: https://www.thairath.co.th/lifestyle/culture/2407661
                                                            </a>

                                                        </div>

                                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setOpen('')}>I accept</button>
                                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen('')}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                {/* <Content />
                <Footer /> */}
            </div>

            <div className={'app__bg'}>
                {/* <img src="/src/app/c.jpg" alt={'bg'} /> */}
            </div>
        </div>

    )
}

export default Page


