"use client";
import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import Link from "next/link";
import { ComponentProps } from "react";

const MotionLink = m(Link);

interface Props extends ComponentProps<typeof MotionLink> {}

const AnimatedLink = ({ className, ...props }: Props) => {
  return (
    <MotionLink
      className={cn(
        "after:bg-primary hover:after:w-full after:h-[2px] after:rounded-full after:w-0 after:transition-[width] after:absolute relative after:bottom-0 after:left-0",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    />
  );
};
export { AnimatedLink, MotionLink };
