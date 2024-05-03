import {
  CalendarIcon,
  ImagesIcon,
  InfoIcon,
  PhoneCallIcon,
  UsersIcon,
} from "lucide-react";
import { ReactNode } from "react";

export type NavLink = {
  href: string;
  name: string;
  icon: ReactNode;
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
    href: "#",
    name: "Contact",
    icon: <PhoneCallIcon />,
  },
];

export default navLinks;
