// import React from "react";
import FirstImage from "../../assets/images/imgi_3_event-1.jpg";
import SecondImage from "../../assets/images/imgi_4_event-2.jpg";
import ThirdImage from "../../assets/images/imgi_5_event-3.jpg";
import FourthImage from "../../assets/images/imgi_6_event-4.jpg";
import FifthImage from "../../assets/images/imgi_7_event-5.jpg";
import SixthImage from "../../assets/images/imgi_8_event-6.jpg";
import seventhImage from "../../assets/images/imgi_9_event-7.jpg";
import EightImage from "../../assets/images/imgi_10_event-8.jpg";
import CrossImage from "../../assets/images/imgi_40_close.png";
import { useState } from "react";
const Events = () => {
  const [selectedImage, setSelectedimage] = useState<string | null>(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const data = [
    {
      id: 1,
      img: FirstImage,
      text: "Wedding",
    },
    {
      id: 2,
      img: SecondImage,
      text: "Corporate",
    },
    {
      id: 3,
      img: ThirdImage,
      text: "Wedding",
    },
    {
      id: 4,
      img: FourthImage,
      text: "Buffet",
    },
    {
      id: 5,
      img: FifthImage,
      text: "Cocktail",
    },
    {
      id: 6,
      img: SixthImage,
      text: "Wedding",
    },
    {
      id: 7,
      img: seventhImage,
      text: "Buffet",
    },
    {
      id: 8,
      img: EightImage,
      text: "Corporate",
    },
  ];
  return (
    <>
      <div className="px-25 py-25 flex flex-col justify-center">
        <div className="text-center">
          <button className="bg-[#FFFCF8] font-sans text-[#050709] text-[14px] font-bold border border-[#D4A762] py-1 px-7 rounded-2xl">
            LATEST EVENTS
          </button>
          <p className="playball text-black text-5xl py-7">
            Our Social & Professional Events Gallery
          </p>
          <div className="flex gap-10 font-sans justify-center py-10">
            <button className="bg-[#D4A762] border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer">
              All Events
            </button>
            <button className="bg-[#FFFCF8] border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer">
              Wedding
            </button>
            <button className="bg-[#FFFCF8] border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer">
              Corporate
            </button>
            <button className="bg-[#FFFCF8] border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer">
              Cocktail
            </button>
            <button className="bg-[#FFFCF8] border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer">
              Buffet
            </button>
          </div>
        </div>
        <div className="p-5 grid grid-cols-4 gap-5 relative">
          {data.map((card) => (
            <div key={card.id}>
              <div className="relative group">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={card.img}
                  alt=""
                />
                <div className="p-5 absolute inset-0 bg-[#8d5a0e]/50 rounded-lg opacity-0 group-hover:opacity-100 flex flex-col transition-all duration-300">
                  <p className="font-sans text-black text-xl font-semibold">
                    {card.text}
                  </p>
                  <i
                    onClick={() => {
                      setSelectedimage(card.img);
                      setIsModelOpen(true);
                    }}
                    className="fa-solid fa-magnifying-glass-plus fa-2x text-black m-auto cursor-pointer"
                  ></i>
                </div>
              </div>
            </div>
          ))}
          {isModelOpen && (
            <>
              <div className="fixed inset-0 bg-black/60 z-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center z-50">
                <div className="flex flex-col h-[80vh] w-fit border-3 border-white rounded-sm">
                  <img className="h-full w-full" src={selectedImage || ""} />
                  <img
                    className=" size-fit self-end pt-2.5 cursor-pointer"
                    src={CrossImage}
                    onClick={() => setIsModelOpen(false)}
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
