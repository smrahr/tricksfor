import AboutProject from "./AboutProject";
import RoudMap from "./RoudMap";

const Body = () => {
  return (
    <div className="dark:bg-primary-900 w-full flex flex-col md:flex-row justify-center gap-4 p-5 py-[72px]">
      <AboutProject />
      <RoudMap />
    </div>
  );
};

export default Body;


