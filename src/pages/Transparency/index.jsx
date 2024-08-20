import PronsAndCons from "@components/transparency/ProsAndCons";
import Streaks from "@components/transparency/Streaks";
import Boosters from "@components/transparency/Boosters";
import TransparencyIntro from "@components/transparency/TransparencyIntro";

const Transparency = () => {
  return (
    <div>
      <div className="container max-w-[1152px]">
        <TransparencyIntro />
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

export default Transparency;
