"use client";
import { BaseProps } from "@/lib/types";
import { MotionConfig } from "framer-motion";
import React from "react";

export const Providers = ({ children }: BaseProps) => {
  return (
    <>
      <MotionConfig transition={{}}>{children}</MotionConfig>
    </>
  );
};
