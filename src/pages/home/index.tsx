import HomeImage from "../../assets/images/imgi_1_hero.png";
import About from "../about";
const Home = () => {
  return (
    <>
      <div className="bg-[#FFFCF8] px-30 py-20 flex justify-between">
        <div className="w-1/2 flex flex-col self-center">
          <div className="py-5">
            <button className="font-sans text-[#050709] text-[14px] font-bold border border-[#D4A762] py-1 px-5 rounded-2xl">
              WELCOME TO CATERSERV
            </button>
          </div>
          <div className="playball text-black text-7xl leading-25">
            Book<span className="text-[#D4A762]">Cater</span>Serv For Your Dream
            Event
          </div>
          <div className="flex gap-2.5 py-5">
            <button className="bg-[#D4A762] text-lg font-semibold py-3 px-10 rounded-3xl cursor-pointer hover:bg-black hover:text-[#D4A762]">
              Book Now
            </button>
            <button className="bg-[#D4A762] text-lg font-semibold py-3 px-10 rounded-3xl cursor-pointer hover:bg-black hover:text-[#D4A762]">
              Know Me
            </button>
          </div>
        </div>
        <div className="h-[70vh]">
          <img className="h-full w-full object-cover" src={HomeImage} alt="" />
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
