import CoinBoosters from "@assets/games/CoinBoosters.jpg";
import CoinBoostersMob from "@assets/games/CoinBoostersMob.jpg";
import { Link } from "react-router-dom";

const Boosters = () => {
  return (
    <div className="m-5 mt-[72px]">
      <div className="p-5 flex flex-col  items-start gap-2 dark:bg-primary-800 rounded-bl-[50px] md:rounded-[50px]">
        <h3 className="text-[28px] font-bold pl-0 md:pl-10 ">
          Get benefit of BOOSTERS
        </h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
          <div className="hidden md:block w-full md:w-[48%] ">
            <div className="flex justify-center overflow-hidden rounded-[50px]">
              <img src={CoinBoosters} alt="HeadsOrTailsIntro" />
            </div>
          </div>
          <div className="block md:hidden w-full md:w-[48%] mb-5">
            <div className="flex justify-center overflow-hidden rounded-[50px] mt-5">
              <img src={CoinBoostersMob} alt="HeadsOrTailsIntro" />
            </div>
          </div>
          <div className="pl-0 md:pl-10 w-full md:w-[48%]">
            <p className="text-[14px]">
              Elevate your winnings with exclusive Boosters! When you secure a
              victory in the match, our unique NFT Boosters—staked directly from
              your wallet in the Tricksfor app—will enhance your rewards. Bet
              and win while your NFT is staked, and revel in the additional
              bonus earnings proportional to your NFT’s multiplier effect. It’s
              time to amplify your gaming success with Tricksfor! Here are list
              of NFT boosters that amplify the your reward
            </p>
            <ul className="w-full list-disc text-[14px] pl-10">
              <li>
                <div>
                  <span className="font-bold">Normal Coin Collection:</span>
                  <span>2x</span>
                </div>
                <p>
                  Check it out on
                  <Link to="/" className="text-[#3b9fd5]">
                    OpenSea
                  </Link>
                  .
                </p>
              </li>
              <li>
                <div>
                  <span className="font-bold">Premium Coin Collection:</span>
                  <span>3x</span>
                </div>
                <p>
                  Check it out on
                  <Link to="/" className="text-[#3b9fd5]">
                    OpenSea
                  </Link>
                  .
                </p>
              </li>
              <li>
                <div>
                  <span className="font-bold">Golden Coin Collection:</span>
                  <span>5x</span>
                </div>
                <p>
                  Check it out on
                  <Link to="/" className="text-[#3b9fd5]">
                    OpenSea
                  </Link>
                  .
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Boosters;
