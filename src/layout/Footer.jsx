import footerLogo from "@assets/icon.png";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[72px] m-5">
      <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 w-full rounded-[50px] p-8 md:p-12 flex justify-between items-center flex-col md:flex-row gap-6 shadow-xl">
        <div className="hidden md:flex items-center gap-4">
          <div className="relative group">
            <img
              src={footerLogo}
              alt="logo"
              className="rounded-[25px] w-[70px] h-[70px] transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-[25px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          <Link target="_blank" to="/" className="group">
            <p className="text-[16px] md:text-[18px] text-gray-300 hover:text-white transition-colors duration-300 relative">
              Support
              {' '}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </p>
          </Link>
          <Link target="_blank" to="/" className="group">
            <p className="text-[16px] md:text-[18px] text-gray-300 hover:text-white transition-colors duration-300 relative">
              Terms of use
              {' '}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </p>
          </Link>
          <Link target="_blank" to="/" className="group">
            <p className="text-[16px] md:text-[18px] text-gray-300 hover:text-white transition-colors duration-300 relative">
              Privacy policy
              {' '}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </p>
          </Link>
        </div>
        
        <div className="hidden md:block">
          <div className="flex gap-4 justify-center items-center">
            <a href="https://discord.gg/j7xd2uSFvy" target="_blank" className="group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaDiscord className="w-6 h-6 text-white" />
              </div>
            </a>
          </div>
        </div>
        
        <div className="block md:hidden">
          <div className="flex gap-6 justify-center items-center mt-4">
            <a href="https://discord.gg/j7xd2uSFvy" target="_blank" className="group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaDiscord className="w-6 h-6 text-white" />
              </div>
            </a>
            <div className="relative group">
              <img
                src={footerLogo}
                alt="logo"
                className="rounded-[25px] w-[70px] h-[70px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-[25px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
