'use client'
import React from 'react'
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <>
            <nav className=' flex justify-between z-10 min-w-[265px] bg-white w-[90vw] fixed top-13 right-[5vw] rounded-full p-6.5'>
                <div className='logo flex gap-20 items-center'>
                    <img className='h-10 hidden sm:flex' loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt=""></img>
                    <img className='h-10 sm:hidden flex' loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b48ad59add9f2777bb76f_download-2.svg" alt=""></img>
                    <ul className='hidden bg lg:flex gap-4'>
                        <li className='flex items-center cursor-pointer p-1 rounded-md hover:bg-[rgb(233,233,233)]'>
                            <Menu allowHover={true} offset={50} placement='bottom'>
                                <MenuHandler className="flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md">
                                    <div>Products</div>
                                </MenuHandler>
                                <MenuList className='flex z-20 w-200 ml-20 focus:outline-none rounded-md hover:bg-[rgb(233,233,233)]'>
                                    <MenuItem className='flex justify-start rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 '>
                                        HI
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </li>

                        <li className='cursor-pointer hover:bg-[rgb(233,233,233)] p-1 rounded-md'><a>Templates</a></li>
                        <li className='cursor-pointer hover:bg-[rgb(233,233,233)] p-1 rounded-md'><a>Marketplace</a></li>
                        <li className='cursor-pointer hover:bg-[rgb(233,233,233)] p-1 rounded-md'><a>Discover</a></li>
                        <li className='cursor-pointer hover:bg-[rgb(233,233,233)] p-1 rounded-md'><a>Pricing</a></li>
                        <li className='cursor-pointer hover:bg-[rgb(233,233,233)] p-1 rounded-md'><a>Learn</a></li>

                    </ul>
                </div>
                <div className='flex gap-1 items-center'>
                    <button className='bg-[rgb(240,240,240)] font-semibold hover:bg-[rgb(233,233,233)] rounded-lg p-2 transition duration-150 ease-in cursor-pointer'>Log in</button>
                    <button className='bg-[rgb(41,41,42)] hover:bg-[rgb(52,52,53)] text-white rounded-full transition p-2 duration-150 ease-in font-semibold'>Sign up free</button>
                    <button className={`${openDrawer ? "bg-[rgb(210,232,35)]" : ""} rounded-full p-2 lg:hidden flex h-10 w-10 z-10`} onClick={() => {
                        setOpenDrawer(!openDrawer)
                    }}>{openDrawer ? <XMarkIcon /> : <Bars3Icon />}</button>
                </div>
            </nav>
            <div className={`fixed top-0 right-0 w-[100vw] h-full bg-[rgb(252,251,251)] shadow-lg transition-transform transform duration-300 ${openDrawer ? "-translate-x-0" : "translate-x-full"}`}>
                <div className="w-full pt-36 h-full  p-4">
                    <ul className=" w-[100vw] h-[83vh] pr-8 text-4xl flex flex-col gap-4 pl-8 pt-6 font-semibold">
                        <li onMouseEnter={() => setIsHovered1(!isHovered1)} onMouseLeave={() => setIsHovered1(!isHovered1)} className='List flex justify-between items-center pb-5 border-b-gray-200 text-gray-800 border-b-1'><a href="#" className="flex  hover:text-blue-500 ">
                            Products </a><ChevronUpIcon className={`Up transform duration-200 ${!isHovered1 ? 'rotate-180' : ''} h-4 w-4`} /></li>
                        {isHovered1 && (<div></div>)}
                        <li className='flex justify-between items-center pb-5 border-b-gray-200 text-gray-800 border-b-1'><a href="#" className="flex  hover:text-blue-500 ">
                            Templates </a></li>
                        <li className='flex justify-between items-center pb-5 border-b-gray-200 text-gray-800 border-b-1'><a href="#" className="flex  hover:text-blue-500 ">
                            Marketplace </a></li>
                        <li onMouseEnter={() => setIsHovered2(!isHovered2)} onMouseLeave={() => setIsHovered2(!isHovered2)} className='List flex justify-between items-center pb-5 border-b-gray-200 text-gray-800 border-b-1'><a href="#" className="flex  hover:text-blue-500 ">
                            Learn </a><ChevronUpIcon className={`Up transform duration-200 ${!isHovered2 ? 'rotate-180' : ''} h-4 w-4`} /></li>
                        {isHovered2 && (<div></div>)}
                        <li className='flex justify-between items-center pb-5 border-b-gray-200 text-gray-800 border-b-1'><a href="#" className="flex  hover:text-blue-500 ">
                            Pricing </a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar