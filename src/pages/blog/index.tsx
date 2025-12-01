// import React from 'react'
import FirstImage from "../../assets/images/imgi_29_blog-1.jpg";
import SecondImage from "../../assets/images/imgi_30_blog-2.jpg";
import ThirdImage from "../../assets/images/imgi_31_blog-3.jpg";
const Blog = () => {
  return (
    <>
      <div className="p-25 flex flex-col justify-center">
        <div className="text-center">
          <button className="bg-[#FFFCF8] font-sans text-[#050709] text-[14px] font-bold border border-[#D4A762] py-1 px-7 rounded-2xl">
            OUR BLOG
          </button>
          <p className="playball text-black text-5xl pt-6 pb-10">
            Be First Who Read News
          </p>
        </div>
        <div className="flex gap-5">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img
                className="rounded-lg transition-transform duration-800 ease-in-out hover:scale-130"
                src={FirstImage}
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
          <div>
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
          <div>
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
