import aboutProject2 from "@assets/home/aboutProject2.png";
import { FaInfoCircle } from "react-icons/fa";

const AboutProject = () => {
  return (
    <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 w-full md:w-[50%] rounded-[50px] p-8 md:p-12 flex flex-col justify-center shadow-xl hover:border-blue-500/50 transition-all duration-300">
      <div className="w-full mb-8 flex justify-center">
        <div className="relative">
          <img src={aboutProject2} alt="about tricksfor" className="drop-shadow-2xl" />
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <FaInfoCircle className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <h2 className="text-[32px] md:text-[40px] font-bold mb-6 text-center md:text-left bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        About project
      </h2>
      <p className="text-[16px] md:text-[18px] text-gray-300 text-center md:text-left leading-relaxed">
        The developer team has recently launched an innovative game application that integrates cryptocurrency payments based on predictions across various games. This blockchain-based platform ensures full transparency, allowing players to engage in a secure and fair gaming environment.
      </p>
    </div>
  );
};

export default AboutProject;
