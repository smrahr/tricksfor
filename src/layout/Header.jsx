import logoMobile from "@assets/icon.png";
import burgerMenu from "@assets/header/burgerMenu.png";
import logoDesktop from "@assets/icon.png";
import arrow from "@assets/header/arrow.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = ({ goToHowToWork }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // setIsOpen(!isOpen);
  };
  return (
    <div className="pt-0 md:pt-[48px]">
      <div className="block md:hidden w-full absolute top-0 left-0">
        <div className="flex justify-between px-[22px] py-[86px] relative">
          <div className="relative">
            <button
              onClick={handleClick}
              className={!isOpen ? "block" : "hidden"}
            >
              <CiMenuBurger onClick={() => setIsOpen(true)} color="black" />
            </button>
            <div
              className={`absolute top-0 left-0 w-[200px] ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <RxCross1 onClick={() => setIsOpen(false)} color="black" />

              <ul className="flex flex-col items-center justify-between min-h-[250px] rounded-md text-[16px]  bg-black">
                <li className="border-b border-gray-400 opacity-55 p-4 rounded-md w-full">
                  <Link to="/">How it works</Link>
                </li>
                <li className="border-b border-gray-400 opacity-55 p-4 rounded-md w-full">
                  <Link to="/">Games</Link>
                </li>
                <li className="border-b border-gray-400 opacity-55 p-4 rounded-md w-full">
                  <Link to="/Roadmap">Roadmap</Link>
                </li>
                <li className="border-b border-gray-400  opacity-55 p-4 rounded-md w-full">
                  <Link to="/affiliate">Affiliate</Link>
                </li>
                <li className="border-b border-gray-400  opacity-55 p-4 rounded-md w-full">
                  <Link to="/">About project</Link>
                </li>
                <li className="border-b border-gray-400  opacity-55 p-4 rounded-md w-full">
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <img
              src={logoMobile}
              alt="logo"
              className="rounded-[25px] w-[70px] h-[70px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-between items-center mb-[48px]">
          <div>
            <img
              src={logoDesktop}
              alt="logo"
              className="rounded-[25px] w-[70px] h-[70px]"
            />
          </div>
          <Navbar goToHowToWork={goToHowToWork} />
          <button className="border-2 rounded-full">
            <Link target="_blank" to="https://app.tricksfor.com">
              <div className="flex items-end p-2 w-[174px] h-[40px] justify-center ">
                <p className="text-[18px]">Launch App</p>
                <div className="w-[20px] h-[20px] ml-3">
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
