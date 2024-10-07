import footerLogo from "@assets/icon.png";
import XLogo from "@assets/footer/X.png";
import discordIcon from "@assets/footer/Discord.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" pt-[72px] m-5">
      <div className="bg-primary-800 w-full rounded-[50px] grow p-12 flex justify-between flex-col md:flex-row">
        <div className="hidden md:block">
          <img
            src={footerLogo}
            alt="logo"
            className="rounded-[25px] w-[70px] h-[70px]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center ">
          <Link target="_blank" to="/">
            <p className="text-[16px] md:text-[20px]">Support</p>
          </Link>
          <Link target="_blank" to="/">
            <p className="text-[16px] md:text-[20px]">Terms of use</p>
          </Link>
          <Link target="_blank" to="/">
            <p className="text-[16px] md:text-[20px]">Privacy policy</p>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4 justify-center items-center">
            {/* <div>
              <img src={XLogo} alt="XLogo" />
            </div> */}
            <div>
              <a href="https://discord.gg/j7xd2uSFvy" target="_blank">
                <img src={discordIcon} alt="discordIcon" />
              </a>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex gap-4 justify-between items-center mt-6">
            {/* <div>
              <img src={XLogo} alt="XLogo" />
            </div> */}
            <div>
              <a href="https://discord.gg/j7xd2uSFvy" target="_blank">
                <img src={discordIcon} alt="discordIcon" />
              </a>
            </div>
            <div>
              <img
                src={footerLogo}
                alt="logo"
                className="rounded-[25px] w-[70px] h-[70px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
