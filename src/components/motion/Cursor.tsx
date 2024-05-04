"use client";
import { m, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export const Cursor = () => {
  const mx = useMotionValue("0px");
  const my = useMotionValue("0px");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mx.set(e.clientX + "px");
      my.set(e.clientY + "px");
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mx, my]);

  return (
    <m.div
      aria-hidden
      className={`fixed top-0 left-0 z-50 w-[500px] h-[500px] rounded-full bg-foreground blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 mix-blend-overlay`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      style={{
        left: mx,
        top: my,
      }}
    ></m.div>
  );
};
