import RockPaperScissorIntro from "@components/rockPaperScissor/RockPaperScissorIntro";
import PronsAndCons from "@components/rockPaperScissor/ProsAndCons";
import Streaks from "@components/rockPaperScissor/Streaks";
import Boosters from "@components/rockPaperScissor/Boosters";

const RockPaperScissor = () => {
  return (
    <div>
      <div className="container max-w-[1152px]">
        <RockPaperScissorIntro />
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

export default RockPaperScissor;
