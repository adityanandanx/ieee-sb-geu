"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import { FadeIn } from "../motion";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-3xl font-semibold leading-none tracking-tight font-display",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const MotionCard = m(Card);

const FadeInCard = React.forwardRef<
  typeof MotionCard,
  React.CustomComponentPropsWithRef<typeof MotionCard> & {
    fadeInClassName?: string;
  }
>(({ className, children, fadeInClassName, ...props }, ref) => {
  return (
    <MotionCard
      className={cn("relative overflow-hidden z-0", className)}
      ref={ref as React.LegacyRef<HTMLElement | SVGElement>}
      {...props}
    >
      {/* <div className="bg-primary/5 w-full h-full rounded-full bg-blend-overlay blur-3xl absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className="bg-secondary/5 w-full h-full bg-blend-overlay rounded-full blur-3xl absolute right-0 top-full translate-x-1/2 -translate-y-1/2 -z-10"></div> */}
      <FadeIn className={cn("", fadeInClassName)}>{children}</FadeIn>
    </MotionCard>
  );
});

FadeInCard.displayName = "FadeInCard";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FadeInCard,
  MotionCard,
};
