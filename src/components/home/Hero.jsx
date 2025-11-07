import heriImage from "@assets/home/heroImage.png";
import heriImageDesc from "@assets/home/heroImageDesc.png";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-bl-[50px] md:rounded-[50px] m-0 md:m-5 p-8 md:p-12 shadow-xl">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="pt-[108px] w-[278px] block md:hidden">
          <img src={heriImage} alt="tricksfor" className="drop-shadow-2xl" />
        </div>
        <div className="hidden md:block flex-1">
          <img src={heriImageDesc} alt="tricksfor" className="drop-shadow-2xl max-w-full" />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex flex-col justify-center items-center md:items-start mb-8">
            <h1 className="font-bold text-[48px] md:text-[72px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tricksfor
            </h1>
            <h1 className="text-[36px] md:text-[56px] font-semibold">Crypto</h1>
            <h1 className="text-[36px] md:text-[56px] font-semibold">Gaming Hub</h1>
          </div>
          <Link target="_blank" to="https://app.tricksfor.com" className="w-full md:w-auto">
            <button className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-full w-full md:w-[280px] h-[70px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <FaRocket className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-[24px] font-bold text-white">Launch App</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
