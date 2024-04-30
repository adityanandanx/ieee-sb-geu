"use client";
import { fadeInMotionVariants } from "@/components/motion";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { MotionProps, Variants, motion, useInView } from "framer-motion";
import React, {
  ComponentPropsWithRef,
  HTMLAttributes,
  createElement,
  forwardRef,
  useRef,
} from "react";

const headingVariants = cva("font-medium font-display", {
  variants: {
    size: {
      "1": "text-5xl md:text-7xl font-bold",
      "2": "text-4xl md:text-5xl",
      "3": "text-3xl md:text-4xl",
      "4": "text-2xl md:text-3xl",
      "5": "text-xl md:text-2xl",
      "6": "text-lg md:text-xl",
    },
    variant: {
      default: "text-foreground",
      fg: "text-foreground",
      bg: "text-background",
    },
  },
  defaultVariants: {
    size: "1",
    variant: "default",
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const newClassName = cn(headingVariants({ variant, size, className }));
    const Wrapper = createElement(
      `h${size || "1"}`,
      {
        className: newClassName,
        ...props,
        ref,
      },
      children
    );
    return Wrapper;
  }
);

const MotionHeading = motion(Heading);
interface FadeInHeadingProps
  extends ComponentPropsWithRef<typeof MotionHeading> {}

const FadeInHeading = ({
  initial,
  animate,
  variants,
  transition,
  ...props
}: FadeInHeadingProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <MotionHeading
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ ease: "backInOut", duration: 0.5, ...transition }}
      variants={variants || fadeInMotionVariants}
      {...props}
    />
  );
};

Heading.displayName = "Heading";

export { Heading, MotionHeading, FadeInHeading, headingVariants };
