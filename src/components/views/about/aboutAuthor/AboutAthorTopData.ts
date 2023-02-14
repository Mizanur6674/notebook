import { IconType } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest, BsTwitter } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";

export interface AboutAuthorTopDataType {
  id: number;
  icon: IconType;
  link: string;
}
export const aboutAuthorTopData: AboutAuthorTopDataType[] = [
  { id: 1, icon: BsTwitter, link: "www.twitter.com" },
  { id: 2, icon: TiSocialFacebook, link: "www.facebook.com" },
  { id: 3, icon: AiFillInstagram, link: "www.instagram.com" },
  { id: 4, icon: BsPinterest, link: "www.pinterest.com" },
];
