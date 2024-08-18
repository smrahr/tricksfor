import DiceIntro from "@components/dice/DiceIntro";
import PronsAndCons from "@components/dice/ProsAndCons";
import Streaks from "@components/dice/Streaks";
import Boosters from "@components/dice/Boosters";

const Dice = () => {
  return (
    <div>
      <div className="container max-w-[1152px]">
        <DiceIntro />
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

export default Dice;
