import CoinProsCons from "@assets/games/CoinProsCons.jpg";
import CoinProsConsMob from "@assets/games/CoinProsConsMob.jpg";

const PronsAndCons = () => {
  return (
    <div className="m-5 mt-[72px]">
      <div className="p-5 flex flex-col  items-start gap-2 dark:bg-primary-800 rounded-bl-[50px] md:rounded-[50px]">
        <h3 className="text-[28px] font-bold pl-0 md:pl-10 ">Pros and Cons</h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
          <div className="hidden md:block w-full md:w-[48%] ">
            <div className="flex justify-center overflow-hidden rounded-[50px]">
              <img src={CoinProsCons} alt="HeadsOrTailsIntro" />
            </div>
          </div>
          <div className="block md:hidden w-full md:w-[48%] mb-5">
            <div className="flex justify-center overflow-hidden rounded-[50px] mt-5">
              <img src={CoinProsConsMob} alt="HeadsOrTailsIntro" />
            </div>
          </div>
          <div className="pl-0 md:pl-10 w-full md:w-[48%]">
            <h3 className="text-[18px] font-bold ">Pros:</h3>

            <ul className="w-full list-disc text-[14px] pl-10">
              <li>
                <p className="font-bold">Risk: low</p>
                <p>There is always %50 chance to win the game.</p>
              </li>
              <li>
                <p className=" font-bold">Difficulty: very low</p>
                <p>Only two options to place prediction on.</p>
              </li>
            </ul>

            <h3 className="text-[18px] font-bold ">Cons:</h3>

            <ul className="w-full list-disc text-[14px] pl-10">
              <li>
                <p className="font-bold">Win value: medium</p>
                <p>
                  With a successfull guess, you only win one out of two groups
                  of predictions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PronsAndCons;
