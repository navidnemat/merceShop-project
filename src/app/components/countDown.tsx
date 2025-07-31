'use client';
import React, { useEffect, useState } from 'react';

interface CountdownProps {
    targetDate: string; // مثلاً "2025-07-15T23:59:59"
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeBox = (value: number, label?: string) => (
        <div className='flex flex-col items-center gap-3'>
            <div className="flex flex-col items-center bg-white text-slate-800 p-5 rounded-2xl shadow-md w-20">
                <div className="text-3xl font-bold text-gray-700">{value.toString().padStart(2, '0')}</div>
                
            </div>
            <div className="text-sm uppercase">{label}</div>
        </div>
    );

    return (
        <div className="flex gap-4 items-center my-5">
            {timeBox(timeLeft.days, 'روز')}
            {timeBox(timeLeft.hours, 'ساعت')}
            {timeBox(timeLeft.minutes, 'دقیقه')}
            {timeBox(timeLeft.seconds, 'ثانیه')}
        </div>
    );
};

export default CountdownTimer;
