"use client";
import { motion } from "framer-motion";
import React, { ComponentProps, HTMLProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

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
