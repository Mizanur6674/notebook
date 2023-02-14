import { IconType } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillLockFill, BsPinterest, BsTwitter } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { ImLinkedin2 } from "react-icons/im";

export interface SingleBlogMainDataType {
  id: number;
  title1: string;
  title2: string;
  title3: string;
}
export const singleBlogMainData: SingleBlogMainDataType[] = [
  {
    id: 1,
    title1: "row:1 col:1",
    title2: "row:1 col:2",
    title3: "row:1 col:3",
  },
  {
    id: 2,
    title1: "row:2 col:1",
    title2: "row:2 col:2",
    title3: "row:2 col:3",
  },
  {
    id: 3,
    title1: "row:3 col:1",
    title2: "row:3 col:2",
    title3: "row:3 col:3",
  },
];

export interface StepDataType {
  id: number;
  step: string;
}
export const stepData: StepDataType[] = [
  {
    id: 1,
    step: "Step 1",
  },
  {
    id: 2,
    step: "Step 2",
  },
  {
    id: 3,
    step: "Step 3",
  },
];

export interface SocialIconsDataType {
  id: number;
  icon: IconType;
  link: string;
}
export const socialIconsData: SocialIconsDataType[] = [
  { id: 1, icon: ImLinkedin2, link: "www.facebook.com" },
  { id: 2, icon: TiSocialFacebook, link: "www.facebook.com" },
  { id: 3, icon: BsTwitter, link: "www.twitter.com" },
  { id: 4, icon: AiFillInstagram, link: "www.instagram.com" },
  { id: 5, icon: BsPinterest, link: "www.pinterest.com" },
];

export interface CommentsDataType {
  id: number;
  comments: string;
  icon?: IconType;
}
export const commentsData: CommentsDataType[] = [
  {
    id: 1,
    comments: " Comments",
  },
  {
    id: 2,
    comments: " Themefisher",
  },
  {
    id: 3,
    icon: BsFillLockFill,
    comments: " Disqus privacy policy ",
  },
];
