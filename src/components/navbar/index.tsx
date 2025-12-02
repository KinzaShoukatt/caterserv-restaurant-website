// import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [navItems, setNavItems] = useState(false);
  return (
    <>
      <div className="bg-[#FFFCF8] px-7 py-6 border-b border-[#e9e4e4] lg:px-25">
        <div className="flex justify-between items-center">
          <div>
            <p className="playball font-bold text-3xl text-[#D4A762] cursor-pointer lg:text-[40px]">
              Cater<span className="text-black">Serv</span>
            </p>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setNavItems(!navItems)}
              className="flex justify-center items-center border border-[#0000001a] p-2.5 rounded-lg cursor-pointer"
            >
              <i className="fa fa-bars text-[#D4A762]"></i>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="font-sans text-lg font-semibold text-[#0000008c] flex gap-6 items-center [&>li]:cursor-pointer">
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Home
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                About
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Services
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Events
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Menu
              </li>
              <li
                className="transition-all duration-300 hover:text-[#D4A762] flex items-center relative"
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                Pages
                <RiArrowDropDownLine size={35} />
                <div
                  className={`absolute top-full left-0 mt-2 bg-[#FFFCF8] text-[#0000008c] py-2.5 font-sans text-[16px] font-semibold border border-[#e9e4e4] rounded-xl shadow-lg leading-8
                  transform transition-all duration-600 origin-top z-10
                  ${
                    dropDown ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  }`}
                >
                  <ul>
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
              </li>
              <li className="hover:text-[#D4A762]">Contact</li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-5 items-center font-sans text-lg font-semibold">
            <div className="bg-[#D4A762] p-3 rounded-[50%] cursor-pointer transition-all duration-500 hover:bg-black hover:text-[#D4A762]">
              <FaSearch />
            </div>
            <div className="bg-[#D4A762] text-lg py-1.5 px-5.5 rounded-3xl cursor-pointer transition-all duration-500 hover:bg-black hover:text-[#D4A762]">
              Book Now
            </div>
          </div>
        </div>
        {navItems && (
          <div>
            <ul className="mt-2 font-sans text-lg font-semibold text-[#0000008c] [&>li]:cursor-pointer leading-10 px-5">
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Home
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                About
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Services
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Events
              </li>
              <li className="transition-all duration-300 hover:text-[#D4A762]">
                Menu
              </li>
              <li
                className="transition-all duration-300 hover:text-[#D4A762] flex flex-col"
                onClick={() => setDropDown(!dropDown)}
              >
                <div className="flex items-center cursor-pointer">
                  Pages
                  <RiArrowDropDownLine size={25} />
                </div>

                {dropDown && (
                  <ul className="mt-2 py-2.5 bg-[#FFFCF8] text-[#212529] border border-[#e9e4e4] rounded-xl font-normal leading-8">
                    <li className="pl-5 hover:bg-[#D4A762] hover:text-white">
                      Booking
                    </li>
                    <li className="pl-5 hover:bg-[#D4A762] hover:text-white">
                      Our Blog
                    </li>
                    <li className="pl-5 hover:bg-[#D4A762] hover:text-white">
                      Our Team
                    </li>
                    <li className="pl-5 hover:bg-[#D4A762] hover:text-white">
                      Testimonial
                    </li>
                    <li className="pl-5 hover:bg-[#D4A762] hover:text-white">
                      404 Page
                    </li>
                  </ul>
                )}
              </li>

              {/* <li
                className="transition-all duration-300 hover:text-[#D4A762] flex relative "
                onClick={() => setDropDown(true)}
              >
                <div>
                  Pages
                  <RiArrowDropDownLine size={35} />
                </div>
                {dropDown && (
                  <div className="absolute top-full left-0 mt-2 bg-[#FFFCF8] text-[#0000008c] border border-[#e9e4e4] rounded-xl">
                    <ul>
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
              </li> */}

              <li className="hover:text-[#D4A762]">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
