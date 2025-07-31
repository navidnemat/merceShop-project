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
        <footer className="overflow-hidden bg-white/60 backdrop-blur-md border-t border-white/30 mt-15">
            <div className="w-full px-4 mx-auto max-w-[1676px] sm:px-6 xl:px-4 ">
                <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 pt-17 xl:justify-between xl:pt-22 pb-10 xl:pb-15">
                    <div className="max-w-[330px] w-full">
                        <h2 className="mb-7 text-2xl">کمک و پشتیبانی</h2>
                        <ul className="flex flex-col gap-4 text-gray-600">
                            <li className="flex gap-4.5 items-center">
                                <span className="shrink-0">
                                    <PiMapPinLine className="text-indigo-700 text-xl"/>
                                </span>
                                خیابان مارکت، پلاک ۶۸۵، لاس وگاس، لوئیزیانا، ۹۵۸۲۰، ایالات متحده آمریکا
                            </li>
                            <li>
                                <a className="flex items-center gap-4.5 ">
                                    <LuPhone className="text-indigo-700 text-xl"/>
                                    (+099) 532-786-9843
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-4.5 ">
                                    <HiOutlineEnvelope className="text-indigo-700 text-xl"/>
                                    support@example.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex items-center gap-4 mt-7 text-gray-600">
                            <a className="flex ease-out duration-200 hover:text-indigo-700 cursor-pointer text-lg"><FaFacebook /></a>
                            <a className="flex ease-out duration-200 hover:text-indigo-700 cursor-pointer text-lg"><BsTwitterX /></a>
                            <a className="flex ease-out duration-200 hover:text-indigo-700 cursor-pointer text-lg"><FaInstagram  /></a>
                            <a className="flex ease-out duration-200 hover:text-indigo-700 cursor-pointer text-lg"><FaLinkedin /></a>
                        </div>  
                    </div>
                    <div className="w-full sm:w-auto">
                        <h2 className="mb-7 text-2xl">حساب</h2>
                        <ul className="flex flex-col gap-4 text-gray-600">
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">ورود / ثبت نام</a>
                            </li>
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">سبد خرید</a>
                            </li>
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">علاقه مندی ها</a>
                            </li>
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">فروشگاه</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto">
                        <h2 className="mb-7 text-2xl">لینک سریع</h2>
                        <ul className="flex flex-col gap-4 text-gray-600">
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">سیاست حفظ حریم خصوصی</a>
                            </li>
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">سیاست بازپرداخت</a>
                            </li>
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">شرایط استفاده</a>
                            </li>
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">سوالات متداول</a>
                            </li>
                            <li>
                                <a className="ease-out duration-200 hover:text-indigo-700 cursor-pointer">تماس با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto">
                        <h2 className="mb-7 text-2xl">دانلود اپلیکیشن</h2>
                        <p className="mb-4 text-gray-600">فقط با برنامه و کاربر جدید، <span className="text-[#3c50e0] font-semibold">3 دلار</span> صرفه‌جویی کنید </p>
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
            </div>
        </footer>
    )
}
