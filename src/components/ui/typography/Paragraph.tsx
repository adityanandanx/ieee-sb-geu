import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, createElement, forwardRef } from "react";

const paragraphVariants = cva("text-base mb-2", {
  variants: {
    variant: {
      default: "text-foreground",
      bg: "text-background",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface paragraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, paragraphProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <p
        className={cn(paragraphVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
