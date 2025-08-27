import Logo from "../../assets/logo.png";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 6,
    name: "Electronincs",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#",
  },
];
const NavBar = ({ handleOpenPopup }) => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper nav */}
        <div className="bg-primary/40 py-3 sm:py-1">
          <div className="container flex justify-between items-center m-auto lg:px-10 md:px-8 px-3">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="logo" className="w-10" />
                Shopsy
              </a>
            </div>
            {/* search bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                rounded-full border border-gray-300 transition-all duration-300
                px-3 py-1 focus:outline-none focus:border-1 focus:border-primary bg-white dark:border-gray-500 dark:bg-gray-800 dark:text-white
                "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* order btn */}
              <button
                onClick={() => handleOpenPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* darkmode switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>

        {/* lower nav */}
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center md:gap-3 gap-0">
            {Menu.length > 0 &&
              Menu.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="inline-block px-4 hover:text-primary duration-200"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                );
              })}

            {/* dropdown */}
            <li className="group relative px-4">
              <a href="#" className="flex items-center gap-1 py-2">
                Trending
                <IoMdArrowDropdown className="transition-all duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute z-90 hidden group-hover:block w-50 rounded-md bg-white p-2 text-black shadow-md lg:translate-0 -translate-x-30">
                <ul>
                  {DropdownLinks.length > 0 &&
                    DropdownLinks.map((item) => {
                      return (
                        <li key={item.id}>
                          <a
                            href={item.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
