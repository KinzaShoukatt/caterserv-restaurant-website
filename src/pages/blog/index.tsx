// import React from 'react'
import FirstImage from "../../assets/images/imgi_29_blog-1.jpg";
import SecondImage from "../../assets/images/imgi_30_blog-2.jpg";
import ThirdImage from "../../assets/images/imgi_31_blog-3.jpg";
const Blog = () => {
  return (
    <>
      <div className="p-5 flex flex-col justify-center md:p-10 lg:p-25">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className="animate-multiBounce text-center"
        >
          <button className="bg-[#FFFCF8] font-sans text-[#050709] text-[14px] font-medium border border-[#D4A762] py-1 px-7 rounded-2xl lg:font-bold">
            OUR BLOG
          </button>
          <p className="playball text-black text-3xl pt-6 pb-10 md:text-4xl lg:text-5xl">
            Be First Who Read News
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:place-items-center md:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
            <div className="rounded-lg overflow-hidden">
              <img
                className="rounded-lg transition-transform duration-800 ease-in-out hover:scale-130"
                src={FirstImage}
              />
            </div>
            <div className=" transform translate-y-[-50%] rounded-lg flex mx-5">
              <p className="bg-[#D4A762] font-bold px-4 rounded-tl-lg rounded-bl-lg flex text-center items-center">
                16 <br />
                Sep
              </p>
              <p className="bg-[#FFFCF8] text-[20px] font-semibold py-5 px-3.5 rounded-tr-lg rounded-br-lg cursor-pointer transition-all duration-400 ease-in-out hover:text-[#B1905D]">
                How to get more taste in your food from
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
            <div className="rounded-lg overflow-hidden">
              <img
                className="rounded-lg transition-transform duration-800 ease-in-out hover:scale-130"
                src={SecondImage}
                alt=""
              />
            </div>
            <div className=" transform translate-y-[-50%] rounded-lg flex mx-5">
              <p className="bg-[#D4A762] font-bold px-4 rounded-tl-lg rounded-bl-lg flex text-center items-center">
                16 <br />
                Sep
              </p>
              <p className="bg-[#FFFCF8] text-[20px] font-semibold py-5 px-3.5 rounded-tr-lg rounded-br-lg cursor-pointer transition-all duration-400 ease-in-out hover:text-[#B1905D]">
                How to get more taste in your food from
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="600">
            <div className="rounded-lg overflow-hidden">
              <img
                className="rounded-lg transition-transform duration-800 ease-in-out hover:scale-130"
                src={ThirdImage}
                alt=""
              />
            </div>
            <div className=" transform translate-y-[-50%] rounded-lg flex mx-5">
              <p className="bg-[#D4A762] font-bold px-4 rounded-tl-lg rounded-bl-lg flex text-center items-center">
                16 <br />
                Sep
              </p>
              <p className="bg-[#FFFCF8] text-[20px] font-semibold py-5 px-3.5 rounded-tr-lg rounded-br-lg cursor-pointer transition-all duration-400 ease-in-out hover:text-[#B1905D]">
                How to get more taste in your food from
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
