import { IconType } from "react-icons";
import { TiSocialFacebook } from "react-icons/ti";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export interface HeroBottomSideDataType {
  id: number;
  title: string;
  subTitle: string;
  link?: string;
}

export const heroBottomSideData: Array<HeroBottomSideDataType> = [
  {
    id: 1,
    title: "Jenny Kia",
    subTitle: "Fashion designer, Blogger, activist",
  },

  {
    id: 2,
    title: "Andress rasel",
    subTitle: "Blogger, activist, content creator, part time designer at:",
    link: "www.gethugothemes.com",
  },
  {
    id: 3,
    title: "Jenny Kia",
    subTitle: "Fashion designer, Blogger, activist",
  },
];

export interface SocialIconsDataType {
  id: number;
  icon: IconType;
  link: string;
}
export const socialIconsData: SocialIconsDataType[] = [
  { id: 1, icon: TiSocialFacebook, link: "www.facebook.com" },
  { id: 2, icon: BsTwitter, link: "www.twitter.com" },
  { id: 3, icon: AiFillInstagram, link: "www.instagram.com" },
];

export interface CategoriesDataType {
  title: string;
  digit: string;
}
export const categoriesData: CategoriesDataType[] = [
  {
    title: "Lifestyle",
    digit: "09",
  },
  {
    title: "Travel",
    digit: "05",
  },
  {
    title: "Food",
    digit: "09",
  },
  {
    title: "Healthcare",
    digit: "10",
  },
  {
    title: "Technology",
    digit: "03",
  },
];

export interface updateDataType {
  id: number;
  digit: string;
  title: string;
}
export const updateData: updateDataType[] = [
  {
    id: 1,
    digit: "14",
    title: "New Posts",
  },
  {
    id: 2,
    digit: "14",
    title: "New Posts",
  },
  {
    id: 3,
    digit: "14",
    title: "New Posts",
  },
  {
    id: 4,
    digit: "14",
    title: "New Posts",
  },
];

export interface InsPostsDataType {
  id: number;
}
export const insPostsData: InsPostsDataType[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
];

export interface SearchTagsDataType {
  title: string;
}
export const searchTagsData: SearchTagsDataType[] = [
  {
    title: "Travel",
  },
  {
    title: "Lifestyle",
  },
  {
    title: "Fashion",
  },
  {
    title: "Technology",
  },
  {
    title: "business",
  },
  {
    title: "Design",
  },
  {
    title: "Health",
  },
  {
    title: "Food",
  },
  {
    title: "Art",
  },
];
