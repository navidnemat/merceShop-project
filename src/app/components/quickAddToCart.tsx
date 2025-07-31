'use client'

import { useShopingCartContext } from "@/context/ShopingCartContext"
import { IoEyeOutline } from "react-icons/io5";
import { BiBasket } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";

interface IAddToCartProps {
    id: string
}

export default function QuickAddToCart({ id }: IAddToCartProps) {

    const {
        handleAddToCart
    } = useShopingCartContext()
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row-reverse items-center gap-3">
                <button className="relative flex items-center justify-center w-9 h-9 rounded-[5px] shadow-xs ease-out duration-200 z-10 text-dark bg-white hover:text-white hover:bg-[#3c50e0]">
                    <IoEyeOutline />
                </button>
                <p className="bg-white text-dark text-xs leading-5 font-medium rounded-[5px] px-3 py-1.5 relative shadow-xs self-end duration-500 translate-x-5 opacity-0">
                    مشاهده سریع
                    <span className="inline-block absolute -right-3.5 top-2.5 w-0 h-0 border-[7px] border-solid border-transparent border-l-white"></span>
                </p>
            </div>
            <div className="flex flex-row-reverse items-center gap-3">
                <button onClick={(e) => {e.preventDefault(),e.stopPropagation(),handleAddToCart(parseInt(id))}} className="relative flex items-center justify-center w-9 h-9 rounded-[5px] shadow-xs ease-out duration-200 z-10 text-dark bg-white hover:text-white hover:bg-[#3c50e0]">
                    <BiBasket />
                </button>
                <p className="bg-white text-dark text-xs leading-5 font-medium rounded-[5px] px-3 py-1.5 relative shadow-xs self-end duration-500 translate-x-5 opacity-0">
                    مشاهده سریع
                    <span className="inline-block absolute -right-3.5 top-2.5 w-0 h-0 border-[7px] border-solid border-transparent border-l-white"></span>
                </p>
            </div>
            <div className="flex flex-row-reverse items-center gap-3">
                <button className="relative flex items-center justify-center w-9 h-9 rounded-[5px] shadow-xs ease-out duration-200 z-10 text-dark bg-white hover:text-white hover:bg-[#3c50e0]">
                    <IoMdHeartEmpty />
                </button>
                <p className="bg-white text-dark text-xs leading-5 font-medium rounded-[5px] px-3 py-1.5 relative shadow-xs self-end duration-500 translate-x-5 opacity-0">
                    مشاهده سریع
                    <span className="inline-block absolute -right-3.5 top-2.5 w-0 h-0 border-[7px] border-solid border-transparent border-l-white"></span>
                </p>
            </div>
        </div>
    )
}