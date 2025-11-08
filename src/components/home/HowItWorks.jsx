import { forwardRef } from "react";
import HowItWorksSection from "./HowItWorksSection";
import Roadmap from "@assets/home/roadmap.png";
import { FaWallet, FaChartLine, FaTrophy } from "react-icons/fa";

const RoadmapContent = [
  {
    id: 1,
    src: Roadmap,
    icon: FaWallet,
    title: "Step 1: Connect Your Wallet",
    description:
      "Each match starts with a fresh, dedicated wallet address for complete transparency. Connect your Web3 wallet to begin.",
  },
  {
    id: 2,
    src: Roadmap,
    icon: FaChartLine,
    title: "Step 2: Analyze & Predict",
    description:
      "Review match stats, see what others are predicting, and place your bet using crypto on your chosen outcome.",
  },
  {
    id: 3,
    src: Roadmap,
    icon: FaTrophy,
    title: "Step 3: Win & Get Rewarded",
    description:
      "When the match ends, the winning outcome is randomly selected. Winners automatically receive their rewards from the prize pool!",
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
