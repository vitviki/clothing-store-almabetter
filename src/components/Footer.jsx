import { footerLinks } from "../Utils/utils";
import { Link } from "react-router-dom";
import { social_links } from "../Utils/utils";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 pt-10 mt-10">
      <div className=" w-[50%] lg:m-auto mx-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-0 gap-5 mb-5">
          {footerLinks.map((link) => (
            <div key={link._id} className="flex flex-col gap-7">
              <h4 className="font-bold text-base">{link.title}</h4>
              <ul className="flex flex-col gap-2">
                {link.sub_menu.map((sub_link) => (
                  <li key={sub_link.title}>
                    <Link className="text-sm font-light">{sub_link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex gap-7 flex-col">
          <h4 className="font-bold text-base">KEEP IN TOUCH</h4>
          <div className="flex gap-8 items-center">
            {social_links.map((link) => (
              <Link to="/" key={link.title}>
                <link.icon className="text-2xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <hr />
        <p className="text-center mt-5">
          Copyright 2024 Myntra.com - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
