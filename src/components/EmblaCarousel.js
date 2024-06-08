import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const images = [
    { src: "/photo1.jpg", alt: "1" },
    { src: "/photo2.jpg", alt: "2" },
    { src: "/photo3.jpg", alt: "3" },
    { src: "/photo4.jpg", alt: "4" },
    { src: "/photo5.jpg", alt: "5" },
    { src: "/photo6.jpg", alt: "6" },
    { src: "/photo7.jpg", alt: "7" },
    { src: "/photo8.jpg", alt: "8" },
    { src: "/photo9.jpg", alt: "9" },
    { src: "/photo10.jpg", alt: "10" },
    { src: "/photo12.jpg", alt: "12" },
    { src: "/photo13.jpg", alt: "13" },
    { src: "/photo14.jpg", alt: "14" },
    { src: "/photo15.jpg", alt: "15" },
    { src: "/photo16.jpg", alt: "16" },
    { src: "/photo17.jpg", alt: "17" },

    { src: "/photo18.jpg", alt: "18" },
    { src: "/photo00.jpg", alt: "00" },

    { src: "/photo19.jpg", alt: "19" },
    { src: "/photo20.jpg", alt: "20" },
    { src: "/photo21.jpg", alt: "21" },
    { src: "/photo22.jpg", alt: "22" },
  ];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex w-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] h-[500px] min-w-0 flex items-end justify-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-5/6 h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="mt-5 w-full flex items-center justify-center gap-2">
        <button className="embla__prev" onClick={scrollPrev}>
          <IoIosArrowDropleft
            className="text-red-400 hover:text-red-300"
            size={40}
          />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <IoIosArrowDropright
            className="text-red-400 hover:text-red-300"
            size={40}
          />
        </button>
      </div>
    </div>
  );
}
