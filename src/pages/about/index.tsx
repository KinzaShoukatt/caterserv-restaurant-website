// import React from "react";
import AboutImage from "../../assets/images/imgi_8_event-6.jpg";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import AboutImageSec from "../../assets/images/imgi_35_fact.jpg";
const About = () => {
  return (
    <>
      <div className="px-5 py-20 md:px-10 lg:px-30 lg:py-30">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            className="lg:h-[70vh]"
          >
            <img
              className="h-full w-full object-cover rounded-lg"
              src={AboutImage}
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            className="animate-multiBounce flex flex-col lg:w-3/5"
          >
            <div className="py-2.5">
              <button className="bg-[#FFFCF8] font-sans text-[#050709] text-[14px] font-medium border border-[#D4A762] py-1 px-7 rounded-2xl lg:font-bold">
                ABOUT US
              </button>
            </div>
            <div className="playball text-black text-4xl py-5 lg:text-5xl">
              Trusted By 200 + satisfied clients
            </div>
            <p className="text-[#9A9A9A] font-sans text-[16px] py-2.5">
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor iesdein reprehendeerit in
              voluptate velit esse cillum dolore.
            </p>
            <div className="grid grid-cols-1 pb-5 lg:grid-cols-2 lg:pb-0">
              <div className="flex gap-2.5 font-sans items-center py-3.5">
                <IoArrowRedoSharp color="#D4A762" size={20} />
                <p>Fresh and Fast food Delivery</p>
              </div>
              <div className="flex gap-2.5 font-sans items-center py-3.5">
                <IoArrowRedoSharp color="#D4A762" size={20} />
                <p>24/7 Customer Support</p>
              </div>
              <div className="flex gap-2.5 font-sans items-center py-3.5">
                <IoArrowRedoSharp color="#D4A762" size={20} />
                <p>Easy Customization Options</p>
              </div>
              <div className="flex gap-2.5 font-sans items-center py-3.5">
                <IoArrowRedoSharp color="#D4A762" size={20} />
                <p>Delicious Deals for Delicious Meals</p>
              </div>
            </div>
            <div className="flex py-3 items-center mt-auto gap-1.5 bg-[#D4A762] px-8 rounded-3xl cursor-pointer transition-all duration-500 hover:bg-black hover:text-[#D4A762] w-fit">
              <button className="text-lg font-medium lg:font-semibold">
                About Us
              </button>
              <IoMdArrowRoundForward size={20} />
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="flex flex-col gap-5 items-center mt-30 lg:flex-row">
          <div className=" flex flex-col justify-between gap-5 w-full md:flex-row  lg:w-3/5 lg:gap-1.5">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              className="bg-[#D4A762] py-7 px-12 h-fit w-full flex flex-col items-center rounded-xl"
            >
              <FaUsers color="white" size={60} />
              <p className="playball text-5xl font-bold py-3.5">689</p>
              <p className="font-sans font-bold text-[#050709]">HAPPY</p>
              <p className="font-sans font-bold text-[#050709]">CUSTOMERS</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
              className="bg-[#D4A762] py-9 px-10 h-fit w-full flex flex-col items-center rounded-xl"
            >
              <FaUsersCog color="white" size={60} />
              <p className="playball text-5xl font-bold py-3.5">107</p>
              <p className="font-sans font-bold text-[#050709] whitespace-nowrap">
                EXPERT CHEFS
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="600"
              className="bg-[#D4A762] py-7 px-7 h-fit w-full flex flex-col items-center rounded-xl"
            >
              <FaCheck color="white" size={60} />
              <p className="playball text-5xl font-bold py-3.5">253</p>
              <p className="font-sans font-bold text-[#050709] whitespace-nowrap">
                EVENTS COMPLETE
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="0"
            className="animate-multiBounce h-[70vh] w-full lg:w-2/5"
          >
            <img
              className="h-full w-full object-cover rounded-lg"
              src={AboutImageSec}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
