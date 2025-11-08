import StreaksImg from "@assets/games/Streaks.jpg";
import StreaksMob from "@assets/games/StreaksMob.jpg";
import { FaFire } from "react-icons/fa";

const Streaks = () => {
  const streakMilestones = [
    { days: "7 days", multiplier: "1.5x" },
    { days: "14 days", multiplier: "2x" },
    { days: "30 days", multiplier: "3x" },
    { days: "100 days", multiplier: "5x" },
    { days: "300 days", multiplier: "10x" }
  ];

  return (
    <div className="dark:bg-primary-900 py-10 px-4">
      <div className="container max-w-[1152px] mx-auto">
        <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-[50px] p-6 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <FaFire className="text-orange-400 w-8 h-8" />
                <h2 className="text-[24px] md:text-[28px] font-bold text-white">
                  Build Your Streak, Boost Your Rewards
                </h2>
              </div>

              <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed">
                Play consistently and unlock massive reward multipliers! Keep your streak alive by playing at least one game each day. The longer you play, the bigger your bonuses when you win:
              </p>

              {/* Streak Milestones */}
              <div className="space-y-3">
                {streakMilestones.map((streak) => (
                  <div
                    key={streak.days}
                    className="group bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-500/30 rounded-xl p-4 hover:border-orange-500/60 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                          <FaFire className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[14px] md:text-[15px] font-bold text-white">
                          {streak.days}
                        </span>
                      </div>
                      <span className="text-[18px] md:text-[20px] font-bold text-orange-400">
                        {streak.multiplier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-primary-700/50">
                <img
                  src={StreaksImg}
                  alt="Streaks"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={StreaksMob}
                  alt="Streaks"
                  className="block md:hidden w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streaks;
