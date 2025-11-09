import AffiliateIntro from "@components/affiliate/AffiliateIntro";
import AffiliateReward from "@components/affiliate/AffiliateReward";
import SeoHead from "@components/SEO";

const Affiliate = () => {
  return (
    <div>
      <SeoHead page="affiliate" />
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
