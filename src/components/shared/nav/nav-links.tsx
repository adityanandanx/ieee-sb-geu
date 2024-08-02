import {
  CalendarIcon,
  HammerIcon,
  ImagesIcon,
  InfoIcon,
  PhoneCallIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { ComponentProps, HTMLProps, ReactNode } from "react";

export type NavLink = {
  href: string;
  name: string;
  icon: ReactNode;
  target?: ComponentProps<typeof Link>["target"];
};

const navLinks: NavLink[] = [
  {
    href: "/events",
    name: "Events",
    icon: <CalendarIcon />,
  },
  {
    href: "/team",
    name: "Team",
    icon: <UsersIcon />,
  },
  {
    href: "/about",
    name: "About",
    icon: <InfoIcon />,
  },
  {
    href: "/gallery",
    name: "Gallery",
    icon: <ImagesIcon />,
  },
  {
    href: "/projects",
    name: "Projects",
    icon: <HammerIcon />,
  },
  {
    href: "https://www.instagram.com/ieee.geu/",
    name: "Contact",
    icon: <PhoneCallIcon />,
    target: "_blank",
  },
];

export default navLinks;
