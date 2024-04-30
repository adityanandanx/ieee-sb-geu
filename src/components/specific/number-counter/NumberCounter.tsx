"use client";
import { Card, FadeInCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { m, useInView, useSpring, useTransform } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props extends ComponentPropsWithoutRef<typeof Card> {
  n: number;
  plus?: boolean;
  text?: string;
}

export const NumberCounter = ({
  n,
  plus,
  text,
  children,
  className,
  ...props
}: Props) => {
  const [num, setNum] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const val = useSpring(0, {
    bounce: 0,
    damping: 30,
    mass: 0.75,
    stiffness: 200,
  });
  const scale = useTransform(val, [0, n], [0.2, 1]);

  useEffect(() => {
    return val.on("change", (latest) => setNum(Math.floor(latest)));
  }, [val]);

  useEffect(() => {
    if (inView) {
      val.set(n);
    } else {
      val.jump(0);
    }
  }, [inView, val, n]);

  return (
    // @ts-ignore IDK WHY NOT WORKING
    <FadeInCard
      onClick={() => val.jump(n)}
      ref={ref}
      className={cn(
        "p-5 flex flex-col justify-center items-center text-center",
        className
      )}
      {...props}
    >
      <m.span
        style={{ scale }}
        className="block text-4xl font-display font-bold"
      >
        {num}
        {plus && "+"}
      </m.span>
      <span className="text-lg">{text}</span>
    </FadeInCard>
  );
};
