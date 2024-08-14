import EachGameSection from "./EachGameSection";
import gameImage from "@assets/home/gameMob.png";
import gameImageDesc1 from "@assets/home/gameDesc1.png";
import gameImageDesc2 from "@assets/home/gameDesc2.png";
import gameImageDesc3 from "@assets/home/gameDesc3.png";
import gameImageDesc4 from "@assets/home/gameDesc4.png";
import arrow from "@assets/header/arrow.png";

import { Link } from "react-router-dom";

const Games = () => {
  const gamesImages = [
    {
      image: gameImageDesc1,
      title: "Games",
      description: "Unleash Your Unleash Your",
    },
    {
      image: gameImageDesc4,
      title: "Coin",
      description: "Unleash Your Unleash Your",
    },
    {
      image: gameImageDesc3,
      title: "RPS",
      description: "Unleash Your Unleash Your",
    },
    {
      image: gameImageDesc2,
      title: "Dice",
      description: "Unleash Your Unleash Your",
    },
  ];
  return (
    <div className="py-[72px]">
      <div className="block md:hidden">
        {gamesImages.map((item, index) => (
          <EachGameSection key={index} game={item} />
        ))}
      </div>
      <div className="hidden md:block ">
        <div className="grid grid-cols-3 grid-row-2 gap-4">
          <div className="bg-black row-span-2 rounded-[50px] relative overflow-hidden">
            <img
              src={gameImageDesc1}
              alt="gameImage"
              className="object-cover h-full"
            />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <p className="text-[60px] font-bold">Games</p>
              <Link target="_blank" to="/">
                <div className="flex items-end">
                  <p className="text-[20px]">Learn more</p>
                  <div className="w-[20px] h-[20px] ml-3">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className=" col-span-2 rounded-[50px] relative">
            <img src={gameImageDesc2} alt="gameImage" className="w-[100%]"
              // className="object-contain"
            />
            <div className="absolute bottom-6 left-6 ">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <p className="text-[60px] font-bold">Dice</p>
              <Link target="_blank" to="/">
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
              src={gameImageDesc3}
              alt="gameImage" className="w-[100%]"
              // className="object-contain"
            />
            <div className="absolute bottom-6 left-6 ">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <p className="text-[60px] font-bold">RPS</p>
              <Link target="_blank" to="/">
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
            <img src={gameImageDesc4} alt="gameImage" className="w-[100%]" 
              //className="object-contain" 
            />
            <div className="absolute bottom-6 left-6 ">
              <h2 className="text-[35px] font-bold">Tricksfor</h2>
              <p className="text-[60px] font-bold">Heads or Tails</p>
              <Link target="_blank" to="/">
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
