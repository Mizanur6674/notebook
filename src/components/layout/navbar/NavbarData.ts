export interface NavbarDataType {
  id: number;
  name: string;
  href: string;
  child: any[];
}
export const navbarData: NavbarDataType[] = [
  {
    id: 1,
    name: "Homepages",
    href: "/hero",
    child: [],
  },
  {
    id: 2,
    name: "About",
    href: "",
    child: [
      { id: 1, name: "About Us", href: "/about" },
      { id: 2, name: "About Authors", href: "/aboutAuthor" },
    ],
  },
  {
    id: 3,
    name: "Categories",
    href: "",
    child: [
      { id: 1, name: "Categories", href: "/categories" },
      { id: 2, name: "Blog", href: "/blog" },
      { id: 3, name: "Single Blog", href: "/singleBlog" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    child: [
      { id: 1, name: "Contact Us", href: "/contact" },
      { id: 2, name: "Search Result", href: "/searchResult" },
      { id: 3, name: "FAQ", href: "/faq" },
      { id: 4, name: "Error", href: "/error" },
    ],
  },
];
