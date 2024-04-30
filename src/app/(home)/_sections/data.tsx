import {
  BookOpenIcon,
  MicVocalIcon,
  SpeakerIcon,
  Users2Icon,
  UsersIcon,
} from "lucide-react";
import { Benefit } from "./types";

export const benefits: Benefit[] = [
  {
    title: "Resources",
    desc: "Resources and opportunities you need to keep on top of changes in technology",
    content: [
      "Obtain access to the largest library of engineering and technology technical literature.",
      "Stay updated on the latest technology trends, industry news, and events.",
      "Receive project and research mentorship.",
    ],
    icon: <BookOpenIcon size={64} />,
  },
  {
    title: "Opportunities",
    desc: "Get involved in standards development, attend conferences, and connect with professionals.",
    content: [
      "Participate in standards development.",
      "Attend and contribute to technology conferences.",
      "Connect with industry and academic professionals.",
      "Explore IEEE Internship opportunities.",
      "Participate in the SAC Awards Program.",
    ],
    icon: <MicVocalIcon size={64} />,
  },
  {
    title: "Networking",
    desc: "Join a community of technology professionals, network with peers, and collaborate with IEEE colleagues.",
    content: [
      "Join a community of over 420,000 technology professionals.",
      "Network with professionals in your college with similar technical interests.",
      "Collaborate with IEEE colleagues and member groups, online or in person, to build a support group for your profession, industry, or project.",
    ],
    icon: <UsersIcon size={64} />,
  },
];
