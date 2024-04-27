import React, { ComponentPropsWithRef, forwardRef } from "react";

import geu from "./assets/ieee geu.png";

import black from "./assets/ieee black.png";
import blue from "./assets/ieee blue.png";
import white from "./assets/ieee white.png";

import blackTag from "./assets/ieee tag black.png";
import blueTag from "./assets/ieee tag blue.png";
import whiteTag from "./assets/ieee tag white.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props
  extends Omit<ComponentPropsWithRef<typeof Image>, "alt" | "src"> {
  tag?: boolean;
  variant?: "geu" | "blue" | "black" | "white";
}

export const Logo = forwardRef<HTMLImageElement, Props>(
  ({ tag = false, variant = "blue", className, ...props }, ref) => {
    let src = blue;
    if (!tag) {
      switch (variant) {
        case "geu":
          src = geu;
          break;
        case "blue":
          src = blue;
          break;
        case "black":
          src = black;
          break;
        case "white":
          src = white;
          break;
      }
    } else {
      switch (variant) {
        case "geu":
          throw new Error("GEU variant has no tag");
        case "blue":
          src = blueTag;
          break;
        case "black":
          src = blackTag;
          break;
        case "white":
          src = whiteTag;
          break;
      }
    }
    return (
      <Image
        ref={ref}
        src={src}
        className={cn("w-auto h-auto", className)}
        alt="ieee logo"
        {...props}
      />
    );
  }
);

Logo.displayName = "Logo";
