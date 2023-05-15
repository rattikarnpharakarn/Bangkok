'use client'
import React, { useState } from 'react'
import { useTheme } from '../../contexts/Theme/Theme.context';
import Login from '@/app/pages/login/pages';
import Avarta from '../../public/images/avatar.jpg';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Button,
    Typography,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    PowerIcon,
    PhoneIcon,
    BanknotesIcon
} from "@heroicons/react/24/outline";





const Sidebar = () => {
    const { theme } = useTheme();
    const { themeType } = useTheme();
    const { setCurrentTheme } = useTheme();
    const [show, setShow] = useState(false);
    const login = sessionStorage.getItem("login");
    const [user, setUserName] = useState<any>(sessionStorage.getItem("user"));
    const users = JSON.parse(user);

    const onClose = () => {
        setShow(false);
    }

    const Logout = () => {
        sessionStorage.removeItem("login");
        location.reload()
    }

    function ThemeMenu() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const closeMenu = () => setIsMenuOpen(false);

        return (
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                <MenuHandler>

                    <button type="button" className={themeType === 'red' ? 'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-red shadow-sm ring-inset ring-gray-300'
                        : themeType === 'blue' ? 'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue shadow-sm ring-inset ring-gray-300'
                            : themeType === 'white' ? 'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue px-3 py-2 text-white font-semibold text-blue shadow-sm ring-inset ring-gray-300'
                                : themeType === 'gold' ? 'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-gold shadow-sm ring-inset ring-gray-300'
                                    : 'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-red px-3 py-2 text-sm font-semibold text-black shadow-sm ring-inset ring-gray-300'}
                        id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Theme Color
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </MenuHandler>
                <MenuList className="p-1">
                    return (
                    <MenuItem
                        onClick={closeMenu}
                        className="flex items-center  rounded flex items-center rounded grid grid-rows-3 grid-flow-col gap-4"
                    >
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <p className='mt-2' >Red</p>
                        </div>
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <button type="button" className="w-5 h-5 rounded-full" onClick={() => setCurrentTheme('red')}
                                style={{
                                    backgroundImage: "linear-gradient(-45deg, red, red 49%, black 51%)",
                                }}>

                            </button>
                        </div>

                    </MenuItem>

                    <MenuItem
                        onClick={closeMenu}
                        className="flex items-center  rounded flex items-center rounded grid grid-rows-3 grid-flow-col gap-4"
                    >
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <p className='mt-2' >Black</p>
                        </div>
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <button type="button" className="w-5 h-5 rounded-full" onClick={() => setCurrentTheme('dark')}
                                style={{
                                    backgroundImage: "linear-gradient(-45deg, black, black 49%, red 51%)",
                                }}>

                            </button>
                        </div>

                    </MenuItem>

                    <MenuItem
                        onClick={closeMenu}
                        className="flex items-center  rounded flex items-center rounded grid grid-rows-3 grid-flow-col gap-4"
                    >
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <p className='mt-2' >Blue</p>
                        </div>
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <button type="button" className="w-5 h-5 rounded-full" onClick={() => setCurrentTheme('blue')}
                                style={{
                                    backgroundImage: "linear-gradient(-45deg, white, white 49%, blue 51%)",
                                }}>

                            </button>
                        </div>

                    </MenuItem>

                    <MenuItem
                        onClick={closeMenu}
                        className="flex items-center  rounded flex items-center rounded grid grid-rows-3 grid-flow-col gap-4"
                    >
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <p className='mt-2' >White</p>
                        </div>
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <button type="button" className="w-5 h-5 rounded-full" onClick={() => setCurrentTheme('white')}
                                style={{
                                    backgroundImage: "linear-gradient(-45deg, blue, blue 49%, white 51%)",
                                }}>

                            </button>
                        </div>

                    </MenuItem>
                    <MenuItem
                        onClick={closeMenu}
                        className="flex items-center  rounded flex items-center rounded grid grid-rows-3 grid-flow-col gap-4"
                    >
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <p className='mt-2' >Gold</p>
                        </div>
                        <div
                            className="font-normal row-span-3"
                            color="inherit"
                        >
                            <button type="button" className="w-5 h-5 rounded-full" onClick={() => setCurrentTheme('gold')}
                                style={{
                                    backgroundImage: "linear-gradient(-45deg, gold, gold 49%, black 51%)",
                                }}>

                            </button>
                        </div>

                    </MenuItem>
                    );

                </MenuList>
            </Menu>
        );
    }

    function ProfileMenu() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const closeMenu = () => setIsMenuOpen(false);

        return (
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                <MenuHandler>
                    <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="candice wu"
                            className="border border-blue-500 p-0.5"
                            src={Avarta.src}
                        />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className="p-1">
                    return (
                    <MenuItem

                        onClick={closeMenu}
                        className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    >
                        <UserCircleIcon className="h-4 w-4  text-red-500" />
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="inherit"
                        >
                            <span className='ml-2'> {users?.fname}</span><span className='ml-5'>{users?.lname}</span>
                        </Typography>
                    </MenuItem>
                    <MenuItem

                        onClick={closeMenu}
                        className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    >
                        <PhoneIcon className="h-4 w-4  text-red-500" />
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="inherit"
                        >
                            <span className='ml-2'> {users?.username}</span>
                        </Typography>
                    </MenuItem>
                    <MenuItem

                        onClick={closeMenu}
                        className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    >
                        <BanknotesIcon className="h-4 w-4  text-red-500" />
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="inherit"
                        >
                            <span className='ml-2'>ธ. {users?.bankaccount}</span>
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={closeMenu}
                        className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    >
                        <PowerIcon className="h-4 w-4  text-red-500" />
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color="inherit"
                        >
                            <button
                                className={themeType === 'red' ? 'mx-auto lg:mx-0 hover:underline bg-black text-red font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                    : themeType === 'dark' ? 'mx-auto lg:mx-0 hover:underline bg-red text-black font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                        : themeType === 'blue' ? 'mx-auto lg:mx-0 hover:underline bg-white text-blue font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                            : themeType === 'white' ? 'mx-auto lg:mx-0 hover:underline bg-blue text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'gold' ? 'mx-auto lg:mx-0 hover:underline bg-black text-gold font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : 'mx-auto lg:mx-0 hover:underline bg-black text-gold font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                onClick={() => Logout()}>
                                Logout
                            </button>
                        </Typography>
                    </MenuItem>
                    );
                </MenuList>
            </Menu>
        );
    }


    return (
        <>
            <nav id="header" className={'app'}
                style={{
                    ...theme
                } as React.CSSProperties}>
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <a className={themeType === 'red' ? 'toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
                            : themeType === 'dark' ? 'toggleColour text-red no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
                                : themeType === 'blue' ? 'toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
                                    : themeType === 'white' ? 'toggleColour text-blue no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
                                        : themeType === 'gold' ? 'toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
                                            : 'toggleColour text-gold no-underline hover:no-underline font-bold text-2xl lg:text-4xl'} href="#">

                            <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                                <path
                                    className="plane-take-off"
                                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                                />
                            </svg>
                            LANDING
                        </a>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className={themeType === 'red' ? 'w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content'
                        : 'w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-red p-4 lg:p-0 z-20" id="nav-content'}>
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            {login ?
                                <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content'>
                                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                        <li className="mr-4">
                                            <ThemeMenu />
                                        </li>
                                        <li className="ml-4">
                                            <ProfileMenu />
                                        </li>
                                    </ul>
                                </div>
                                :
                                <li className='flex space-x-4'>
                                    <button
                                        className={themeType === 'red' ? 'mx-auto lg:mx-0 hover:underline bg-black text-red font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                            : themeType === 'dark' ? 'mx-auto lg:mx-0 hover:underline bg-red text-black font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                : themeType === 'blue' ? 'mx-auto lg:mx-0 hover:underline bg-white text-blue font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                    : themeType === 'white' ? 'mx-auto lg:mx-0 hover:underline bg-blue text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                        : themeType === 'gold' ? 'mx-auto lg:mx-0 hover:underline bg-black text-gold font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
                                                            : 'mx-auto lg:mx-0 hover:underline bg-black text-gold font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'}
                                        onClick={() => setShow(true)}>
                                        Login
                                    </button>

                                </li>
                            }
                        </ul>
                    </div>
                </div >
                {show && <Login onClose={onClose} />
                }
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav >

        </>

    )
}

export default Sidebar