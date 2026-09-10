"use client";

import React, { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

interface TimeParts {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const getPartsOfTimeDuration = (duration: number): TimeParts => {
    const days = Math.floor(duration / msInADay);
    const hours = Math.floor((duration % msInADay) / msInAHour);
    const minutes = Math.floor((duration % msInAHour) / msInMinute);
    const seconds = Math.floor((duration % msInMinute) / msInSecond);

    return { days, hours, minutes, seconds };
};

interface CountDownProps {
    endDateTime: string | Date;
}

const CountDown: React.FC<CountDownProps> = ({ endDateTime }) => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [time]);

    const now = Date.now();
    const future = new Date(endDateTime);
    const timeDif = future.getTime() - now;
    const timeParts = getPartsOfTimeDuration(timeDif);

    return (
        <>
            <div className="time-countdown">
                <div className="counter-column"><span className="count">{timeParts.days}</span><span className="title">Days</span></div>
                <div className="counter-column"><span className="count">{timeParts.hours}</span><span className="title">Hours</span></div>
                <div className="counter-column"><span className="count">{timeParts.minutes}</span><span className="title">Minutes</span></div>
                <div className="counter-column"><span className="count">{timeParts.seconds}</span><span className="title">Seconds</span></div>
            </div>
        </>
    );
};

export default CountDown;
