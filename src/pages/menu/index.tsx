// import React from "react";
import { useState } from "react";
import FirstImage from "../../assets/images/imgi_11_menu-01.jpg";
import SecondImage from "../../assets/images/imgi_12_menu-02.jpg";
import ThirdImage from "../../assets/images/imgi_13_menu-03.jpg";
import FourthImage from "../../assets/images/imgi_14_menu-04.jpg";
import FifthImage from "../../assets/images/imgi_15_menu-05.jpg";
import SixthImage from "../../assets/images/imgi_16_menu-06.jpg";
import seventhImage from "../../assets/images/imgi_17_menu-07.jpg";
import EightImage from "../../assets/images/imgi_18_menu-08.jpg";
import NinthImage from "../../assets/images/imgi_19_menu-09.jpg";
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("starter");
  const starter = [
    {
      id: 1,
      img: FirstImage,
      text: "Paneer",
    },
    {
      id: 2,
      img: SecondImage,
      text: "Sweet Potato",
    },
    {
      id: 3,
      img: ThirdImage,
      text: "Sabudana Tikki",
    },
    {
      id: 4,
      img: FourthImage,
      text: "Pizza",
    },
    {
      id: 5,
      img: FifthImage,
      text: "Bacon",
    },
    {
      id: 6,
      img: SixthImage,
      text: "Chicken",
    },
    {
      id: 7,
      img: seventhImage,
      text: "Blooming",
    },
    {
      id: 8,
      img: EightImage,
      text: "Sweet",
    },
  ];
  const mainCourse = [
    {
      id: 1,
      img: FirstImage,
      text: "Argentinian",
    },
    {
      id: 2,
      img: SecondImage,
      text: "Crispy",
    },
    {
      id: 3,
      img: ThirdImage,
      text: "Sabudana Tikki",
    },
    {
      id: 4,
      img: FourthImage,
      text: "Blooming",
    },
    {
      id: 5,
      img: FifthImage,
      text: "Argentinian",
    },
    {
      id: 6,
      img: SixthImage,
      text: "Lemon",
    },
    {
      id: 7,
      img: seventhImage,
      text: "Water Drink",
    },
    {
      id: 8,
      img: EightImage,
      text: "Salty lemon",
    },
  ];
  const drinks = [
    {
      id: 1,
      img: NinthImage,
      text: "Soup",
    },
    {
      id: 2,
      img: SecondImage,
      text: "Crispy",
    },
    {
      id: 3,
      img: ThirdImage,
      text: "Lemon",
    },
    {
      id: 4,
      img: FourthImage,
      text: "Pizza",
    },
    {
      id: 5,
      img: FifthImage,
      text: "Bacon",
    },
    {
      id: 6,
      img: SixthImage,
      text: "Chicken",
    },
    {
      id: 7,
      img: ThirdImage,
      text: "Orange",
    },
    {
      id: 8,
      img: EightImage,
      text: "Sweet",
    },
  ];
  const offers = [
    {
      id: 1,
      img: FifthImage,
      text: "Bacon",
    },
    {
      id: 2,
      img: SecondImage,
      text: "Sweet Potato",
    },
    {
      id: 3,
      img: ThirdImage,
      text: "Sabudana Tikki",
    },
    {
      id: 4,
      img: FourthImage,
      text: "Pizza",
    },
    {
      id: 5,
      img: FifthImage,
      text: "Bacon",
    },
    {
      id: 6,
      img: SixthImage,
      text: "Chicken",
    },
    {
      id: 7,
      img: seventhImage,
      text: "Blooming",
    },
    {
      id: 8,
      img: EightImage,
      text: "Sweet",
    },
  ];
  const ourSpecial = [
    {
      id: 1,
      img: EightImage,
      text: "Burger",
    },
    {
      id: 2,
      img: SecondImage,
      text: "Sweet Potato",
    },
    {
      id: 3,
      img: ThirdImage,
      text: "Sabudana Tikki",
    },
    {
      id: 4,
      img: seventhImage,
      text: "Blooming",
    },
    {
      id: 5,
      img: FifthImage,
      text: "Bacon",
    },
    {
      id: 6,
      img: SixthImage,
      text: "Chicken",
    },
    {
      id: 7,
      img: SixthImage,
      text: "Chicken",
    },
    {
      id: 8,
      img: EightImage,
      text: "Sweet",
    },
  ];

  const getMenuItems = () => {
    if (selectedCategory === "starter") return starter;
    if (selectedCategory === "main") return mainCourse;
    if (selectedCategory == "drinks") return drinks;
    if (selectedCategory == "offers") return offers;
    if (selectedCategory == "ourSpecial") return ourSpecial;
    return starter;
  };
  return (
    <>
      <div className="bg-[#FFFCF8] px-25 py-25 flex flex-col justify-center">
        <div className="text-center">
          <button className="bg-[#FFFCF8] font-sans text-[#050709] text-[14px] font-bold border border-[#D4A762] py-1 px-7 rounded-2xl">
            OUR MENU
          </button>
          <p className="playball text-black text-5xl pt-6 pb-4">
            Most Popular Food in the World
          </p>
          <div className="flex gap-10 font-sans justify-center py-10">
            <button
              onClick={() => setSelectedCategory("starter")}
              className={`border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer ${
                selectedCategory === "starter" ? "bg-[#D4A762]" : "bg-white"
              }`}
            >
              Starter
            </button>
            <button
              onClick={() => setSelectedCategory("main")}
              className={`border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer ${
                selectedCategory === "main" ? "bg-[#D4A762]" : "bg-white"
              }`}
            >
              Main Course
            </button>
            <button
              onClick={() => setSelectedCategory("drinks")}
              className={`border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer ${
                selectedCategory === "drinks" ? "bg-[#D4A762]" : "bg-white"
              }`}
            >
              Drinks
            </button>
            <button
              onClick={() => setSelectedCategory("offer")}
              className={`border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer ${
                selectedCategory === "offer" ? "bg-[#D4A762]" : "bg-white"
              }`}
            >
              Offers
            </button>
            <button
              onClick={() => setSelectedCategory("ourSpecial")}
              className={`border border-[#D4A762] py-2 px-9 rounded-4xl cursor-pointer ${
                selectedCategory === "ourSpecial" ? "bg-[#D4A762]" : "bg-white"
              }`}
            >
              Our Special
            </button>
          </div>
        </div>
        <div className="p-5 grid grid-cols-2 gap-5 relative">
          {getMenuItems().map((card) => (
            <div key={card.id}>
              <div className="flex gap-5">
                <img className="rounded-[50%]" src={card.img} alt="" />
                <div>
                  <div className="flex justify-between font-sans text-2xl font-semibold pb-3.5 border-b border-dashed border-b-[#d4a762]">
                    <p>{card.text}</p>
                    <p className="text-[#d4a762]">$90</p>
                  </div>
                  <p className="text-[#9A9A9A] pt-1.5">
                    Consectetur adipiscing elit sed dwso eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
