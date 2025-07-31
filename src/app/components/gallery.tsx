'use client'

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface imgprop {
    imageUrls: string[], 
}


export default function Gallery({ imageUrls }: imgprop) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            <Swiper
                spaceBetween={0}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >

                {imageUrls.map((item) => [
                    <SwiperSlide>
                        <div className='flex items-center justify-center bg-slate-100 rounded-xl lg:min-h-[512px] p-4 sm:p-7 shadow-sm relative'>
                            <img src={item} width={400} height={400}/>
                        </div>
                        
                    </SwiperSlide>
                ])}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >

                {imageUrls.map((item) => [
                    <SwiperSlide className='!w-auto'>
                        <div className='flex items-center justify-center w-15 h-15 sm:w-25 sm:h-25 bg-slate-100 rounded-lg mt-5'>
                            <img width={50} height={50} src={item} />
                        </div>
                    </SwiperSlide>
                ])}

            </Swiper>
        </>
    );
}
