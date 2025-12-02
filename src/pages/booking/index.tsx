// import React from 'react'
import FirstImage from "../../assets/images/imgi_20_background-site.jpg";
const BookUs = () => {
  return (
    <div className="px-5 py-25 md:px-10 lg:px-25">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="100"
        className="animate-multiBounce flex justify-center w-full"
      >
        <div className="w-1/10">
          <img
            className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
            src={FirstImage}
          />
        </div>
        <div className="text-center bg-[#FFFCF8] py-12 px-2.5 w-8/10 border-t border-[#D4A762] border-b md:px-5">
          <button className="font-sans text-[#050709] text-[14px] font-medium border border-[#D4A762] py-1 px-7 rounded-2xl lg:font-bold">
            BOOK US
          </button>
          <p className="playball text-black text-3xl pt-6 md:text-4xl lg:text-5xl">
            Where you want Our Services
          </p>
          <form className="pt-10 ">
            <div className="grid grid-cols-1 gap-5 py-2.5 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <select
                  name="country"
                  id="country"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                >
                  <option value="usa">Select Country</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="india">India</option>
                </select>
              </div>
              <div>
                <select
                  name="country"
                  id="country"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                >
                  <option value="usa">Select City</option>
                  <option value="usa">RYK</option>
                  <option value="uk">Faisalabd</option>
                  <option value="india">Islamabad</option>
                </select>
              </div>
              <div>
                <select
                  name="country"
                  id="country"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                >
                  <option value="usa">Select Palace</option>
                  <option value="usa">Depend On Country</option>
                  <option value="uk">UK</option>
                  <option value="india">India</option>
                </select>
              </div>
              <div>
                <select
                  name="country"
                  id="country"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                >
                  <option value="event">Event Type</option>
                  <option value="small">Small Event</option>
                  <option value="big">Big Event</option>
                </select>
              </div>
              <div>
                <select
                  name="country"
                  id="country"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                >
                  <option value="no">No. Of palace</option>
                  <option value="200">100-200</option>
                  <option value="300">200-300</option>
                  <option value="400">300-400</option>
                  <option value="500">400-500</option>
                  <option value="600">500-600</option>
                  <option value="700">600-700</option>
                  <option value="800">700-800</option>
                  <option value="900">800-900</option>
                  <option value="1000">900-1000</option>
                  <option value="1100">1000+</option>
                </select>
              </div>
              <div>
                <select
                  name="country"
                  id="country"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                >
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non">Non Vegetarian</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Contact No."
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                />
              </div>
              <div>
                <input
                  type="date"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-white border border-[#D4A762] py-2.5 px-2.5 rounded-lg w-full text-[#9A9A9A] font-normal focus:ring-4 focus:ring-[#F4E7D3] 
         outline-none"
                />
              </div>
            </div>
            <div>
              <button className="bg-[#D4A762] px-10 py-3.5 mt-5 font-semibold rounded-4xl cursor-pointer transition-all duration-500 ease-in-out  hover:bg-black hover:text-[#D4A762]">
                Submit Now
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/10">
          <img
            className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
            src={FirstImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BookUs;
