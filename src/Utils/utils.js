import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const navLinks = [
  {
    _id: 1,
    title: "MEN",
    value: "men",
  },
  {
    _id: 2,
    title: "WOMEN",
    value: "women",
  },
  {
    _id: 3,
    title: "KIDS",
    value: "kids",
  },
  {
    _id: 4,
    title: "HOME & LIVING",
    value: "home_and_living",
  },
  {
    _id: 5,
    title: "BEAUTY",
    value: "beauty",
  },
  {
    _id: 6,
    title: "STUDIO",
    value: "studio",
  },
];

export const navProfileIcons = [
  {
    _id: 1,
    icon: FaRegUser,
    title: "Profile",
  },
  {
    _id: 2,
    icon: FaRegHeart,
    title: "Wishlist",
  },
  {
    _id: 3,
    icon: IoBagOutline,
    title: "Bag",
  },
];

export const footerLinks = [
  {
    _id: 1,
    title: "ONLINE SHOPPING",
    sub_menu: [
      {
        _id: 1,
        title: "Men",
      },
      {
        _id: 2,
        title: "Women",
      },
      {
        _id: 3,
        title: "Kids",
      },
      {
        _id: 4,
        title: "Home & Living",
      },
      {
        _id: 5,
        title: "Beauty",
      },
      {
        _id: 6,
        title: "Myntra Insider",
      },
    ],
  },
  {
    _id: 2,
    title: "CUSTOMER POLICIES",
    sub_menu: [
      {
        _id: 1,
        title: "Contact Us",
      },
      {
        _id: 2,
        title: "FAQ",
      },
      {
        _id: 3,
        title: "T&C",
      },
      {
        _id: 4,
        title: "Terms Of Use",
      },
      {
        _id: 5,
        title: "Track Orders",
      },
      {
        _id: 6,
        title: "Shipping",
      },
      {
        _id: 7,
        title: "Cancellation",
      },
      {
        _id: 8,
        title: "Returns",
      },
      {
        _id: 9,
        title: "Privacy Policy",
      },
      {
        _id: 6,
        title: "Grivance Officer",
      },
    ],
  },
  {
    _id: 3,
    title: "USEFUL LINKS",
    sub_menu: [
      {
        _id: 1,
        title: "Blog",
      },
      {
        _id: 2,
        title: "Careers",
      },
      {
        _id: 3,
        title: "Site Map",
      },
      {
        _id: 4,
        title: "Corporate Information",
      },
      {
        _id: 5,
        title: "Whitehat",
      },
      {
        _id: 6,
        title: "Cleartrip",
      },
    ],
  },
];

export const social_links = [
  {
    title: "facebook",
    icon: FaSquareFacebook,
  },
  {
    title: "twitter",
    icon: FaTwitter,
  },
  {
    title: "instagram",
    icon: FaInstagram,
  },
  {
    title: "youtube",
    icon: FaYoutube,
  },
];
