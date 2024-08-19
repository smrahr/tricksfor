import AboutProject from "./AboutProject";
import Roadmap from "./Roadmap";

const Body = () => {
  return (
    <div className="dark:bg-primary-900 w-full flex flex-col md:flex-row justify-center gap-4 pt-[72px]">
      <AboutProject />
      <Roadmap />
    </div>
  );
};

export default Body;
