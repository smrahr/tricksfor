import EachGameSection from "./EachGameSection";
import gameImage from "@assets/home/gameMob.png";
import gameImageDesc1 from "@assets/home/gameDesc1.png";
import gameImageDesc2 from "@assets/home/gameDesc2.png";
import gameImageDesc3 from "@assets/home/gameDesc3.png";
import gameImageDesc4 from "@assets/home/gameDesc4.png";

const Games = () => {
  const gamesImages = [
    {
      image: gameImage,
      title: "Tricksfor",
      description: "Unleash Your Unleash Your",
    },
    {
      image: gameImage,
      title: "Tricksfor",
      description: "Unleash Your Unleash Your",
    },
    {
      image: gameImage,
      title: "Tricksfor",
      description: "Unleash Your Unleash Your",
    },
    {
      image: gameImage,
      title: "Tricksfor",
      description: "Unleash Your Unleash Your",
    },
  ];
  return (
    <div className="px-5 py-[72px]">
      <div className="block md:hidden">
        {gamesImages.map((item, index) => (
          <EachGameSection key={index} game={item} />
        ))}
      </div>
      <div className="hidden md:block ">
        <div className="grid grid-cols-3 grid-row-2 gap-4">
          <div className="bg-white row-span-2 rounded-[50px]">
            <img
              src={gameImageDesc1}
              alt="gameImage"
              className="object-cover"
              width="800"
              height="1000"
            />
          </div>
          <div className=" col-span-2 rounded-[50px]">
            <img
              src={gameImageDesc2}
              alt="gameImage"
              className="object-contain"
              width="800"
              height="400"
            />
          </div>
          <div className=" rounded-[50px]">
            <img
              src={gameImageDesc3}
              alt="gameImage"
              className="object-contain"
              width="400"
              height="400"
            />
          </div>
          <div className=" rounded-[50px]">
            <img
              src={gameImageDesc4}
              alt="gameImage"
              className="object-contain"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
