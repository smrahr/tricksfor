import { Link } from "react-router-dom";
import arrow from "@assets/header/arrow.png";

const RoadMap = () => {
  return (
    <div className="bg-primary-800 w-full md:w-[50%] rounded-[50px] grow p-12 flex flex-col justify-center ">
      <h2 className="hidden md:block text-[40px] font-bold mb-4 md:mb-0 text-center md:text-left">
        Tricksfor
      </h2>
      <p className="text-[36px] text-center md:text-[70px] md:text-left mb-8">
        Roadmap
      </p>
      
      <div className="max-w-[554px] flex justify-center items-center md:items-start mb-2 md:mb-5">
        <div className="dark:bg-primary-900 min-w-[64px] h-[64px] rounded-full relative ">
          <div className="before:content-[''] before:bg-primary-900 before:w-[3px] before:h-[140px] before:absolute before:top-[10px] before:left-[32px] "></div>
        </div>
        <div className="ml-2 mt-16 md:mt-5">
          <h3 className="text-[15px] font-bold mb-4">September 2024</h3>
          <p className="text-[14px] ">Launch with basic games</p>
        </div>
      </div>
      <div className="max-w-[554px] flex justify-center items-center md:items-start mb-2 md:mb-5">
        <div className="dark:bg-white min-w-[64px] h-[64px] rounded-full relative z-1">
          <div className="before:content-[''] before:bg-primary-900 before:w-[3px] before:h-[140px] before:absolute before:top-[10px] before:left-[32px]"></div>
          <div className="dark:bg-white min-w-[64px] h-[64px] rounded-full absolute top-0 left-0"></div>
        </div>

        <div className="ml-2 mt-16 md:mt-5">
          <h3 className="text-[15px] font-bold mb-4">October 2024</h3>
          <p className="text-[14px] ">Boosters (NFT Collections)</p>
        </div>
      </div>
      <div className="max-w-[554px] flex justify-center items-center md:items-start mb-2 md:mb-5">
        <div className="dark:bg-white min-w-[64px] h-[64px] rounded-full relative z-1">
          <div className="before:content-[''] before:bg-primary-900 before:w-[3px] before:h-[140px] before:absolute before:top-[10px] before:left-[32px] "></div>
          <div className="dark:bg-white min-w-[64px] h-[64px] rounded-full absolute top-0 left-0"></div>
        </div>
        <div className="ml-2 mt-16 md:mt-5">
          <h3 className="text-[15px] font-bold mb-4">December 2024</h3>
          <p className="text-[14px] ">New chains and tokens on games</p>
        </div>
      </div>
      <div className="max-w-[554px] flex justify-center items-center md:items-start">
        <div className="dark:bg-white min-w-[64px] h-[64px] rounded-full relative z-1"></div>
        <div className="ml-2 mt-16 md:mt-5">
          <h3 className="text-[15px] font-bold mb-4">March 2025</h3>
          <Link target="_blank" to="/roadmap">
            <div className="flex items-end">
              <p className="text-[14px] ">Read more</p>
              <div className="w-[14px] h-[14px] ml-3">
                <img src={arrow} alt="arrow" className="w-[100%]" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
