import heriImage from "@assets/home/heroImage.png";
import heriImageDesc from "@assets/home/heroImageDesc.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-secondary-100 rounded-bl-[50px] md:rounded-[50px]">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center ">
        <div className="pt-[108px] w-[278px] block md:hidden">
          <img src={heriImage} alt="heriImage" />
        </div>
        <div className="hidden md:block">
          <img src={heriImageDesc} alt="heriImage" />
        </div>
        <div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <p className="font-bold">Tricksfor</p>
            <p>Unleash Your</p>
            <p>Crypto Fortune</p>
          </div>
          <button className="border-4 border-white rounded-full my-[48px] w-[250px] h-[70px] justify-center items-center">
            <Link target="_blank" to="/">
              <p className="text-[24px]">Download App</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
