import HowItWorksSection from "./HowItWorksSection";
import RoadMap from "@assets/home/roadmap.png";

const RoadMapContent = [
  {
    id: 1,
    src: RoadMap,
    title: "Step 1",
    description: "Game initiated with a new wallet address on each defined chain (Polygon, Arbitrum, ...).",
  },
  {
    id: 1,
    src: RoadMap,
    title: "Step 2",
    description: "Players forecast outcomes using match statistics and the winner’s rewards, with their payments tied to each prediction option.",
  },
  {
    id: 1,
    src: RoadMap,
    title: "Step 3",
    description: "Each match will conclude at a specified time. The application will then randomly select a winning option, and the winners will receive rewards from the losers.",
  },
];

const HowItWorks = () => {
  return (
    <div className="container dark:bg-primary-800 md:dark:bg-primary-800 rounded-[0px] md:rounded-[50px] max-w-[1152px] flex flex-col md:flex-row justify-center items-top gap-4 p-5 pb-[72px]">
      {RoadMapContent.map((item) => (
        <HowItWorksSection key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HowItWorks;
