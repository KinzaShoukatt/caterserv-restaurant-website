import HomeImage from "../../assets/images/imgi_1_hero.png";
import About from "../about";
import Blog from "../blog";
import BookUs from "../booking";
import Events from "../eventspage";
import Menu from "../menu";
import Services from "../servicesPage";
import Team from "../team";
const Home = () => {
  return (
    <>
      <div className="bg-[#FFFCF8] px-5 py-10 flex flex-col gap-5 justify-between lg:flex-row md:px-10 lg:px-30 lg:py-20">
        <div className="w-full flex flex-col self-center lg:w-1/2">
          <div data-aos="fade-down" data-aos-duration="900" className="py-5">
            <button className="font-sans text-[#050709] text-[14px] font-medium border border-[#D4A762] py-1 px-5 rounded-2xl lg:font-bold">
              WELCOME TO CATERSERV
            </button>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="900"
            className="playball text-black text-4xl md:text-7xl lg:leading-25"
          >
            Book<span className="text-[#D4A762]">Cater</span>Serv For Your Dream
            Event
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="slide-overshoot flex flex-col gap-2.5 py-5 md:flex-row"
          >
            <button className="bg-[#D4A762] text-lg font-semibold px-5 py-2 rounded-3xl cursor-pointer transition-all duration-500 w-fit hover:bg-black hover:text-[#D4A762] md:py-3 md:px-10">
              Book Now
            </button>
            <button className="bg-[#D4A762] text-lg font-semibold px-6 py-2 rounded-3xl cursor-pointer transition-all duration-500 w-fit hover:bg-black hover:text-[#D4A762] md:py-3 md:px-10">
              Know Me
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1300"
          className="lg:h-[70vh]"
        >
          <img
            className="h-full w-full object-contain"
            src={HomeImage}
            alt=""
          />
        </div>
      </div>
      <About />
      <Services />
      <Events />
      <Menu />
      <BookUs />
      <Team />
      <Blog />
    </>
  );
};

export default Home;
