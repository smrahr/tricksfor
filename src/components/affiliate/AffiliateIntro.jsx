import IntroIMG from "@assets/affiliate/AffiliateIntro.png";
import IntroMobIMG from "@assets/affiliate/AffiliateIntroMob.png";

const AffiliateIntro = () => {
  return (
    <div className="pt-[158px] m-5 md:pt-[0px]">
      <h2 className="text-[36px] md:text-[40px] pl-4 md:pl-10">
        Affiliate
      </h2>
      <div className="p-5 flex flex-col md:flex-row items-start gap-2 md:gap-10 justify-start md:justify-between dark:bg-primary-800 rounded-bl-[50px] md:rounded-[50px]">
        <div className="pl-0 md:pl-10 w-full md:w-[48%]">
          <h3 className="text-[28px] font-bold ">How tricksfor affiliate works</h3>
          <p className="text-[14px]">
            Affiliate marketing is a performance-based marketing strategy where individuals or companies, known as affiliates, promote a merchant's products or services and earn a commission for each sale or lead generated through their efforts. 
          </p>
          <p className="text-[14px]">
            Join the Tricksfor affiliate program through any of these options and start earning rewards today!
          </p>
          <ul className="w-full list-disc text-[14px] pl-10">
            <li>
              <p className="text-[20px] font-bold">Share referral link:</p>
              <p>
                Get your unique referral link from the Tricksfor app and share it with your friends or on social media. Anyone who joins Tricksfor through your link will become your referee, earning you rewards!
              </p>
            </li>
            <li>
              <p className="text-[20px] font-bold">Share your wallet address:</p>
              <p>
                Invite your friends or subscribers to manually set their referral by submitting your wallet address. It’s a simple and secure way to earn rewards together!
              </p>
            </li>
            <li>
              <p className="text-[20px] font-bold">Share your referral code:</p>
              <p>
                For enhanced privacy in manual mode, share your referral code instead of your wallet address.
              </p>
            </li>
          </ul>
        </div>
        <div className="hidden md:block w-full md:w-[48%]">
          <div className="flex justify-center overflow-hidden rounded-[50px]">
            <img src={IntroIMG} alt="HeadsOrTailsIntro" />
          </div>
        </div>
        <div className="block md:hidden w-full md:w-[48%] mt-5">
          <div className="flex justify-center overflow-hidden rounded-[50px] ">
            <img src={IntroMobIMG} alt="HeadsOrTailsIntro" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateIntro;
