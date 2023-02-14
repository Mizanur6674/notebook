import { IconType } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";

export interface FaqDataType {
  id: number;
  title: string;
  subtitle: string;
  icon: IconType;
}
export const faqData: FaqDataType[] = [
  {
    id: 1,
    title: "is there have any option for write blog?",
    subtitle:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore. But I wanna talk about",
    icon: AiOutlinePlus,
  },
  {
    id: 2,
    title: "can i change my plan later?",
    subtitle:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore. But I wanna talk about",
    icon: AiOutlinePlus,
  },
  {
    id: 3,
    title: "Did you come here for something in particular?",
    subtitle:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore. But I wanna talk about",
    icon: AiOutlinePlus,
  },
  {
    id: 4,
    title: "is there have any option for write blog?",
    subtitle:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore. But I wanna talk about",
    icon: AiOutlinePlus,
  },
  {
    id: 5,
    title: "something in particular or just general Riker-bashing?",
    subtitle:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you are dealing in stolen ore. But I wanna talk about",
    icon: AiOutlinePlus,
  },
];
