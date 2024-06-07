import React, { useState, useEffect, useRef } from "react";

const Timer = ({openPopup}) => {
  const [time, setTime] = useState(35 * 60); // 35 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("Hang on! You're almost there");
  let audio = new Audio("/start.mp3");
  let finishAudio = new Audio("/stop.mp3");

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  useEffect(() => {
    if (time === 0) {
      finishAudio.play();
      setIsRunning(false);
      openPopup();
      setTime(35 * 60);
    }
  }, [time]);

  const changeTimer = () => {
    setIsRunning(!isRunning);
    audio.play();
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="relative max-sm:w-4/5 max-sm:h-[350px] w-[565px] h-[440px] bg-[#FFAEAE] rounded-2xl flex flex-col justify-center">
      <p className="absolute w-full text-center text-white font-bold text-3xl top-16 max-sm:top-4">
        {message}
      </p>
      <p className="w-full text-center text-white font-bold max-sm:text-6xl text-9xl relative bottom-8 ">
        {formatTime(time)}
      </p>
      <div className="w-full flex justify-center absolute bottom-12">
        <button
          className="bg-[#E56C6C] hover:bg-[#BC5252] max-sm:hover:bg-[#E56C6C] max-sm:active:bg-[#BC5252] text-white font-bold text-3xl py-2 px-4 rounded w-[200px] h-[70px]"
          onClick={changeTimer}
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
