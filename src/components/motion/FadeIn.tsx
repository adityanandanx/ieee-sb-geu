"use client";
import React, { HTMLProps, useRef } from "react";
import { MotionProps, Variants, motion, useInView } from "framer-motion";
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
  className,
  transition,
  ...props
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      variants={fadeInMotionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ ease: "backInOut", duration: 0.5, ...transition }}
      className={cn("", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
