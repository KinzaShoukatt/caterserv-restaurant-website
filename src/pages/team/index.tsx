// import React from "react";
import FirstImage from "../../assets/images/imgi_21_team-1.jpg";
import SecondImage from "../../assets/images/imgi_22_team-2.jpg";
import ThirdImage from "../../assets/images/imgi_23_team-3.jpg";
import FourthImage from "../../assets/images/imgi_24_team-4.jpg";
const Team = () => {
  return (
    <>
      <div className="p-5 flex flex-col justify-center md:px-10 lg:px-25">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className="animate-multiBounce text-center"
        >
          <button className="bg-[#FFFCF8] font-sans text-[#050709] text-[14px] font-medium border border-[#D4A762] py-1 px-7 rounded-2xl lg:font-bold">
            OUR TEAM
          </button>
          <p className="playball text-black text-3xl pt-6 pb-10 md:text-4xl lg:text-5xl">
            We have experienced chef Team
          </p>
        </div>
        <div className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="200"
            className="relative group"
          >
            <img
              className="rounded-tl-lg rounded-tr-lg"
              src={FirstImage}
              alt=""
            />
            <div className="absolute top-5 right-5 ">
              <div className="box-border bg-[#D4A762] my-2 rounded-[50%] p-3 cursor-pointer hover:bg-black hover:text-[#D4A762]">
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="opacity-0 transition-all duration-900 ease-in-out group-hover:opacity-100">
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="bg-black py-3.5 text-center leading-8 rounded-bl-lg rounded-br-lg transition-all duration-900 ease-in-out group-hover:bg-[#D4A762]">
              <p className="text-[#D4A762] text-2xl font-semibold transition-all duration-900 ease-in-out group-hover:text-black">
                Henry
              </p>
              <p className="text-white">Decoration Chef</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
            className="relative group"
          >
            <img
              className="rounded-tl-lg rounded-tr-lg"
              src={SecondImage}
              alt=""
            />
            <div className="absolute top-5 right-5 ">
              <div className="box-border bg-[#D4A762] my-2 rounded-[50%] p-3 cursor-pointer hover:bg-black hover:text-[#D4A762]">
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="opacity-0 transition-all duration-900 ease-in-out group-hover:opacity-100">
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="bg-black py-3.5 text-center leading-8 rounded-bl-lg rounded-br-lg transition-all duration-900 ease-in-out group-hover:bg-[#D4A762]">
              <p className="text-[#D4A762] text-2xl font-semibold transition-all duration-900 ease-in-out group-hover:text-black">
                Jemes Born
              </p>
              <p className="text-white">Executive Chef</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="600"
            className="relative group"
          >
            <img
              className="rounded-tl-lg rounded-tr-lg"
              src={ThirdImage}
              alt=""
            />
            <div className="absolute top-5 right-5 ">
              <div className="box-border bg-[#D4A762] my-2 rounded-[50%] p-3 cursor-pointer hover:bg-black hover:text-[#D4A762]">
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="opacity-0 transition-all duration-900 ease-in-out group-hover:opacity-100">
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="bg-black py-3.5 text-center leading-8 rounded-bl-lg rounded-br-lg transition-all duration-900 ease-in-out group-hover:bg-[#D4A762]">
              <p className="text-[#D4A762] text-2xl font-semibold transition-all duration-900 ease-in-out group-hover:text-black">
                Martin Hill
              </p>
              <p className="text-white">Kitchen Porter</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="800"
            className="relative group"
          >
            <img
              className="rounded-tl-lg rounded-tr-lg"
              src={FourthImage}
              alt=""
            />
            <div className="absolute top-5 right-5 ">
              <div className="box-border bg-[#D4A762] my-2 rounded-[50%] p-3 cursor-pointer hover:bg-black hover:text-[#D4A762]">
                <i className="fas fa-share-alt"></i>
              </div>
              <div className="opacity-0 transition-all duration-900 ease-in-out group-hover:opacity-100">
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="size-fit bg-[#D4A762] rounded-[50%] p-3 cursor-pointer my-2 transition-all duration-900 ease-in-out hover:bg-black hover:text-[#D4A762]">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="bg-black py-3.5 text-center leading-8 rounded-bl-lg rounded-br-lg transition-all duration-900 ease-in-out group-hover:bg-[#D4A762]">
              <p className="text-[#D4A762] text-2xl font-semibold transition-all duration-900 ease-in-out group-hover:text-black">
                Adam Smith
              </p>
              <p className="text-white">Head Chef</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
