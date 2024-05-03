import Image from "next/image";
import { ComponentProps, ReactNode } from "react";

export type Benefit = {
  title: string;
  desc: string;
  content: string[];
  icon: ReactNode;
};

export type Testimonial = {
  content: string;
  author: string;
  position: string;
  avatar?: ComponentProps<typeof Image>["src"];
};
