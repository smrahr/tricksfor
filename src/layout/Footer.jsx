import footerLogo from "@assets/footer/footerLogo.png";
import XLogo from "@assets/footer/X.png";
import discordIcon from "@assets/footer/Discord.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" md:block">
      <div className="bg-primary-800 w-full rounded-[50px] grow p-12 flex justify-between ">
        <div>
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="flex gap-6 justify-center items-center">
          <Link target="_blank" to="/">
            <p className="text-[30px]">Support</p>
          </Link>
          <Link target="_blank" to="/">
            <p className="text-[30px]">Term of use</p>
          </Link>
          <Link target="_blank" to="/">
            <p className="text-[30px]">Privesy policy</p>
          </Link>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <img src={XLogo} alt="XLogo" />
          </div>
          <div>
            <img src={discordIcon} alt="discordIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
