"use client";
import { BaseProps } from "@/lib/types";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import React from "react";

const loadFeatures = () =>
  import("./framer-features").then((res) => res.default);

export const Providers = ({ children }: BaseProps) => {
  return (
    <>
      <LazyMotion strict features={loadFeatures}>
        <MotionConfig transition={{}}>{children}</MotionConfig>
      </LazyMotion>
    </>
  );
};
