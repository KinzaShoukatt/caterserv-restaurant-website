// import React from "react";
import Firstimage from "../../assets/images/imgi_13_menu-03.jpg";
import Secondimage from "../../assets/images/imgi_14_menu-04.jpg";
import Thirdimage from "../../assets/images/imgi_15_menu-05.jpg";
import Fourthimage from "../../assets/images/imgi_16_menu-06.jpg";
import Fifthimage from "../../assets/images/imgi_17_menu-07.jpg";
import Sixthimage from "../../assets/images/imgi_18_menu-08.jpg";
const Footer = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="300"
        className="animate-multiBounce bg-[#FFFCF8] px-10 py-20 grid grid-cols-1 justify-between gap-2.5 w-full sm:grid-cols-2 lg:grid-cols-4 lg:p-25"
      >
        {/* first */}
        <div>
          <p className="playball text-3xl lg:text-[40px]">
            <span className="text-[#d4a762]">Cater</span>Serv
          </p>
          <p className="text-[#9A9A9A] leading-8 pb-2.5">
            There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs
            condmentum leo massamollis its estiegittis miristum.
          </p>
          <div className="flex gap-2.5">
            <div className=" bg-[#D4A762] rounded-[50%] p-2.5 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
              <i className="fas fa-share-alt"></i>
            </div>
            <div className=" bg-[#D4A762] rounded-[50%] p-2.5 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className=" bg-[#D4A762] rounded-[50%] p-2.5 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
              <i className="fab fa-twitter"></i>
            </div>
            <div className=" bg-[#D4A762] rounded-[50%] p-2.5 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        {/* second */}
        <div>
          <p className="text-2xl font-semibold pb-2.5">Special Facilities</p>
          <div className="flex gap-2.5 items-center py-1 cursor-pointer">
            <i className="fa fa-check text-[#D4A762]"></i>
            <p className="text-[#9A9A9A] hover:text-[#D4A762]">Cheese Burger</p>
          </div>
          <div className="flex gap-2.5 items-center py-1 cursor-pointer">
            <i className="fa fa-check text-[#D4A762]"></i>
            <p className="text-[#9A9A9A] hover:text-[#D4A762]">Sandwich</p>
          </div>
          <div className="flex gap-2.5 items-center py-1 cursor-pointer">
            <i className="fa fa-check text-[#D4A762]"></i>
            <p className="text-[#9A9A9A] hover:text-[#D4A762]">Panner Burger</p>
          </div>
          <div className="flex gap-2.5 items-center py-1 cursor-pointer">
            <i className="fa fa-check text-[#D4A762]"></i>
            <p className="text-[#9A9A9A] hover:text-[#D4A762]">
              Special Sweets
            </p>
          </div>
        </div>
        {/* third */}
        <div>
          <p className="text-2xl font-semibold pb-2.5">Contact Us</p>
          <div className="flex gap-2.5 items-center py-1">
            <i className="fa fa-map-marker-alt text-[#D4A762]"></i>
            <p className="text-[#9A9A9A]">123 Street, New York, USA</p>
          </div>
          <div className="flex gap-2.5 items-center py-1">
            <i className="fa fa-phone-alt text-[#D4A762]"></i>
            <p className="text-[#9A9A9A]"> (+012) 3456 7890 123</p>
          </div>
          <div className="flex gap-2.5 items-center py-1">
            <i className="fas fa-envelope text-[#D4A762]"></i>
            <p className="text-[#9A9A9A]">info@example.com</p>
          </div>
          <div className="flex gap-2.5 items-center py-1">
            <i className="fa fa-clock text-[#D4A762]"></i>
            <p className="text-[#9A9A9A]">24/7 Hours Service</p>
          </div>
        </div>
        {/* last */}
        <div>
          <p className="text-2xl font-semibold pb-2.5">Social Gallery</p>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <img
                src={Firstimage}
                className="rounded-[50%] border p-1.5 border-[#D4A762]"
              />
            </div>
            <div>
              <img
                src={Secondimage}
                className="rounded-[50%] border p-1.5 border-[#D4A762]"
              />
            </div>
            <div>
              <img
                src={Thirdimage}
                className="rounded-[50%] border p-1.5 border-[#D4A762]"
              />
            </div>
            <div>
              <img
                src={Fourthimage}
                className="rounded-[50%] border p-1.5 border-[#D4A762]"
              />
            </div>
            <div>
              <img
                src={Fifthimage}
                className="rounded-[50%] border p-1.5 border-[#D4A762]"
              />
            </div>
            <div>
              <img
                src={Sixthimage}
                className="rounded-[50%] border p-1.5 border-[#D4A762]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black px-5 py-6 text-white flex flex-col gap-2.5 items-center justify-between text-sm md:text-[16px] md:flex-row lg:px-25">
        <div className="flex gap-2.5 items-center">
          <i className="fas fa-copyright text-white"></i>
          <p>
            <span className="text-[#D4A762]">Your Site Name</span>, All right
            reserved
          </p>
        </div>
        <div>
          <p>
            Designed By{" "}
            <span className="text-[#D4A762] border-b border-white">
              HTML Codex
            </span>{" "}
            Destributed By{" "}
            <span className="text-[#D4A762] border-b border-white">
              Themewagon
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
