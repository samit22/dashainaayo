import { useEffect, useState } from 'react';

export const useCountdown = (ctDate) => {
  const calculateTimeLeft = () => {
    const until = new Date(ctDate);
    const difference = +until - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    //@ts-ignore
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, [ctDate]);

  return timeLeft;
};
