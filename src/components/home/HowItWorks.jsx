import HowItWorksSection from "./HowItWorksSection";
import RoadMap from "@assets/home/roadmap.png";

const RoadMapContent = [
  {
    id: 1,
    src: RoadMap,
    title: "Step 1",
    description:
      "The game starts with a new wallet address specified for the current match.",
  },
  {
    id: 2,
    src: RoadMap,
    title: "Step 2",
    description:
      "Players forecast outcomes using match statistics and the winner’s rewards, with their payments tied to each prediction option.",
  },
  {
    id: 3,
    src: RoadMap,
    title: "Step 3",
    description:
      "Each match will conclude at a specified time. The application will then randomly select a winning option, and the winners will receive rewards from the losers.",
  },
];

const HowItWorks = () => {
  return (
    <div className="pt-[72px]">
      <div className="p-5 md:dark:bg-primary-800 rounded-[0px] md:rounded-[50px] max-w-[1152px]">
        <h2 className="text-[36px] text-center md:text-[40px] md:text-left pl-10">
          How it works
        </h2>
        
        <div className="container flex flex-col md:flex-row justify-center items-top gap-6 p-10">
          {RoadMapContent.map((item) => (
            <HowItWorksSection key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
