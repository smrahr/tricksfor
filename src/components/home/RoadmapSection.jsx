import { Link } from "react-router-dom";
import { getPreviewRoadmap } from "@constants/roadmapData";
import { FaArrowRight } from "react-icons/fa";

const Roadmap = () => {
  const previewItems = getPreviewRoadmap(3);
  
  return (
    <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 w-full md:w-[50%] rounded-[50px] p-8 md:p-12 flex flex-col justify-center shadow-xl hover:border-purple-500/50 transition-all duration-300">
      <h2 className="text-[32px] md:text-[40px] font-bold mb-2 text-center md:text-left bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Tricksfor
      </h2>
      <p className="text-[48px] md:text-[64px] font-bold text-center md:text-left mb-8 text-white">
        Roadmap
      </p>

      {previewItems.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === previewItems.length - 1;
        const isFirst = index === 0;
        
        return (
          <div key={item.id} className="max-w-[554px] flex items-start mb-6 group">
            <div className={`relative flex-shrink-0`}>
              <div className={`${
                isFirst 
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
                  : 'bg-white'
              } w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-7 h-7 ${isFirst ? 'text-white' : 'text-primary-900'}`} />
              </div>
              {!isLast && (
                <div className="absolute top-16 left-[31px] w-0.5 h-20 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}
            </div>
            <div className="ml-4 mt-2">
              <h3 className="text-[14px] md:text-[16px] font-bold mb-2 text-purple-400">
                {item.date}
              </h3>
              <p className="text-[13px] md:text-[15px] text-gray-300 leading-relaxed">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}

      {/* Read More Section */}
      <div className="max-w-[554px] flex items-start group">
        <div className="relative flex-shrink-0">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            {(() => {
              const lastItem = getPreviewRoadmap(4)[3];
              if (lastItem) {
                const Icon = lastItem.icon;
                return <Icon className="w-7 h-7 text-primary-900" />;
              }
              return null;
            })()}
          </div>
        </div>
        <div className="ml-4 mt-2">
          <h3 className="text-[14px] md:text-[16px] font-bold mb-2 text-purple-400">
            {(() => {
              const lastItem = getPreviewRoadmap(4)[3];
              return lastItem ? lastItem.date : "Future";
            })()}
          </h3>
          <Link target="_blank" to="/roadmap">
            <div className="flex items-center gap-2 hover:gap-3 transition-all duration-300">
              <span className="text-[13px] md:text-[15px] text-blue-400 font-semibold">
                See full roadmap
              </span>
              <FaArrowRight className="w-4 h-4 text-blue-400" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
