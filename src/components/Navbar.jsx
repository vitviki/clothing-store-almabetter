import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/index";
import { navLinks, navProfileIcons } from "../Utils/utils";
import { FiSearch } from "react-icons/fi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Icons from "./Icons";

const Navbar = () => {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [searchMenuVisible, setSearchMenuVisible] = useState(false);

  return (
    <header>
      <nav className="w-full px-10 py-6 flex justify-between shadow-lg max-w-full">
        <div className="lg:w-[50%] flex lg:gap-10 items-center justify-start">
          <RxHamburgerMenu
            className="xl:hidden text-2xl cursor-pointer"
            onClick={() => setSideMenuVisible(true)}
          />

          {/* MOBILE MENU */}
          <div
            className={`absolute inset-y-0 left-0 overflow-hidden bg-white transition-all ${
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
                    className="nav_links_style flex justify-between w-full items-center"
                  >
                    {link.title}
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
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
              <li key={link._id} className="nav_links_style">
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-[50%] w-full flex lg:justify-center justify-end  lg:pl-10 2xl:pl-0 gap-10">
          <div className="hidden lg:flex relative  rounded-md items-center w-[75%] bg-gray-100 gap-2 pl-2">
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
            {navProfileIcons.map((item) => (
              <Icons
                key={item._id}
                icon={
                  <item.icon className="lg:text-base lg:font-extralight text-xl font-semibold" />
                }
                text={item.title}
              />
            ))}
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
