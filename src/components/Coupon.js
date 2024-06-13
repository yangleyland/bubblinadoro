import React, { useEffect, useState } from "react";

const Coupon = ({isPopupOpen,closePopup}) => {
  const [prize, setPrize] = useState("");


  useEffect(() => {
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    setPrize(randomPrize);
  }, [isPopupOpen]);

  const prizes = [
    "Congratulations! This coupon can be redeemed for 20 seconds of pit-time\n**ONE TIME USE**",
    "I'm proud of you for getting through that work sesh...send this to bubblina and he will buy you a sweet treat reluctantly\n**REDEEMABLE ALWAYS**",
    "Coupon for 1 forehead kiss\n**REDEEMABLE ALWAYS**",
    "Meal of your choice cooked by me\n**ONE TIME USE**",
    "You get to choose what I do for an hour (within reason)\n**ONE TIME USE**",
    "Pilates Class with me\n**ONE TIME USE**",
    "Instagram story post of your choice (within reason)\n**ONE TIME USE**",
  ];

  return (
    <>
     {isPopupOpen && <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
        <div className="bg-[#FFEFEA] w-[700px] h-[400px] flex flex-col justify-center items-center p-6 rounded-md relative">
          <div className="relative w-full h-full">
            <img
              src="ticket.png"
              alt="Ticket"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute w-7/12 h-8/12 top-0 bottom-0 right-20 flex flex-col justify-center items-center text-center text-white">
              <p className="mb-4 text-2xl text-gray-600">{prize}</p>
              <p className=" text-1xl text-gray-400 text-left">Note: screenshot coupon to redeem</p>
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
