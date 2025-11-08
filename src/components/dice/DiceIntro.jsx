import IntroIMG from "@assets/games/DiceIntro.jpg";
import IntroMobIMG from "@assets/games/DiceIntroMob.jpg";
import { FaDice } from "react-icons/fa";

const DiceIntro = () => {
  const features = [
    {
      id: "prediction",
      title: "Prediction",
      description: "Players place their predictions on whether the dice will land on one to six."
    },
    {
      id: "crypto-payment",
      title: "Crypto Payment",
      description: "Predictions are made using various cryptocurrencies (right now MATIC is the only option), providing a secure and fast transaction process."
    },
    {
      id: "guessing",
      title: "Guessing the Future",
      description: "The game tests players' ability to predict the dice's landing side, adding an element of anticipation and strategy."
    }
  ];

  return (
    <div className="dark:bg-primary-900 pt-[180px] md:pt-20 pb-10 px-4">
      <div className="container max-w-[1152px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-4">
            <FaDice className="text-blue-400" />
            Dice Game
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
                Experience the thrill of our high-stakes Dice Game! Predict the outcome and engage with seamless crypto payments for a chance to win big. Are you ready to test your luck and strategy? Here&apos;s how it works:
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
                This game combines the thrill of gambling with the innovative use of cryptocurrency, offering a modern twist to the classic game of chance. It&apos;s perfect for those looking to engage in some fun prediction while using their crypto assets.
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-primary-700/50">
                <img
                  src={IntroIMG}
                  alt="Dice Game"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={IntroMobIMG}
                  alt="Dice Game"
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

export default DiceIntro;
