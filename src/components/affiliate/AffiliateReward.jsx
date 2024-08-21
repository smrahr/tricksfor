import RewardIMG from "@assets/affiliate/AffiliateReward.png";
import RewardIMGMob from "@assets/affiliate/AffiliateRewardMob.png";

const PronsAndCons = () => {
  return (
    <div className="m-5 mt-[72px]">
      <div className="p-5 flex flex-col  items-start gap-2 dark:bg-primary-800 rounded-bl-[50px] md:rounded-[50px]">
        <h3 className="text-[28px] font-bold pl-0 md:pl-10 ">Rewards</h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
          <div className="hidden md:block w-full md:w-[48%] ">
            <div className="flex justify-center overflow-hidden rounded-[50px]">
              <img src={RewardIMG} alt="Affiliate Rewards" />
            </div>
          </div>
          <div className="block md:hidden w-full md:w-[48%] mb-5">
            <div className="flex justify-center overflow-hidden rounded-[50px] mt-5">
              <img src={RewardIMGMob} alt="Affiliate Rewards" />
            </div>
          </div>
          <div className="pl-0 md:pl-10 w-full md:w-[48%]">
            <h3 className="text-[20px] font-bold ">Game reward:</h3>
            <ul className="w-full list-disc text-[14px] pl-10">
              <li>
                <p className="font-bold text-[16px]">1% game rewards</p>
                <p className="text-[14px]">When your referee wins a match and earns rewards, you’ll receive 1% of their reward value as a bonus!</p>
              </li>
            </ul>
            
            <h3 className="text-[20px] font-bold ">NFT reward:</h3>

            <ul className="w-full list-disc text-[14px] pl-10">
              <li>
                <p className="font-bold text-[16px]">10% trade value</p>
                <p className="text-[14px]">When your referee purchases an NFT booster from any of our collections, you’ll earn 10% of the trade value as a reward!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PronsAndCons;
