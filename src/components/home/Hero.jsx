import heriImage from "@assets/home/heroImage.png";
import heriImageDesc from "@assets/home/heroImageDesc.png";
import backgroundImage from "@assets/home/background.png";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-secondary-100 rounded-bl-[50px] md:rounded-[50px]">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center ">
        <div className="pt-[108px] w-[278px] block md:hidden">
          <img src={heriImage} alt="tricksfor"/>
        </div>
        <div className="hidden md:block">
          <img src={heriImageDesc} alt="tricksfor"/>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="font-bold">Tricksfor</h1>
            <h1>Crypto</h1>
            <h1>Gaming Hub</h1>
          </div>
          <button className="border-4 border-white rounded-full my-[48px] w-[250px] h-[70px] justify-center items-center">
            <Link target="_blank" to="https://app.tricksfor.com">
              <p className="text-[24px]">Launch App</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
