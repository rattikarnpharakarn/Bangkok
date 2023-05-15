'use client';

import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Login from '../login/pages';
import Watpo from '../../public/images/watpo.jpg'
import Watphrakaew from '../../public/images/wat_phra_kaew.jpg'
import Watjang from '../../public/images/wat_jang.jpg'
import Asiatique from '../../public/images/asiatique.jpg'
import Yaowarat from '../../public/images/yaowarat.jpg'
import Sky from '../../public/images/sky.jpg'
import Cover_1 from '../../public/images/cover_1.jpg'
import Cover_2 from '../../public/images/cover_2.jpg'
import Cover_3 from '../../public/images/cover_3.jpg'
import Cover_4 from '../../public/images/cover_4.jpg'
import Cover_5 from '../../public/images/cover_5.jpg'
import Cover_6 from '../../public/images/cover_6.jpg'
import Cover_7 from '../../public/images/markets.jpg'
import Watcover from '../../public/images/wat_cover.jpg'
import Bacc from '../../public/images/bacc.jpg'
import { useRouter } from 'next/navigation';




type UserSubmitForm = {
    fname: string;
    lname: string;
    username: string;
    password: string;
    cfpassword: string;
    bankaccount: string;
    bankaccountnumber: string;
};


const Page = (props: any) => {
    const [alert, setAlert] = useState(false);
    const [show, setShow] = useState(false);
    const router = useRouter()
    const nameRegexEn = /^[A-za-z0-9]+$/;
    const phoneRegExp = /^(0[6,8,9]{1,2}[0-9]{3,10})$/


    const validationSchema = Yup.object().shape({
        checkLangTh: Yup.boolean(),
        checkLangEn: Yup.boolean(),

        fname: Yup.string()
            .required('Firstname is required'),


        lname: Yup.string()
            .required('Lastname is required')
            .when('fname', {
                is: (checkLangEn: string) => checkLangEn,
                then: schema => schema.matches(nameRegexEn, "Only English letters").required("Required *"),
            }),

        username: Yup.string()
            .required('Username is required')
            .min(10, 'Enter a phone number of at min 10 characters.')
            .max(10, 'Enter a phone number of at max 10 characters.')
            .matches(phoneRegExp, 'กรอกเบอร์โทรศัพท์ไม่น้อยกว่า 10 ตัว ขึ้นต้นด้วย 06,08,09 เท่านั้น'),

        password: Yup.string()
            .required('Password is required')
            .matches(
                /^([A-Z]{1})(?=.*[A-za-z0-9])/,
                "Must the start of a word is Uppercase, One Uppercase, One Lowercase and Only English letter"
            )
            .matches(
                nameRegexEn,
                "Only English letter"
            ),
        cfpassword: Yup.string()
            .required('Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),

        bankaccount: Yup.string()
            .required('Bank Account is required'),

        bankaccountnumber: Yup.string()
            .required('Bank account number is required')
            .min(10, 'Enter a phone number of at min 10 characters.')
            .max(10, 'Enter a phone number of at max 10 characters.')

    });

    const goToHomepage = () => {
        router.push('/');
    }



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
        data = {
            fname: data.fname,
            lname: data.lname,
            username: data.username,
            password: data.password,
            cfpassword: data.cfpassword,
            bankaccount: data.bankaccount,
            bankaccountnumber: data.bankaccountnumber,
        }
        sessionStorage.setItem('user', JSON.stringify(data));
        setAlert(true);
        sessionStorage.setItem('login', 'login')

    };

    const onClose = () => {
        setShow(false);
    }

    return (
        <>
 
                <div className={show ? 'bg-white font-family-karla h-screen opacity-25' : 'bg-white font-family-karla h-screen'}>
                    {alert &&
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none ">
                                    <div id="alert-additional-content-3" className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                                        <div className="flex items-center mb-10">
                                            <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                            <span className="sr-only">Info</span>
                                            <h3 className="text-lg font-medium">Sign up success 🥳</h3>
                                        </div>
                                        <div className="flex justify-center">

                                            <button type="submit"
                                                className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                onClick={goToHomepage}>
                                                <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                                                Go to Homepage
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                    <div className="w-full flex flex-wrap">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                                <p className="text-center text-3xl">Create your accout</p>
                                <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex flex-col pt-4">
                                        <label className="text-lg">First name</label>
                                        <input type="text" placeholder="First name"
                                            {...register('fname')}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.fname ? 'is-invalid' : ''}`} />

                                        <div className="invalid-feedback">{errors.fname?.message}</div>
                                    </div>

                                    <div className="flex flex-col pt-4">
                                        <label className="text-lg">Last name</label>
                                        <input type="text" placeholder="Last name"
                                            {...register('lname')}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.lname ? 'is-invalid' : ''}`} />

                                        <div className="invalid-feedback">{errors.lname?.message}</div>
                                    </div>

                                    <div className="flex flex-col pt-4">
                                        <label className="text-lg">Username</label>
                                        <input type="number" placeholder="phonenumber"
                                            {...register('username')}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'is-invalid' : ''}`} />

                                        <div className="invalid-feedback">{errors.username?.message}</div>
                                    </div>

                                    <div className="flex flex-col pt-4">
                                        <label className="text-lg">Password</label>
                                        <input type="password" id="password" placeholder="Password"
                                            {...register('password')}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'is-invalid' : ''}`} />

                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                    </div>

                                    <div className="flex flex-col pt-4">
                                        <label className="text-lg">Confirm Password</label>
                                        <input type="password" id="confirm-password" placeholder="Confirm password"
                                            {...register('cfpassword')}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.cfpassword ? 'is-invalid' : ''}`} />

                                        <div className="invalid-feedback">{errors.cfpassword?.message}</div>
                                    </div>

                                    <div className="flex flex-col pt-4">
                                        <label className="text-lg">Bank Account</label>

                                        <div className="relative w-full lg:max-w-sm">
                                            <select placeholder="Bank Account"
                                                {...register('bankaccount')}
                                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.bankaccount ? 'is-invalid' : ''}`} >
                                                <option>กรุงเทพ</option>
                                                <option>กสิกร</option>
                                                <option>ไทยพาณิช</option>
                                            </select>
                                        </div>
                                        <div className="invalid-feedback">{errors.bankaccount?.message}</div>

                                    </div>

                                    <div className="flex flex-col pt-4">
                                        <label className="text-lg">Bank Account number</label>
                                        <input type="number" placeholder="681 1 00109 9"
                                            {...register('bankaccountnumber')}
                                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.bankaccountnumber ? 'is-invalid' : ''}`} />

                                        <div className="invalid-feedback">{errors.bankaccountnumber?.message}</div>
                                    </div>

                                    <button type="submit" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8">
                                        Sign up
                                    </button>

                                </form>

                            </div>
                            <button onClick={() => setShow(true)} className="text-center pt-12 pb-12">
                                <p className="underline font-semibold">Log in here.</p>
                            </button>
                        </div>
                        <div className="w-1/2 shadow-2xl h-auto">
                            <div className="grid grid-cols-3 gap-4">
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    src={Watjang.src}
                                    className="rounded animate-fade-in-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="300"
                                    src={Watphrakaew.src}

                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Watpo.src}

                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    src={Asiatique.src}
                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="300"
                                    src={Watcover.src}

                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Cover_1.src}

                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Bacc.src}

                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Yaowarat.src}

                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Sky.src}

                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Cover_2.src}
                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Cover_3.src}
                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Cover_4.src}
                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Cover_5.src}
                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Cover_6.src}
                                    className="rounded animate-fade-out-down" />
                                <img
                                    data-te-animation-init
                                    data-te-animation-start="onScroll"
                                    data-te-animation="[fade-in_1s_ease-in-out]"
                                    data-te-animation-delay="500"
                                    src={Cover_7.src}
                                    className="rounded animate-fade-out-down" />

                            </div>
                            {/* <img className="object-cover w-full  hidden md:block" src={Cover.src} alt="Background" /> */}
                        </div>
                    </div>
                </div>
                {show && <Login onClose={onClose} />}
           
        </>
    )
}

export default Page