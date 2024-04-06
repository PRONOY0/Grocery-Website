import React from "react";
import { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("June 30, 2024").getTime();

  const getTime = (deadline) => {
    const time = deadline - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      
      <div className="days">
        <p>{days} <span>:</span></p>
        <div className="text-for-time">Days</div>
      </div>

      <div className="hours">
        <p>{hours} <span>:</span></p>
        <div className="text-for-time">Hours</div>
      </div>

      <div className="mins">
        <p>{minutes} <span>:</span></p>
        <div className="text-for-time">Mins</div>
      </div>

      <div className="secs">
        <p>{seconds}</p>
        <div className="text-for-time">Secs</div>
      </div>

    </div>
  );
};

export default Timer;
