"use client";
import React, { HTMLProps, useRef } from "react";
import { MotionProps, Variants, m, useInView } from "framer-motion";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface Props extends MotionProps {
  className?: ClassValue;
}

export const fadeInMotionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "2rem",
  },
  visible: {
    opacity: 1,
    y: "0rem",
  },
};

export const FadeIn = ({
  children,
  initial,
  animate,
  className,
  transition,
  ...props
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <m.div
      ref={ref}
      variants={fadeInMotionVariants}
      initial={initial || "hidden"}
      animate={animate || (inView ? "visible" : "hidden")}
      transition={{ ease: "backInOut", duration: 1, ...transition }}
      className={cn("", className)}
      {...props}
    >
      {children}
    </m.div>
  );
};
