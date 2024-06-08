import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Timer from "./components/Timer";
import Title from "./components/Title";
import Coupon from "./components/Coupon";
import { EmblaCarousel } from "./components/EmblaCarousel";
import Letter from "./components/Letter";
import Lenis from "lenis";
import { IoArrowDownCircleOutline } from "react-icons/io5";


function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const lenisRef = useRef(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      clearTimeout(lenisRef.current.snapTimeout);
      lenisRef.current.snapTimeout = setTimeout(() => {
        snapToSection();
      }, 100); // Adjust timeout as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenisRef.current.destroy(); // Clean up Lenis instance on component unmount
    };
  }, []);

  const snapToSection = () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY || window.pageYOffset;
    let closestSection = sections[0];
    let minDistance = Math.abs(sections[0].offsetTop - scrollY);

    sections.forEach((section) => {
      const distance = Math.abs(section.offsetTop - scrollY);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });

    lenisRef.current.scrollTo(closestSection, { offset: 0 });
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      lenisRef.current.scrollTo(section, { offset: 0 });
    }
  };

  return (
    <div>
      <section className="relative bg-[#FFDDDD] w-screen h-screen flex flex-col justify-start items-center">
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
        <button
          onClick={() => scrollToSection("#page2")}
          className="text-red-400 hover:text-red-300 absolute bottom-10"
        >
          <IoArrowDownCircleOutline size={40} />
        </button>
      </section>
      <section
        id="page2"
        className="relative bg-[#FFDDDD] w-screen h-screen flex flex-col justify-start items-center"
      >
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
      </section>
    </div>
  );
}

export default App;