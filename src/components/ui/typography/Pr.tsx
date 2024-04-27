import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLSpanElement> {}
export const Pr = ({ children, className, ...props }: Props) => {
  return (
    <span className={cn("text-primary", className)} {...props}>
      {children}
    </span>
  );
};
