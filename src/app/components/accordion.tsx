'use client';
import { useState, ReactNode } from 'react';
import { IoIosArrowDown } from "react-icons/io";

type AccordionProps = {
    title: string;
    children: ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 overflow-hidden px-5.5 py-5">
            <button
                className="w-full flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="">{title}</span>
                <IoIosArrowDown
                    size={20}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                />
            </button>
            {isOpen && (
                <div className="pt-7.5 pb-8.5 px-4 sm:px-8.5 flex flex-col">
                    {children}
                </div>
            )}
        </div>
    );
}
