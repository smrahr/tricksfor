import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navList = [
  { id: 1, linkName: "How it works", to: "/" },
  { id: 2, linkName: "Games", to: "/" },
  { id: 3, linkName: "Roadmap", to: "/" },
  { id: 4, linkName: "About project", to: "/" },
];

const Navbar = () => {
  const [openGameMenu, setOpenMenuHandler] = useState(false);

  const openGameMenuHandler = () => {
    setOpenMenuHandler(!openGameMenu);
  };
  useEffect(() => {
    setOpenMenuHandler(false);
  }, []);
  return (
    <div className="flex gap-[30px] text-[18px] ">
      {navList.map((item) => (
        <div key={item.id}>
          {item.id === 2 ? (
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
                className={`${
                  openGameMenu ? "hidden" : "block"
                } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-primary-800 absolute top-10 left-0`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="/HeadsOrTails"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Heads or Tails
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              className="text-md text-center inline-flex items-center"
              to={item.to}
            >
              {item.linkName}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
