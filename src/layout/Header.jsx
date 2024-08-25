import logoMobile from "@assets/icon.png";
import burgerMenu from "@assets/header/burgerMenu.png";
import logoDesktop from "@assets/icon.png";
import arrow from "@assets/header/arrow.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const navList = [
  { id: 1, linkName: "How it works", to: "/" },
  { id: 2, linkName: "Games", to: "/" },
  { id: 3, linkName: "Roadmap", to: "/Roadmap" },
  { id: 4, linkName: "Affiliate", to: "/affiliate" },
  { id: 5, linkName: "FAQ", to: "/faq" },
];

const gameMenu = [
  { name: "Heads or Tails", to: "/games/coin" },
  { name: "Dice", to: "/games/dice" },
  { name: "Rock Paper Scissor", to: "/games/rps" },
];

const Header = ({ goToHowToWork }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openGameMenuMob, setOpenMenuHandlerMob] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickGameMob = () => {
    setOpenMenuHandlerMob(!openGameMenuMob);
  };

  useEffect(() => {
    setIsOpen(false);
    setOpenMenuHandlerMob(false);
  }, [pathname]);

  return (
    <div className="pt-0 md:pt-[48px] mx-5">
      <div className="block md:hidden w-full absolute top-0 left-0 ">
        <div className="flex justify-between px-[22px] py-[86px] relative">
          <div className="relative">
            <button
              onClick={handleClick}
              className={!isOpen ? "block" : "hidden"}
            >
              <CiMenuBurger onClick={() => setIsOpen(true)} color="black" />
            </button>
            <div
              className={`absolute top-0 left-0 w-[200px] z-1000 ${
                isOpen ? "block" : "hidden"
              }`}
              style={{ zIndex: 1000 }}
            >
              <RxCross1 onClick={() => setIsOpen(false)} color="black" />
              <ul className="flex flex-col items-center justify-between min-h-[250px] rounded-md text-[16px]  bg-black">
                {navList.map((item) => (
                  <li
                    key={item.id}
                    className="border-b border-gray-400 opacity-55 p-4 rounded-md w-full"
                  >
                    {item.id === 2 ? (
                      <div className="relative">
                        <button
                          id="dropdownDefaultButton"
                          data-dropdown-toggle="dropdown"
                          className="text-md text-center inline-flex items-center"
                          type="button"
                          onClick={handleClickGameMob}
                        >
                          {item.linkName}
                        </button>
                        <div
                          id="dropdown"
                          className={`z-10 divide-y  ${
                            !openGameMenuMob ? "hidden" : "block"
                          }`}
                        >
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            {gameMenu.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.to}
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : item.id === 1 ? (
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-md text-center inline-flex items-center"
                        type="button"
                        onClick={goToHowToWork}
                      >
                        {item.linkName}
                      </button>
                    ) : (
                      <Link
                        className="text-md text-center inline-flex items-center"
                        to={item.to}
                      >
                        {item.linkName}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Link to="/">
              <img
                src={logoMobile}
                alt="logo"
                className="rounded-[25px] w-[70px] h-[70px]"
              />
            </Link>
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
          <Navbar
            navList={navList}
            gameMenu={gameMenu}
            goToHowToWork={goToHowToWork}
          />
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
