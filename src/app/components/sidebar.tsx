'use client';

import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from 'next/link';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: Props) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* لایه تیره */}
                    <motion.div
                        className="fixed -top-5 -left-4 w-screen h-[130vw] md:h-[110vw] bg-slate-500/60 z-40"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* منوی کناری */}
                    <motion.div
                        className="fixed -top-4 -right-4 h-[130vw] md:h-[110vw] w-72 bg-white z-50 shadow-2xl"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{backfaceVisibility:'hidden'}}
                    >


                        <div className="p-6 flex justify-between items-center border-b border-slate-200">
                            <img src="/images/logomenu.svg" />
                            <button onClick={onClose} className="text-2xl text-gray-700 cursor-pointer">
                                <IoClose />
                            </button>
                        </div>

                        <ul className="p-6 space-y-2 flex-1">
                            <li className='flex ease-out duration-200 hover:text-[#3c50e0] hover:bg-[#3c50e0]/7 p-2 rounded-md'><Link href={'/'} className='w-full text-right'>خانه</Link></li>
                                                        <li className='flex ease-out duration-200 hover:text-[#3c50e0] hover:bg-[#3c50e0]/7 p-2 rounded-md'><Link href={'/cartpage'} className='w-full text-right'>سبد خرید</Link></li>
                            <li className='flex ease-out duration-200 hover:text-[#3c50e0] hover:bg-[#3c50e0]/7 p-2 rounded-md'><Link href={''} className='w-full text-right'>محبوب</Link></li>
                            <li className='flex ease-out duration-200 hover:text-[#3c50e0] hover:bg-[#3c50e0]/7 p-2 rounded-md'><Link href={'/mainStore'} className='w-full text-right'>فروشگاه</Link></li>
                            <li className='flex ease-out duration-200 hover:text-[#3c50e0] hover:bg-[#3c50e0]/7 p-2 rounded-md'><Link href={''} className='w-full text-right'>تماس با ما</Link></li>
                            <li className='flex ease-out duration-200 hover:text-[#3c50e0] hover:bg-[#3c50e0]/7 p-2 rounded-md'><Link href={''} className='w-full text-right'>وبلاگ ها </Link></li>
                        </ul>

                        <div className='px-3 py-4 border-t space-y-1 border-slate-200 flex flex-col gap-2'>
                            <a className='flex items-center gap-2 px-2 py-1 rounded-md ease-out duration-200 hover:text-indigo-700 hover:bg-indigo-700/7'>
                                <span className='inline-flex items-center justify-center w-8 h-8'>
                                    <IoPersonOutline className='text-lg'/>
                                </span>
                                ورود / ثبت نام
                            </a>
                            <a className='flex items-center gap-2 px-2 py-1 rounded-md ease-out duration-200 hover:text-indigo-700 hover:bg-indigo-700/7'>
                                <span className='inline-flex items-center justify-center w-8 h-8'>
                                    <IoMdHeartEmpty className='text-lg'/>
                                </span>
                                علاقه مندی ها
                            </a>
                        </div>


                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
