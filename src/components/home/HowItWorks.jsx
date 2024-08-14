import HowItWorksSection from "./HowItWorksSection";
import RoadMap from "@assets/home/roadmap.png";

const RoadMapContent = [
  {
    id: 1,
    src: RoadMap,
    title: "Tricksfor",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 1,
    src: RoadMap,
    title: "Tricksfor",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 1,
    src: RoadMap,
    title: "Tricksfor",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
];

const HowItWorks = () => {
  return (
    <div className="container dark:bg-primary-800 md:dark:bg-primary-800 rounded-[0px] md:rounded-[50px] max-w-[1152px] flex flex-col md:flex-row justify-center items-center gap-4 p-5 pb-[72px]">
      {RoadMapContent.map((item) => (
        <HowItWorksSection key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HowItWorks;
