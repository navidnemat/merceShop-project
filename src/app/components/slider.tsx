'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function mainSlider() {
    return (
        <div className='w-full h-full'>
            <>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 90000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='xl:w-[853px] relative '>
                            <div className='relative flex flex-col lg:flex-row-reverse items-center justify-center'>
                                
                                <div className='flex flex-col gap-4 max-w-[366px] p-5'>
                                    <div className='flex items-center gap-6 mb-4'>
                                        <span className='text-slate-800 text-lg lg:text-2xl'>نسخه محدود</span>
                                    </div>
                                    <h1 className='font-bold text-xl lg:text-4xl text-slate-800'>
                                        <a href="">آیفون ۱۶ پرو مکس</a>
                                    </h1>
                                    <div>
                                        <p className=' blockk text-slate-800 mt-5'>با تراشه A18، شیشه مایع و نوآوری مبتنی بر هوش مصنوعی</p>
                                    </div>

                                    <div className='mt-4'>
                                        <button className='text-white rounded-full text-sm bg-[#3c50e0] px-4 py-2 ease-out duration-200 cursor-pointer backdrop-blur-md border border-white/30 shadow-md hover:shadow-[0_0_10px_#3c50e0] hover:scale-105 transition-all '>همین حالا خرید کنید</button>
                                    </div>

                                </div>
                                <img src="/new/iphone16Banner.png" className=' max-h-[545px] size-6/12' width={500} height={900} />
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='xl:w-[853px] relative '>
                            <div className='relative flex flex-col lg:flex-row-reverse items-center justify-center'>
                                
                                <div className='flex flex-col gap-4 max-w-[366px] p-5'>
                                    <div className='flex items-center gap-6 mb-4'>
                                        <span className='text-slate-800 text-lg lg:text-2xl'>نسخه محدود</span>
                                    </div>
                                    <h1 className='font-bold text-xl lg:text-4xl text-slate-800'>
                                        <a href="">آیفون ۱۶ پرو مکس</a>
                                    </h1>
                                    <div>
                                        <p className=' blockk text-slate-800 mt-5'>با تراشه A18، شیشه مایع و نوآوری مبتنی بر هوش مصنوعی</p>
                                    </div>

                                    <div className='mt-4'>
                                        <span className='text-white rounded-full text-sm bg-[#3c50e0] px-4 py-2 ease-out duration-200 hover:bg-indigo-800 cursor-pointer'>همین حالا خرید کنید</span>
                                    </div>

                                </div>
                                <img src="/new/iphone16Banner.png" className=' max-h-[545px] size-6/12' width={500} height={900} />
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='xl:w-[853px] relative '>
                            <div className='relative flex flex-col lg:flex-row-reverse items-center justify-center'>
                                
                                <div className='flex flex-col gap-4 max-w-[366px] p-5'>
                                    <div className='flex items-center gap-6 mb-4'>
                                        <span className='text-slate-800 text-lg lg:text-2xl'>نسخه محدود</span>
                                    </div>
                                    <h1 className='font-bold text-xl lg:text-4xl text-slate-800'>
                                        <a href="">آیفون ۱۶ پرو مکس</a>
                                    </h1>
                                    <div>
                                        <p className=' blockk text-slate-800 mt-5'>با تراشه A18، شیشه مایع و نوآوری مبتنی بر هوش مصنوعی</p>
                                    </div>

                                    <div className='mt-4'>
                                        <span className='text-white rounded-full text-sm bg-[#3c50e0] px-4 py-2 ease-out duration-200 hover:bg-indigo-800 cursor-pointer'>همین حالا خرید کنید</span>
                                    </div>

                                </div>
                                <img src="/new/iphone16Banner.png" className=' max-h-[545px] size-6/12' width={500} height={900} />
                            </div>


                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}