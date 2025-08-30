'use client';

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTopButton() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {scrolled && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 50 }}      // حالت ورود
                    animate={{ opacity: 1, y: 0 }}       // وقتی دیده بشه
                    exit={{ opacity: 0, y: 50 }}         // وقتی ناپدید بشه
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg bg-[#3c50e0] fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] text-white cursor-pointer"
                >
                    <IoIosArrowDown className="rotate-180 font-bold" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
