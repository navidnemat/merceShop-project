import { PiMapPinLine } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-white/60 backdrop-blur-md border-t border-white/30">
            <div className="w-full px-4 mx-auto max-w-[1676px] sm:px-6 xl:px-4 ">
                <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 pt-17 xl:justify-between xl:pt-10 pb-5">
                    <div className="max-w-[330px] w-full">
                        <h2 className="mb-4 text-xl">کمک و پشتیبانی</h2>
                        <ul className="flex flex-col gap-3 text-gray-600">
                            <li className="flex gap-4.5 items-center">
                                <span className="shrink-0">
                                    <PiMapPinLine className="text-[#3c50e0] text-xl"/>
                                </span>
                                خیابان مارکت، پلاک ۶۸۵، لاس وگاس، لوئیزیانا، ۹۵۸۲۰، ایالات متحده آمریکا
                            </li>
                            <li>
                                <a className="flex items-center gap-4.5 ">
                                    <LuPhone className="text-[#3c50e0] text-xl"/>
                                    (+099) 532-786-9843
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-4.5 ">
                                    <HiOutlineEnvelope className="text-[#3c50e0] text-xl"/>
                                    support@example.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex items-center gap-4 mt-5 text-gray-600">
                            <a className="flex ease-out duration-200 hover:text-[#3c50e0] cursor-pointer text-2xl"><FaFacebook /></a>
                            <a className="flex ease-out duration-200 hover:text-[#3c50e0] cursor-pointer text-2xl"><BsTwitterX /></a>
                            <a className="flex ease-out duration-200 hover:text-[#3c50e0] cursor-pointer text-2xl"><FaInstagram  /></a>
                            <a className="flex ease-out duration-200 hover:text-[#3c50e0] cursor-pointer text-2xl"><FaLinkedin /></a>
                        </div>  
                    </div>
                    <div className="w-full sm:w-auto">
                        <h2 className="mb-4 text-xl">حساب</h2>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">ورود / ثبت نام</a>
                            </li>
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">سبد خرید</a>
                            </li>
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">علاقه مندی ها</a>
                            </li>
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">فروشگاه</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto">
                        <h2 className="mb-4 text-xl">لینک سریع</h2>
                        <ul className="flex flex-col gap-4 text-gray-600">
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">سیاست حفظ حریم خصوصی</a>
                            </li>
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">سیاست بازپرداخت</a>
                            </li>
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">شرایط استفاده</a>
                            </li>
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">سوالات متداول</a>
                            </li>
                            <li>
                                <a className="hover:text-[#3c50e0] hover:text-shadow-sm cursor-pointer">تماس با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto">
                        <h2 className="mb-4 text-xl">دانلود اپلیکیشن</h2>
                        <p className="mb-4 text-gray-600">با اولین خرید در اپ، <span className="text-[#3c50e0] font-semibold">150 هزار</span> تومان هدیه بگیر!</p>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a className="inline-flex items-center gap-3 py-[9px] ps-4 pe-7.5 text-white rounded-xl bg-slate-800 ease-out duration-200 hover:opacity-90 cursor-pointer">
                                    <FaApple className="text-3xl"/>
                                    <div>
                                        <span className="block text-xs">دانلود از</span>
                                        <p>اپ استور</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="inline-flex items-center gap-3 py-[9px] ps-4 pe-8.5 text-white rounded-xl bg-[#3c50e0] ease-out duration-200 hover:opacity-90 cursor-pointer">
                                    <BsGooglePlay className="text-3xl"/>
                                    <div>
                                        <span className="block text-xs">دانلود از</span>
                                        <p>گوگل پلی</p>
                                    </div>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="w-full py-4 border-t border-slate-200">
                    <p className="text-neutral-600">توسعه داده شده توسط <span className="text-[#3c50e0] font-bold text-shadow-xs">نوید نعمتی</span></p>
                </div>
            </div>
        </footer>
    )
}
