import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({ goToHowToWork, navList, gameMenu }) => {
  const { pathname } = useLocation();
  const [openGameMenu, setOpenGameMenu] = useState(false);

  const openGameMenuHandler = () => {
    setOpenGameMenu(!openGameMenu);
  };

  useEffect(() => {
    setOpenGameMenu(false);
  }, [pathname]);

  return (
    <div className="flex gap-[30px] text-[18px] ">
      {navList.map((item) => {
        let content;
        
        if (item.id === 2) {
          content = (
            <div className="relative">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-md text-center inline-flex items-center"
                type="button"
                onClick={openGameMenuHandler}
              >
                {item.linkName}
              </button>
              <div
                id="dropdown"
                className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-primary-800 absolute top-10 left-0 ${
                  openGameMenu ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {gameMenu.map((gameItem) => (
                    <li key={gameItem.to}>
                      <Link
                        to={gameItem.to}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {gameItem.name}
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
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-md text-center inline-flex items-center"
              type="button"
              onClick={goToHowToWork}
            >
              {item.linkName}
            </button>
          );
        } else {
          content = (
            <Link
              className="text-md text-center inline-flex items-center"
              to={item.to}
            >
              {item.linkName}
            </Link>
          );
        }

        return <div key={item.id}>{content}</div>;
      })}
    </div>
  );
};

Navbar.propTypes = {
  goToHowToWork: PropTypes.func,
  navList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    linkName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
  gameMenu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
};

export default Navbar;
