'use client'

import { useShopingCartContext } from "@/context/ShopingCartContext";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

interface IAddToCartProps {
    id: string
    addToCartOnOff: boolean
}

export default function AddToCart({ id, addToCartOnOff }: IAddToCartProps) {

    const [isClick, setIsClick] = useState(false)

    const {
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        handleAddToCart,
    } = useShopingCartContext()

    return (
        <div className={`flex flex-wrap items-center gap-4 justify-end ${addToCartOnOff && 'border-t-1 pt-8 justify-start'} border-slate-200`}>
            
            <div className="flex items-center rounded-full border-1 border-slate-200 bg-white">
                <button onClick={() => handleDecreaseProductQty(parseInt(id))} className="flex items-center justify-center w-12 h-12 duration-200 ease-out hover:text-[#3c50e0] cursor-pointer">
                    <svg width="16" height="2" viewBox="0 0 16 2" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M-8.548e-08 0.977778C-3.82707e-08 0.437766 0.437766 3.82707e-08 0.977778 8.548e-08L15.0222 1.31328e-06C15.5622 1.36049e-06 16 0.437767 16 0.977779C16 1.51779 15.5622 1.95556 15.0222 1.95556L0.977778 1.95556C0.437766 1.95556 -1.32689e-07 1.51779 -8.548e-08 0.977778Z" fill=""></path></svg>
                </button>
                <span className="flex items-center  justify-center w-16 h-12 border-x-1 border-slate-200">
                    {getProductQty(parseInt(id))}
                </span>
                <button onClick={() => handleIncreaseProductQty(parseInt(id))} className="flex items-center justify-center w-12 h-12 duration-200 ease-out hover:text-[#3c50e0] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.08889 0C8.6289 2.36047e-08 9.06667 0.437766 9.06667 0.977778L9.06667 15.0222C9.06667 15.5622 8.6289 16 8.08889 16C7.54888 16 7.11111 15.5622 7.11111 15.0222L7.11111 0.977778C7.11111 0.437766 7.54888 -2.36047e-08 8.08889 0Z" fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.91111C4.72093e-08 7.3711 0.437766 6.93333 0.977778 6.93333L15.0222 6.93333C15.5622 6.93333 16 7.3711 16 7.91111C16 8.45112 15.5622 8.88889 15.0222 8.88889L0.977778 8.88889C0.437766 8.88889 -4.72093e-08 8.45112 0 7.91111Z" fill=""></path></svg>
                </button>
            </div>
            {addToCartOnOff && (
                    
                <div className="flex flex-wrap items-center gap-4">
                    <button onClick={() => handleAddToCart(parseInt(id))} className="inline-flex text-white rounded-full bg-[#3c50e0] cursor-pointer ease-out duration-200 hover:opacity-85 py-3 px-7 active:scale-90">
                        افزودن به سبد خرید
                    </button>
                    <button onClick={() => { setIsClick(!isClick) }} className={`flex items-center justify-center w-12 h-12 ease-out duration-200 rounded-full border-1 border-slate-200 text-slate-800 hover:!text-white ${isClick == false && 'hover:!bg-slate-800'} hover:border-transparent ${isClick ? '!bg-indigo-[#3c50e0] border-transparent text-white' : 'bg-white'} active:scale-90`}>
                        <IoMdHeartEmpty className="text-xl" />
                    </button>
                </div>
            )}

            <button onClick={() => handleRemoveProduct(parseInt(id))} className={`flex items-center justify-center w-12 h-12 ease-out duration-200 rounded-full border-1 border-slate-200 text-slate-800 hover:!text-white hover:!bg-slate-800 hover:border-transparent active:scale-90 active:[&_svg]:text-red-600 bg-white`}>
                <RiDeleteBin6Line className="text-xl" />
            </button>
        </div>
    )
}