import IntroIMG from "@assets/games/RockPaperScissorIntro.jpg";
import IntroMobIMG from "@assets/games/RockPaperScissorIntroMob.jpg";
import { FaHandRock } from "react-icons/fa";

const RockPaperScissorIntro = () => {
  const features = [
    {
      id: "classic-choices",
      title: "Classic Choices",
      description: "Pick Rock, Paper, or Scissors and place your bet on your choice."
    },
    {
      id: "crypto-payment",
      title: "Fast Crypto Betting",
      description: "Bet using MATIC (Polygon network). Secure, fast transactions with low fees."
    },
    {
      id: "strategic",
      title: "Strategic Gameplay",
      description: "33% chance to win each round. Think strategically and predict which option will dominate!"
    }
  ];

  return (
    <div className="dark:bg-primary-900 pt-[180px] md:pt-20 pb-10 px-4">
      <div className="container max-w-[1152px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-4">
            <FaHandRock className="text-blue-400" />
            Rock Paper Scissor
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-[50px] p-6 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-[24px] md:text-[28px] font-bold text-white">
                About the Game
              </h2>
              <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed">
                The childhood classic meets blockchain gaming! Choose Rock, Paper, or Scissors, place your crypto bet, and see if your choice beats the competition. Here&apos;s how it works:
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="group bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500/30 rounded-2xl p-4 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg"
                  >
                    <h3 className="text-[16px] md:text-[18px] font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed pt-4">
                With 3 options and fair odds, this game offers the perfect balance between strategy and chance. Will you go with the reliable Rock, the versatile Paper, or the sharp Scissors?
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-primary-700/50">
                <img
                  src={IntroIMG}
                  alt="Rock Paper Scissor Game"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={IntroMobIMG}
                  alt="Rock Paper Scissor Game"
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

export default RockPaperScissorIntro;
