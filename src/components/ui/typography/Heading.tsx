import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, createElement, forwardRef } from "react";

const headingVariants = cva("font-medium", {
  variants: {
    size: {
      "1": "text-6xl font-bold",
      "2": "text-5xl",
      "3": "text-4xl",
      "4": "text-3xl",
      "5": "text-2xl",
      "6": "text-xl",
    },
    variant: {
      default: "text-primary",
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
      { className: newClassName, ...props, ref },
      children
    );
    return <>{Wrapper}</>;
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
