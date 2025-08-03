'use client';

import { IoIosArrowDown } from "react-icons/io";

export default function BackToTopButton() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center">
                <button
                onClick={scrollToTop}
                className={'flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-[#3c50e0] ease-out duration-200 fixed bottom-5 right-5 md:bottom-8 md:right-8 z-888 text-white cursor-pointer'}>
                    <IoIosArrowDown className="rotate-180 font-bold" />
            </button>
            </div>
        </div>
    );
}
