import AboutProject from "./AboutProject";
import Roadmap from "./RoadmapSection";

const Body = () => {
  return (
    <div className="dark:bg-primary-900  flex flex-col md:flex-row justify-center gap-4 pt-[72px] m-5 md:m-0">
      <AboutProject />
      <Roadmap />
    </div>
  );
};

export default Body;
