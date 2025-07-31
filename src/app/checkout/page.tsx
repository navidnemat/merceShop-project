"use client"

import Accordion from "../components/accordion";

import { useShopingCartContext } from "@/context/ShopingCartContext"
import { fotmatNumberWithCommas } from "@/utils/number"

import axios from "axios"

import { useEffect, useState } from "react"
import { IProductItemProps } from "../components/productItem"
import CheckoutCartItem from "../components/checkoutCartItem";



interface IDiscountData {
    id: number;
    code: string;
    percentage: number
}

export default function Checkout() {

    const { cartItems } = useShopingCartContext()

    const [data, setData] = useState<IProductItemProps[]>([])

    const [finalPrice, setfinalPrice] = useState(0)

    let totalPrice = cartItems.reduce((total, item) => {
        let selectedProduct = data.find((product) => product.id == item.id.toString())
        return total + (selectedProduct?.price || 0) * item.qty
    }, 0) ?? 0

    useEffect(() => {
        axios(`http://localhost:8000/newArrivals`).then(result => {
            const { data } = result
            setData(data)
        })
    }, []
    )

    return (
        <div>
            <div className="overflow-hidden">
                <div>
                    <div className="w-full px-4 py-5 mx-auto max-w-[1676px] sm:px-6 xl:px-4 xl:py-10">
                        
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg w-fit">
                            <h2 className="text-xl font-bold bg-gradient-to-l from-[#3c50e0] to-[#9e6eff] bg-clip-text text-transparent">تسویه حساب</h2>
                        </div>
                    </div>
                </div>
            </div>
            <section className="overflow-hidden py-7">
                <div className="w-full px-4 mx-auto max-w-[1676px] sm:px-6 xl:px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div className="bg-white shadow-sm mb-9 rounded-[10px] row-span-2">
                            <Accordion title="مشتری قدیمی هستید؟ برای ورود اینجا کلیک کنید">
                                <p className="mb-6">اگر وارد سیستم نشده‌اید، لطفاً ابتدا وارد شوید.</p>
                                <form>
                                    <div className="mb-5">
                                        <label className="block mb-2.5 text-lg">نام کاربری یا ایمیل</label>
                                        <input type="email" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] shadow-[#adb5f3] focus:ring-2 focus:ring-[#3c50e0] disabled:opacity-60 " />
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-2.5 text-lg">رمز عبور</label>
                                        <input type="password" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                    </div>
                                    <button className="inline-flex text-white bg-[#3c50e0] py-3 px-10 rounded-full ease-out duration-200 cursor-pointer">
                                        ورود
                                    </button>
                                </form>
                            </Accordion>
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl mb-5">جزئیات صورتحساب</h2>
                            <div className="bg-white shadow-sm rounded-[10px] p-4 sm:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-5">
                                    <div>
                                        <label className="block mb-2.5">نام <span className="text-red-500">*</span></label>
                                        <input type="email" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                    </div>
                                    <div>
                                        <label className="block mb-2.5">نام خانوادگی<span className="text-red-500">*</span></label>
                                        <input type="email" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2.5 text-lg">نام شرکت</label>
                                    <input type="text" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2.5 text-lg">منطقه <span className="text-red-500">*</span></label>
                                    <input type="text" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                </div>
                                <div className="mb-5">
                                    <div>
                                        <label className="block mb-2.5 text-lg">آدرس خیابان <span className="text-red-500">*</span></label>
                                        <input placeholder="شماره پلاک و نام خیابان منزل" type="email" className="placeholder:text-slate-300 rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                    </div>
                                    <input placeholder="آپارتمان، سوئیت، واحد و غیره (اختیاری)" type="email" className="placeholder:text-slate-300 mt-5 rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2.5 text-lg">شهر/شهرستان<span className="text-red-500">*</span></label>
                                    <input type="text" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2.5 text-lg">کشور<span className="text-red-500">*</span></label>
                                    <input type="text" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2.5 text-lg">تلفن *<span className="text-red-500">*</span></label>
                                    <input type="tel" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2.5 text-lg">آدرس ایمیل<span className="text-red-500">*</span></label>
                                    <input type="email" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <form >

                        <div className="bg-white rounded-[10px] shadow-sm p-4 sm:p-8">
                            <label className="block mb-2.5">سایر توضیحات (اختیاری)</label>
                            <textarea rows={5} placeholder="یادداشت‌هایی در مورد سفارش شما، مثلاً یادداشت‌های ویژه برای تحویل." className="rounded-xl border border-slate-200 bg-slate-50 placeholder:text-slate-300 w-full p-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0]"></textarea>
                        </div>
                        <div className="bg-white rounded-[10px] shadow-sm mt-7.5">
                            <h3 className="text-xl border-b border-slate-200 py-5 px-4 sm:px-8.5">سفارش شما</h3>
                            <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                                <div className="w-full">
                                    {
                                        cartItems.map((item) => (
                                            <CheckoutCartItem key={item.id} {...item} />
                                        ))
                                    }
                                    <div className="flex items-center justify-between py-5 border-b border-slate-200">
                                        <span>هزینه ارسال</span>
                                        <span>0.00 تومان</span>
                                    </div>
                                    <div className="flex items-center justify-between py-5">
                                        <span>قیمت کل</span>
                                        <span>{fotmatNumberWithCommas(totalPrice)}تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[10px] shadow-sm mt-7.5 -order-1">
                            <div className="py-5 px-4 border-b border-slate-200 sm:px-8">
                                <h3 className="text-xl">کد کوپنی دارید ؟</h3>
                            </div>
                            <div className="py-8 px-4 sm:px-8">
                                <div className="flex items-center gap-4">
                                    <input type="text" placeholder="وارد کردن کد" className="rounded-full bg-slate-50 border-1 border-slate-200 w-full py-2.5 px-5 outline-hidden duration-200 focus:border-transparent focus:shadow-[0_0_12px_#3c50e0] focus:ring-2 shadow-[#adb5f3] focus:ring-[#3c50e0] disabled:opacity-60" />
                                    <button className="inline-flex text-white py-3 px-6 bg-[#3c50e0] rounded-full ease-out duration-200 cursor-pointer border border-white/30 shadow-md hover:shadow-[0_0_10px_#3c50e0] transition-all">اعمال</button>
                                </div>
                            </div>
                        </div>
                        <button className="w-full flex justify-center text-white bg-[#3c50e0] py-3 px-6 rounded-full ease-out duration-200 mt-7 cursor-pointer border border-white/30 shadow-md hover:shadow-[0_0_10px_#3c50e0] transition-all ">
                            فرآیند تسویه حساب
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}