import EachGameSection from "./EachGameSection";
import gameImage from "@assets/home/gameMob.png";

const Games = () => {
  console.log(gameImage, "kkkkkkk");
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
  ];
  return (
    <div className="px-5 py-[72px]">
      {gamesImages.map((item, index) => (
        <EachGameSection key={index} game={item} />
      ))}
    </div>
  );
};

export default Games;
