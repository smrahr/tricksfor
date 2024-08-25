import EachGameSection from "./EachGameSection";

import gameImage from "@assets/home/gameMob.png";

import gameImageRPS from "@assets/home/rps.png";
import gameImageCoin from "@assets/home/coin.png";
import gameImageDice from "@assets/home/dice.png";

import gameImageRPSLong from "@assets/home/rpslong.png";
import gameImageCoinLong from "@assets/home/coinlong.png";
import gameImageDiceLong from "@assets/home/dicelong.png";
import arrow from "@assets/header/arrow.png";

import { Link } from "react-router-dom";

const Games = () => {
  const gamesImages = [
    {
      image: gameImage,
      title: "Tricksfor",
      description: "Games",
    },
    {
      image: gameImageCoinLong,
      title: "Tricksfor",
      description: "Coin",
    },
    {
      image: gameImageRPSLong,
      title: "Tricksfor",
      description: "RPS",
    },
    {
      image: gameImageDiceLong,
      title: "Tricksfor",
      description: "Dice",
    },
  ];
  return (
    <div className="pt-[72px] m-5">
      <div className="block md:hidden p-5">
        {gamesImages.map((item, index) => (
          <EachGameSection key={index} game={item} />
        ))}
      </div>
      <div className="hidden md:block ">
        <div className="grid grid-cols-3 grid-row-2 gap-4">
          <div className="bg-black row-span-2 rounded-[50px] relative overflow-hidden">
            <img src={gameImage} alt="games" className="object-cover h-full" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <h2 className="text-[60px] font-bold">Games</h2>
              <Link target="_blank" to="/games">
                <div className="flex items-end">
                  <p className="text-[20px]">Learn more</p>
                  <div className="w-[20px] h-[20px] ml-3">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-2 rounded-[50px] relative">
            <img
              src={gameImageDice}
              alt="Dice"
              className="w-[100%]"
              // className="object-contain"
            />
            <div className="absolute bottom-6 left-6 ">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <h2 className="text-[60px] font-bold">Dice</h2>
              <Link target="_blank" to="/games/dice">
                <div className="flex items-end">
                  <p className="text-[20px]">Learn more</p>
                  <div className="w-[20px] h-[20px] ml-3">
                    <img src={arrow} alt="arrow" className="w-[100%]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className=" rounded-[50px] relative">
            <img
              src={gameImageRPS}
              alt="RPS"
              className="w-[100%]"
              // className="object-contain"
            />
            <div className="absolute bottom-6 left-6 ">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <h2 className="text-[60px] font-bold">RPS</h2>
              <Link target="_blank" to="/games/rps">
                <div className="flex items-end">
                  <p className="text-[20px]">Learn more</p>
                  <div className="w-[20px] h-[20px] ml-3">
                    <img src={arrow} alt="arrow" className="w-[100%]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className=" rounded-[50px] relative">
            <img
              src={gameImageCoin}
              alt="gameImage"
              className="w-[100%]"
              //className="object-contain"
            />
            <div className="absolute bottom-6 left-6 ">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <h2 className="text-[60px] font-bold">Heads or Tails</h2>
              <Link target="_blank" to="/games/coin">
                <div className="flex items-end">
                  <p className="text-[20px]">Learn more</p>
                  <div className="w-[20px] h-[20px] ml-3">
                    <img src={arrow} alt="arrow" className="w-[100%]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
