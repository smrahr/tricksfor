import Hero from "@components/home/Hero";
import Games from "@components/home/Games";
import HowItWorks from "@components/home/HowItWorks";
import Body from "@components/home/Body";

const Home = () => {
  return (
    <div>
      <div className="container max-w-[1152px]">
        <Hero />
      </div>
      <div className="container max-w-[1152px]">
        <HowItWorks />
      </div>
      <div className="container max-w-[1152px]">
        <Games />
      </div>
      <div className="container max-w-[1152px]">
        <Body />
      </div>
    </div>
  );
};

export default Home;
