'use client'

import { useEffect, useState } from "react"
import { IProductItemProps } from "./productItem"
import axios from "axios"
import { fotmatNumberWithCommas } from "@/utils/number"

interface ICartItemsProps {
    id: number,
    qty: number,
}

export default function CheckoutCartItem({ id, qty }: ICartItemsProps) {



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
        <div className="w-full flex items-center justify-between border-b border-slate-200 py-5">
            <span className="truncate">{data.title}</span>
            <span>{fotmatNumberWithCommas(data.price)}تومان</span>
        </div>
    )
}