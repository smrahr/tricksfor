import AffiliateIntro from "@components/affiliate/AffiliateIntro";
import AffiliateReward from "@components/affiliate/AffiliateReward";

const Affiliate = () => {
  return (
    <div>
      <div className="container max-w-[1152px]">
        <AffiliateIntro />
      </div>
      <div className="container max-w-[1152px]">
        <AffiliateReward />
      </div>
      {/* <div className="container max-w-[1152px]">
        <Streaks />
      </div>
      <div className="container max-w-[1152px]">
        <Boosters />
      </div> */}
    </div>
  );
};

export default Affiliate;
