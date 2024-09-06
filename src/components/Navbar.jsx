import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/index";
import { navLinks, navProfileIcons } from "../Utils/utils";
import { FiSearch } from "react-icons/fi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Icons from "./Icons";

const Navbar = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [searchMenuVisible, setSearchMenuVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDropdown2, setOpenDropdown2] = useState(null);

  const handleDropdownClick = (id) => {
    setOpenDropdown(openDropdown === id ? null : id); // Toggle dropdown
  };

  const handleDropdownClick2 = (id) => {
    setOpenDropdown2(openDropdown2 === id ? null : id); // Toggle dropdown
  };

  return (
    <header>
      <nav className="w-full px-10 flex justify-between shadow-lg max-w-full  ">
        <div className="lg:w-[50%] flex lg:gap-10 items-center justify-start">
          <RxHamburgerMenu
            className="xl:hidden text-2xl cursor-pointer"
            onClick={() => setSideMenuVisible(true)}
          />

          {/* MOBILE MENU */}
          <div
            className={`absolute inset-y-0 left-0 overflow-scroll h-[820px] bg-white transition-all ${
              sideMenuVisible ? "w-[50%]" : "w-0"
            } shadow-lg flex flex-col`}
          >
            <div className="mt-5">
              <div
                className="flex gap-2 items-center justify-end w-full pr-5 cursor-pointer"
                onClick={() => setSideMenuVisible(false)}
              >
                <GoArrowLeft className="text-3xl text-gray-600 cursor-pointer" />
                <p>Back</p>
              </div>
              <ul className="mt-10 flex flex-col gap-8 items-start px-5">
                {navLinks.map((link) => (
                  <li
                    key={link._id}
                    className="nav_links_style flex flex-col w-full"
                  >
                    <div
                      className="flex justify-between items-center w-full cursor-pointer"
                      onClick={() => handleDropdownClick2(link._id)}
                    >
                      {link.title}
                      {openDropdown2 === link._id ? (
                        <MdOutlineKeyboardArrowUp className="text-2xl" />
                      ) : (
                        <MdOutlineKeyboardArrowRight className="text-2xl" />
                      )}
                    </div>
                    {openDropdown2 === link._id && link.dropdown && (
                      <div className=" pl-5 mt-4 flex flex-col gap-5">
                        {link.dropdown.map((category, index) => (
                          <Link
                            key={index}
                            className="text-sm"
                            to={`/${link.value}/${category.value}`}
                          >
                            {category.category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/">
            <img
              src={assets.logo}
              alt="logo"
              className="w-[120px] min-w-[120px]"
            />
          </Link>
          <ul className="hidden xl:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li
                key={link._id}
                className="nav_links_style cursor-pointer underline-animation relative group py-8"
              >
                {link.title}
                {link.dropdown && (
                  <div className="absolute mt-8 w-[200px] hidden group-hover:block bg-white border-l border-r border-b border-gray-300 shadow-lg px-5 pb-5">
                    <div className="grid grid-cols-2 gap-4 gap-y-6 mt-5">
                      {link.dropdown.map((category, index) => (
                        <Link
                          key={index}
                          to={`/${link.value}/${category.value}`}
                        >
                          <h3 className="font-semibold text-sm hover:text-gray-500 text-gray-950">
                            {category.category}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-[50%] w-full flex lg:justify-center justify-end  lg:pl-10 2xl:pl-0 gap-10">
          <div className="hidden lg:flex relative rounded-md items-center w-[75%] h-10 mt-4 bg-gray-100 gap-2 pl-2">
            <FiSearch
              fontSize={20}
              className="text-gray-500 inset-y-0 left-10 cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search for brands & products"
              className="w-full bg-transparent border-none focus:border-none active:border-none active:outline-none outline-none pl-5 font-montserrat 2xl:text-sm text-xs font-medium"
            />
          </div>
          <div className="flex gap-8 justify-end items-center">
            <FiSearch
              className="lg:hidden cursor-pointer min-w-[50px] text-2xl"
              onClick={() => setSearchMenuVisible(true)}
            />
            <ul className="flex gap-8 items-center h-full">
              {navProfileIcons.map((item) => (
                <li
                  key={item._id}
                  className="h-full pt-4 cursor-pointer relative"
                  onClick={() => handleDropdownClick(item._id)}
                >
                  {item.dropdown && (
                    <div
                      className={`absolute w-[250px] mt-[60px] -right-24 bg-white shadow-lg p-5 ${
                        openDropdown === item._id ? "block" : "hidden"
                      }`}
                    >
                      <ul className="flex flex-col gap-3">
                        <p className="text-sm">Welcome</p>
                        <p className="text-sm">
                          To access account and manage orders
                        </p>
                        <button className="border p-2 text-[14px] font-bold text-[#ff7797]">
                          LOGIN/SIGNUP
                        </button>
                        <span className="border opacity-80 mt-3"></span>
                        {item.dropdown.map((option, index) => (
                          <li
                            key={index}
                            className="cursor-pointer p-2 rounded-md"
                          >
                            {option.category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Icons
                    icon={
                      <item.icon className="lg:text-base lg:font-extralight text-xl font-semibold cursor-pointer" />
                    }
                    text={item.title}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEARCH MENU */}
        <div
          className={`absolute inset-y-0 right-0 overflow-hidden bg-white transition-all ${
            searchMenuVisible ? "w-full" : "w-0"
          } mt-5`}
        >
          <div className="relative w-full border-b-2 pb-5 px-3 flex items-center">
            <GoArrowRight
              className="text-3xl absolute text-gray-600 cursor-pointer"
              onClick={() => setSearchMenuVisible(false)}
            />
            <input
              type="text"
              placeholder="Search for brands & products"
              className="w-full bg-transparent border-none focus:border-none active:border-none active:outline-none outline-none pl-10 font-montserrat text-base font-medium"
            />
            <FiSearch className="text-2xl" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
