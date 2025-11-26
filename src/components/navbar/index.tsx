// import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <div className="bg-[#FFFCF8] flex justify-between px-25 py-6 items-center border-b border-[#9A9A9A]">
        <div>
          <p className="playball font-bold text-[40px] text-[#D4A762] cursor-pointer">
            Cater<span className="text-black">Serv</span>
          </p>
        </div>
        <div>
          <ul className="font-sans text-lg font-semibold text-[#0000008c] flex gap-6 items-center [&>li]:cursor-pointer">
            <li className="hover:text-[#D4A762]">Home</li>
            <li className="hover:text-[#D4A762]">About</li>
            <li className="hover:text-[#D4A762]">Services</li>
            <li className="hover:text-[#D4A762]">Events</li>
            <li className="hover:text-[#D4A762]">Menu</li>
            <li
              className="hover:text-[#D4A762] flex items-center relative"
              onClick={() => setDropDown(true)}
            >
              Pages
              <RiArrowDropDownLine size={35} />
              {dropDown && (
                <div>
                  <ul className="absolute top-full left-0 mt-2 bg-[#FFFCF8] text-[#0000008c] py-2.5  font-sans text-[16px] font-semibold border border-[#9A9A9A] rounded-xl shadow-lg leading-8">
                    <li className="pl-5 pr-12 hover:bg-[#D4A762] hover:text-white">
                      Booking
                    </li>
                    <li className="pl-5 pr-12 hover:bg-[#D4A762] hover:text-white">
                      Our Blog
                    </li>
                    <li className="pl-5 pr-12 hover:bg-[#D4A762] hover:text-white">
                      Our Team
                    </li>
                    <li className="pl-5 pr-12 hover:bg-[#D4A762] hover:text-white">
                      Testimonial
                    </li>
                    <li className="pl-5 pr-12 hover:bg-[#D4A762] hover:text-white">
                      404 page
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-[#D4A762]">Contact</li>
          </ul>
        </div>
        <div className="flex gap-5 items-center font-sans text-lg font-semibold">
          <div className="bg-[#D4A762] p-3 rounded-[50%] cursor-pointer hover:bg-black hover:text-[#D4A762]">
            <FaSearch />
          </div>
          <div className="bg-[#D4A762] text-lg py-1.5 px-5.5 rounded-3xl cursor-pointer hover:bg-black hover:text-[#D4A762]">
            Book Now
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
