import StreaksImg from "@assets/games/Streaks.jpg";
import StreaksMob from "@assets/games/StreaksMob.jpg";

const Streaks = () => {
  return (
    <div className="m-5 mt-[72px]">
      <div className="p-5 flex flex-col md:flex-row items-start gap-2 md:gap-10 justify-start md:justify-between dark:bg-primary-800 rounded-bl-[50px] md:rounded-[50px]">
        <div className="pl-0 md:pl-10 w-full md:w-[48%]">
          <h3 className="text-[28px] font-bold ">
            How streaks work in Coin games?
          </h3>
          <p className="text-[14px]">
            Elevate your gaming streak with consecutive bets across various
            days, and seize the opportunity to amplify your bonus rewards with a
            victorious next bet!
          </p>

          <ul className="w-full list-disc text-[14px] pl-10">
            <li>
              <span className=" font-bold">7 days:</span>
              <span>1.5x</span>
            </li>
            <li>
              <span className=" font-bold">14 days:</span>
              <span>2x</span>
            </li>
            <li>
              <span className=" font-bold">30 days:</span>
              <span>3x</span>
            </li>
            <li>
              <span className=" font-bold">100 days:</span>
              <span>5x</span>
            </li>
            <li>
              <span className=" font-bold">300 days:</span>
              <span>10x</span>
            </li>
          </ul>
        </div>
        <div className="hidden md:block w-full md:w-[48%]">
          <div className="flex justify-center overflow-hidden rounded-[50px]">
            <img src={StreaksImg} alt="StreaksImg" />
          </div>
        </div>
        <div className="block md:hidden w-full md:w-[48%] mt-5">
          <div className="flex justify-center overflow-hidden rounded-[50px] ">
            <img src={StreaksMob} alt="StreaksImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streaks;
