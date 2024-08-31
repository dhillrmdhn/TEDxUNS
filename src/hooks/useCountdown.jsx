import { useEffect, useRef, useState } from "react";

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const interval = useRef(null);

  useEffect(() => {
    const startTimer = () => {
      const countdownDate = new Date(targetDate).getTime();

      interval.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance > 0) {
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        } else {
          clearInterval(interval.current);
        }
      }, 1000);
    };

    startTimer();
    return () => clearInterval(interval.current);
  }, [targetDate]);

  return timeLeft;
};

export default useCountdown;
