import ProsConsIMG from "@assets/games/CoinProsCons.jpg";
import ProsConsMobIMG from "@assets/games/CoinProsConsMob.jpg";
import { FaThumbsUp, FaExclamationTriangle } from "react-icons/fa";

const ProsAndCons = () => {
  const pros = [
    {
      title: "Win value: medium",
      description: "With a successful guess, you win the value of your prediction."
    }
  ];

  const cons = [
    {
      title: "Risk: medium",
      description: "There is 50% chance to win the game."
    },
    {
      title: "Difficulty: medium",
      description: "There are two options available to place your prediction."
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
                  alt="Heads or Tails Game Analysis"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={ProsConsMobIMG}
                  alt="Heads or Tails Game Analysis"
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
