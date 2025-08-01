'use client'

import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { BiBasket } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { useShopingCartContext } from "@/context/ShopingCartContext";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const { cartTotalQty } = useShopingCartContext()
    return (
        <div className="sticky top-4 z-999">
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg lg:m-4 m-3 rounded-full">
                <div className="">
                    <div className="container flex grow w-full mx-auto max-w-[1676px] xl:px-5 px-4 ">
                        <div className="w-full flex flex-col lg:py-3 py-2 ">
                            <div className="grid items-center grid-cols-2 md:grid-cols-[1fr_2fr_1fr] justify-between gap-4">
                                <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden cursor-pointer relative text-gray-600">
                                    <FiMenu size={24} />
                                    {/* <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
                                </button>
                                <a className="shrink-0 hidden md:flex">
                                    <img className="text-transparent" src="/images/logo.svg" width={199} height={16} />
                                </a>
                                <div className="hidden md:flex items-center justify-center h-full gap-6">
                                    <Link className="leading-4 hover:text-[#3c50e0] text-[17px] h-full gap-6 relative transition-all duration-200 before:w-0 before:absolute before:right-0 before:h-[3px] before:bottom-0 before:bg-[#3c50e0] before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full flex items-center" href={'/'}><span>خانه</span></Link>
                                    <Link className="leading-4 hover:text-[#3c50e0] text-[17px] h-full gap-6 relative transition-all duration-200 before:w-0 before:absolute before:right-0 before:h-[3px] before:bottom-0 before:bg-[#3c50e0] before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full flex items-center" href={'/cartpage'}><span>سبد خرید</span></Link>
                                    <Link className="leading-4 hover:text-[#3c50e0] text-[17px] h-full gap-6 relative transition-all duration-200 before:w-0 before:absolute before:right-0 before:h-[3px] before:bottom-0 before:bg-[#3c50e0] before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full flex items-center" href={'/'}><span>محبوب</span></Link>
                                    <Link className="leading-4 hover:text-[#3c50e0] text-[17px] h-full gap-6 relative transition-all duration-200 before:w-0 before:absolute before:right-0 before:h-[3px] before:bottom-0 before:bg-[#3c50e0] before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full flex items-center" href={'/mainStore'}><span>فروشگاه</span></Link>
                                    <Link className="leading-4 hover:text-[#3c50e0] text-[17px] h-full gap-6 relative transition-all duration-200 before:w-0 before:absolute before:right-0 before:h-[3px] before:bottom-0 before:bg-[#3c50e0] before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full flex items-center" href={'/'}><span>تماس با ما</span></Link>
                                    <Link className="leading-4 hover:text-[#3c50e0] text-[17px] h-full gap-6 relative transition-all duration-200 before:w-0 before:absolute before:right-0 before:h-[3px] before:bottom-0 before:bg-[#3c50e0] before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full flex items-center" href={'/'}><span>وبلاگ ها</span></Link>
                                </div>
                                <div className="flex items-center justify-end gap-4">
                                    <Link href={""} className="flex items-center gap-2 relative cursor-pointer rounded-full lg:p-2 p-1 border border-slate-200 ease-out transition-all duration-200 hover:bg-white/70">
                                        <CiSearch className="text-2xl text-gray-700" />
                                    </Link>

                                    <Link href={"/cartpage"} className="flex items-center gap-2 relative cursor-pointer rounded-full lg:p-2 p-1 border border-slate-200 ease-out transition-all duration-200 hover:bg-white/70">
                                        <BiBasket className="text-2xl text-gray-700" />
                                        <span className="flex items-center justify-center font-medium text-xs absolute -right-1.5 -top-1.5 bg-red-500 w-4.5 h-4.5 rounded-full text-white ">
                                            {cartTotalQty}
                                        </span>
                                    </Link>
                                    <button className="px-6 py-2 rounded-full bg-[#3c50e0] hover:bg-[#4d5df5] text-white backdrop-blur-md border border-white/30 shadow-md ease-out transition-all duration-200  hover:shadow-[0_0_10px_#3c50e0] hover:scale-105 cursor-pointer lg:text-[1rem] text-sm hidden md:inline">
                                        ورود / ثبت‌نام
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`fixed top-0 right-0 w-screen h-screen bg-white p-6 ${isOpen ? 'block' : ' hidden'} transition-all duration-300 divide-y divide-slate-200`}>
                <div className="w-full flex items-center justify-between  pb-5">
                    <button className="text-gray-600" onClick={() => setIsOpen(false)}><IoCloseSharp size={26} /></button>
                    <a>
                        <img className="text-transparent" src="/images/logo.svg" width={189} height={6} />
                    </a>
                </div>
                <div className="flex flex-col gap-3 w-full py-5 ">
                    <Link className="flex ease-out duration-100 active:text-[#3c50e0] active:bg-[#3c50e0]/7 p-2 rounded-md" onClick={() => setIsOpen(false)} href={'/'}>خانه</Link>
                    <Link className="flex ease-out duration-100 active:text-[#3c50e0] active:bg-[#3c50e0]/7 p-2 rounded-md" onClick={() => setIsOpen(false)} href={'/cartpage'}>سبد خرید</Link>
                    <Link className="flex ease-out duration-100 active:text-[#3c50e0] active:bg-[#3c50e0]/7 p-2 rounded-md" onClick={() => setIsOpen(false)} href={'/'}>محبوب</Link>
                    <Link className="flex ease-out duration-100 active:text-[#3c50e0] active:bg-[#3c50e0]/7 p-2 rounded-md" onClick={() => setIsOpen(false)} href={'/mainStore'}>فروشگاه</Link>
                    <Link className="flex ease-out duration-100 active:text-[#3c50e0] active:bg-[#3c50e0]/7 p-2 rounded-md" onClick={() => setIsOpen(false)} href={'/'}>تماس با ما</Link>
                    <Link className="flex ease-out duration-100 active:text-[#3c50e0] active:bg-[#3c50e0]/7 p-2 rounded-md" onClick={() => setIsOpen(false)} href={'/'}>وبلاگ</Link>
                </div>
                <div className='py-4 border-t space-y-1 border-slate-200 flex flex-col gap-2'>
                    <a className='flex items-center gap-2 px-2 py-1 rounded-md ease-out duration-100 active:text-indigo-700 active:bg-indigo-700/7 cursor-pointer'>
                        <span className='inline-flex items-center justify-center w-8 h-8'>
                            <IoPersonOutline className='text-lg' />
                        </span>
                        ورود / ثبت نام
                    </a>
                    <a className='flex items-center gap-2 px-2 py-1 rounded-md ease-out duration-100 active:text-indigo-700 active:bg-indigo-700/7 cursor-pointer'>
                        <span className='inline-flex items-center justify-center w-8 h-8'>
                            <IoMdHeartEmpty className='text-lg' />
                        </span>
                        علاقه مندی ها
                    </a>
                </div>
            </div>
        </div>
    )
}


{/* <div className={`fixed top-0 right-0 w-screen h-screen ${isOpen ? 'opacity-100' : 'opacity-0 -z-[999]'}bg-black/50 transition-all duration-300`}>
    <div className={`bg-white w-9/12 shadow-lg h-screen transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full flex items-center justify-between border-b border-slate-200 pb-5">
            <button className="text-gray-600" onClick={() => setIsOpen(false)}><IoCloseSharp size={26} /></button>
            <a>
                <img className="text-transparent" src="/images/logo.svg" width={189} height={6} />
            </a>
        </div>
    </div>


</div>  */}