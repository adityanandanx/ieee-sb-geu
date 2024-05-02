"use client";
import { useNavHeight } from "@/lib/hooks";
import React from "react";

export const NavSpacer = () => {
  const height = useNavHeight();
  return <div aria-hidden style={{ paddingTop: `${height || 68.09}px` }}></div>;
};
