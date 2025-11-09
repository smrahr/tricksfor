import { roadmapData, ROADMAP_STATUS } from "@constants/roadmapData";
import { FaCheckCircle, FaCircle, FaHourglassHalf } from "react-icons/fa";
import SeoHead from "@components/SEO";

const Roadmap = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case ROADMAP_STATUS.COMPLETED:
        return {
          icon: FaCheckCircle,
          bg: "bg-gradient-to-r from-green-500 to-emerald-600",
          text: "Completed",
          glow: "shadow-green-500/50",
        };
      case ROADMAP_STATUS.IN_PROGRESS:
        return {
          icon: FaHourglassHalf,
          bg: "bg-gradient-to-r from-blue-500 to-cyan-600",
          text: "In Progress",
          glow: "shadow-blue-500/50",
        };
      case ROADMAP_STATUS.FUTURE:
        return {
          icon: FaCircle,
          bg: "bg-gradient-to-r from-purple-500 to-pink-600",
          text: "Upcoming",
          glow: "shadow-purple-500/50",
        };
      default:
        return {
          icon: FaCircle,
          bg: "bg-gray-500",
          text: "Future",
          glow: "shadow-gray-500/50",
        };
    }
  };

  return (
    <div className="dark:bg-primary-900 pt-[180px] md:pt-20 pb-20 px-4">
      <SeoHead page="roadmap" />
      <div className="container max-w-[1152px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Roadmap
          </h1>
          <p className="text-gray-300 text-[16px] md:text-[18px] max-w-2xl mx-auto">
            Follow our journey as we build the future of decentralized gaming
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {roadmapData.map((item, index) => {
              const Icon = item.icon;
              const status = getStatusBadge(item.status);
              const StatusIcon = status.icon;
              const isLeft = index % 2 === 0;

              // Determine card gradient based on status
              let cardGradient = "from-purple-900/40 to-pink-900/40 border-purple-500/50";
              if (item.status === ROADMAP_STATUS.COMPLETED) {
                cardGradient = "from-green-900/40 to-emerald-900/40 border-green-500/50";
              } else if (item.status === ROADMAP_STATUS.IN_PROGRESS) {
                cardGradient = "from-blue-900/40 to-cyan-900/40 border-blue-500/50";
              }

              // Determine decorative corner color
              let cornerGlow = "bg-purple-500/20";
              if (item.status === ROADMAP_STATUS.COMPLETED) {
                cornerGlow = "bg-green-500/20";
              } else if (item.status === ROADMAP_STATUS.IN_PROGRESS) {
                cornerGlow = "bg-blue-500/20";
              }

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:pr-12 pl-16 md:pl-0" : "md:pl-12 pl-16 md:pr-0"
                    }`}
                  >
                    <div
                      className={`group relative bg-gradient-to-br ${cardGradient} dark:bg-primary-800/80 backdrop-blur-sm border-2 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                    >
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[12px] md:text-[13px] font-semibold text-gray-400 uppercase tracking-wider">
                          {item.date}
                        </span>
                        <div
                          className={`flex items-center gap-1.5 ${status.bg} px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-bold text-white shadow-lg ${status.glow}`}
                        >
                          <StatusIcon className="w-2.5 h-2.5" />
                          {status.text}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2 flex items-center gap-2">
                        <Icon className="w-5 h-5 text-blue-400" />
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative Corner */}
                      <div
                        className={`absolute -top-2 -right-2 w-12 h-12 ${cornerGlow} rounded-full blur-xl`}
                      ></div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${status.bg} flex items-center justify-center shadow-xl ${status.glow} border-4 border-primary-900 transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alignment on desktop */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* End Marker */}
          <div className="relative flex justify-center mt-12">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-xl shadow-blue-500/50 border-4 border-primary-900 animate-pulse">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-900 flex items-center justify-center">
                <span className="text-xl md:text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-[12px] md:text-[14px]">
            Timeline subject to change. Follow us for the latest updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
