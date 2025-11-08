import ProsConsIMG from "@assets/games/DiceProsCons.jpg";
import ProsConsMobIMG from "@assets/games/DiceProsConsMob.jpg";
import { FaThumbsUp, FaExclamationTriangle } from "react-icons/fa";

const ProsAndCons = () => {
  const pros = [
    {
      title: "Huge Winning Potential",
      description: "Win big! When you guess correctly, you collect from all 5 other number groups. Your payout is significantly higher than other games."
    }
  ];

  const cons = [
    {
      title: "Lower Win Probability",
      description: "Only 16.66% chance to win (1 in 6). Higher risk compared to other games."
    },
    {
      title: "More Choices to Consider",
      description: "With 6 different options, picking the right number requires more strategy and luck."
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
                  src={ProsConsIMG}
                  alt="Dice Game Analysis"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={ProsConsMobIMG}
                  alt="Dice Game Analysis"
                  className="block md:hidden w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-[24px] md:text-[28px] font-bold text-white">
                Pros and Cons
              </h2>

              {/* Pros Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaThumbsUp className="text-green-400 w-5 h-5" />
                  <h3 className="text-[18px] md:text-[20px] font-bold text-green-400">
                    Pros
                  </h3>
                </div>
                <div className="space-y-3">
                  {pros.map((pro) => (
                    <div
                      key={pro.title}
                      className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/30 rounded-xl p-4"
                    >
                      <p className="text-[14px] md:text-[15px] font-bold text-white mb-1">
                        {pro.title}
                      </p>
                      <p className="text-[13px] md:text-[14px] text-gray-300">
                        {pro.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaExclamationTriangle className="text-orange-400 w-5 h-5" />
                  <h3 className="text-[18px] md:text-[20px] font-bold text-orange-400">
                    Cons
                  </h3>
                </div>
                <div className="space-y-3">
                  {cons.map((con) => (
                    <div
                      key={con.title}
                      className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-2 border-orange-500/30 rounded-xl p-4"
                    >
                      <p className="text-[14px] md:text-[15px] font-bold text-white mb-1">
                        {con.title}
                      </p>
                      <p className="text-[13px] md:text-[14px] text-gray-300">
                        {con.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsAndCons;
