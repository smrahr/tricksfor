import logoMobile from "@assets/icon.png";
import burgerMenu from "@assets/header/burgerMenu.png";
import logoDesktop from "@assets/icon.png";
import arrow from "@assets/header/arrow.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // setIsOpen(!isOpen);
  };
  return (
    <div className="pt-0 md:pt-[48px]">
      <div className="block md:hidden w-full absolute top-0 left-0">
        <div className=" flex justify-between px-[22px] py-[86px] ">
          <button onClick={handleClick}>
            <img src={burgerMenu} alt="burgerMenu" />
          </button>
          <div>
            <img
              src={logoMobile}
              alt="logo"
              className="rounded-[25px] w-[70px] h-[70px]"
            />
          </div>

          <div
            className={`abolute top-0 left-0 ${isOpen ? "block" : "hidden"}`}
          >
            menu
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
          <Navbar />
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
