import BoostersIMG from "@assets/games/DiceBoosters.jpg";
import BoostersMobIMG from "@assets/games/DiceBoostersMob.jpg";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Boosters = () => {
  const boosterCollections = [
    {
      name: "Normal Coin Collection",
      multiplier: "2x",
      link: "/"
    },
    {
      name: "Premium Coin Collection",
      multiplier: "3x",
      link: "/"
    },
    {
      name: "Golden Coin Collection",
      multiplier: "5x",
      link: "/"
    }
  ];

  return (
    <div className="dark:bg-primary-900 py-10 px-4">
      <div className="container max-w-[1152px] mx-auto">
        <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-[50px] p-6 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-primary-700/50">
                <img
                  src={BoostersIMG}
                  alt="Boosters"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={BoostersMobIMG}
                  alt="Boosters"
                  className="block md:hidden w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <FaRocket className="text-purple-400 w-8 h-8" />
                <h2 className="text-[24px] md:text-[28px] font-bold text-white">
                  Multiply Your Wins with Boosters
                </h2>
              </div>

              <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed">
                Want bigger rewards? Stake NFT Boosters from your wallet in the TricksFor app and watch your winnings multiply! When you win a match with boosters staked, you&apos;ll earn bonus rewards based on each NFT&apos;s multiplier.
              </p>

              {/* Booster Collections */}
              <div className="space-y-4">
                {boosterCollections.map((booster) => (
                  <div
                    key={booster.name}
                    className="group bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-2 border-purple-500/30 rounded-xl p-4 hover:border-purple-500/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FaRocket className="w-4 h-4 text-purple-400" />
                          <span className="text-[15px] md:text-[16px] font-bold text-white">
                            {booster.name}
                          </span>
                        </div>
                        <p className="text-[13px] md:text-[14px] text-gray-300">
                          Check it out on{" "}
                          <Link
                            to={booster.link}
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            OpenSea
                          </Link>
                        </p>
                      </div>
                      <span className="text-[20px] md:text-[24px] font-bold text-purple-400">
                        {booster.multiplier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[13px] md:text-[14px] text-gray-400 italic">
                Stack multiple boosters and combine them with streaks for massive wins!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boosters;
