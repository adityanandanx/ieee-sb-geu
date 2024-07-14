"use client";
import { MenuIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { AnimatedLink, MotionLink } from "@/components/ui/animated-link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import navLinks from "./nav-links";
import { useEffect, useState } from "react";
import { Variants, m } from "framer-motion";

const navVariants: Variants = {
  noBg: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)",
    borderColor: "rgba(0, 0, 0, 0)",
  },
  bg: {
    backgroundColor: "rgba(0, 0, 0, 255)",
    backdropFilter: "blur(0px)",
  },
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: "1.5",
      ease: "backOut",
    },
  },
};

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.header
      initial={"hidden"}
      variants={navVariants}
      animate={[bg ? "bg" : "noBg", "visible"]}
      className="py-2 md:py-5 fixed top-0 w-full left-0 z-50"
    >
      <nav className="container justify-between items-center hidden invisible md:flex md:visible">
        <MotionLink
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={"/"}
          className="flex items-end leading-5 gap-4 font-bold font-display text-lg"
        >
          <Logo variant="white" className="w-24" /> SB GEU
        </MotionLink>

        <div className="flex flex-row p-0 items-center gap-10">
          {navLinks.map((l) => (
            <AnimatedLink
              key={l.href + l.name}
              href={l.href}
              className="flex items-center justify-center rounded-lg"
            >
              <span className="">{l.name}</span>
            </AnimatedLink>
          ))}
        </div>
      </nav>
      <nav className="flex container justify-between items-center md:hidden md:invisible">
        <MotionLink
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={"/"}
          className="flex items-end leading-5 gap-4 font-bold font-display text-lg"
        >
          <Logo variant="white" className="w-24" /> SB GEU
        </MotionLink>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="">
              <MenuIcon className="" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:max-w-xs">
            <div className="flex flex-col p-0">
              <MotionLink
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={"/"}
                className="flex items-end leading-5 gap-4 font-bold font-display text-lg my-10"
              >
                <Logo variant="white" className="w-24" /> SB GEU
              </MotionLink>
              {navLinks.map((l) => (
                <AnimatedLink
                  onClick={() => setOpen(false)}
                  key={l.href + l.name}
                  href={l.href}
                  className="flex rounded-lg py-4 gap-4"
                >
                  {l.icon}
                  <span className="">{l.name}</span>
                </AnimatedLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </m.header>
  );
};
