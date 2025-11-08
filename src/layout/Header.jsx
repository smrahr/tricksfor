import logo from "@assets/icon.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaRocket } from "react-icons/fa";
import PropTypes from 'prop-types';

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
  const [openGameMenuMob, setOpenGameMenuMob] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickGameMob = () => {
    setOpenGameMenuMob(!openGameMenuMob);
  };

  useEffect(() => {
    setIsOpen(false);
    setOpenGameMenuMob(false);
  }, [pathname]);

  return (
    <div className="pt-0 md:pt-[48px] mx-5 relative z-50">
      <div className="block md:hidden w-full absolute top-0 left-0 z-50">
        <div className="flex justify-between items-center px-[22px] py-[86px] relative z-50">
          <div className="relative flex items-center">
            <button
              onClick={handleClick}
              className={isOpen ? "hidden" : "block"}
            >
              <CiMenuBurger onClick={() => setIsOpen(true)} color="white" size={28} />
            </button>
            <div
              className={`absolute top-0 left-0 w-[240px] z-1000 ${
                isOpen ? "block" : "hidden"
              }`}
              style={{ zIndex: 1000 }}
            >
              <div className="bg-gradient-to-br from-primary-800 to-primary-900 border-2 border-primary-700 rounded-[20px] shadow-2xl overflow-hidden">
                <div className="p-4 border-b border-primary-700 flex justify-between items-center">
                  <span className="text-[16px] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Menu</span>
                  <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform duration-200">
                    <RxCross1 color="white" size={20} />
                  </button>
                </div>
                <ul className="flex flex-col">
                  {navList.map((item, index) => {
                    const isLastItem = index === navList.length - 1;
                    
                    let content;
                    if (item.id === 2) {
                      content = (
                        <div className="relative">
                          <button
                            className="text-[15px] text-white hover:text-purple-400 transition-colors duration-200 p-4 w-full text-left"
                            type="button"
                            onClick={handleClickGameMob}
                          >
                            {item.linkName}
                          </button>
                          <div className={`${openGameMenuMob ? "block" : "hidden"} bg-primary-900/50`}>
                            <ul className="py-2">
                              {gameMenu.map((game) => (
                                <li key={game.to}>
                                  <Link
                                    to={game.to}
                                    className="block px-8 py-2 text-[14px] text-gray-300 hover:text-white hover:bg-primary-700/30 transition-all duration-200"
                                  >
                                    {game.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    } else if (item.id === 1) {
                      content = (
                        <button
                          className="text-[15px] text-white hover:text-purple-400 transition-colors duration-200 p-4 w-full text-left"
                          type="button"
                          onClick={goToHowToWork}
                        >
                          {item.linkName}
                        </button>
                      );
                    } else {
                      content = (
                        <Link
                          className="text-[15px] text-white hover:text-purple-400 transition-colors duration-200 p-4 block"
                          to={item.to}
                        >
                          {item.linkName}
                        </Link>
                      );
                    }
                    
                    return (
                      <li
                        key={item.id}
                        className={isLastItem ? '' : 'border-b border-primary-700/50'}
                      >
                        {content}
                    </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Link to="/">
              <div className="relative group">
                <img
                  src={logo}
                  alt="logo"
                  className="rounded-[25px] w-[70px] h-[70px] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-[25px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-between items-center mb-[48px]">
          <div>
            <Link to="/">
              <div className="relative group">
                <img
                  src={logo}
                  alt="logo"
                  className="rounded-[25px] w-[70px] h-[70px] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-[25px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>
          <Navbar
            navList={navList}
            gameMenu={gameMenu}
            goToHowToWork={goToHowToWork}
          />
          <Link target="_blank" to="https://app.tricksfor.com">
            <button className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-full px-6 py-2 h-[44px] flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
              <FaRocket className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-[16px] font-semibold text-white">Launch App</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  goToHowToWork: PropTypes.func,
};

export default Header;
