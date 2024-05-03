import { BookOpenIcon, MicVocalIcon, UsersIcon } from "lucide-react";
import { Benefit, Testimonial } from "./types";
import manishAvatar from "../assets/testimonials/manish.jpeg";

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

export const testimonials: Testimonial[] = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget velit vel libero congue suscipit. Nulla facilisi. Sed mattis, sapien ac mollis varius, justo velit tempus metus, non tempus mauris ante in elit.",
    author: "Manish Kumar Gupta",
    position: "Student",
    avatar: manishAvatar,
  },
  {
    content:
      "Duis ac justo ac purus mattis mattis. Ut in felis id ipsum mollis fermentum. Donec malesuada velit non elit fermentum, sed tristique leo viverra.",
    author: "Jane Smith",
    position: "Marketing Manager",
  },
  {
    content:
      "Fusce consequat lectus vitae dui bibendum congue. Vestibulum id justo in orci scelerisque dictum. Vivamus quis leo ut nunc vehicula placerat at nec ante.",
    author: "David Johnson",
    position: "CTO",
  },
  {
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at ante eget mi fringilla dictum ac nec magna.",
    author: "Emily Brown",
    position: "Sales Director",
  },
  {
    content:
      "Suspendisse potenti. Sed nec placerat nunc. Duis quis justo leo. Proin sit amet magna non sapien feugiat ullamcorper ut in eros.",
    author: "Michael Wilson",
    position: "Senior Developer",
  },
  {
    content:
      "Quisque quis purus eu lorem consequat suscipit. Integer fringilla erat eu velit ultrices, nec placerat enim volutpat.",
    author: "Sarah Johnson",
    position: "HR Manager",
  },
  {
    content:
      "Maecenas fringilla justo non mauris consequat, non rhoncus ipsum finibus. Ut efficitur turpis vitae quam tristique, nec volutpat mi consectetur.",
    author: "James Anderson",
    position: "Operations Manager",
  },
];
