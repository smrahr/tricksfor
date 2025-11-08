import RewardIMG from "@assets/affiliate/AffiliateReward.png";
import RewardIMGMob from "@assets/affiliate/AffiliateRewardMob.png";
import { FaGamepad, FaImage } from "react-icons/fa";

const AffiliateReward = () => {
  const rewards = [
    {
      icon: FaGamepad,
      title: "Game Winnings",
      percentage: "1%",
      description: "Every time your referee wins a match, you automatically earn 1% of their winnings. The more they play and win, the more you earn!"
    },
    {
      icon: FaImage,
      title: "NFT Purchases",
      percentage: "10%",
      description: "When your referee buys an NFT booster from any TricksFor collection, you get 10% of the purchase value. That's instant passive income!"
    }
  ];

  return (
    <div className="dark:bg-primary-900 py-10 px-4">
      <div className="container max-w-[1152px] mx-auto">
        <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-[50px] p-6 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-primary-700/50">
                <img
                  src={RewardIMG}
                  alt="Affiliate Rewards"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={RewardIMGMob}
                  alt="Affiliate Rewards"
                  className="block md:hidden w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
              <h2 className="text-[24px] md:text-[28px] font-bold text-white">
                Your Rewards
              </h2>

              {/* Reward Cards */}
              <div className="space-y-4">
                {rewards.map((reward) => {
                  const Icon = reward.icon;
                  return (
                    <div
                      key={reward.title}
                      className="group bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/30 rounded-2xl p-5 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[18px] md:text-[20px] font-bold text-white">
                              {reward.title}
                            </h3>
                            <span className="text-[20px] md:text-[24px] font-bold text-green-400">
                              {reward.percentage}
                            </span>
                          </div>
                          <p className="text-[13px] md:text-[14px] text-gray-300 leading-relaxed">
                            {reward.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateReward;
