import React, { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";

const Timer = ({ openPopup }) => {
  const [time, setTime] = useState(35 * 60); // 35 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("Get yo $$ up not yo funny up");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState(35); // Initial value in minutes
  let audio = new Audio("/start.mp3");
  let finishAudio = new Audio("/stop.mp3");

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

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

  useEffect(() => {
    let title = formatTime(time) + " - Bubblina-doro";
    document.title = title;
  }, [time]);

  const changeTimer = () => {
    setIsRunning(!isRunning);
    audio.play();
  };

  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTimeChange = () => {
    // if (inputValue >= 25) {
      setTime(inputValue * 60); // Convert minutes to seconds

      closeModal();
      setErrorMessage("");
      setIsRunning(false);
    // } else {
    //   setErrorMessage("Let's up that time!");
    // }
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
      <div className="w-full flex justify-end absolute top-4">
        <button
          className="hover:text-[#BC5252] text-white font-bold text-xl py-2 px-4"
          onClick={openModal}
        >
          <IoMdSettings />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-20 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">
              Set Timer Duration (minutes)
            </h2>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 rounded p-2 mb-4 w-[80px]"
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#E56C6C] hover:bg-[#BC5252] max-sm:hover:bg-[#E56C6C] max-sm:active:bg-[#BC5252] text-white font-bold py-2 px-4 rounded"
                onClick={handleTimeChange}
              >
                Set Time
              </button>
            </div>
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
