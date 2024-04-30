"use client";
import { Logo } from "@/components/logo";
import { Variants, m } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedLink } from "@/components/ui/animated-link";
import { NavLinks } from "./NavLinks";

const navVariants: Variants = {
  noBg: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)",
    borderColor: "rgba(0, 0, 0, 0)",
  },
  bg: {
    backgroundColor: "rgba(0, 0, 0, .25)",
    backdropFilter: "blur(12px)",
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

type Props = {};

export const Nav = (props: Props) => {
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
      className="py-5 fixed top-0 w-full z-50"
    >
      <nav className="container flex justify-between items-center">
        <AnimatedLink
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={"/"}
          className="flex items-end leading-5 gap-4 font-bold font-display text-lg"
        >
          <Logo variant="white" className="w-24" /> SB GEU
        </AnimatedLink>
        <NavLinks>
          <AnimatedLink href="/events">Events</AnimatedLink>
          <AnimatedLink href="/about">About</AnimatedLink>
          <AnimatedLink href="/gallery">Gallery</AnimatedLink>
          <AnimatedLink href="#" target="_blank">
            Contact
          </AnimatedLink>
          {/* {user ? (
            <Link href="/dashboard">
              <Button size={"sm"}>Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant={"secondary"} size={"sm"}>
                  Log In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size={"sm"}>Sign Up</Button>
              </Link>
            </>
          )} */}
          {/* <div className="flex gap-1">
            <ThemeDropdown />
            {user ? <ProfileCardDialog /> : null}
          </div> */}
        </NavLinks>
      </nav>
    </m.header>
  );
};
