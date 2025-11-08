import IntroIMG from "@assets/affiliate/AffiliateIntro.png";
import IntroMobIMG from "@assets/affiliate/AffiliateIntroMob.png";
import { FaLink, FaWallet, FaCode } from "react-icons/fa";

const AffiliateIntro = () => {
  const methods = [
    {
      id: "referral-link",
      icon: FaLink,
      title: "Share Your Referral Link",
      description: "Grab your unique link from the Tricksfor app and share it anywhere—friends, social media, your community. Anyone who signs up through your link becomes your referee!"
    },
    {
      id: "wallet-address",
      icon: FaWallet,
      title: "Share Your Wallet Address",
      description: "Your friends can manually enter your wallet address as their referrer when they sign up. Simple and secure!"
    },
    {
      id: "referral-code",
      icon: FaCode,
      title: "Share Your Referral Code",
      description: "Prefer more privacy? Share your unique referral code instead of your wallet address. Same rewards, more discretion!"
    }
  ];

  return (
    <div className="dark:bg-primary-900 pt-[180px] md:pt-20 pb-10 px-4">
      <div className="container max-w-[1152px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Affiliate Program
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-[50px] p-6 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-[24px] md:text-[28px] font-bold text-white">
                How the Tricksfor Affiliate Program Works
              </h2>
              <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed">
                Earn passive income by sharing TricksFor with your network! Our affiliate program rewards you every time your referrals play games or buy NFTs. It&apos;s completely free to join and easy to get started.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-300 leading-relaxed">
                Choose any of these simple methods to start earning:
              </p>

              {/* Methods Cards */}
              <div className="space-y-4 mt-6">
                {methods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      className="group bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500/30 rounded-2xl p-4 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-[16px] md:text-[18px] font-bold text-white mb-2">
                            {method.title}
                          </h3>
                          <p className="text-[13px] md:text-[14px] text-gray-300 leading-relaxed">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-primary-700/50">
                <img
                  src={IntroIMG}
                  alt="Affiliate Program"
                  className="hidden md:block w-full h-auto"
                />
                <img
                  src={IntroMobIMG}
                  alt="Affiliate Program"
                  className="block md:hidden w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateIntro;
