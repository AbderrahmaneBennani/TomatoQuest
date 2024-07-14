import React, { useEffect, useState } from "react";

const Timer = () => {
  let seconds = 25 * 60;
  const [active, setActive] = useState(false);
  let interval;

  function updateTimer() {
    seconds--;
    console.log(seconds);
  }

  function toggleTimer() {
    setActive(!active);
    clearInterval(interval);
  }

  function pauseTimer() {}

  function resetTimer() {}

  function formatTime(time) {
    if (time < 60) {
      return time;
    }
    const minutes = time / 60;
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  if (active) {
    interval = setInterval(updateTimer, 1000);
  } else {
    clearInterval(interval);
  }

  return (
    <>
      <div>
        {formatTime(seconds)}
        <button onClick={toggleTimer}>ToggleButton</button>
      </div>
    </>
  );
};

export default Timer;
