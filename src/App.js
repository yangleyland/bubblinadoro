import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Title from "./components/Title";
import Coupon from "./components/Coupon";
import { EmblaCarousel } from "./components/EmblaCarousel";
import { useEffect, useState } from "react";
import Letter from "./components/Letter";
import Lenis from "lenis";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="relative bg-[#FFDDDD] w-screen h-screen flex flex-col justify-start items-center">
        <img
          src="/cinnemon.png"
          className="absolute left-[100px] top-4 w-auto h-[116px] mt-10"
          alt="logo"
        />
        <img
          src="/skate.png"
          className="absolute right-[200px] top-[100px] w-auto h-[150px] mt-10"
          alt="logo"
        />
        <img
          src="/sleep.png"
          className="absolute left-[100px] bottom-0 w-auto h-[130px] mt-10"
          alt="logo"
        />
        <div className="w-screen text-center pb-20 pt-5 z-20">
          <Title />
        </div>
        <Coupon closePopup={closePopup} isPopupOpen={isPopupOpen} />
        <Timer openPopup={openPopup} />
      </div>
      <div className="relative bg-[#FFDDDD] w-screen h-screen flex flex-col justify-start items-center">
        <div className="w-full h-1/5 flex items-center justify-center">
          <h1
            className="text-7xl max-sm:text-4xl text-white font-bold"
            style={{ textShadow: "1px 1px 4px rgba(255, 0, 0, 0.25)" }}
          >
            Happy Birthday Eri!!
          </h1>
        </div>
        <div className="w-4/6 flex">
          <div className="flex-1 h-full flex items-center justify-center">
            <EmblaCarousel />
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <Letter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
