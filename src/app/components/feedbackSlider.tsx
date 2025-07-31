'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FeedbackItem from './feedbackItem';

export default function FeedbackSlider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <FeedbackItem text='این فروشگاه واقعاً عالیه، بسته‌بندی خوب و ارسال سریع.' name='مریم رضایی'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='محصولی که خریدم دقیقاً همونی بود که می‌خواستم.' name='امیر محمدی'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='پشتیبانی سریع داشتید، واقعاً راضی‌ام. بازم خرید می‌کنم.' name='Davis Dorwart'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='این فروشگاه واقعاً عالیه، بسته‌بندی خوب و ارسال سریع.' name='Davis Dorwart'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='این فروشگاه واقعاً عالیه، بسته‌بندی خوب و ارسال سریع.' name='Davis Dorwart'/>
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackItem text='این فروشگاه واقعاً عالیه، بسته‌بندی خوب و ارسال سریع.' name='Davis Dorwart'/>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
