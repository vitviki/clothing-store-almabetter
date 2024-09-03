import { Link } from "react-router-dom";
import { assets } from "../assets/index";
import { navLinks, navProfileIcons } from "../Utils/utils";
import { FiSearch } from "react-icons/fi";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <header className="w-full px-10 py-6 flex justify-between shadow-lg">
      <div className="w-[50%] flex gap-10 items-center justify-start">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-[120px]" />
        </Link>
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link._id} className="nav_links_style">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[50%] flex gap-10 justify-between ">
        <div className="relative flex rounded-md items-center w-[75%] bg-gray-100 gap-2 pl-2">
          <FiSearch
            fontSize={20}
            className="text-gray-500 inset-y-0 left-10 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-transparent border-none focus:border-none active:border-none active:outline-none outline-none pl-5 font-montserrat text-sm font-medium"
          />
        </div>
        <div className="flex gap-8 w-[25%] justify-end">
          {navProfileIcons.map((item) => (
            <Icons
              key={item._id}
              icon={<item.icon className="text-base font-extralight" />}
              text={item.title}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
