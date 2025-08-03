'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import ProductItem, { IProductItemProps, IProductList } from './productItem';

export default function NewArrivalsSlider() {

    const [data, setData] = useState<IProductItemProps[]>([])

    //fetch(`http://localhost:8000/newArrivals`)
    // fetch(`http://localhost:3000/api/sliders`)

    useEffect(() => {
        fetch(`https://json-server-database-j5um.onrender.com/newArrivals`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                setData(data);
            });
    }, []);

    return (
        <div className='overflow-visible'>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                style={{overflow:'visible !important'}}
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
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
            >

                {data.map((item) => (
                    <SwiperSlide key={item.id} style={{overflow:'visible !important'}}>
                        <Link href={`/mainStore/${item.id}`}>
                            <ProductItem {...item} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
