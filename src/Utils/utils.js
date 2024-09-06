import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const navLinks = [
  {
    _id: 1,
    title: "MEN",
    value: "men",
    dropdown: [
      {
        _id: 1,
        category: "Shirts",
        value: "shirts",
      },
      {
        _id: 2,
        category: "Trousers",
        value: "trousers",
      },
      {
        _id: 3,
        category: "Boots",
        value: "boots",
      },
      {
        _id: 4,
        category: "Innerwear",
        value: "innerwear",
      },
      {
        _id: 5,
        category: "Ethnic",
        value: "ethnic",
      },
    ],
  },
  {
    _id: 2,
    title: "WOMEN",
    value: "women",
    dropdown: [
      {
        _id: 1,
        category: "Tops",
        value: "tops",
      },
      {
        _id: 2,
        category: "Jeans",
        value: "jeans",
      },
      {
        _id: 3,
        category: "Sneakers",
        value: "sneakers",
      },
      {
        _id: 4,
        category: "Innerwear",
        value: "innerwear",
      },
      {
        _id: 5,
        category: "Ethnic",
        value: "ethnic",
      },
    ],
  },
  {
    _id: 3,
    title: "KIDS",
    value: "kids",
    dropdown: [
      {
        _id: 1,
        category: "Shirts",
        value: "shirts",
      },
      {
        _id: 2,
        category: "Trousers",
        value: "trousers",
      },
      {
        _id: 3,
        category: "Shoes",
        value: "shoes",
      },
      {
        _id: 4,
        category: "Innerwear",
        value: "innerwear",
      },
      {
        _id: 5,
        category: "Ethnic",
        value: "ethnic",
      },
    ],
  },
  {
    _id: 4,
    title: "HOME & LIVING",
    value: "home",
    dropdown: [
      {
        _id: 1,
        category: "Bedroom",
        value: "bedroom",
      },
      {
        _id: 2,
        category: "Curtains",
        value: "curtains",
      },
      {
        _id: 3,
        category: "Flooring",
        value: "flooring",
      },
      {
        _id: 4,
        category: "Lamps",
        value: "lamps",
      },
      {
        _id: 5,
        category: "Wallpapers",
        value: "wallpapers",
      },
    ],
  },
  {
    _id: 5,
    title: "BEAUTY",
    value: "beauty",
    dropdown: [
      {
        _id: 1,
        category: "Makeup",
        value: "makeup",
      },
      {
        _id: 2,
        category: "Fragrances",
        value: "fragrances",
      },
      {
        _id: 3,
        category: "Hair Care",
        value: "hair",
      },
      {
        _id: 4,
        category: "Hygiene",
        value: "hygiene",
      },
      {
        _id: 5,
        category: "Bath",
        value: "bath",
      },
    ],
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
    dropdown: [
      {
        _id: 1,
        category: "Orders",
      },
      {
        _id: 2,
        category: "Wishlist",
      },
      {
        _id: 3,
        category: "Giftcards",
      },
      {
        _id: 4,
        category: "Contact Us",
      },
    ],
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
