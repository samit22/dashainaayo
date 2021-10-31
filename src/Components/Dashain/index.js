import React, { useEffect, useState }  from 'react';

import ReactTypingEffect from 'react-typing-effect';
import { convertNepaliDigit } from '../../utils';
import './style.css';
import dhun from '../../music/dashain_dhun.mp3';

import { Countdown } from '../Countdown';

import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';


const DashainCountdown = () => {
    let timeLeft = Countdown("2021-10-12");
    let year = new Date().getFullYear();

    const [loading, setLoading] = useState(true);
    const [msgLoading, setMsgLoading] = useState(true);


    const useAudio = url => {
        const [audio] = useState(new Audio(url));
        audio.volume = 0.2;
        const [playing, setPlaying] = useState(false);

        const toggle = () => setPlaying(!playing);

        useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
            [playing]
        );

        useEffect(() => {
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setPlaying(false));
            };
        }, []);

        return [playing, toggle];
    };
    const [playing, toggle] = useAudio(dhun);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 7000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMsgLoading(false)
            toggle();
        }, 8000);

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
            <p>
                {msgLoading ? '' :
                    <div className="greeting-msg">
                        <div className="play-pause">
                            <button onLoadedData={toggle}  onClick={toggle}>{playing ? <PauseCircleOutlineRoundedIcon sx={{ fontSize: 50, color: 'info' }} /> : <PlayCircleOutlineRoundedIcon sx={{ fontSize: 50, color: 'info'}}/>}</button>
                        </div>
                    <ReactTypingEffect
                        text={["विजय दशमी एवम दिपावली २०७८को हार्दिक मंङगलमय शुभकामना!!!", `Wish you a very Happy Dashain and Tihar!!!`]}
                        />
                    </div>
                }
            </p>
        </div>
    )

}

export default DashainCountdown;
