const Home = () => {
  return (
    <div className="bg-[#FFFCF8] px-25 py-20">
      <div>
        <div className="py-5">
          <button className="font-sans text-[#050709] text-[14px] font-bold border border-[#D4A762] py-1 px-5 rounded-2xl">
            WELCOME TO CATERSERV
          </button>
        </div>
        <div className="playball text-black text-7xl py-5">
          Book<span className="text-[#D4A762]">Cater</span>Serv For <br />
          Your Dream Event
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
    </div>
  );
};

export default Home;
