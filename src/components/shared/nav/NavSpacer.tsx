"use client";
import { useNavHeight } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {}

export const NavSpacer = ({ style, className, ...props }: Props) => {
  const height = useNavHeight();
  return (
    <div
      aria-hidden
      style={{ paddingTop: `${height || 68.09}px`, ...style }}
      className={cn("", className)}
      {...props}
    />
  );
};
