export interface HeroDataType {
  id: number;
  btn: string;
  header: string;
  img: string;
  paragraph: string;
}
export const heroData: any[] = [
  {
    id: 1,
    btn: "Travel",
    header: "set video playback speed with javascript",
    img: "/images/HeroRectangle.svg",
    paragraph: "Did you come here for something in particular or just general Riker-bashing? And blowing into",
  },
  {
    id: 2,
    btn: "Travel",
    header: "Design is the Mix of emotions",
    img: "/images/HeroRectangle.svg",
    paragraph: "Did you come here for something in particular or just general Riker-bashing? And blowing into",
  },
];

export const data = [heroData, heroData, heroData, heroData];

export interface HeroTopDataType {
  id: number;
  img: string;
  name: string;
}
export const heroTopData: HeroTopDataType[] = [
  {
    id: 1,
    img: "https://picsum.photos/30/30",
    name: "Jenny Kiaa",
  },
  {
    id: 2,
    img: "/images/heroTop2.svg",
    name: "02 december 2022",
  },
  {
    id: 3,
    img: "/images/heroTop3.svg",
    name: "3 min",
  },
];

export interface HeroSideDataType {
  id: number;
}
export const heroSideData: HeroSideDataType[] = [
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
];
