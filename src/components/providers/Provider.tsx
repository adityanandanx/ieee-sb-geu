"use client";
import { BaseProps } from "@/lib/types";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import React from "react";

export const Providers = ({ children }: BaseProps) => {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <MotionConfig transition={{}}>{children}</MotionConfig>
      </LazyMotion>
    </>
  );
};
