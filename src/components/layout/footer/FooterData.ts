import { IconType } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest, BsTwitter } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";

export interface RootFooterDataType {
  title: string;
}

export interface HeaderNameType extends RootFooterDataType {
  name: Array<RootFooterDataType>;
}
export const headerNameData: HeaderNameType[] = [
  {
    title: "Blogs",
    name: [
      {
        title: "Travel",
      },
      {
        title: "Technology",
      },
      {
        title: "Lifestyle",
      },
      {
        title: "Fashion",
      },
      {
        title: "Business",
      },
    ],
  },
  {
    title: "Quick Links",
    name: [
      {
        title: "FAQ",
      },
      {
        title: "Terms & conditions",
      },
      {
        title: "Support",
      },
      {
        title: "Privacy Policy",
      },
    ],
  },
];

export interface FooterSocialDataType {
  id: number;
  icon: IconType;
  link: string;
}
export const footerSocialData: FooterSocialDataType[] = [
  { id: 1, icon: BsTwitter, link: "www.twitter.com" },
  { id: 2, icon: TiSocialFacebook, link: "www.facebook.com" },
  { id: 3, icon: AiFillInstagram, link: "www.instagram.com" },
  { id: 4, icon: BsPinterest, link: "www.pinterest.com" },
];
