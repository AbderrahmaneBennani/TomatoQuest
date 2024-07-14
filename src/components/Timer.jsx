import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(25 * 60); // initial time in seconds
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null); // useRef to keep track of the interval

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // cleanup on component unmount
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(25 * 60); // reset to initial time
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-8xl mb-12">{formatTime(time)}</h1>

      <div className="m-auto">
        <button className="text-2xl m-1" onClick={toggleTimer}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="text-2xl m-2" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
