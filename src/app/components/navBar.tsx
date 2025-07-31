'use client'

import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { BiBasket } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { useShopingCartContext } from "@/context/ShopingCartContext";
import Sidebar from "./sidebar";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const { cartTotalQty } = useShopingCartContext()
    return (
        <div className="sticky top-4 z-999">
            <div className="bg-white/95 backdrop-blur-md border border-white/40 shadow-lg lg:m-4 m-3 rounded-full">
                <div className="">
                    <div className="container flex grow w-full mx-auto max-w-[1676px] xl:px-6 px-4 ">
                        <div className="w-full flex flex-col lg:py-3 py-2 ">
                            <div className="grid items-center grid-cols-2 md:grid-cols-3 justify-between gap-4">
                                <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer relative text-gray-600">
                                    {isOpen ? <IoCloseSharp size={24} /> : <FiMenu size={24} />}

                                    <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
                                </button>
                                <a className="shrink-0 hidden md:flex justify-center">
                                    <img className="text-transparent" src="/images/logo.svg" width={219} height={36} />
                                </a>
                                <div className="flex items-center justify-end gap-4">
                                    <Link href={""} className="flex items-center gap-2 relative cursor-pointer rounded-full lg:p-2 p-1 border border-slate-200 ease-out transition-all duration-200 ">
                                        <CiSearch className="text-2xl text-gray-700" />
                                    </Link>

                                    <Link href={"/cartpage"} className="flex items-center gap-2 relative cursor-pointer rounded-full lg:p-2 p-1 border border-slate-200 ease-out transition-all duration-200 ">
                                        <BiBasket className="text-2xl text-gray-700" />
                                        <span className="flex items-center justify-center font-medium text-xs absolute -right-1.5 -top-1.5 bg-red-500 w-4.5 h-4.5 rounded-full text-white ">
                                            {cartTotalQty}
                                        </span>
                                    </Link>
                                    <button className="px-6 py-2 rounded-full bg-[#3c50e0] text-white backdrop-blur-md border border-white/30 shadow-md ease-out transition-all duration-200  hover:shadow-[0_0_10px_#3c50e0] hover:scale-105 cursor-pointer lg:text-[1rem] text-sm hidden md:inline">
                                        ورود / ثبت‌نام
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    )
}



