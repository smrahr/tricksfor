import { forwardRef } from "react";
import HowItWorksSection from "./HowItWorksSection";
import Roadmap from "@assets/home/roadmap.png";
import { FaWallet, FaChartLine, FaTrophy } from "react-icons/fa";

const RoadmapContent = [
  {
    id: 1,
    src: Roadmap,
    icon: FaWallet,
    title: "Step 1: Match Setup",
    description:
      "The game starts with a new wallet address specified for the current match.",
  },
  {
    id: 2,
    src: Roadmap,
    icon: FaChartLine,
    title: "Step 2: Place Predictions",
    description:
      "Players forecast outcomes using match statistics and the winner's rewards, with their payments tied to each prediction option.",
  },
  {
    id: 3,
    src: Roadmap,
    icon: FaTrophy,
    title: "Step 3: Winners Rewarded",
    description:
      "Each match will conclude at a specified time. The application will then randomly select a winning option, and the winners will receive rewards from the losers.",
  },
];

const HowItWorks = forwardRef(function HowItWorks(props, ref) {
  return (
    <div className="pt-[72px] m-5">
      <div className="p-8 md:p-12 bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-[50px] shadow-xl">
        <h2
          className="text-[36px] md:text-[48px] font-bold text-center md:text-left mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          ref={ref}
        >
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {RoadmapContent.map((item) => (
            <HowItWorksSection key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default HowItWorks;
