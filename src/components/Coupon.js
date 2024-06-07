import React, { useEffect, useState } from "react";

const Coupon = ({isPopupOpen,closePopup}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [prize, setPrize] = useState("");


  useEffect(() => {
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    setPrize(randomPrize);
  }, []);

  const prizes = [
    "Congratulations! This coupon can be redeemed for 20 seconds of pit-time\n**one time use only**",
    "You get to give me RH!!!",
    "Free Ice Cream",
    "Free Pizza",
    "Free Burger",
    "Free Fries",
    "Free Soda",
    "Free Popcorn",
    "Free Candy",
    "Free Movie Ticket",
  ];

  return (
    <>
     {true && <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
        <div className="bg-[#FFEFEA] w-1/2 h-1/2 flex flex-col justify-center items-center p-6 rounded-md relative">
          <div className="relative w-full h-full">
            <img
              src="ticket.png"
              alt="Ticket"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute w-7/12 h-8/12 top-0 bottom-0 right-20 flex flex-col justify-center items-center text-center text-white">
              <p className="mb-4 text-2xl text-gray-600">{prize}</p>
            </div>
          </div>
          <button
            onClick={closePopup}
            className="bg-[#E56C6C] hover:bg-[#BC5252] max-sm:hover:bg-[#E56C6C] max-sm:active:bg-[#BC5252] text-white mt-4 px-4 py-2 rounded text-bold"
          >
            Close
          </button>
        </div>
      </div>}
    </>
  );
};

export default Coupon;
