import React, { useEffect, useState }  from 'react';

import ReactTypingEffect from 'react-typing-effect';
import { convertNepaliDigit } from '../../utils';
import './style.css';

const DashainCountdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`10/12/${year}`) - +new Date();
        let timeLeft = {};

        if(difference > 0) {
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
    const [year, setYear] = useState(new Date().getFullYear());

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
            setYear(new Date().getFullYear());
        }, 1000);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 7000);
        return () => clearTimeout(timer);
    }, []);

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className="ct">
            <p className="heading"> <h1>
                <ReactTypingEffect
                text={["बडा दशैँ २०७८", `Dashain ${year}`]}
                />
            </h1>
            </p>
            <p>
                {loading ? '' : <div>
                    {
                        timerComponents.length ? <div>
                            <div className="english-ct">
                                {timerComponents}
                            </div>
                            <div className="nepali-ct">
                                <span> {convertNepaliDigit(timeLeft.days)} दिन </span>
                                <span>{convertNepaliDigit(timeLeft.hours)} घण्टा </span>
                                <span> {convertNepaliDigit(timeLeft.minutes)} मिनेट </span>
                                <span>{convertNepaliDigit(timeLeft.seconds)} सेकेन्ड </span>
                            </div>  </div>
                            : <span>Dashain is here!!</span>
                    }
                </div>
                }
            </p>
        </div>
    )

}

export default DashainCountdown;
