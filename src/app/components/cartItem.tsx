'use client'

import { useEffect, useState } from "react"
import AddToCart from "./addToCart"
import { IProductItemProps } from "./productItem"
import axios from "axios"
import { fotmatNumberWithCommas } from "@/utils/number"

interface ICartItemsProps {
    id: number,
    qty: number,
}

export default function CartItem({ id, qty }: ICartItemsProps) {

    const [data, setData] = useState({} as IProductItemProps)

    //http://localhost:8000/newArrivals

    useEffect(() => {
        axios(`https://json-server-database-j5um.onrender.com/newArrivals/${id}`).then(result => {
            const { data } = result
            setData(data)
        })
    }, []
    )

    return (
        <div className="flex flex-col md:flex-row md:items-center items-start py-5 px-5 mx-auto gap-12">
            <div className="flex items-center gap-8">
                <div className="flex items-center justify-center rounded-lg bg-white max-w-[80px] w-full h-17.5 shrink-0 ">
                    <img src={data.image} className="object-contain max-w-full max-h-full" width={200} height={200} />
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="min-w-0 max-w-[260px] lg:max-w-full flex-1">
                        <h3>{data.title}</h3>
                    </div>
                    <p>قیمت : {fotmatNumberWithCommas(data.discountedPrice)}$</p>
                </div>
                {/* <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center rounded-lg bg-white max-w-[80px] w-full h-17.5 shrink-0 ">
                        <img src={data.image} className="object-contain max-w-full max-h-full" width={200} height={200} />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3>{data.title}</h3>
                    </div>
                </div>
                <div className="flex items-center">
                    <p>قیمت : {fotmatNumberWithCommas(data.discountedPrice)}$</p>
                </div> */}
            </div>

            <div className="flex flex-1 items-center justify-end md:w-auto w-full">
                <AddToCart addToCartOnOff={false} id={id.toString()} />
            </div>
        </div>
    )
}