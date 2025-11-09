import HeadsOrTailsIntro from "@components/headsOrTails/HeadsOrTailsIntro";
import PronsAndCons from "@components/headsOrTails/ProsAndCons";
import Streaks from "@components/headsOrTails/Streaks";
import Boosters from "@components/headsOrTails/Boosters";
import SeoHead from "@components/SEO";

const HeadsOrTails = () => {
  return (
    <div>
      <SeoHead page="coin" />
      <div className="container max-w-[1152px]">
        <HeadsOrTailsIntro />
      </div>
      <div className="container max-w-[1152px]">
        <PronsAndCons />
      </div>
      <div className="container max-w-[1152px]">
        <Streaks />
      </div>
      <div className="container max-w-[1152px]">
        <Boosters />
      </div>
    </div>
  );
};

export default HeadsOrTails;
